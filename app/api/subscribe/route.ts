import { isValidEmail, normalizeEmail } from "@/lib/email";

// Forwards a signup to Kit from the server so the browser never calls Kit
// directly (no CORS issues). Kit sends the confirmation email and the guide.
const DEFAULT_FORM_ID = "10089499";

// Kit's spam guard sometimes holds a signup and asks the person to prove
// they're human on a Kit-hosted page. Only pass that link on if it really
// points at Kit.
function kitGuardUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "app.kit.com" ? url.toString() : null;
  } catch {
    return null;
  }
}

function formId(): string {
  const id = process.env.KIT_FORM_ID?.trim();
  return id && /^\d+$/.test(id) ? id : DEFAULT_FORM_ID;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const email = normalizeEmail((payload as { email?: unknown } | null)?.email);
  if (!isValidEmail(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://app.kit.com/forms/${formId()}/subscriptions`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email_address: email }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    const data = (await res.json().catch(() => null)) as { status?: string; url?: string } | null;

    if (res.ok && data?.status === "quarantined") {
      const verifyUrl = kitGuardUrl(data.url);
      if (verifyUrl) return Response.json({ ok: true, status: "verify", verifyUrl });
    }

    if (!res.ok || data?.status !== "success") {
      console.error("Kit signup failed", res.status, data);
      return Response.json({ ok: false, error: "provider_error" }, { status: 502 });
    }

    return Response.json({ ok: true, status: "subscribed" });
  } catch (err) {
    console.error("Kit signup error", err);
    return Response.json({ ok: false, error: "provider_unreachable" }, { status: 502 });
  }
}

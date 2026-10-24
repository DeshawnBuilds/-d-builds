import { isValidEmail, normalizeEmail } from "@/lib/email";

// Forwards a signup to Kit from the server so the browser never calls Kit
// directly (no CORS issues). Kit sends the confirmation email and the guide.
const DEFAULT_FORM_ID = "10089499";

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

    const data = (await res.json().catch(() => null)) as { status?: string } | null;
    if (!res.ok || (data?.status && data.status !== "success")) {
      console.error("Kit signup failed", res.status, data);
      return Response.json({ ok: false, error: "provider_error" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Kit signup error", err);
    return Response.json({ ok: false, error: "provider_unreachable" }, { status: 502 });
  }
}

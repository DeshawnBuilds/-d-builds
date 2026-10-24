"use client";

import { useId, useState } from "react";
import { isValidEmail, normalizeEmail } from "@/lib/email";

type Status = "idle" | "sending" | "success" | "error";

type Props = { buttonLabel?: string };

// Email signup for the free guide. Posts to /api/subscribe, which forwards
// the address to Kit. Kit emails the confirmation and then the guide.
export default function SignupForm({ buttonLabel = "Get the free guide" }: Props) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (status === "success") {
    return (
      <div className="signup__done" role="status">
        <p>Check your inbox. Confirm your email and your guide is on the way.</p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = normalizeEmail(new FormData(e.currentTarget).get("email"));
    if (!isValidEmail(email)) {
      setStatus("error");
      setError("That email doesn’t look quite right. Check it and try again.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong on our end. Please try again in a moment.");
    }
  }

  const sending = status === "sending";

  return (
    <form className="signup__form" onSubmit={onSubmit} noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <input
        id={`${id}-email`}
        type="email"
        name="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Your email address"
        className="signup__input"
        aria-invalid={status === "error" || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onInput={() => {
          if (status === "error") {
            setStatus("idle");
            setError("");
          }
        }}
      />
      <button type="submit" className="btn btn--solid" disabled={sending} aria-busy={sending}>
        {sending ? "Sending…" : buttonLabel} {!sending && <span aria-hidden="true">→</span>}
      </button>
      <p id={`${id}-error`} className="signup__error" role="alert">
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}

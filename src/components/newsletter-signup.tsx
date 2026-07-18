"use client";

import { FormEvent, useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email for early access"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="min-h-12 flex-1 border border-charcoal/25 bg-transparent px-4 text-sm tracking-wide text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-charcoal"
        />
        <button
          type="submit"
          className="min-h-12 shrink-0 border border-charcoal bg-charcoal px-8 text-xs font-medium uppercase tracking-[0.2em] text-off-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          Notify Me
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-center text-xs tracking-wide text-charcoal/70 sm:text-left">
          Thank you. We&apos;ll notify you when our kurtis &amp; co-ord sets launch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-xs tracking-wide text-charcoal/70 sm:text-left">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
}

"use client";

import { useState, useTransition } from "react";

interface SubscribeResponse {
  success?: boolean;
  error?: string;
}

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<SubscribeResponse>({});
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback({});

    startTransition(async () => {
      if (!email || !/^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+\.[\w.-]+$/.test(email)) {
        setFeedback({ error: "Enter a valid email" });
        return;
      }

      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const payload = (await response.json()) as SubscribeResponse;

        if (!response.ok) {
          throw new Error(payload.error || "Subscription failed");
        }

        setFeedback({ success: true });
        setEmail("");
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Could not submit email";
        setFeedback({ error: message });
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/60 p-6 shadow-[0_0_35px_rgba(0,229,255,0.15)]"
    >
      <label className="text-xs uppercase tracking-[0.4em] text-white/50">
        Stay in the loop
      </label>
      <p className="text-sm text-white/70">
        Weekly alpha, automation walkthroughs, and early access invites.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 flex-1 rounded-full border border-white/15 bg-[#080a15] px-5 text-sm text-white outline-none transition focus:border-(--accent)"
        />
        <button
          type="submit"
          disabled={isPending}
          className="button-glow inline-flex h-12 items-center justify-center rounded-full bg-(--accent) px-6 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-(--accent)/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending..." : "Request Access"}
        </button>
      </div>
      {feedback.error ? (
        <p className="text-xs text-red-400">{feedback.error}</p>
      ) : null}
      {feedback.success ? (
        <p className="text-xs text-(--accent)">
          Thanks! Check your inbox for confirmation.
        </p>
      ) : null}
      <p className="text-[11px] text-white/40">
        We respect inboxes. Expect no more than two educational updates per
        month.
      </p>
    </form>
  );
}

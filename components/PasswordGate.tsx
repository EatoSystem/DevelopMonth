"use client";

import { FormEvent, useState } from "react";
import { GrowthMapIcon } from "./GrowthMapIcon";

type PasswordGateProps = {
  nextPath: string;
};

export function PasswordGate({ nextPath }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setError(result.error ?? "Incorrect password. Please try again.");
        return;
      }

      const destination =
        nextPath.startsWith("/") && !nextPath.startsWith("//")
          ? nextPath
          : "/";
      window.location.assign(destination);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="password-page">
      <div className="gate-monthmap gate-monthmap-left" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="gate-monthmap gate-monthmap-right" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <section className="password-card" aria-labelledby="gate-title">
        <div className="gate-brand">
          <GrowthMapIcon
            className="gate-logo"
            ariaLabel="DevelopMonth GrowthMap"
            priority
          />
          <div>
            <span className="gate-wordmark">DevelopMonth</span>
            <span className="gate-tagline">
              Child development and parenting, month by month.
            </span>
          </div>
        </div>

        <p className="eyebrow">PRIVATE PREVIEW</p>
        <h1 id="gate-title">DevelopMonth is preparing to launch.</h1>
        <p className="gate-intro">
          Calm child development and parenting support, month by month.
        </p>

        <form className="gate-form" onSubmit={handleSubmit}>
          <label htmlFor="site-password">Password</label>
          <div className="gate-input-row">
            <input
              id="site-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="Enter preview password"
              aria-describedby={error ? "gate-error" : undefined}
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Checking…" : "Enter"}
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <p
            className={`gate-error ${error ? "gate-error-visible" : ""}`}
            id="gate-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        </form>

        <p className="gate-note">
          A calmer way to understand what matters this month.
        </p>
      </section>
    </main>
  );
}

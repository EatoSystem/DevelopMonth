"use client";

import { FormEvent, useState } from "react";

const roles = [
  "Pregnant / planning pregnancy",
  "Partner",
  "Parent",
  "Family member",
  "Healthcare professional",
  "Researcher / organisation",
  "Other",
];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Replace this local confirmation with a secure waitlist API
    // (for example Supabase + server-side validation). No data is persisted yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="success-mark" aria-hidden="true">
          ✓
        </span>
        <p className="eyebrow">YOU’RE ON THE LIST</p>
        <h3>You’re on the DevelopMonth waitlist.</h3>
        <p>We’ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="role">I’m joining as</label>
        <div className="select-wrap">
          <select id="role" name="role" defaultValue="" required>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <span aria-hidden="true">⌄</span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">
          Pregnancy month, due month, or interest area{" "}
          <span className="optional">Optional</span>
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          placeholder="For example: Month 4 or nutrition"
        />
      </div>

      <label className="checkbox-row">
        <input type="checkbox" name="consent" required />
        <span>I agree to receive updates about DevelopMonth.</span>
      </label>

      <button className="button button-primary form-submit" type="submit">
        Join the Waitlist
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        No noise. Just thoughtful DevelopMonth updates.
      </p>
    </form>
  );
}

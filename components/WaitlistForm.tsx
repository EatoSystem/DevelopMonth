"use client";

import { FormEvent, useState } from "react";

const roles = [
  "Parent",
  "Expecting parent",
  "Partner",
  "Family member",
  "Healthcare professional",
  "Educator",
  "Therapist",
  "Researcher / organisation",
  "Other",
];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Connect this form to a secure waitlist endpoint with server-side
    // validation. This preview confirmation does not persist submitted data.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="success-mark" aria-hidden="true">
          ✓
        </span>
        <p className="eyebrow">PREVIEW COMPLETE</p>
        <h3>
          Thanks — this is a preview form. The live waitlist will open soon.
        </h3>
        <p>No details were saved or sent.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-preview-notice" role="note">
        <strong>Preview form</strong>
        <span>
          Please use fictional details. Nothing entered here is saved or sent.
        </span>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Example name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="For example: Alex"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Example email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            inputMode="email"
            placeholder="alex@example.com"
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
          Example age / due month / interest area{" "}
          <span className="optional">Optional</span>
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          autoComplete="off"
          placeholder="For example: Month 4 or feeding"
        />
      </div>

      <label className="checkbox-row">
        <input type="checkbox" name="consent" required />
        <span>
          I understand this preview does not submit or save my details.
        </span>
      </label>

      <button className="button button-primary form-submit" type="submit">
        Preview the confirmation
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        The live waitlist and consent process will open separately.
      </p>
    </form>
  );
}

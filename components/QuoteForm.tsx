"use client";

import { useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [town, setTown] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitQuote() {
    setError("");

    if (!name.trim() || !phone.trim() || !email.trim() || !service.trim()) {
      setError("Please fill in name, phone, email, and service.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service.trim(),
          town: town.trim(),
          notes: notes.trim(),
          website,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setSuccess(true);
      } else {
        setError(data.error || "Something went wrong. Please call (508) 622-5919.");
        setSending(false);
      }
    } catch {
      setError("Network error. Please call (508) 622-5919.");
      setSending(false);
    }
  }

  if (success) {
    return (
      <div className="form-card" id="form-card">
        <div className="form-success">
          <div className="form-success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h4>Got it. Thanks!</h4>
          <p>
            We&apos;ll be in touch within 24 hours. For anything urgent, call Micah directly at (508)
            622-5919.
          </p>
          <a href="tel:+15086225919" className="btn btn-ghost">
            Call Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card" id="form-card">
      <h3>Request a Quote</h3>
      <div className="form-row">
        <label htmlFor="hf-name">Name</label>
        <input
          type="text"
          id="hf-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row-grid">
        <div className="form-row">
          <label htmlFor="hf-phone">Phone</label>
          <input
            type="tel"
            id="hf-phone"
            name="phone"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="hf-email">Email</label>
          <input
            type="email"
            id="hf-email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row-grid">
        <div className="form-row">
          <label htmlFor="hf-service">Service</label>
          <select
            id="hf-service"
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select one…</option>
            <option>Panel Upgrade (100A / 200A / 400A)</option>
            <option>EV Charger Install</option>
            <option>New Construction Wiring</option>
            <option>Kitchen / Bath Remodel</option>
            <option>Wiring Repair / Troubleshoot</option>
            <option>Outlet / Switch Work</option>
            <option>Light Fixture Install</option>
            <option>Outdoor Lighting</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="hf-town">Town</label>
          <input
            type="text"
            id="hf-town"
            name="town"
            autoComplete="address-level2"
            placeholder="e.g. Taunton"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="hf-notes">Notes (optional)</label>
        <textarea
          id="hf-notes"
          name="notes"
          placeholder="Describe the job, timeline, anything that helps me quote it right…"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <input
        type="text"
        name="website"
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <button
        type="button"
        id="form-submit"
        className="btn btn-primary"
        onClick={submitQuote}
        disabled={sending}
      >
        {sending ? (
          "Sending…"
        ) : (
          <>
            Send Request
            <ArrowIcon />
          </>
        )}
      </button>
      <div id="form-error">{error}</div>
    </div>
  );
}

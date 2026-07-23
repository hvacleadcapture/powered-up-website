"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CalcLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/calc/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        router.push("/calculator");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Invalid credentials");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <label style={labelStyle}>
        Username
        <input
          type="text"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Password
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
      </label>

      {error && (
        <div
          style={{
            color: "#DC2626",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "var(--font-mono)",
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        style={{
          marginTop: 6,
          padding: "14px 20px",
          background: "var(--yellow)",
          color: "var(--navy-deep)",
          fontWeight: 800,
          fontSize: 15,
          borderRadius: 8,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          opacity: busy ? 0.6 : 1,
          cursor: busy ? "default" : "pointer",
          transition: "opacity .15s",
        }}
      >
        {busy ? "Signing in…" : "Log In"}
      </button>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(244, 239, 230, 0.75)",
  fontFamily: "var(--font-mono)",
};

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  background: "var(--navy-deep)",
  border: "1px solid rgba(244, 239, 230, 0.22)",
  borderRadius: 8,
  color: "var(--cream)",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  outline: "none",
};

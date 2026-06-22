"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

type NavLink = { href: string; label: string; match?: string };

const LINKS: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery", match: "/gallery" },
  { href: "/blog", label: "Blog", match: "/blog" },
  { href: "/#area", label: "Service Area" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Powered Up LLC" />
          </div>
          <span className="nav-logo-text">
            POWERED <span>UP</span>
          </span>
        </Link>
        <ul className="nav-links">
          {LINKS.map((l) => {
            const active = l.match
              ? pathname === l.match || pathname.startsWith(`${l.match}/`)
              : false;
            return (
              <li key={l.label}>
                <Link href={l.href} className={active ? "active" : undefined}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a href="tel:+15086225919" className="nav-cta">
          <PhoneIcon />
          Call Micah
        </a>
      </div>
    </nav>
  );
}

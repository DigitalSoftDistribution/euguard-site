// EUGuard Logo — SVG squircle with shield + gold EU star
// Design lineage: PlugKit family (indigo gradient squircle, Geist font)
// Distinction: deeper EU-institutional indigo, gold star from EU flag, shield icon
//
// Props:
//   size      — pixel dimension of the squircle icon (default 40)
//   showName  — render the "EU Guard" wordmark next to the icon (default true)
//   nameSize  — text size class (default "text-lg")

interface EUGuardLogoProps {
  size?: number;
  showName?: boolean;
  nameSize?: string;
}

export function EUGuardLogo({ size = 40, showName = true, nameSize = "text-lg" }: EUGuardLogoProps) {
  return (
    <span className="flex items-center gap-2.5 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="eg-logo-bg" x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312E81" />
            <stop offset="0.45" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>

        {/* Squircle background — rx=10 is 25% of the 40-unit viewBox, matching PlugKit */}
        <rect width="40" height="40" rx="10" fill="url(#eg-logo-bg)" />

        {/* Shield — white outline, very subtle white fill */}
        <path
          d="M20 7.5L10 11.5V20C10 26 14.2 31.2 20 33C25.8 31.2 30 26 30 20V11.5L20 7.5Z"
          fill="rgba(255,255,255,0.08)"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Checkmark inside shield */}
        <path
          d="M15 20.5L18 23.5L25 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gold circle (EU star background) — top-right shoulder */}
        <circle cx="28.5" cy="10" r="5" fill="#F59E0B" />

        {/* 5-pointed star inside gold circle — centered at (28.5, 10) */}
        {/* outer r=3, inner r=1.25 — computed for a proper 5-pointed star */}
        <path
          d="M28.5 7 L29.2 9.2 L31.5 9.2 L29.7 10.6 L30.4 12.8 L28.5 11.4 L26.6 12.8 L27.3 10.6 L25.5 9.2 L27.8 9.2 Z"
          fill="white"
        />
      </svg>

      {showName && (
        <span
          className={`font-semibold leading-none tracking-tight font-[family-name:var(--font-heading)] ${nameSize}`}
        >
          <span style={{ color: "#F59E0B" }}>EU</span>
          <span style={{ color: "#E3E8EE" }}>Guard</span>
        </span>
      )}
    </span>
  );
}

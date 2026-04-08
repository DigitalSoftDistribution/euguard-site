// EU Stars Ring — 12 gold stars arranged in a circle (EU flag pattern)
// Rotates slowly via CSS animation eu-orbit (80s).
// Uses SVG viewBox centered on origin so CSS transform-origin: center works.

interface EUStarsRingProps {
  size?: number;
  opacity?: number;
  className?: string;
}

// 12 stars at 30° intervals, ring radius 180, outer star r=13, inner r=5.5
// Star positions (x, y) relative to center (0,0)
const STAR_POSITIONS: [number, number][] = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  return [Math.round(180 * Math.cos(angle) * 100) / 100, Math.round(180 * Math.sin(angle) * 100) / 100];
});

// 5-pointed star path centered at (0,0), outer r=13, inner r=5.5
const STAR_PATH =
  "M0,-13 L3.23,-4.45 L12.36,-4.02 L5.23,1.70 L7.64,10.52 L0,5.5 L-7.64,10.52 L-5.23,1.70 L-12.36,-4.02 L-3.23,-4.45 Z";

export function EUStarsRing({ size = 500, opacity = 0.18, className = "" }: EUStarsRingProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-250 -250 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`animate-eu-orbit ${className}`}
      style={{ display: "block" }}
    >
      {/* Subtle ring guide */}
      <circle
        cx="0"
        cy="0"
        r="180"
        stroke="#F59E0B"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        opacity={opacity * 0.5}
      />

      {/* 12 gold stars */}
      {STAR_POSITIONS.map(([cx, cy], i) => (
        <path
          key={i}
          d={STAR_PATH}
          fill="#F59E0B"
          opacity={opacity}
          transform={`translate(${cx}, ${cy})`}
        />
      ))}
    </svg>
  );
}

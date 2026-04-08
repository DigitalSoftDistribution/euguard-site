"use client";

import { useEffect, useState } from "react";

// Green Claims Directive enforcement deadline: September 27, 2026
const ENFORCEMENT_DATE = new Date("2026-09-27T00:00:00Z");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = ENFORCEMENT_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

// ---------------------------------------------------------------------------
// Full countdown — days + hours + minutes + seconds
// ---------------------------------------------------------------------------

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial value on client to avoid hydration mismatch
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1_000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-sm font-semibold text-danger-light">
        Green Claims Directive enforcement has begun.
      </p>
    );
  }

  const units = [
    { value: timeLeft.days,    label: "Days",    key: "d" },
    { value: timeLeft.hours,   label: "Hours",   key: "h" },
    { value: timeLeft.minutes, label: "Min",     key: "m" },
    { value: timeLeft.seconds, label: "Sec",     key: "s" },
  ];

  return (
    <div className="flex items-end gap-3 sm:gap-4">
      {units.map(({ value, label, key }) => (
        <div key={key} className="text-center">
          <div
            className="countdown-digit text-3xl font-bold sm:text-4xl"
            style={{ color: "#F59E0B" }}
          >
            {key === "d" ? value : pad(value)}
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compact inline countdown — just "N days" for use in banners / badges
// ---------------------------------------------------------------------------

export function DaysUntilEnforcement() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const diff = ENFORCEMENT_DATE.getTime() - Date.now();
      setDays(diff > 0 ? Math.ceil(diff / 86_400_000) : 0);
    };
    calc();
    const id = setInterval(calc, 60_000);
    return () => clearInterval(id);
  }, []);

  if (days === null) return null;
  if (days <= 0) return <span style={{ color: "#F43F5E" }}>Now in effect</span>;
  return (
    <span style={{ color: "#F59E0B" }} className="font-bold tabular-nums">
      {days} days
    </span>
  );
}

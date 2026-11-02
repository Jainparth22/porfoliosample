'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: string;    // e.g. "900+" or "34"
  duration?: number; // ms
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 1500,
  className,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // extract numeric part and suffix (e.g. "900+" -> num=900, suffix="+")
  const match = target.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericTarget);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericTarget, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}


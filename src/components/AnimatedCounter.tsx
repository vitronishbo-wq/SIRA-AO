import React from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (val: number) => string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 1.5, 
  className = "", 
  formatter = (val) => Math.floor(val).toLocaleString() 
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = React.useState<string>("0");

  React.useEffect(() => {
    if (!isInView) return;

    let isCancelled = false;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (!isCancelled) {
          setDisplayValue(formatter(latest));
        }
      }
    });

    return () => {
      isCancelled = true;
      controls.stop();
    };
  }, [isInView, value, duration, formatter]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

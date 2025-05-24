import React from 'react';

export function usePulse(at: number) {
  const [pulseOn, setPulseOn] = React.useState(false);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const _pulseOn = Math.floor((Date.now() - at) / 1000) % 2 === 0;
      setPulseOn(_pulseOn);
    }, 50);
    return () => clearInterval(interval);
  }, [at]);

  return pulseOn;
}

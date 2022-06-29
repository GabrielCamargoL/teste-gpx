import { useEffect, useRef, useState } from 'react';

import '../assets/styles/pages/clock/clock.css';

export default function Clock() {
  const [clock, setClock] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const date: Date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, [clock]);

  return (
    <>
      <div className='clock-container'>
        <span>{clock}</span>
      </div>
    </>
  )
};
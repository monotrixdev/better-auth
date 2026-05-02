"use client";
import React, { useEffect, useState } from 'react'
import { clearInterval } from 'timers';


type CounterProps = {
    end: number;
    duration?: number;
    sufix?: any
}
const Counter = ({ end , duration=2000, sufix= ''}: CounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (end <= 0) return;
        let current = 0;
        const steps = Math.max(1, Math.floor(duration / 16));
        const stepValue = end / steps;

        const timer = setInterval(() => {
            current = Math.min(current + stepValue, end);
            setCount(Math.floor(current));
            if (current >= end) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);

    }, [end, duration])

    
  return (
    <div>
      {count.toLocaleString()}{sufix}
    </div>
  )
}

export default Counter

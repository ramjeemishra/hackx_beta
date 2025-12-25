
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 20,
    minutes: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

 return (
  <div className="flex space-x-8 md:space-x-12 bg-black/60 px-8 py-6 rounded-md backdrop-blur-sm">
    {[
      { label: "WEEKS", val: "09" },
      { label: "DAYS", val: timeLeft.days.toString().padStart(2, "0") },
      { label: "HRS", val: timeLeft.hours.toString().padStart(2, "0") },
    ].map((item) => (
      <div key={item.label} className="flex flex-col items-center">
        <span className="text-5xl md:text-7xl font-black italic tracking-tighter text-white leading-none mb-2">
          {item.val}
        </span>
        <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);


};

export default Countdown;

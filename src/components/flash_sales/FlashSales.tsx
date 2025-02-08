import React from "react";
import { useState, useEffect } from "react";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container py-10 flex items-center gap-6">
      <h2 className="text-2xl font-bold">Flash Sales</h2>
      <div className="flex space-x-4 text-2xl font-bold">
        <span className="flex">{timeLeft.days} Days</span>
        <span className="flex">{timeLeft.hours} Hours</span>
        <span className="flex">{timeLeft.minutes} Minutes</span>
        <span className="flex">{timeLeft.seconds} Seconds</span>
      </div>
      {/* Here goes the product list */}
    </section>
  );
};

export default React.memo(FlashSales);

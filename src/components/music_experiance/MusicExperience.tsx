import React, { useState, useEffect } from "react";
import Frame694 from "@/assets/images/Frame 694.png";

const MusicExperience = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container bg-primary w-full text-[#fff] py-10 px-10 flex flex-col md:flex-row items-center justify-between rounded-lg my-10">
      <div className="text-left max-w-lg">
        <p className="text-green-400 font-semibold">Categories</p>
        <h2 className="text-3xl md:text-4xl font-bold my-3">
          Enhance Your Music Experience
        </h2>

        <div className="flex space-x-4 mt-4">
          <div className="text-center bg-white text-black px-4 py-2 rounded-md">
            <p className="text-lg font-semibold">{timeLeft.hours}</p>
            <p className="text-xs">Hours</p>
          </div>
          <div className="text-center bg-white text-black px-4 py-2 rounded-md">
            <p className="text-lg font-semibold">{timeLeft.days}</p>
            <p className="text-xs">Days</p>
          </div>
          <div className="text-center bg-white text-black px-4 py-2 rounded-md">
            <p className="text-lg font-semibold">{timeLeft.minutes}</p>
            <p className="text-xs">Minutes</p>
          </div>
          <div className="text-center bg-white text-black px-4 py-2 rounded-md">
            <p className="text-lg font-semibold">{timeLeft.seconds}</p>
            <p className="text-xs">Seconds</p>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">
          Buy Now!
        </button>
      </div>

      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src={Frame694} alt="JBL Speaker" className="w-auto object-cover " />
      </div>
    </section>
  );
};

export default React.memo(MusicExperience);

"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  function getTimeLeft() {
    const now: any = new Date();
    const nextSunday: any = new Date();

    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    nextSunday.setHours(0, 0, 0, 0);

    const difference = nextSunday - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  return (
    <div>
      <h3 className="text-lg font-semibold uppercase">Countdown</h3>
      <p>
        {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
      </p>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  addDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  startOfDay,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";

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
    const timezone = "Asia/Jakarta";

    // Get the current time in Jakarta timezone
    const now = toZonedTime(new Date(), timezone);

    // Calculate the next Sunday at 00:00 AM in Jakarta timezone
    const nextSunday = startOfDay(addDays(now, (7 - now.getDay()) % 7 || 7));
    const nextSundayMidnight = toZonedTime(
      new Date(format(nextSunday, "yyyy-MM-dd") + "T00:00:00"),
      timezone,
    );

    // Calculate the time difference
    const hours = differenceInHours(nextSundayMidnight, now);
    const minutes = differenceInMinutes(nextSundayMidnight, now) % 60;
    const seconds = differenceInSeconds(nextSundayMidnight, now) % 60;

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
      <p className="text-xs text-gray-500">GMT+7</p>
    </div>
  );
}

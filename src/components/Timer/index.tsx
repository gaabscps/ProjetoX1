import React, { useState, useEffect } from "react";

interface TimerProps {
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [countdown]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <h3 className="h3-400">{formatTime(countdown)}</h3>;
};

export default Timer;

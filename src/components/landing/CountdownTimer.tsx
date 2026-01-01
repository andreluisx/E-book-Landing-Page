import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onComplete?: () => void;
}

export function CountdownTimer({ 
  hours = 1, 
  minutes = 0, 
  seconds = 0,
  onComplete 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          clearInterval(timer);
          onComplete?.();
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="flex flex-col items-center ">
        <div className="bg-alert  bg-indigo-900 text-slate-50 text-2xl sm:text-3xl font-bold px-3 sm:px-4 py-2 rounded-lg min-w-60px sm:min-w-70px text-center">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Horas</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-alert">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-alert bg-indigo-900 text-slate-50 text-2xl sm:text-3xl font-bold px-3 sm:px-4 py-2 rounded-lg min-w-60px sm:min-w-70px text-center">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Minutos</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold text-alert">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-alert bg-indigo-900 text-slate-50  text-2xl sm:text-3xl font-bold px-3 sm:px-4 py-2 rounded-lg min-w-60px sm:min-w-70px text-center animate-countdown">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Segundos</span>
      </div>
    </div>
  );
}

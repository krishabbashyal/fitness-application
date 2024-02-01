import React, { useState, useEffect } from 'react';

const WorkoutTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update seconds
      setSeconds((prevSeconds) => (prevSeconds + 1) % 60);

      // Update minutes and hours if necessary
      if (seconds === 59) {
        setMinutes((prevMinutes) => (prevMinutes + 1) % 60);

        if (minutes === 59) {
          setHours((prevHours) => prevHours + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  // Format the time display
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return <div className='text-3xl'>{formattedTime}</div>;
};

export default WorkoutTimer;

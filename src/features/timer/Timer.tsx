import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      // @ts-ignore
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleRecord = () => {
    const currentSeconds = seconds;
    const currentMinutes = Math.floor(currentSeconds / 60);
    const currentHours = Math.floor(currentMinutes / 60);

    console.log(`${currentHours} : ${currentMinutes % 60} : ${currentSeconds % 60}`);
  };

  return (
    <div>
      <div>
        {Math.floor(seconds / 3600)}
        {' '}
        :
        {Math.floor((seconds % 3600) / 60)}
        {' '}
        :
        {seconds % 60}
      </div>
      <div>
        <button type="button" onClick={handleStart}>시작</button>
        <button type="button" onClick={handleRecord}>기록</button>
        <button type="button" onClick={handleStop}>중지</button>
      </div>
    </div>
  );
};

export default Timer;

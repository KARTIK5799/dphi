import React, { useEffect, useState } from 'react';

const Timer = ({ startDate, endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState('0:00:00');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (now < start) {
        setStatus('Starts in');
        setTimeRemaining(formatTimeDifference(start - now));
      } else if (now >= start && now <= end) {
        setStatus('Ends in');
        setTimeRemaining(formatTimeDifference(end - now));
      } else if (now > end) {
        setStatus('Ended on');
        setTimeRemaining(formatDate(end));
      }
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate]);

  const formatTimeDifference = (difference) => {
    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');

    return `${days}:${hours}:${minutes}`;
  };

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };


  const [days = '0', hours = '00', minutes = '00'] = timeRemaining.split(':');

  return (
    <div className="text-center">
      <p className="text-base">{status}</p>
      {status === 'Ended on' ? (
        <p className="text-xl font-bold ">{timeRemaining}</p>
      ) : (
        <div className='flex items-center gap-1 justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className="text-2xl">{days} :</p>
            <span className="text-xs">Days</span>
          </div>
       
          <div className='flex flex-col items-center justify-center'>
            <p className="text-2xl">{hours} :</p>
            <span className="text-xs">Hours</span>
          </div>
        
          <div className='flex flex-col items-center justify-center'>
            <p className="text-2xl">{minutes}</p>
            <span className="text-xs">Minutes</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;

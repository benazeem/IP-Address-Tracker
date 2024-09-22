import  { useState, useEffect } from 'react';
import { toZonedTime, format } from 'date-fns-tz';

function useUTCTime(timezone:string) {
  const [offset, setOffset] = useState('');
  

  useEffect(() => {
    const getOffset = () => {
      const now = new Date(); 
      const zonedTime = toZonedTime(now, timezone); 
      const formattedOffset = format(zonedTime, 'XXX', { timeZone: timezone }); 
      setOffset(formattedOffset);

    };

    getOffset();
  }, [timezone]);
  return offset;
}

export default useUTCTime;

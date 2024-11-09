import { useState, useEffect } from 'react';

export function useUserSession() {

    const [sessionData, setSessionData] = useState(null);
  
    useEffect(() => {
  
      // Retrieve session data from local storage
      const data = JSON.parse(localStorage.getItem('userSession'));
      setSessionData(data);
  
    }, []);
  
  
    const saveSessionData = (data) => {
      setSessionData(data);
      localStorage.setItem('userSession', JSON.stringify(data));
    };
  
  
    return { sessionData, saveSessionData };
  }
import { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}

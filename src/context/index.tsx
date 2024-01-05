'use client';

import { createContext, useContext, useState } from 'react';

const ToggleContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const ToggleContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ isOpen, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggleContext = () => useContext(ToggleContext);

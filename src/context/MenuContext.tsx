import { createContext, useContext, useState } from "react";

const MenuContext = createContext(null);

export function AsideProvider({ children }) {
  const [isAsideVisible, setAsideVisible] = useState(true);

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isAsideVisible, toggleAside }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useAside() {
  return useContext(MenuContext);
}

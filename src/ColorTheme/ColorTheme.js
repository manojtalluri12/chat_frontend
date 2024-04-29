import React, { createContext, useContext, useEffect, useState } from "react";
const Theme = createContext();
export const ColorTheme = ({ children }) => {
  const [color, setcolor] = useState(false);
  const toggle = () => {
    setcolor((c) => !c);
  };
  const themes = color ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themes);
  }, [color]);
  return (
    <Theme.Provider
      value={{
        color,
        themes,
        toggle,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export const useTheme = () => {
  return useContext(Theme);
};

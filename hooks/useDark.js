import { useState, useEffect } from "react";

const useDark = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkPref.matches);
  }, []);

  return {
    isDark,
    setIsDark,
  };
};

export default useDark;

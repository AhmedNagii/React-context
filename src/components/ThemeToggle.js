import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button style={{ width: "160px", height: "40px" }} onClick={toggleTheme}>
      Change Theme
    </button>
  );
};

export default ToggleTheme;

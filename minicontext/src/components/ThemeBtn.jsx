import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}

export default ThemeBtn;

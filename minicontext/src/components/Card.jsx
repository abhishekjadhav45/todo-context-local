import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Card() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        marginTop: "20px",
      }}
    >
      This is a card — theme: {theme}
    </div>
  );
}

export default Card;

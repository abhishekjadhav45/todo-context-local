import React, { useState } from "react";

/**
 * ThemeButton - reusable button to switch theme
 * Props:
 *  - label: string shown inside
 *  - active: boolean whether this button equals current theme
 *  - onClick: function to call when clicked
 */
export default function ThemeButton({ label, active, onClick, ariaLabel }) {
  // local state for hover effect (we use inline styles so we manage hover via state)
  const [hover, setHover] = useState(false);

  // base style for button (JS style object)
  const base = {
    padding: "10px 18px",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 15,
    border: "none",
    cursor: "pointer",
    transition: "transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease",
    outline: "none",
    display: "inline-block",
    userSelect: "none",
  };

  // style when inactive
  const inactiveStyle = {
    background: "transparent",
    color: "var(--accent, #2563EB)",
    boxShadow: "none",
    border: "1px solid rgba(0,0,0,0.08)",
    opacity: 0.95,
  };

  // style when active
  const activeStyle = {
    background: "linear-gradient(90deg,#2563EB,#4F46E5)",
    color: "#fff",
    boxShadow: "0 8px 22px rgba(79,70,229,0.18)",
    transform: hover ? "translateY(-2px) scale(1.01)" : "translateY(0)",
  };

  // style when hovered but not active
  const hoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(2,6,23,0.08)",
  };

  const style = {
    ...base,
    ...(active ? activeStyle : inactiveStyle),
    ...(hover && !active ? hoverStyle : {}),
  };

  return (
    <button
      aria-pressed={!!active}
      aria-label={ariaLabel || label}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
}

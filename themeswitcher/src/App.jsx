import React, { useEffect, useState } from "react";
import ThemeButton from "./components/ThemeButton";

/**
 * App.jsx
 * - Manages theme state
 * - Provides two ThemeButton components for Light & Dark modes
 * - Uses inline JS style objects for styling
 * - Smooth transitions for background & text color
 */

/* Theme definitions (colors chosen with accessibility in mind) */
const THEMES = {
  light: {
    name: "Light Mode",
    background: "#F7FAFC", // very light gray
    surface: "#FFFFFF",
    text: "#0B1220",
    accent: "#2563EB",
  },
  dark: {
    name: "Dark Mode",
    background: "#0B1220", // near-black navy
    surface: "#0F1724",
    text: "#E6EEF8",
    accent: "#60A5FA",
  },
};

export default function App() {
  // theme state: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // initialize from localStorage if available for persistence
    try {
      const saved = localStorage.getItem("site-theme");
      return saved === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  // update CSS variables on body for easier use in inline styles
  useEffect(() => {
    const t = THEMES[theme];
    document.body.style.backgroundColor = t.background;
    document.body.style.color = t.text;
    // also set CSS var for accent (used by components)
    document.documentElement.style.setProperty("--accent", t.accent);
    // persist
    try { localStorage.setItem("site-theme", theme); } catch {}
  }, [theme]);

  // Styling objects
  const container = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 20px",
    transition: "background-color 450ms ease, color 350ms ease",
  };

  const card = {
    width: "100%",
    maxWidth: 960,
    borderRadius: 16,
    padding: "36px",
    background: THEMES[theme].surface,
    boxShadow:
      theme === "light"
        ? "0 10px 40px rgba(2,6,23,0.06)"
        : "0 10px 40px rgba(2,6,23,0.35)",
    transition: "background 350ms ease, box-shadow 350ms ease, transform 200ms ease",
  };

  const headerRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  };

  const title = {
    fontSize: 22,
    fontWeight: 800,
    color: THEMES[theme].text,
  };

  const subtitle = {
    color: theme === "light" ? "#475569" : "#94A3B8",
    fontSize: 14,
    marginTop: 8,
  };

  const buttonRow = {
    display: "flex",
    gap: 12,
    alignItems: "center",
  };

  const info = {
    marginTop: 22,
    fontSize: 16,
    color: theme === "light" ? "#344054" : "#CBD5E1",
    lineHeight: 1.6,
  };

  const sampleBox = {
    marginTop: 28,
    padding: 20,
    borderRadius: 12,
    background: theme === "light" ? "#F1F5F9" : "#071124",
    border: `1px solid ${theme === "light" ? "rgba(2,6,23,0.04)" : "rgba(255,255,255,0.03)"}`,
  };

  // high-contrast accessible label for current theme
  const currentThemeLabel = `Current Theme: ${THEMES[theme].name}`;

  return (
    <div style={container} role="main">
      <div style={card}>
        <div style={headerRow}>
          <div>
            <div style={title}>ThemeSwitcher</div>
            <div style={subtitle} aria-live="polite">{currentThemeLabel}</div>
          </div>

          <div style={buttonRow}>
            {/* Two buttons: Light & Dark — App manages theme state */}
            <ThemeButton
              label="Light Mode"
              active={theme === "light"}
              onClick={() => setTheme("light")}
              ariaLabel="Set light mode"
            />
            <ThemeButton
              label="Dark Mode"
              active={theme === "dark"}
              onClick={() => setTheme("dark")}
              ariaLabel="Set dark mode"
            />
          </div>
        </div>

        <div style={info}>
          <strong>What this demo shows:</strong>
          <div style={{ marginTop: 8 }}>
            • Theme state managed in <code>App.jsx</code> with persistence via <code>localStorage</code>.<br />
            • Smooth transitions for background and content color for a polished UX.<br />
            • Buttons built as reusable components (accessible, keyboard friendly).
          </div>

          <div style={sampleBox}>
            <h3 style={{ margin: 0, color: THEMES[theme].text }}>Preview area</h3>
            <p style={{ marginTop: 8, color: theme === "light" ? "#475569" : "#94A3B8" }}>
              This sample box demonstrates how components adapt to the selected theme. Text colors,
              background, and shadows change to keep great contrast and accessibility.
            </p>
            <div style={{ marginTop: 12 }}>
              <button
                onClick={() => alert("Primary action clicked")}
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  border: "none",
                  background: `linear-gradient(90deg, ${THEMES[theme].accent}, #7C3AED)`,
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 8px 22px rgba(2,6,23,0.08)",
                  transition: "transform 120ms ease",
                }}
                aria-label="Primary action"
              >
                Primary Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

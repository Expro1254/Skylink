import { THEMES } from "../constants/themeConstants.js";

export const applyTheme = (theme) => {
  // Use Tailwind's `dark` class on the root element. We don't rely on a `light` class.
  if (theme === THEMES.DARK) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
  localStorage.setItem("theme", theme);

  // Update toggle button icon if present
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = theme === THEMES.DARK ? "🌙" : "☀️";
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme") || THEMES.DARK;
  applyTheme(savedTheme);

  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = localStorage.getItem("theme");
    const newTheme = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    applyTheme(newTheme);
  });
};

import { useEffect, useState } from "react";
import Container from "./components/Container";

const THEMES = [
  { name: "Sky", color: "#38bdf8", value: "sky" },
  { name: "Orange", color: "#fb923c", value: "orange" },
  { name: "Green", color: "#2dd4bf", value: "green" },
  { name: "Berry", color: "#f43f5e", value: "berry" }
];

export default function App() {
  const [themeSelected, setThemeSelected] = useState(THEMES[0]);

  const handleThemeChangeByValue = (value) => {
    const found = THEMES.find((t) => t.value === value);
    if (found) setThemeSelected(found);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeSelected.value);
  }, [themeSelected]);

  return (
    <div className="bg-background min-h-screen">
      <Container
        themes={THEMES}
        themeSelected={themeSelected}
        handleThemeChangeByValue={handleThemeChangeByValue}
      />
    </div>
  );
}

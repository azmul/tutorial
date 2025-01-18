"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";
import { useEffect } from "react";

export function ColorSchemesSwitcher() {
  const { setColorScheme, clearColorScheme, colorScheme } =
    useMantineColorScheme();

  const setColor = (theme: string) => {
    // Remove previous theme classes
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "auto") {
      // Reset to system default
      root.style.removeProperty("color-scheme");
    } else {
      // Add the appropriate theme class
      root.classList.add(theme);
      root.style.colorScheme = theme;
    }
  };

  const handleTheme = (theme: any) => {
    setColorScheme(theme);
    setColor(theme);
  };

  useEffect(() => {
    setColor(colorScheme);
  }, [colorScheme]);

  return (
    <Group>
      <Button onClick={() => handleTheme("light")}>Light</Button>
      <Button onClick={() => handleTheme("dark")}>Dark</Button>
      <Button onClick={() => handleTheme("auto")}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}



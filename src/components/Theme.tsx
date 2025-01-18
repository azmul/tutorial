"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";
import { useEffect } from "react";

export function Theme() {
  const { colorScheme } = useMantineColorScheme();

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

  useEffect(() => {
    setColor(colorScheme);
  }, [colorScheme]);

  return <></>;
}

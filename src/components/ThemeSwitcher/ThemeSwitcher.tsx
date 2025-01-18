import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ThemeSwitcher.module.scss";

export function ThemeSwitcher() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="lg"
      p={1}
      aria-label="Toggle color scheme"
    >
      {colorScheme === "light" ? (
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      ) : (
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      )}
    </ActionIcon>
  );
}

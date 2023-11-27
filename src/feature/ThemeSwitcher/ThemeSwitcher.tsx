"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

const deriveNextTheme = (currentTheme: string) => {
  switch (currentTheme) {
    case "light":
      return "dark";
    case "dark":
      return "light";
    default:
      return "dark";
  }
};

const MIconButton = motion(IconButton);
export const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const nextTheme = deriveNextTheme(colorMode);

  const onThemeClick = async () => {
    toggleColorMode();

    await fetch(`${__FRONT_URL__}/api/theme`, {
      method: "POST",
      body: JSON.stringify({ theme: nextTheme }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MIconButton
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle theme"
        bg={useColorModeValue("rgba(144, 144, 194)", "yellow.500")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={onThemeClick}
        variant="disabled"
      />
    </AnimatePresence>
  );
};

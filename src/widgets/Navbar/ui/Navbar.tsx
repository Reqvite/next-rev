"use client";
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { memo } from "react";

import type {
  ButtonLink,
  ButtonType,
  NavLink,
} from "@/shared/types/components";

const NavbarDesktop = dynamic(() => import("./NavbarDesktop"), {
  ssr: true,
});
const NavbarMobile = dynamic(() => import("./NavbarMobile"), {
  ssr: true,
});

type NavbarProps = {
  isMobile: boolean;
  lang: string;
  links: Array<NavLink>;
  buttons: Array<ButtonLink>;
  logoutBtn: ButtonType;
  logoUrl: string | null;
  logoText: string | null;
  session: any;
};

const MotionBox = motion(Box);
export const Navbar = memo((props: NavbarProps) => {
  const {
    links,
    buttons,
    logoUrl,
    logoText,
    lang,
    session,
    logoutBtn,
    isMobile,
  } = props;

  const path = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  const isMainPage = path.split("/").length === 2;
  const themeBg = useColorModeValue(
    "var(--chakra-colors-secondaryBgColorLight)",
    "var(--chakra-colors-secondaryBgColorDark)",
  );

  return (
    <MotionBox
      height={"var(--chakra-sizes-headerHeight)"}
      as="header"
      bg={isMainPage ? "transparent" : themeBg}
      position={"absolute"}
      zIndex={"var(--chakra-zIndices-navbar)"}
      width="100%"
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 6 }}
      align={"center"}
    >
      {!isMobile ? (
        <NavbarDesktop
          links={links}
          isMainPage={isMainPage}
          isOpen={isOpen}
          onToggle={onToggle}
          lang={lang}
          buttons={buttons}
          logoutBtn={logoutBtn}
          logoUrl={logoUrl}
          logoText={logoText}
          session={session}
        />
      ) : (
        <NavbarMobile
          logoUrl={logoUrl}
          logoText={logoText}
          isOpen={isOpen}
          onToggle={onToggle}
          links={links}
          lang={lang}
          buttons={buttons}
          logoutBtn={logoutBtn}
          session={session}
        />
      )}
    </MotionBox>
  );
});

"use client";
import {
  Box,
  Flex,
  Slide,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { memo } from "react";

import type {
  ButtonLink,
  ButtonType,
  NavLink,
} from "@/shared/types/components";
import { Logo, SearchField } from "@/shared/ui";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

type NavbarProps = {
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
  const { links, buttons, logoUrl, logoText, lang, session, logoutBtn } = props;

  const path = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  const isMainPage = path.split("/").length === 2;
  const themeBg = useColorModeValue(
    "var(--chakra-colors-secondaryBgColorLight)",
    "var(--chakra-colors-secondaryBgColorDark)",
  );

  const [isLargerThan1135] = useMediaQuery("(min-width: 1135.98px)", {
    ssr: true,
    fallback: false,
  });
  return (
    <MotionBox
      height={"var(--chakra-sizes-headerHeight)"}
      as="header"
      css={{ backdropFilter: "blur(10px)" }}
      bg={{
        base: themeBg,
        md: isMainPage ? "transparent" : themeBg,
      }}
      position={"absolute"}
      zIndex={"var(--chakra-zIndices-navbar)"}
      width="100%"
      minH={"60px"}
      py={{ base: 4 }}
      px={{ base: 6 }}
      align={"center"}
    >
      <Flex align={"baseline"} w="full">
        <Logo logoText={logoText} logoUrl={logoUrl} lang={lang} />
        <DesktopNav
          isMainPage={isMainPage}
          links={links}
          session={session}
          logoutBtn={logoutBtn}
          buttons={buttons}
          lang={lang}
          onToggle={onToggle}
          isOpen={isOpen}
        />
      </Flex>
      {!isLargerThan1135 && (
        <Flex mt={1}>
          <SearchField maxW={2000} />
        </Flex>
      )}
      <Slide in={isOpen}>
        <MobileNav
          links={links}
          session={session}
          logoutBtn={logoutBtn}
          buttons={buttons}
          lang={lang}
        />
      </Slide>
    </MotionBox>
  );
});

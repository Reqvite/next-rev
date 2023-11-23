"use client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { memo } from "react";

import { ThemeSwitcher } from "@/feature";
import type { ButtonLink, NavLink } from "@/shared/types/components";
import { Logo } from "@/shared/ui";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

type NavbarProps = {
  lang: string;
  links: Array<NavLink>;
  buttons: Array<ButtonLink>;
  logoUrl: string | null;
  logoText: string | null;
  session: any;
};

const MotionBox = motion(Box);
export const Navbar = memo((props: NavbarProps) => {
  const { links, buttons, logoUrl, logoText, lang, session } = props;
  const path = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  const isMainPage = path.split("/").length === 2;
  const themeBg = useColorModeValue(
    "var(--chakra-colors-secondaryBgColorLight)",
    "var(--chakra-colors-secondaryBgColorDark)",
  );

  return (
    <MotionBox
      as="header"
      css={{ backdropFilter: "blur(10px)" }}
      bg={{
        base: themeBg,
        md: isMainPage ? "transparent" : themeBg,
      }}
      position={"absolute"}
      zIndex={"var(--chakra-zIndices-navbar)"}
      width="100%"
    >
      <Flex
        bg={"transparent"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon
                  w={3}
                  h={3}
                  color={"var(--chakra-colors-accentColor)"}
                />
              ) : (
                <HamburgerIcon
                  w={5}
                  h={5}
                  color={"var(--chakra-colors-accentColor)"}
                />
              )
            }
            variant={"ghost"}
            _hover={{ bg: "var(--chakra-colors-accentColorTransparent)" }}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo logoText={logoText} logoUrl={logoUrl} lang={lang} />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav isMainPage={isMainPage} links={links} />
          </Flex>
        </Flex>

        {session ? (
          <>
            Signed in as {session?.user?.email} <br />
            <Button variant={"primary"} onClick={() => signOut()}>
              Sign out
            </Button>
          </>
        ) : (
          <>
            {buttons && (
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={3}
              >
                {buttons.map(({ href, label, variant, id }) => (
                  <Button
                    key={id}
                    as={"a"}
                    variant={variant}
                    href={`/${lang}/${href}`}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            )}
          </>
        )}
        <ButtonGroup ml={5}>
          <ThemeSwitcher />
        </ButtonGroup>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav links={links} />
      </Collapse>
    </MotionBox>
  );
});

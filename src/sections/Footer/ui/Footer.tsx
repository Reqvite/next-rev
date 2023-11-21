"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { NavLink } from "@/shared/types/components";
import { Logo } from "@/shared/ui";

type Footerprops = {
  lang: string;
  logoUrl: string | null;
  logoText: string | null;
  footerLinks: Array<NavLink>;
  legalLinks: Array<NavLink>;
  socialLinks: Array<NavLink>;
};
export const Footer = (props: Footerprops) => {
  const { logoUrl, logoText, footerLinks, legalLinks, lang, socialLinks } =
    props;
  const pathname = usePathname();

  return (
    <Box bg="bg.surface">
      <Container as="footer" role="contentinfo" maxW={"8xl"}>
        <Divider
          bg={"var(--chakra-colors-accentColor)"}
          h={"2px"}
          borderRadius={"5px"}
        />
        <Stack
          justify="space-between"
          align="start"
          direction={{ base: "column", lg: "row" }}
          py={{ base: "12", md: "16" }}
          spacing="8"
        >
          <Box>
            <Logo logoUrl={logoUrl} logoText={logoText} lang={lang} isFooter />
          </Box>
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            gap="8"
            width={{ base: "full", lg: "auto" }}
          >
            {footerLinks.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
                <Text fontSize="sm" fontWeight="semibold" color="gray">
                  {group.label}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.children.map((link, idx) => (
                    <Button
                      paddingLeft={0}
                      key={idx}
                      as="a"
                      variant="text"
                      colorScheme="gray"
                      href={link.href}
                      _hover={{
                        color: "var(--chakra-colors-accentColor)",
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider
          bg={"var(--chakra-colors-accentColor)"}
          h={"2px"}
          borderRadius={"5px"}
        />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <HStack>
            {legalLinks.map((link, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
                <Button
                  padding={0}
                  key={idx}
                  as="a"
                  variant="text"
                  colorScheme="gray"
                  href={link.href}
                >
                  {link.label}
                </Button>
              </Stack>
            ))}
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} TITLE, Inc. All rights reserved.
            </Text>
          </HStack>
          <ButtonGroup>
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};

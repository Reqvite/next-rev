"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

import { ButtonLink, ButtonType, NavLink } from "@/shared/types/components";

type MobileNavProps = {
  links: NavLink[];
  session: any;
  logoutBtn: ButtonType;
  buttons: Array<ButtonLink>;
  lang: string;
};
export const MobileNav = (props: MobileNavProps) => {
  const { links, session, logoutBtn, buttons, lang } = props;

  return (
    <Stack
      mt={"60px"}
      w="full"
      p={4}
      flexDirection={"column"}
      bg={useColorModeValue(
        "var(--chakra-colors-secondaryBgColorLight)",
        "var(--chakra-colors-secondaryBgColorDark)",
      )}
    >
      {session ? (
        <>
          Signed in as {session?.user?.email} <br />
          <Button
            aria-label={logoutBtn.label}
            variant={logoutBtn.variant}
            onClick={() => signOut()}
          >
            {logoutBtn.label}
          </Button>
        </>
      ) : (
        <>
          {buttons && (
            <>
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
            </>
          )}
        </>
      )}
      {links.map((navItem, idx) => (
        <MobileNavItem key={idx} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavLink) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          color: "var(--chakra-colors-accentColor)",
        }}
        display={"flex"}
      >
        <Text fontWeight={600} color={"var(--chakra-colors-accentColor)"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child, idx) => (
              <Box
                as="a"
                key={idx}
                py={2}
                href={child.href}
                _hover={{
                  color: "var(--chakra-colors-accentColor)",
                }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

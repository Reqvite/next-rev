"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { NavLink } from "@/shared/types/components";

type MobileNavProps = {
  links: NavLink[];
};
export const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <Stack
      p={4}
      display={{ md: "none" }}
      bg={useColorModeValue(
        "var(--chakra-colors-secondaryBgColorLight)",
        "var(--chakra-colors-secondaryBgColorDark)",
      )}
    >
      {links.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
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
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
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

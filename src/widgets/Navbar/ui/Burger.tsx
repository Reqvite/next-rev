import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useMediaQuery } from "@chakra-ui/react";
import React from "react";

interface BurgerProps {
  onToggle: any;
  isOpen: boolean;
}
export const Burger = ({ onToggle, isOpen }: BurgerProps) => {
  const [isLargerThan1135] = useMediaQuery("(min-width: 1135.98px)", {
    ssr: true,
    fallback: false,
  });
  return (
    <Flex
      zIndex={100000}
      flex={{ base: 1, md: "auto" }}
      display={isLargerThan1135 ? "none" : "flex"}
    >
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? (
            <CloseIcon w={3} h={3} color={"var(--chakra-colors-accentColor)"} />
          ) : (
            <HamburgerIcon
              w={5}
              h={5}
              color={"var(--chakra-colors-accentColor)"}
            />
          )
        }
        _hover={{ bg: "var(--chakra-colors-accentColorTransparent)" }}
        aria-label={"Toggle Navigation"}
      />
    </Flex>
  );
};

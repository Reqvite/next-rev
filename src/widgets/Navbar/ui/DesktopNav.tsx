"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import type {
  ButtonLink,
  ButtonType,
  NavLink,
  SubLink,
} from "@/shared/types/components";
import { SearchField } from "@/shared/ui";

import { HeaderButtons } from "./HeaderButtons";

type DesktopNavProps = {
  links: NavLink[];
  isMainPage: boolean;
  session: any;
  logoutBtn: ButtonType;
  buttons: Array<ButtonLink>;
  lang: string;
  onToggle: any;
  isOpen: boolean;
};
export const DesktopNav = (props: DesktopNavProps) => {
  const {
    links,
    isMainPage,
    session,
    logoutBtn,
    buttons,
    lang,
    onToggle,
    isOpen,
  } = props;
  const linkColor = useColorModeValue(
    "var(--chakra-colors-mainColorLight)",
    "var(--chakra-colors-mainColorDark)",
  );
  const popoverContentBgColor = useColorModeValue(
    "var(--chakra-colors-mainBgColorLight)",
    "var(--chakra-colors-mainBgColorDark)",
  );

  const [isLargerThan1135] = useMediaQuery("(min-width: 1135.98px)", {
    ssr: true,
    fallback: false,
  });
  return (
    <VStack w={"full"} as="nav">
      <Flex align={"baseline"} ml={"auto"}>
        {isLargerThan1135 && (
          <Box>
            <SearchField ml={"auto"} />
            <Stack direction={"row"} spacing={4} mt={"10px"}>
              {links.map((navItem, idx) => (
                <Box key={idx}>
                  <Popover trigger={"hover"} placement={"bottom-start"}>
                    <PopoverTrigger>
                      <Box
                        as="a"
                        p={2}
                        href={navItem.href ?? "#"}
                        fontSize={"sm"}
                        fontWeight={500}
                        color={
                          isMainPage
                            ? "var(--chakra-colors-mainColorDark)"
                            : linkColor
                        }
                        _hover={{
                          textDecoration: "none",
                          color: "var(--chakra-colors-accentColor)",
                        }}
                      >
                        {navItem.label}
                      </Box>
                    </PopoverTrigger>

                    {navItem.children && (
                      <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={"xl"}
                        minW={"sm"}
                      >
                        <Stack>
                          {navItem.children.map((child, idx) => (
                            <DesktopSubNav key={idx} {...child} />
                          ))}
                        </Stack>
                      </PopoverContent>
                    )}
                  </Popover>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
        <HeaderButtons
          session={session}
          logoutBtn={logoutBtn}
          buttons={buttons}
          lang={lang}
          onToggle={onToggle}
          isOpen={isOpen}
        />
      </Flex>
    </VStack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: SubLink) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: "var(--chakra-colors-accentColorTransparent)",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "var(--chakra-colors-accentColor)" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={"var(--chakra-colors-accentColor)"}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

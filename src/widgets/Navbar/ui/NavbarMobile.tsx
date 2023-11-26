import { Box, ButtonGroup, Flex, Slide, VStack } from "@chakra-ui/react";

import { ThemeSwitcher } from "@/feature";
import { ButtonLink, ButtonType, NavLink } from "@/shared/types/components";
import { Logo, SearchField } from "@/shared/ui";

import { Burger } from "./Burger";
import { MobileNav } from "./MobileNav";

interface NavbarMobileProps {
  logoUrl: string | null;
  logoText: string | null;
  links: Array<NavLink>;
  buttons: Array<ButtonLink>;
  logoutBtn: ButtonType;
  lang: string;
  session: any;
  onToggle: () => void;
  isOpen: boolean;
}
const NavbarMobile = (props: NavbarMobileProps) => {
  const {
    links,
    buttons,
    logoutBtn,
    lang,
    session,
    isOpen,
    onToggle,
    logoUrl,
    logoText,
  } = props;
  return (
    <VStack>
      <Flex align={"center"} w="full">
        <Logo logoText={logoText} logoUrl={logoUrl} lang={lang} />
        <ButtonGroup ml={"auto"} alignItems={"center"}>
          <ThemeSwitcher />
          <Burger isOpen={isOpen} onToggle={onToggle} />
        </ButtonGroup>
      </Flex>
      <Flex>
        <SearchField maxW={2000} />
      </Flex>
      <Box position="absolute">
        <Slide in={isOpen}>
          <MobileNav
            links={links}
            session={session}
            logoutBtn={logoutBtn}
            buttons={buttons}
            lang={lang}
          />
        </Slide>
      </Box>
    </VStack>
  );
};
export default NavbarMobile;

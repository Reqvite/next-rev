import { Button, ButtonGroup, Flex, Stack } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

import { ThemeSwitcher } from "@/feature";
import { ButtonLink, ButtonType, NavLink } from "@/shared/types/components";
import { Logo } from "@/shared/ui";

import { DesktopNav } from "./DesktopNav";

interface NavbarDesktopProps {
  logoUrl: string | null;
  logoText: string | null;
  session: any;
  logoutBtn: ButtonType;
  buttons: Array<ButtonLink>;
  links: NavLink[];
  lang: string;
  onToggle: () => void;
  isOpen: boolean;
  isMainPage: boolean;
}
const NavbarDesktop = (props: NavbarDesktopProps) => {
  const {
    logoUrl,
    logoText,
    session,
    logoutBtn,
    buttons,
    lang,
    onToggle,
    isOpen,
    isMainPage,
    links,
  } = props;
  return (
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
      <Flex>
        {session ? (
          <>
            Signed in as {session?.user?.email} <br />
            <Button
              aria-label={logoutBtn.label}
              variant={logoutBtn.variant}
              onClick={() => signOut()}
              ml={"200px"}
            >
              {logoutBtn.label}
            </Button>
          </>
        ) : (
          <>
            {buttons && (
              <Stack
                ml={"200px"}
                flex={{ base: 1, md: 0 }}
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
    </Flex>
  );
};

export default NavbarDesktop;

import { Button, ButtonGroup, Stack, useMediaQuery } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

import { ThemeSwitcher } from "@/feature";
import { ButtonLink, ButtonType } from "@/shared/types/components";

import { Burger } from "./Burger";

interface RightButtonsProps {
  session: any;
  logoutBtn: ButtonType;
  buttons: Array<ButtonLink>;
  lang: string;
  onToggle: any;
  isOpen: boolean;
}
export const HeaderButtons = (props: RightButtonsProps) => {
  const { session, logoutBtn, buttons, lang, onToggle, isOpen } = props;
  const [isLargerThan1135] = useMediaQuery("(min-width: 1135.98px)", {
    ssr: true,
    fallback: false,
  });
  return (
    <>
      {isLargerThan1135 && (
        <>
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
        </>
      )}
      <ButtonGroup ml={5}>
        <ThemeSwitcher />
        <Burger isOpen={isOpen} onToggle={onToggle} />
      </ButtonGroup>
    </>
  );
};

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-35px)",
};

export const getTheme = (colorMode: string) => {
  return extendTheme({
    config: {
      initialColorMode: colorMode,
      useSystemColorMode: true,
    },
    styles: {
      global: (props: any) => ({
        body: {
          fontFamily: "body",
          color: mode("#0c0d0d", "#f2eadf")(props),
          bg: mode("#f2eadf", "#202023")(props),
        },
      }),
    },
    colors: {
      mainBgColorLight: "#f2eadf",
      secondaryBgColorLight: "#fcf6ed",
      mainBgColorDark: "#202023",
      secondaryBgColorDark: "#0c0d0d",
      mainColorLight: "#0c0d0d",
      mainColorDark: "#f2eadf",
      errorColorLight: "#F56565",
      errorColorDark: "#E53E3E",
      accentColor: "rgba(144, 144, 194)",
      accentColorTransparent: "rgba(144, 144, 194, 0.3)",
      accentColorTransparentDarker: "rgba(144, 144, 194, 0.4)",
    },
    shadows: {
      mainShadow: "2px 5px 50px rgba(144, 144, 194, 0.4)",
    },
    sizes: {
      headerHeight: "60px",
      drawerFooterHeight: "113px",
      drawerWidth: "380px",
    },
    borders: {
      borderMain: "2px solid var(--chakra-colors-accentColor)",
    },
    zIndices: {
      navbar: 100,
      drawer: 101,
      drawerFooter: 102,
    },
    components: {
      Button: {
        variants: {
          primary: {
            color: "white",
            border: "2px solid transparent",
            display: "inline-flex",
            fontWeight: 600,
            bg: "var(--chakra-colors-accentColor)",
            _hover: {
              background: "transparent",
              border: "2px solid var(--chakra-colors-accentColor)",
              color: "var(--chakra-colors-accentColor)",
              _disabled: {
                backgroundColor:
                  "2px solid var(--chakra-colors-accentColorTransparent)",
              },
            },
            cursor: "pointer",
          },
          secondary: {
            border: "2px solid var(--chakra-colors-accentColor)",
            color: "var(--chakra-colors-accentColor)",
            _hover: {
              background: "var(--chakra-colors-accentColor)",
              borderColor: "transparent",
              color: "white",
            },
          },
        },
      },
      Input: {
        variants: {
          clear: {
            field: {
              color: "var(--chakra-colors-accentColor)",
              width: "100%",
              display: "inline-block",
              my: "0.25rem",
              bg: "transparent",
            },
          },
        },
      },
    },
  });
};

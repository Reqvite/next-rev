import {
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

type LogoProps = {
  lang: string;
  logoUrl: string | null;
  logoText?: string | null;
  isFooter?: boolean;
};
export const Logo = (props: LogoProps) => {
  const { logoUrl, logoText, isFooter, lang } = props;
  return (
    <>
      <Image
        objectFit={"contain"}
        src={logoUrl || ""}
        width={logoText ? 25 : 100}
        height={25}
        borderRadius={"50%"}
        alt={"logo"}
        marginRight={3}
      />
      <Text
        as={"a"}
        href={`/${lang}`}
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"heading"}
        color={useColorModeValue(isFooter ? "black" : "white", "white")}
      >
        {logoText}
      </Text>
    </>
  );
};

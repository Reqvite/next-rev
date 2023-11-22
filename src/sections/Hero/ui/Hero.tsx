"use client";
import { Box, Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { getAnimationVariants } from "@/shared/animation/animation";
import { getStrapiMedia } from "@/shared/api/api-helpers";
import { ButtonLink } from "@/shared/types/components";

interface Props {
  img: any;
  buttons: Array<ButtonLink>;
  description: string | null;
  title: string | null;
  benefits: { id: number; title: string; description: string }[];
}
type HeroProps = {
  data: Props;
};

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionStack = motion(Stack);
const animation = getAnimationVariants(0.6);

const Hero = ({ data }: HeroProps) => {
  const { title, description, buttons, img, benefits } = data;
  const imgUrl = getStrapiMedia(img.data.attributes.url);

  return (
    <Box
      bg="gray.800"
      as="section"
      minH="140px"
      h={{ base: "500px", md: "500px" }}
      position="relative"
    >
      <Box
        pt={"32"}
        position="relative"
        zIndex={1}
        h={{ base: "500px", md: "500px" }}
      >
        <Flex
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <MotionBox
            maxW="xl"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <MotionHeading
              color={"var(--chakra-colors-accentColor)"}
              custom={1}
              variants={animation}
              as="h1"
              size="3xl"
              fontWeight="extrabold"
            >
              {title}
            </MotionHeading>
            <MotionText
              color={"var(--chakra-colors-mainColorDark)"}
              custom={2}
              variants={animation}
              fontSize={{ md: "2xl" }}
              mt="4"
              maxW="lg"
            >
              {description}
            </MotionText>
            <MotionStack
              custom={3}
              variants={animation}
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              {buttons.map(({ href, label, variant, id }) => (
                <Button
                  display={"flex"}
                  size="lg"
                  key={id}
                  as={"a"}
                  cursor={"pointer"}
                  variant={variant}
                  href={href}
                >
                  {label}
                </Button>
              ))}
            </MotionStack>
          </MotionBox>
        </Flex>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <MotionBox
          position="relative"
          w="full"
          h="full"
          initial={{ scale: 1.1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 5,
          }}
        >
          <Img
            src={imgUrl || ""}
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Hero;

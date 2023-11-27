"use client";
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

import { getStrapiMedia } from "@/shared/api/api-helpers";
import { Category } from "@/shared/types/components";

interface Props {
  category: Category;
  rootProps?: BoxProps;
}

const MBox = motion(Box);

export const CategoryCard = (props: Props) => {
  const pathname = usePathname();
  const { category, rootProps } = props;
  const router = useRouter();
  const { title, slug, description, img, linkTitle } = category;
  const categoryImg = getStrapiMedia(img.data.attributes.url);
  const lang = pathname.split("/")[1];
  return (
    <MBox
      h={"full"}
      position="relative"
      key={title}
      borderRadius="xl"
      overflow="hidden"
      minH={{ base: "sm", lg: "auto" }}
      transitionDuration="500ms"
      whileHover={{ scale: 1.01 }}
      whileFocus={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...rootProps}
    >
      <Link href={`${lang}/search/${slug}`}>
        <Image
          src={categoryImg || ""}
          height="full"
          objectFit="cover"
          alt={title}
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(180deg, var(--chakra-colors-accentColorTransparentDarker) 47.92%, var(--chakra-colors-accentColorTransparent) 100%)"
          boxSize="full"
        />
        <Flex
          color="white"
          direction="column-reverse"
          position="absolute"
          inset="0"
          boxSize="full"
          px={{ base: "4", md: "8" }}
          py={{ base: "6", md: "8", lg: "10" }}
        >
          <Stack spacing="5" color={"var(--chakra-colors-mainColorDark)"}>
            <Stack spacing="1">
              <Heading fontSize="2xl" fontWeight="extrabold">
                {title}
              </Heading>
              <Text fontSize="lg" fontWeight="medium">
                {description}
              </Text>
            </Stack>
            <HStack>
              <Text textDecoration={"underline"}>{linkTitle}</Text>
              <Icon as={FaChevronRight} />
            </HStack>
          </Stack>
        </Flex>
      </Link>
    </MBox>
  );
};

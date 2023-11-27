"use client";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { getAnimationVariants } from "@/shared/animation/animation";
import { Category } from "@/shared/types/components";

import { CategoryCard } from "./CatetgoryCard";

interface CategoriesProps {
  data: any;
}

const animation = getAnimationVariants(0.2);

export const Categories = ({ data }: CategoriesProps) => {
  const { allCategoriesLink, allCategoriesLinkTitle, title, categories } = data;

  const color = useColorModeValue(
    "var(--chakra-colors-mainBgColorDark)",
    "var(--chakra-colors-mainBgColorLight)",
  );
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack spacing={{ base: "6", md: "8", lg: "12" }}>
        <Flex
          justify="space-between"
          align={{ base: "start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Heading color={"var(--chakra-colors-accentColor)"} size="lg">
            {title}
          </Heading>
          {allCategoriesLink && (
            <HStack spacing={{ base: "2", md: "3" }}>
              <Link
                display={allCategoriesLinkTitle ? "block" : "none"}
                href={allCategoriesLink}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                color={color}
              >
                {allCategoriesLinkTitle}
              </Link>
              <Icon
                as={FaArrowRight}
                color={color}
                fontSize={{ base: "sm", md: "md" }}
              />
            </HStack>
          )}
        </Flex>
        <SimpleGrid
          as="ul"
          listStyleType={"none"}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "8", lg: "16" }}
        >
          {categories.data.map(
            (category: { id: number; attributes: Category }) => (
              <motion.li
                custom={category.id}
                variants={animation}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                key={category.id}
              >
                <CategoryCard category={category.attributes} />
              </motion.li>
            ),
          )}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

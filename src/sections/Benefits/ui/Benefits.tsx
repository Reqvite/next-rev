"use client";

import {
  Box,
  forwardRef,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  stat: string;
  idx: number;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      as="li"
      color={"var(--chakra-colors-mainColorDark)"}
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"2xl"}
      boxShadow={"var(--chakra-shadows-mainShadow)"}
      background={"var(--chakra-colors-accentColorTransparent)"}
      rounded={"lg"}
    >
      <StatLabel
        as={"h2"}
        fontWeight={"medium"}
        isTruncated
        color={"var(--chakra-colors-accentColor)"}
      >
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

interface Benefitsprops {
  benefits: { id: number; title: string; description: string }[];
}

const Benefits = forwardRef((props: Benefitsprops, ref) => {
  const { benefits, ...otherProps } = props;
  return (
    <Box
      ref={ref}
      py={10}
      maxW="7xl"
      mx={"auto"}
      px={{ base: 2, sm: 12, md: 17 }}
      {...otherProps}
    >
      <SimpleGrid
        as="ul"
        listStyleType={"none"}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {benefits.map(({ id, title, description }) => (
          <StatsCard key={id} title={title} stat={description} idx={id} />
        ))}
      </SimpleGrid>
    </Box>
  );
});

export const MBenefits = motion(Benefits);

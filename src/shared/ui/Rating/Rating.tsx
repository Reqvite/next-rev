"use client";
import { HStack, Icon, StackProps, useColorModeValue } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  defaultValue?: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  rootProps?: StackProps;
}

export const Rating = (props: Props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.500", "gray.300");
  const activeColor = useColorModeValue("blue.500", "blue.200");
  const integerPart = Math.floor(defaultValue);
  const decimalPart = defaultValue - integerPart;

  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max }).map((_, index) => {
        const starColor =
          index < integerPart
            ? activeColor
            : index === integerPart && decimalPart > 0
              ? activeColor
              : color;

        const StarComponent =
          index < integerPart
            ? FaStar
            : index === integerPart && decimalPart > 0
              ? FaStarHalfAlt
              : FaStar;

        return (
          <Icon
            key={index}
            as={StarComponent}
            fontSize={size}
            color={starColor}
          />
        );
      })}
    </HStack>
  );
};

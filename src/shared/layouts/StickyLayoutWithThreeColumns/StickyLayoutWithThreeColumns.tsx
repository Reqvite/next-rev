import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface StickyLayoutWithThreeColumnsProps extends GridProps {
  leftComponent: ReactNode;
  centerComponent: ReactNode;
  rightComponent: ReactNode;
}
export const StickyLayoutWithThreeColumns = (
  props: StickyLayoutWithThreeColumnsProps,
) => {
  const { leftComponent, centerComponent, rightComponent, ...otherProps } =
    props;
  return (
    <Grid
      {...otherProps}
      templateAreas={`"left center right"`}
      gridTemplateColumns={"15% 55% 30%"}
      h="100vh"
      // gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem as={"section"} bg="orange.300" area={"left"}>
        {leftComponent}
      </GridItem>
      <GridItem as={"section"} bg="pink.300" area={"center"}>
        {centerComponent}
      </GridItem>
      <GridItem as={"section"} area={"right"}>
        {rightComponent}
      </GridItem>
    </Grid>
  );
};

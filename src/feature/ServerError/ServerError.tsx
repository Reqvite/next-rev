import { Box, Heading, Text } from "@chakra-ui/react";

export function ServerError() {
  return (
    <Box as="main" paddingTop={"var(--chakra-sizes-headerHeight)"}>
      <Box as="section">
        <Heading as="h1" size="xl">
          Server Error
        </Heading>
        <Text fontSize="lg">
          Sorry, it seems like our servers are currently down. Please try again
          later.
        </Text>
      </Box>
    </Box>
  );
}

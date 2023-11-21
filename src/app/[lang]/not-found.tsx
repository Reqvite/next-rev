import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Container as="section" pt={300}>
      <VStack spacing={5}>
        <Heading as="h2">Error 404</Heading>
        <Heading as="h2">Not Found</Heading>
        <Text>Could not find requested resource</Text>
        <Button as="a" variant={"primary"} href="/">
          Return Home
        </Button>
      </VStack>
    </Container>
  );
}

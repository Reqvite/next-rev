"use client"; // Error components must be Client Components

import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container as="main" pt={300}>
      <VStack spacing={5}>
        <Heading as={"h1"}>Something went wrong..</Heading>
        <Button variant={"primary"} onClick={() => reset()}>
          Reload page
        </Button>
      </VStack>
    </Container>
  );
}

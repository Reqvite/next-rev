"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { InputType } from "@/shared/types/components";
import { IconButtonGroup, PasswordField } from "@/shared/ui";

interface AuthProps {
  data: any;
}
export const Auth = (props: AuthProps) => {
  const { data } = props;
  const {
    title,
    description,
    linkTitle,
    href,
    inputs,
    submitButton,
    forgotPasswordTitle,
    anotherVariantsTitle,
  } = data;
  const pathname = usePathname();
  const router = useRouter();
  const newPath = pathname.split("/").slice(0, -1).join("/");

  const initialValues = inputs.reduce(
    (acc: { [key: string]: string }, el: any) => {
      acc[el.htmlFor] = "";
      return acc;
    },
    {},
  );

  const onSubmitData = async (values: typeof initialValues) => {
    const jsonData = JSON.stringify(values);
    const result = await signIn("credentials", {
      redirect: false,
      data: jsonData,
    });
    if (result?.ok) {
      return;
    }
    alert("Credential is not valid");
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      await onSubmitData(values);
      router.refresh();
      resetForm();
    },
  });
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>{title}</Heading>

            <Text color="fg.muted">
              {description}
              {linkTitle && <Link href={`${newPath}${href}`}>{linkTitle}</Link>}
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing="5">
              <FormControl>
                {inputs.map(({ label, type, htmlFor, id }: InputType) => {
                  if (htmlFor === "password") {
                    return (
                      <PasswordField
                        key={id}
                        onChange={handleChange}
                        value={values[htmlFor]}
                      />
                    );
                  }
                  return (
                    <FormLabel htmlFor="email" key={id} w={"full"}>
                      {label}
                      <Input
                        id={id}
                        name={htmlFor}
                        type={type}
                        onChange={handleChange}
                        value={values[htmlFor]}
                      />
                    </FormLabel>
                  );
                })}
              </FormControl>
            </Stack>
            {forgotPasswordTitle && (
              <HStack justify={"flex-end"}>
                <Button variant="text" size="sm">
                  {forgotPasswordTitle}
                </Button>
              </HStack>
            )}
            <Stack spacing="6">
              <Button type="submit" variant={submitButton.variant} mt={5}>
                {submitButton.label}
              </Button>
              {anotherVariantsTitle && (
                <>
                  <HStack>
                    <Divider />
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      {anotherVariantsTitle}
                    </Text>
                    <Divider />
                  </HStack>
                  <IconButtonGroup />
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
//todo buttongroup

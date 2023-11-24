"use client";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { FaSearch } from "react-icons/fa"; // Импортируйте иконку поиска (или используйте свою)

interface SearchFieldProps {
  label?: string;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickReveal = () => {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl>
        <FormLabel htmlFor="search" w={"full"}>
          {props.label}
        </FormLabel>
        <HStack
          width={"full"}
          borderRadius={5}
          h={50}
          border={"2px solid var(--chakra-colors-accentColor)"}
          maxW={600}
        >
          <Input
            id="search"
            ref={ref}
            type="text"
            {...props}
            variant="clear"
            placeholder="search params"
          />
          <Divider
            orientation="vertical"
            bg={"var(--chakra-colors-accentColor)"}
            h={"100%"}
            borderRadius={"5px"}
          />
          <InputGroup>
            <Input
              id="hiddenSearchInput"
              type="text"
              ref={inputRef}
              placeholder="location"
              variant="clear"
            />
            <InputRightElement width="50px" height={"100%"}>
              <IconButton
                borderRadius={5}
                bg={"var(--chakra-colors-accentColor)"}
                aria-label="Search"
                width="50px"
                height={"100%"}
                onClick={onClickReveal}
                icon={<FaSearch />}
              />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </FormControl>
    );
  },
);

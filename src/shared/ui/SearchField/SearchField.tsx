"use client";
import {
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { FaSearch } from "react-icons/fa"; // Импортируйте иконку поиска (или используйте свою)

interface SearchFieldProps {
  label?: string;
  ml?: any;
  maxW?: number;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const { maxW = 600, label, ml } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickReveal = () => {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl ml={ml}>
        <FormLabel htmlFor="search" w={"full"}>
          {label}
        </FormLabel>
        <HStack
          width={"full"}
          borderRadius={5}
          h={"40px"}
          border={"2px solid var(--chakra-colors-accentColor)"}
          maxW={maxW}
        >
          <Input
            my={0}
            h={"40px"}
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
              my={0}
              h={"40px"}
              id="hiddenSearchInput"
              type="text"
              ref={inputRef}
              placeholder="location"
              variant="clear"
            />
            <InputRightElement width="50px" h={"40px"}>
              <IconButton
                h={"40px"}
                borderRadius={5}
                bg={"var(--chakra-colors-accentColor)"}
                aria-label="Search"
                width="50px"
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

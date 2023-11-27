import { Badge, Stack } from "@chakra-ui/react";

interface Props {
  badges: Array<string>;
  size?: "sm" | "md" | "lg" | "xl";
}

export const BadgeList = (props: Props) => {
  const { badges, size } = props;
  return (
    <Stack direction="row">
      {badges.map((item, index) => (
        <Badge
          key={index}
          variant="outline"
          colorScheme="blue"
          mb={2}
          fontSize={size}
        >
          {item}
        </Badge>
      ))}
    </Stack>
  );
};

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import Carousel from "@/shared/ui/ImageCarousel/ImageCarousel";

import { BadgeList } from "../BadgeList/BadgeList";
import { Rating } from "../Rating/Rating";

export interface Establishment {
  id: number;
  photos: Array<string>;
  name: string;
  rating: number;
  numberOfReviews: number;
  workingHours: string;
  description: string;
  establishmentTypeArray?: Array<string>;
}

interface EstablishmentCardProps {
  establishment: Establishment;
}

const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  establishment,
}) => {
  const {
    photos,
    name,
    rating,
    numberOfReviews,
    workingHours,
    description,
    establishmentTypeArray,
  } = establishment;

  return (
    <Box
      display={"flex"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      _hover={{
        boxShadow: "0 0 10px #0000001a",
        cursor: "pointer",
      }}
    >
      <Box as="div" h="170px" w="170px">
        <Carousel photos={photos} imageHeight={"300px"} />
      </Box>
      <Box ml={"24px"}>
        <Heading as="h2" size="md" mb={2}>
          {name}
        </Heading>
        <Box as={"div"} display={"flex"} mb={2}>
          <Rating
            defaultValue={rating}
            max={5}
            size="lg"
            rootProps={{ spacing: 2 }}
          />

          <Text fontSize="sm" color="gray.400" ml={2}>
            {numberOfReviews} reviews
          </Text>
        </Box>

        {establishmentTypeArray && (
          <BadgeList badges={establishmentTypeArray} size={"sm"} />
        )}

        <Text fontSize="sm" color="gray.500" mb={2}>
          Working Hours: {workingHours}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default EstablishmentCard;

import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import Carousel from "@/shared/ui/ImageCarousel/ImageCarousel";

export interface Establishment {
  id: number;
  photos: Array<string>;
  name: string;
  rating: number;
  numberOfReviews: number;
  workingHours: string;
  description: string;
  establishmentType?: string | Array<string>;
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
    establishmentType,
  } = establishment;

  return (
    <Box
      display={"flex"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
    >
      <Box as="div" h="170px" w="170px">
        <Carousel photos={photos} imageHeight={"300px"} />
      </Box>
      <Box ml={"24px"}>
        <Heading as="h2" size="md" mb={2}>
          {name}
        </Heading>
        {establishmentType && (
          <Badge variant="outline" colorScheme="blue" mb={2}>
            {Array.isArray(establishmentType)
              ? establishmentType.join(", ")
              : establishmentType}
          </Badge>
        )}
        <Box as={"div"} display={"flex"}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Rating: {rating}
          </Text>
          <Text fontSize="sm" color="gray.400" ml={2}>
            {numberOfReviews} reviews
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Working Hours: {workingHours}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default EstablishmentCard;

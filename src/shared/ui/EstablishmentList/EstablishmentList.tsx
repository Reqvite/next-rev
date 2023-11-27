import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

import EstablishmentCard, {
  Establishment,
} from "../EstablishmentCard/EstablishmentCard";

interface EstablishmentListProps {
  establishments: Array<Establishment>;
}

export const EstablishmentList: React.FC<EstablishmentListProps> = ({
  establishments,
}) => {
  return (
    <SimpleGrid columns={[1]} spacing={0}>
      {establishments.map((establishment) => (
        <EstablishmentCard
          key={establishment.id}
          establishment={establishment}
        />
      ))}
    </SimpleGrid>
  );
};

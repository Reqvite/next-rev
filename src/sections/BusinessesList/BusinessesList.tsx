import { SimpleGrid } from "@chakra-ui/react";

import { BusinessCard, BusinessI } from "@/shared/ui/BusinessCard/BusinessCard";

interface BusinessesListProps {
  establishments: Array<BusinessI>;
}

export const BusinessesList: React.FC<BusinessesListProps> = ({
  establishments,
}) => {
  return (
    <SimpleGrid columns={[1]} spacing={0} height={"100%"}>
      {establishments.map((establishment) => (
        <BusinessCard key={establishment.id} establishment={establishment} />
      ))}
    </SimpleGrid>
  );
};

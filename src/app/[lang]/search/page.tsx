import { Box } from "@chakra-ui/react";

// import { getPageBySlug } from "@/shared/api/get-page-by-slug";
// import { sectionRenderer } from "@/shared/lib/helpers/sectionRender/sectionRenderer";
import { EstablishmentList } from "@/shared/ui/EstablishmentList/EstablishmentList";

// const urlParamsObject = ["contentSections", "contentSections.categories.img"];

export default async function Search({ params, searchParams }: any) {
  //   const page = await getPageBySlug("Search", params.lang, urlParamsObject);

  //   if (page.data.length === 0) return null;
  //   const contentSections = page.data[0].attributes.contentSections;
  //   const sections = contentSections.map((section: any, index: number) =>
  //     sectionRenderer(section, index),
  //   );

  const establishments = [
    {
      id: 1,
      photos: [
        "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      ],
      name: "Sample Restaurant",
      rating: 4.5,
      numberOfReviews: 34,
      workingHours: "Mon - Fri: 9 AM - 8 PM",
      description: "A great place to enjoy delicious food!",
      establishmentType: "Cafe",
    },
    {
      id: 2,
      photos: [
        "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      ],
      name: "Sample Restaurant",
      rating: 4.5,
      numberOfReviews: 34,
      workingHours: "Mon - Fri: 9 AM - 8 PM",
      description: "A great place to enjoy delicious food!",
      establishmentType: "Cafe",
    },
    {
      id: 3,
      photos: [
        "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      ],
      name: "Sample Restaurant",
      rating: 4.5,
      numberOfReviews: 34,
      workingHours: "Mon - Fri: 9 AM - 8 PM",
      description: "A great place to enjoy delicious food!",
      establishmentType: "Cafe",
    },
  ];

  return (
    <Box as="section" pt={"var(--chakra-sizes-headerHeight)"}>
      Search page
      <EstablishmentList establishments={establishments} />
    </Box>
  );
}

import { BusinessesList } from "@/sections/BusinessesList/BusinessesList";
import { fetchAPI } from "@/shared/api/fetch-api";
import { StickyLayoutWithThreeColumns } from "@/shared/layouts";
import { EmbedGoogleMap, Logo } from "@/shared/ui";
const establishments = [
  {
    id: 1,
    photos: [
      "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    ],
    name: "Sample Restaurant",
    rating: 5,
    numberOfReviews: 34,
    workingHours: "Mon - Fri: 9 AM - 8 PM",
    description: "A great place to enjoy delicious food!",
    establishmentTypeArray: ["Cafe"],
  },
  {
    id: 2,
    photos: [
      "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    ],
    name: "Sample Restaurant",
    rating: 2.5,
    numberOfReviews: 34,
    workingHours: "Mon - Fri: 9 AM - 8 PM",
    description: "A great place to enjoy delicious food!",
    establishmentTypeArray: ["Cafe"],
  },
  {
    id: 3,
    photos: [
      "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    ],
    name: "Sample Restaurant",
    rating: 1.2,
    numberOfReviews: 34,
    workingHours: "Mon - Fri: 9 AM - 8 PM",
    description: "A great place to enjoy delicious food!",
    establishmentTypeArray: ["Cafe", "Restaurant"],
  },
];

async function fetchBusinessesByCategory(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/businesses`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      filters: {
        category: {
          slug: filter,
        },
      },
      populate: {
        cover: { fields: ["url"] },
        category: {
          populate: "*",
        },
        images: {
          populate: "*",
        },
        tags: {
          populate: "*",
        },
        reviews: {
          populate: "*",
        },
        schedule: {
          populate: "*",
        },
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export default async function SearchRoute({
  params,
}: {
  params: { category: string };
}) {
  const filter = params.category;
  const { data } = await fetchBusinessesByCategory(filter);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not found</div>;

  const location = data[0].attributes.location;
  return (
    <StickyLayoutWithThreeColumns
      pt={"var(--chakra-sizes-headerHeight)"}
      leftComponent={<Logo lang="en" logoUrl={""} />}
      centerComponent={<BusinessesList establishments={establishments} />}
      rightComponent={<EmbedGoogleMap location={location} />}
    />
  );
}

export async function generateStaticParams() {
  return [];
}

import { Box } from "@chakra-ui/react";

import { fetchAPI } from "@/shared/api/fetch-api";
import { StickyLayoutWithThreeColumns } from "@/shared/layouts";
import { EmbedGoogleMap, Logo } from "@/shared/ui";

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

  return (
    <StickyLayoutWithThreeColumns
      pt={"var(--chakra-sizes-headerHeight)"}
      leftComponent={<Logo lang="en" logoUrl={""} />}
      centerComponent={<Logo lang="en" logoUrl={""} />}
      rightComponent={<EmbedGoogleMap />}
    />
  );
}

export async function generateStaticParams() {
  return [];
}

import { Box } from "@chakra-ui/react";

import { getPageBySlug } from "@/shared/api/get-page-by-slug";
import { sectionRenderer } from "@/shared/lib/helpers/sectionRender/sectionRenderer";

const urlParamsObject = ["contentSections"];

export default async function Home({ params }: any) {
  const page = await getPageBySlug("Home", params.lang, urlParamsObject);
  if (!page.data) return null;
  if (page.data?.length === 0) return null;
  const contentSections = page.data[0].attributes.contentSections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index),
  );
  return <Box as="main">{sections}</Box>;
}

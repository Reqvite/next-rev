import { fetchAPI } from "./fetch-api";

export async function getPageBySlug(
  slug: string,
  lang: string,
  params: Array<string>,
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = {
    populate: params,
    filters: { title: slug },
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

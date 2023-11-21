import { fetchAPI } from "./fetch-api";

export async function getProductById(
  id: string,
  lang: string,
  params: Array<string>,
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/products`;
  const urlParamsObject = {
    populate: params,
    locale: lang,
    filters: { title: id },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

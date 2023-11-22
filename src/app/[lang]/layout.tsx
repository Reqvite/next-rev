import { Box, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { ServerError } from "@/feature";
import AppProviders from "@/global/providers/AppProviders";
import { Footer } from "@/sections";
import { getStrapiMedia, getStrapiURL } from "@/shared/api/api-helpers";
import { fetchAPI } from "@/shared/api/fetch-api";
import { i18n } from "@/shared/config/i18n/i18n";
import { FALLBACK_SEO } from "@/shared/const/fallbackSeo";
import { PageParams } from "@/shared/types/pageParams";
import { Navbar } from "@/widgets";

import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    //@ts-ignore
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metaData",
      "favicon",
      "metaData.metaImage",
      "navbar.links",
      "navbar.links.children",
      "navbar.buttons",
      "navbar.navbarLogo.img",
      "footer.footerLinks",
      "footer.footerLinks.children",
      "footer.legalLinks",
      "footer.footerLogo.img",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  if (!meta.data) return FALLBACK_SEO;

  const { metaData, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;
  const { url: openGraphUrl } = metaData.metaImage.data.attributes;

  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
    openGraph: {
      images: getStrapiURL(openGraphUrl),
    },
  };
}

interface RootLayoutProps {
  children: ReactNode;
  params: PageParams;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const global = await getGlobal(params.lang);
  if (!global.data) return <ServerError />;
  const cookieStore = cookies();
  const defaultTheme = "dark";
  const uiColorMode =
    (cookieStore.get("chakra-ui-color-mode")?.value as "light" | "dark") ||
    defaultTheme;

  const { notificationBanner, navbar, footer } = global.data.attributes;
  // if (!navbar || !footer) return redirect("/");
  const navbarLogoUrl = getStrapiMedia(
    navbar?.navbarLogo?.img.data.attributes.url,
  );
  const footerLogoUrl = getStrapiMedia(
    footer?.footerLogo?.img.data.attributes.url,
  );

  return (
    <html
      lang="en"
      data-theme={uiColorMode}
      style={{ colorScheme: uiColorMode }}
    >
      <body className={`${inter.className} chakra-ui-${uiColorMode}`}>
        <AppProviders cookies={uiColorMode}>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            h={"100vh"}
          >
            <Navbar
              lang={params.lang}
              links={navbar.links}
              buttons={navbar.buttons}
              logoUrl={navbarLogoUrl}
              logoText={navbar?.navbarLogo?.logoText}
            />
            <Box as="main">{children}</Box>
            <Footer
              lang={params.lang}
              logoUrl={footerLogoUrl}
              logoText={footer.footerLogo.logoText}
              footerLinks={footer.footerLinks}
              legalLinks={footer.legalLinks}
              socialLinks={footer.socialLinks}
            />
          </Flex>
        </AppProviders>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

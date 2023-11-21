import { Categories, Hero } from "@/sections";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "blocks.hero":
      return <Hero key={index} data={section} />;
    // case "blocks.submit-form":
    //   return <SubmitForm key={index} data={section} />;
    case "blocks.categories":
      return <Categories key={index} data={section} />;
    // case "blocks.subscribe-form":
    //   return <SubscribeForm key={index} data={section} />;
    // case "blocks.subscribe-form":
    //   return <ProductsList key={index} data={section} />;
    default:
      return null;
  }
}

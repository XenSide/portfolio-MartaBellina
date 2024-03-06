import { GalleryPortfolio } from "@/components/GalleryPortfolio";
import Hero from "@/components/Hero";
import { HeroType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Home() {
  // TODO export data to language file
  const data = [
    {
      shortName: "Lineage",
      title: "Lineage",
      Description:
        "Lorem ipsum dolor sit amet consectetur. Enim pharetra faucibus consectetur ac. At ac feugiat tristique amet dignissim consequat morbi a. In ut egestas amet lectus orci fusce. Tincidunt facilisis dapibus nisl luctus odio scelerisque proi.",
      image: "https://placehold.co/926x604.png",
      link: "/portfolio",
      tag: "personal",
    },
    {
      shortName: "Magma",
      title: "Magma",
      Description:
        "Lorem ipsum dolor sit amet consectetur. Enim pharetra faucibus consectetur ac. At ac feugiat tristique amet dignissim consequat morbi a. In ut egestas amet lectus orci fusce. Tincidunt facilisis dapibus nisl luctus odio scelerisque proi.",
      image: "https://placehold.co/926x604.png",
      link: "/portfolio",
      tag: "commission",
    },
    {
      shortName: "Sherlock",
      title: "Sherlock's Apartment",
      Description:
        "Lorem ipsum dolor sit amet consectetur. Enim pharetra faucibus consectetur ac. At ac feugiat tristique amet dignissim consequat morbi a. In ut egestas amet lectus orci fusce. Tincidunt facilisis dapibus nisl luctus odio scelerisque proi.",
      image: "https://placehold.co/926x604.png",
      link: "/portfolio",
      tag: "personal",
    },
  ];
  const { t } = useTranslation("portfolio");
  const HeroTrans: HeroType = t("Hero", {}, { returnObjects: true });
  return (
    <>
      <Head>
        <title>Portfolio - Marta Bellina</title>
      </Head>
      <Hero Translations={HeroTrans} pageName={"portfolio"} bgImage={"/sunPortfolio.svg"} />
      <GalleryPortfolio showcaseItems={data} />
      <main></main>
    </>
  );
}

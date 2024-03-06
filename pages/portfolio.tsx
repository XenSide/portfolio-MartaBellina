import { GalleryPortfolio } from "@/components/GalleryPortfolio";
import Hero from "@/components/Hero";
import { HeroType, PortfolioEntry } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation("portfolio");
  const HeroTrans: HeroType = t("Hero", {}, { returnObjects: true });
  const showcaseItems: PortfolioEntry[] = t("PortfolioEntries", {}, { returnObjects: true });
  return (
    <>
      <Head>
        <title>Portfolio - Marta Bellina</title>
      </Head>
      <Hero Translations={HeroTrans} pageName={"portfolio"} bgImage={"/sunPortfolio.svg"} />
      <GalleryPortfolio showcaseItems={showcaseItems} />
      <main></main>
    </>
  );
}

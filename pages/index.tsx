import AboutComponent from "@/components/AboutComponent";
import Hero from "@/components/Hero";
import { TextGallery } from "@/components/TextGallery";
import { AboutType, HeroType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation("home");
  const AboutTrans: AboutType = t("AboutComponent", {}, { returnObjects: true });
  const HeroTrans: HeroType = t("Hero", {}, { returnObjects: true });

  return (
    <>
      <Head>
        <title>Home - Marta Bellina</title>
      </Head>
      <Hero Translations={HeroTrans} pageName="home" bgImage="/sun.svg" />
      <TextGallery pageName="home" />
      <AboutComponent Translations={AboutTrans} pageName="home" />
    </>
  );
}

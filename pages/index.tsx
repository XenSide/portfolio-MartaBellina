// ## Deploy on Vercel

// The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

// Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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

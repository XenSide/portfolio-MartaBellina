import AboutComponent from "@/components/AboutComponent";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About, AboutType, HeroType, ServicesType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Home() {
  const { t, lang } = useTranslation("about");
  const AboutTrans: AboutType = t("About", {}, { returnObjects: true });
  const HeroTrans: HeroType = t("Hero", {}, { returnObjects: true });
  const ServicesTrans: ServicesType[] = t("Services", {}, { returnObjects: true });
  return (
    <>
      <Head>
        <title>About - Marta Bellina</title>
      </Head>
      <main>
        <Hero Translations={HeroTrans} pageName={"about"} bgImage={"/sunAbout.svg"} />
        <AboutComponent Translations={AboutTrans} pageName="about" />
        <Services Translations={ServicesTrans} pageName={"about"} />
      </main>
    </>
  );
}

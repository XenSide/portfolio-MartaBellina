import Hero from "@/components/Hero";
import ContactComponent from "@/components/contactComponent";
import QuadGallery from "@/components/quadGallery";
import { ContactType, HeroType, QuadGalleryType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { createContext } from "react";

export default function Home() {
  const { t } = useTranslation("contact");
  const ContactTrans: ContactType = t("Contact", {}, { returnObjects: true });
  const HeroTrans: HeroType = t("AboutComponent", {}, { returnObjects: true });
  const QuadTrans: QuadGalleryType = t("QuadGallery", {}, { returnObjects: true });

  const pageName = "contact";
  return (
    <>
      <Head>
        <title>Contact - Marta Bellina</title>
      </Head>
      <main>
        <Hero pageName={pageName} bgImage="/sunContact.svg" Translations={HeroTrans} />
        <ContactComponent Translations={ContactTrans} pageName={pageName} />
        <QuadGallery Translations={QuadTrans} pageName={pageName} />
      </main>
    </>
  );
}

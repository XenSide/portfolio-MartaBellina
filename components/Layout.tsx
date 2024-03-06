import { FooterType, NavbarType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { t, lang } = useTranslation("common");
  const rawNavElements: NavbarType = t("navbar", {}, { returnObjects: true });
  const rawFooterElements: FooterType = t("footer", {}, { returnObjects: true });

  return (
    <>
      <div className="mx-[158px]">
        <Navbar CurrentLang={lang} NavBarTrans={rawNavElements} />
        {children}
        <Footer NavBarTrans={rawNavElements} FooterTrans={rawFooterElements} />
      </div>
    </>
  );
}

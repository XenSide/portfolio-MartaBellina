import { clsx } from "clsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import freccetta from "../public/freccetta.svg";
import mail from "../public/mail.svg";
import monogramma from "../public/monogramma.svg";
import styles from "./Navbar.module.css";

import OutsideClickHandler from "react-outside-click-handler";

import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

interface NavbarElements {
  home: String;
  portfolio: String;
  about: String;
  contact: String;
}

function getUnusedLocales(allLocales: string[] | undefined, inUseLocale: string) {
  if (allLocales) {
    return allLocales.map((locale) => {
      if (locale !== inUseLocale) {
        return (
          <div
            className="self-center my-1 text-center cursor-pointer caret-transparent"
            key={nanoid()}
            onClick={async () => await setLanguage(locale as any)}
          >
            {locale.toUpperCase()}
          </div>
        );
      }
    });
  } else {
    return null;
  }
}

export const Navbar = () => {
  const router = useRouter();
  const AllLocales = router.locales;
  const { t, lang } = useTranslation("common");

  const rawNavbarElements: NavbarElements = t(".", {}, { returnObjects: true });

  const NavbarElements = Object.keys(rawNavbarElements).map((element: String, i) => {
    let currentElementValue = rawNavbarElements[element as keyof NavbarElements];
    return (
      <Link
        key={nanoid()}
        className={clsx(
          `/${element.toLowerCase()}` == router.pathname ? "text-accent-1 font-semibold" : "",
          `caret-transparent cursor-pointer ${styles.navbarelement}`
        )}
        href={`/${element}`}
        data-text={currentElementValue}
      >
        {currentElementValue}
      </Link>
    );
  });

  let unusedLocales = getUnusedLocales(AllLocales, lang);

  const [langMenuVisibility, setLangMenuVisibility] = useState(false);

  function langMenuClickHandler() {
    setLangMenuVisibility((oldLangVis) => !oldLangVis);
  }

  return (
    <div className={styles.main}>
      <div className="flex select-none">
        <Link href="/">
          <Image src={monogramma} alt="Monogramma" width={monogramma.height} height={monogramma.width} />
        </Link>
        <div className="flex items-center ml-auto columns-4 mr-24 gap-14 text-center">{NavbarElements}</div>
        <div
          className="self-center ml-11 relative cursor-pointer caret-transparent"
          onClick={langMenuClickHandler}
        >
          {lang.toUpperCase()}
          <Image
            src={freccetta}
            className={clsx("inline m-1 align-baseline", langMenuVisibility && "transform rotate-180")}
            alt="a small arrow to indicate langauge selector"
          ></Image>
          <OutsideClickHandler onOutsideClick={() => setLangMenuVisibility(false)}>
            <div
              className={clsx(
                "absolute z-10 mt-2 w-16 origin-top-right rounded-md bg-white py-1 drop-shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",
                !langMenuVisibility && "hidden"
              )}
              id="locale-menu"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              {unusedLocales}
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

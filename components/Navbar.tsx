import { clsx } from "clsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

import OutsideClickHandler from "react-outside-click-handler";

import setLanguage from "next-translate/setLanguage";

import { NavbarType } from "@/utils/Interfaces";
import { useRouter } from "next/router";
import { useState } from "react";

function getUnusedLocales(allLocales: string[] | undefined, inUseLocale: string) {
  if (allLocales) {
    return allLocales.map((locale) => {
      if (locale !== inUseLocale) {
        return (
          <div
            className="self-center px-3 my-1 text-center cursor-pointer caret-transparent"
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
interface Props {
  NavBarTrans: NavbarType;
  CurrentLang: string;
}

export default function Navbar({ NavBarTrans, CurrentLang }: Props) {
  const router = useRouter();
  const AllLocales = router.locales;

  const NavbarElements = Object.keys(NavBarTrans).map((element: String, i) => {
    let currentElementValue = NavBarTrans[element as keyof NavbarType];
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

  let unusedLocales = getUnusedLocales(AllLocales, CurrentLang);

  const [langMenuVisibility, setLangMenuVisibility] = useState(false);

  function langMenuClickHandler() {
    setLangMenuVisibility((oldLangVis) => !oldLangVis);
  }

  return (
    <div className={`py-[23px]`}>
      <div className="flex justify-between select-none">
        <Link href="/" className="mr-5">
          <Image src={"/monogramma.svg"} alt="Monogramma" width={46} height={46} />
          {/* 46x46 */}
        </Link>
        <div className="flex items-center columns-4 gap-10 md lg:gap-14  text-center">
          {NavbarElements}

          <div
            className="self-center flex flex-row ml-11 relative cursor-pointer caret-transparent"
            onClick={langMenuClickHandler}
          >
            <OutsideClickHandler onOutsideClick={() => setLangMenuVisibility(false)}>
              {CurrentLang?.toUpperCase()}
              <Image
                src={"/langSelFreccetta.svg"}
                width={6}
                height={4}
                className={clsx("inline m-1 align-baseline", langMenuVisibility && "transform rotate-180")}
                alt="a small arrow to indicate langauge selector"
              ></Image>
              <div
                className={clsx(
                  "absolute top-full z-10 origin-top-right rounded-md bg-white py-1 drop-shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",
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
    </div>
  );
}

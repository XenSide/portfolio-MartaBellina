import Trans from "next-translate/Trans";

import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

import { FooterType, NavbarType } from "@/utils/Interfaces";
import localFont from "next/font/local";

const jeju = localFont({ src: "Jeju.ttf" });

export interface TranslationElements {
  navbar: NavbarType;
  footer: FooterType;
}

interface Props {
  NavBarTrans: NavbarType;
  FooterTrans: FooterType;
}

export default function Footer({ NavBarTrans, FooterTrans }: Props) {
  const NavElements = Object.keys(NavBarTrans).map((element: String, i) => {
    let currentElementValue =
      NavBarTrans[element as keyof NavbarType].toLowerCase().charAt(0).toUpperCase() +
      NavBarTrans[element as keyof NavbarType].toLowerCase().slice(1);
    return (
      <Link
        key={nanoid()}
        className={`caret-transparent cursor-pointer mt-[45px]`}
        href={`/${element}`}
        data-text={currentElementValue}
      >
        {currentElementValue}
      </Link>
    );
  });

  return (
    <>
      <div
        className={` mt-[128px] border-t-2 border-b-2 pt-[67px] pb-[89px] border-[#283044] border-opacity-30`}
      >
        <div className="grid grid-cols-2 xl:gap-[140px] lg:gap-12">
          <div className="flex flex-col w-fit justify-self-end">
            <p className={`${jeju.className} leading-[80px] text-6xl`}>
              <Trans i18nKey="common:footer.text" components={[<br key={"asd"} />]} />
            </p>
            <Button page="contact" style="mt-auto">
              {FooterTrans.buttoncontent}
            </Button>
          </div>
          <div className="flex flex-col self-center place-self-center">
            <p className={`${jeju.className} text-sm tracking-[0.6em] pt-[20px]`}>MARTA BELLINA</p>
            {NavElements}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-center pb-[67px] pt-[56px] px-[20px]">
        <Link href="/">
          <Image src={"/logotipo.svg"} width={207} height={52} alt="logotipo" />
        </Link>
        <p className="text-black self-center text-base">© 2023 All rights reserved</p>
      </div>
    </>
  );
}

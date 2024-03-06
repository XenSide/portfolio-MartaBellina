/* eslint-disable react/jsx-no-comment-textnodes */
import { nanoid } from "nanoid";
import Image from "next/image";
import { Decoration } from "./Decoration";

import { HeroType } from "../utils/Interfaces";

import Trans from "next-translate/Trans";
import localFont from "next/font/local";
const jeju = localFont({ src: "Jeju.ttf" });

interface Props {
  pageName: string;
  bgImage: string;
  Translations: HeroType;
}

const Hero = ({ pageName, bgImage, Translations }: Props) => {
  //todo decoration object via props that gives image name (or image directly) and absolute positions to a relative parent (for example title flex)
  return (
    <>
      {/* //TODO remember to change min-h with breakpoints for responsiveness especially when changing the size of the sun */}
      <div className="h-[calc(100svh-92px)] min-h-[818px] w-full relative mx-auto mb-64">
        {/* 6px diff between left2 and xleft */}
        <Decoration bottom1="bottom-[25px]" bottom2="bottom-[65px]" xbottom="bottom-[59px]" rotate={true} />
        {/* 40px between left1 and left2, -6px diff between left2 and xleft */}
        <Decoration left1="" left2="sm:left-[40px]" xleft="left-[34px]" rotate={false} />
        <Image
          src={bgImage}
          width={946}
          height={757}
          alt="An artistic and abstract sun"
          className="absolute right-0 top-14 2xl:w-[65%] 3xl:w-[60%] 4xl:w-1/2 object-cover -mr-[158px]"
        />
        <div className="absolute top-[218px] left-[135px] w-fit h-fit flex flex-col">
          {
            <p className={`${jeju.className} text-[24px] leading-[24px]`}>
              {Translations?.smalltitle || "\u00A0"}
            </p>
          }
          {pageName === "about" ? (
            <Trans
              i18nKey={`${pageName}:Hero.title`}
              components={[
                <div className="font-medium text-[64px] leading-[78px] mt-[7px] relative" key={nanoid()} />,
                <div key={nanoid()} className="text-accent-1 inline" />,
                <div key={nanoid()} className="bg-[#283044] text-white inline" />,
              ]}
            />
          ) : (
            <Trans
              i18nKey={`${pageName}:Hero.title`}
              components={[
                <div className="font-medium text-[64px] leading-[78px] mt-[7px] relative" key={nanoid()} />,
                <div key={nanoid()} className="text-accent-1 inline" />,
                <div key={nanoid()} className="bg-black text-white inline" />,
              ]}
            />
          )}
          <div className={`${jeju.className} text-[61px] tracking-widest absolute top-[250px] left-[400px]`}>
            //
          </div>
          <p className={`${jeju.className} text-[32px] leading-[32px] mt-[33px] w-[516px]`}>
            <Trans i18nKey={`${pageName}:Hero.subtitle`} components={[<br key={nanoid()} />]} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

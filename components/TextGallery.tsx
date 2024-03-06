import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { HomeTranslation } from "../utils/Interfaces";

import localFont from "next/font/local";
const jeju = localFont({ src: "Jeju.ttf" });

interface Props {
  pageName: string;
}

export const TextGallery = ({ pageName }: Props) => {
  const { t, lang } = useTranslation(pageName);
  const Translations: HomeTranslation = t(".", {}, { returnObjects: true });

  return (
    <>
      <div className="w-[195px] h-[1px] bg-black"></div>
      <div className={`${jeju.className} text-[61px] leading-[61px] pt-[72px] mb-[103px]`}>
        {Translations.Gallery.Category}
      </div>
      <div className=" grid grid-cols-3 gap-[29px] w-fit pb-[170px] border-b border-black border-opacity-30 ">
        {/* //TODO REMOVE PLACEHOLDERS */}
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <div className={`col-span-2 mt-[185px] ml-[136px] flex flex-col`}>
          <div className={`text-[36px] ${jeju.className}`}>{Translations.Gallery.Title}</div>
          <div className="mt-[30px] mr-[250px] leading-[26px] text-[18px]">
            {Translations.Gallery.Subtitle}
          </div>
          <div className="text-accent-1 uppercase text-[15px] text-end mr-[130px] mt-[55px] self-end">
            <Link href="/portfolio">{Translations.Gallery.Link} →</Link>
          </div>
        </div>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
        <Image src="https://placehold.co/515x515.png" alt="" width={515} height={515}></Image>
      </div>
    </>
  );
};

import Image from "next/image";

import localFont from "next/font/local";
const jeju = localFont({ src: "Jeju.ttf" });

import { AboutType } from "../utils/Interfaces";
import { Button } from "./Button";

interface Props {
  pageName: string;
  Translations: AboutType;
}

export default function AboutComponent({ pageName, Translations }: Props) {
  return (
    <div
      className={`ml-[136px] mt-[128px] ${pageName === "about" ? "" : "bg-[#F4F4F4]"} w-[1330px] h-[770px]`}
    >
      <div className="grid grid-cols-2 gap-[30px] h-full w-full">
        {/* //TODO REMOVE PLACEHOLDERS */}
        <Image src="https://placehold.co/650x770.png" alt="" width={650} height={770} />
        <div className="flex flex-col pl-[28px] h-full">
          <div className="w-[195px] h-[1px] bg-black mt-[95px]" />
          <div className={`${jeju.className} text-[61px] leading-[61px] mt-[60px]`}>
            {Translations?.Title}
          </div>
          <div className="pr-[105px] mt-[60px] text-[18px] leading-[26px]">{Translations?.Content}</div>
          {pageName !== "about" ? (
            <Button page={`/about`} style="mt-auto mb-[66px]">{`READ MORE`}</Button>
          ) : (
            <a
              className="px-[30px] py-[15px] rounded-[20px] flex justify-center hover:text-white hover:font-semibold filter mt-auto mb-[66px] border hover:bg-accent-1 hover:border-accent-1 w-fit h-fit border-black"
              href="/CV.pdf"
            >
              DOWNLOAD CV
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

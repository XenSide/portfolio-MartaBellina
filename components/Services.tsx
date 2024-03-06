import { ServicesType } from "@/utils/Interfaces";
import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";
const jeju = localFont({ src: "Jeju.ttf" });

interface Props {
  pageName: string;
  Translations: ServicesType[];
}

export default function Services({ pageName, Translations }: Props) {
  const [hover, setHover] = useState<boolean[]>(Translations?.map(() => false) || []);

  return (
    <div className="grid grid-cols-12 gap-x-7 gap-y-11 mt-44">
      <div className="col-span-12 h-[1px] bg-black w-[195px] mb-[72px]" />
      <p className={`${jeju.className} col-span-12 text-6xl mb-28`}>Services</p>
      {Translations?.map((data, index) => {
        return (
          <div
            className="col-span-4 border border-black border-opacity-25 w-[513px] h-[373px] rounded-[20px] py-20 px-20 hover:bg-[#283044] hover:text-white delay-75 ease-linear transition-all "
            key={index}
            onMouseEnter={() => {
              setHover((prevHover) => prevHover.map((prevHover, i) => i === index));
            }}
            onMouseLeave={() => {
              setHover((prevHover) => prevHover.map((prevHover, i) => (i === index ? false : prevHover)));
            }}
          >
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className={`${hover[index] ? "brightness-[10] delay-75 transition-all ease-linear" : ""}`}>
                <Image src={`${data.image}`} alt={data.title} width={50} height={50} />
              </div>
              <div className={`text-xl mt-6 font-semibold tracking-[0.3rem]`}>{data.title.toUpperCase()}</div>
              <p className="text-lg mt-6">{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

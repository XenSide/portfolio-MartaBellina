import { Gallery } from "@/utils/Interfaces";
import { count } from "console";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const jeju = localFont({ src: "Jeju.ttf" });

//TODO Export interface to interface file
interface ShowcaseItem {
  shortName: string;
  title: string;
  Description: string;
  image: string;
  link: string;
  tag: string;
}

interface Props {
  showcaseItems: ShowcaseItem[];
}

export const GalleryPortfolio = ({ showcaseItems }: Props) => {
  let portfolioCont = 0;
  let [filter, setFilter] = useState("all");

  return (
    <>
      <div className="flex flex-row w-full justify-center mb-32">
        <div className="flex w-1/2 justify-between">
          {/* //TODO Change text inside buttons to use translation */}
          <button
            className={`${filter === "all" ? "text-red-600" : ""} text-xl`}
            onClick={() => setFilter("all")}
          >
            EVERYTHING
          </button>
          <button
            className={`${filter === "personal" ? "text-red-600" : ""} text-xl`}
            onClick={() => setFilter("personal")}
          >
            PERSONAL PROJECTS
          </button>
          <button
            className={`${filter === "commission" ? "text-red-600" : ""} text-xl`}
            onClick={() => setFilter("commission")}
          >
            COMMISSIONS
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-7 gap-y-[70px]">
        {/* //TODO remove placeholders */}
        {showcaseItems &&
          showcaseItems.map((item) => {
            const jsx = (
              <>
                {portfolioCont % 2 === 0 ? (
                  <>
                    <div className={`col-start-2 col-span-4 flex flex-col`}>
                      <div className="my-auto">
                        <div className="flex flex-row justify-between w-full items-baseline">
                          <p className={`text-6xl mb-16 ${jeju.className}`}>
                            {portfolioCont < 10 ? `0${portfolioCont + 1}.` : `1${portfolioCont + 1}.`}
                          </p>
                          <p className={`${jeju.className} text-[40px] leading-none`}>{item.title}</p>
                        </div>
                        <p className="text-lg">{item.Description}</p>
                        <div className="flex flex-row mt-20 items-center">
                          <div className="bg-black w-[195px] h-[1px] mr-20"></div>
                          <Link href={`/portfolio/${item.shortName.toLowerCase()}`} className="flex flex-row">
                            <p className="pr-3 text-[#DC2656] text-base">SEE MORE</p>
                            <Image
                              src={"/portfolioFreccetta.svg"}
                              alt="freccetta"
                              width={20}
                              height={10}
                            ></Image>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7">
                      <Image src={item.image} alt="" width={926} height={604} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-7">
                      <Image src={item.image} alt="" width={926} height={604} />
                    </div>
                    <div className={`col-span-4 h-full flex flex-col`}>
                      <div className="my-auto">
                        <div className="flex flex-row justify-between w-full items-baseline">
                          <p className={`text-6xl mb-16 ${jeju.className}`}>
                            {portfolioCont < 10 ? `0${portfolioCont + 1}.` : `1${portfolioCont + 1}.`}
                          </p>
                          <p className={`${jeju.className} text-[40px] leading-none`}>{item.title}</p>
                        </div>
                        <p className="text-lg text-end">{item.Description}</p>
                        <div className="flex flex-row-reverse mt-20 items-center">
                          <div className="bg-black w-[195px] h-[1px] ml-20"></div>
                          <Link href={`/portfolio/${item.shortName.toLowerCase()}`} className="flex flex-row">
                            <Image
                              src={"/portfolioFreccetta.svg"}
                              alt="freccetta"
                              width={20}
                              height={10}
                              className="transform rotate-180"
                            ></Image>
                            <p className="pl-3 text-[#DC2656] text-base">SEE MORE</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
            if (filter === "all" || filter === item.tag) {
              portfolioCont++;
              return jsx;
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
};

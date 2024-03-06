import { ContactType } from "@/utils/Interfaces";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
const jeju = localFont({ src: "Jeju.ttf" });

interface Props {
  pageName: string;
  Translations: ContactType;
}

export default function ContactComponent({ pageName, Translations }: Props) {
  return (
    <>
      <div className="grid grid-cols-12 gap-7 h-[780px] relative mb-52">
        <div className="bg-[#F4F4F4] col-span-12 my-auto w-full absolute h-[571px] -z-10 top-[105px]" />
        <div className="my-auto col-span-1 bg-[#F4F4F4] h-[571px]">
          <div className="flex flex-col h-full justify-center items-end mr-[22px]">
            <Link className="w-[35px] h-[35px] mb-28" href="https://linkedin.com" passHref={true}>
              <Image src="/linkedin.svg" alt="linkedin" width={35} height={35} />
            </Link>
            <Link className="w-[35px] h-[35px]" href="https://behance.com" passHref={true}>
              <Image src="/behance.svg" alt="behance" width={35} height={35} />
            </Link>
          </div>
        </div>
        <div className="h-[780px] bg-[#283044] col-span-5">
          <div className="flex flex-col justify-center items-start h-full px-[70px] relative">
            <div className="absolute bottom-0 -right-96">
              <Image src="/dotsContact.svg" alt="astract art dots" width={325} height={90} />
            </div>
            <div className="bg-white w-[122px] h-[1px] mb-20" />
            <p className={`${jeju.className} text-6xl text-white mb-16`}>{Translations?.title}</p>
            <p className={`text-lg text-white mb-16`}>
              {/* {'Lorem ipsum dolor sit amet consectetur. Tellus in congue et et neque.'} */}
              {Translations?.subtitle}
            </p>
            <div className="flex flex-row items-center mb-16">
              <Image src="/phone.svg" alt="phone" width={30} height={30} />
              <p
                className="ml-12 text-white text-lg cursor-pointer"
                onClick={() => {
                  navigator?.clipboard?.writeText("+39 320 0122 088");
                  alert("Phone number copied to clipboard | Numero di telefono copiato negli appunti");
                }}
              >
                +39 320 0122 088
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Image src="/mailWhite.svg" alt="phone" width={30} height={30} />
              <Link href="mailto:marta.bellina23@gmail.com" passHref={true}>
                <p className="ml-12 text-white text-lg">marta.bellina23@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] col-start-9 col-span-3 w-full my-auto h-[570px]">
          <div className="flex flex-col text-end items-end my-20">
            <p className={`${jeju.className} text-5xl px-2 py-3 mb-8 bg-[#DC2656] bg-opacity-70 w-fit`}>
              {Translations?.flair1}
            </p>
            <p className={`${jeju.className} text-5xl px-2 py-3 mb-8 bg-[#DC2656] bg-opacity-70 w-fit`}>
              {Translations?.flair2}
            </p>
            <p className={`${jeju.className} text-5xl px-2 py-3 mb-8 bg-[#DC2656] bg-opacity-70 w-fit`}>
              {Translations?.flair3}
            </p>
            <p className={`${jeju.className} text-5xl px-2 py-3 bg-[#DC2656] bg-opacity-70 w-fit`}>
              {" "}
              {Translations?.flair4}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { Contact, QuadGalleryType } from "@/utils/Interfaces";
import useTranslation from "next-translate/useTranslation";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
const jeju = localFont({ src: "Jeju.ttf" });

interface Props {
  pageName: string;
  Translations: QuadGalleryType;
}

export default function QuadGallery({ pageName, Translations }: Props) {
  const { t } = useTranslation(pageName);

  return (
    <>
      <div className="grid grid-cols-12 gap-7 h-[1055px]">
        <div className="col-span-3">
          <div className="flex flex-col h-1/2">
            <div className="bg-black h-[1px] w-[195px] mb-16" />
            <p className={`text-6xl mb-16 ${jeju.className}`}>{Translations?.title}</p>
            <p className="text-lg">{Translations?.subtitle}</p>
            <Link href="/portfolio" className="mt-16 self-end">
              <p className="text-lg text-[#DC2656]">{Translations?.link}</p>
            </Link>
          </div>
        </div>
        <div className="col-start-5 col-span-8">
          <div className="grid grid-cols-2 gap-7">
            <Image src="https://placehold.co/510x510.png" alt="" width={510} height={510} />
            <Image src="https://placehold.co/510x510.png" alt="" width={510} height={510} />
            <Image src="https://placehold.co/510x510.png" alt="" width={510} height={510} />
            <Image src="https://placehold.co/510x510.png" alt="" width={510} height={510} />
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  image?: any;
  children?: React.ReactNode;
  style?: string;
  page?: string;
}

export const Button = ({ image, children, style, page }: Props) => {
  return (
    <>
      <Link href={`/${page}`} className={`${style}`}>
        <button
          className={`border hover:bg-accent-1 hover:border-accent-1 w-fit h-fit border-black ${styles.button}`}
        >
          {image && (
            <Image
              src={image}
              alt="mail icon"
              className="mr-3 hover:invert  inline"
              height={image.height}
              width={image.width}
            />
          )}
          <p className="inline text-lg">{children}</p>
        </button>
      </Link>
    </>
  );
};

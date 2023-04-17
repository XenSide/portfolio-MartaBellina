import Image from "next/image";
import styles from "./Button.module.css";

interface Props {
  image?: any;
}

export const Button = ({ image }: Props) => {
  return (
    <>
      <button
        className={`col-end-13 border self-center hover:bg-accent-1 hover:border-accent-1 w-fit h-fit border-black ${styles.button}`}
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
        <p className="inline text-sm">MAIL</p>
      </button>
    </>
  );
};

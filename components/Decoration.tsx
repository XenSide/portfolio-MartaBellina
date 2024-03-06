import clsx from "clsx";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

interface PropsStyle {
  left1?: string;
  left2?: string;
  xleft?: string;
  bottom1?: string;
  bottom2?: string;
  xbottom?: string;
  rotate?: boolean;
}

export const Decoration = (propstyle: PropsStyle) => {
  return (
    <>
      <div
        className={clsx(
          `absolute z-10 bg-[#2830444D]`,
          propstyle.rotate
            ? `w-[30%] h-[3px] ${propstyle.bottom1} -right-[158px]`
            : `${propstyle.left1} bottom-0 w-[3px] h-[65%]`
        )}
      />
      <div
        className={clsx(
          `absolute z-10 bg-[#2830444D]`,
          propstyle.rotate
            ? `w-[calc(30%-90px)] h-[3px] ${propstyle.bottom2}  -right-[158px]`
            : `h-[calc(65%-90px)] w-[3px] bottom-0 ${propstyle.left2}`
        )}
      />
      <Image
        src={"/x.svg"}
        height={15}
        width={15}
        alt="A rotating X that rotates in the background"
        className={clsx(
          "absolute z-10",
          styles.animate,
          propstyle.rotate
            ? `right-[calc(20%-85px)] ${propstyle.xbottom}`
            : `${propstyle.xleft} bottom-[calc(65%-85px)]`
        )}
      />
      <Image
        src={"/x.svg"}
        height={15}
        width={15}
        alt="A rotating X that rotates in the background"
        className={clsx(
          "absolute z-10",
          styles.animate,
          propstyle.rotate
            ? `right-[calc(20%-62px)] ${propstyle.xbottom}`
            : `${propstyle.xleft} bottom-[calc(65%-62px)]`
        )}
      />
      <Image
        src={"/x.svg"}
        height={15}
        width={15}
        alt="A rotating X that rotates in the background"
        // className={clsx("absolute left-[192px] bottom-[calc(65%-44px)]", styles.animate)}
        className={clsx(
          "absolute z-10",
          styles.animate,
          propstyle.rotate
            ? `right-[calc(20%-39px)] ${propstyle.xbottom}`
            : `${propstyle.xleft} bottom-[calc(65%-39px)]`
        )}
      />
      <Image
        src={"/x.svg"}
        height={15}
        width={15}
        alt="A rotating X that rotates in the background"
        // className={clsx("absolute ${} bottom-[calc(65%-22px)]", styles.animate)}
        className={clsx(
          "absolute z-10",
          styles.animate,
          propstyle.rotate
            ? `right-[calc(20%-15px)] ${propstyle.xbottom}`
            : `${propstyle.xleft} bottom-[calc(65%-15px)]`
        )}
      />
    </>
  );
};

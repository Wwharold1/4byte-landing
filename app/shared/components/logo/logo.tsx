import Image from "next/image";
import { ILogoProps } from "../../interfaces/ILogoProps";
import { LogoEnum } from "../../constants/logo.constants";

export function Logo({ type = LogoEnum.primary }: ILogoProps) {
  return (
    <Image
      src={type}
      alt="4BYTE"
      width={160}
      height={48}
      className="h-auto w-[140px] sm:w-[160px]"
      priority
    />
  );
}
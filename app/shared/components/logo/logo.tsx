import Image from "next/image";
import { ILogoProps } from "../../interfaces/ILogoProps";
import { LogoEnum } from "../../constants/logo.constants";

export function Logo({ type = LogoEnum.primary }: ILogoProps) {
  return (
    <Image
      src={type}
<<<<<<< HEAD
      alt="4BYTE Solutions"
=======
      alt="4BYTE"
>>>>>>> f6103e0 (feat agregar init)
      width={160}
      height={48}
      className="h-auto w-[140px] sm:w-[160px]"
      priority
    />
  );
}
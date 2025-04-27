import type { ReactNode } from "react";
import Image from "next/image";

export const LogoDynamic = (): ReactNode => {
  return (
    <div className="relative w-[81px] h-[80px] sm:w-[115px] sm:h-[114px]">
      <Image
        src="/logo.svg"
        alt="Rock Paper Scissors Lizard Spock"
        fill
        priority
        sizes="(max-width: 640px) 81px, 115px"
      />
    </div>
  );
};

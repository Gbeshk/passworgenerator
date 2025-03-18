import Image from "next/image";
import React from "react";
interface IncludeSymbolsProps {
  symbolimg: string;
  setIncludeSymbols: React.Dispatch<React.SetStateAction<boolean>>;
  includeSymbols: boolean;
}
function IncludeSymbols({
  symbolimg,
  setIncludeSymbols,
  includeSymbols,
}: IncludeSymbolsProps) {
  return (
    <>
      <div className="mt-[19px] max-sm:mt-[16px] max-sm:gap-[20px] gap-[24px] flex">
        <Image
          src={symbolimg}
          alt="NumberCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeSymbols(!includeSymbols)}
        />
        <p className="text-[#E6E5EA] max-sm:text-[16px]  text-[18px]  leading-normal tracking-normal">
          Include Symbols
        </p>
      </div>
    </>
  );
}

export default IncludeSymbols;

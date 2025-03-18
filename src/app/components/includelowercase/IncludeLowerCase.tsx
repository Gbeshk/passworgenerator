import Image from "next/image";
import React from "react";
interface IncludeLowerrCaseProps {
  lowercaseimg: string;
  setIncludeLowercase: React.Dispatch<React.SetStateAction<boolean>>;
  includeLowerCase: boolean;
}
function IncludeLowerCase({
  lowercaseimg,
  setIncludeLowercase,
  includeLowerCase,
}: IncludeLowerrCaseProps) {
  return (
    <>
      <div className="mt-[19px] max-sm:mt-[16px] max-sm:gap-[20px] gap-[24px] flex">
        <Image
          src={lowercaseimg}
          alt="LowercaseCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeLowercase(!includeLowerCase)}
        />
        <p className="text-[#E6E5EA] max-sm:text-[16px] text-[18px]  leading-normal tracking-normal">
          Include Lowercase Letters
        </p>
      </div>
    </>
  );
}

export default IncludeLowerCase;

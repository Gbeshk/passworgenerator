import Image from "next/image";
import React from "react";
interface IncludeUpperCaseProps {
  uppercaseimg: string;
  setIncludeUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  includeUpperCase: boolean;
}
function IncludeUpperCase({
  uppercaseimg,
  setIncludeUppercase,
  includeUpperCase,
}: IncludeUpperCaseProps) {
  return (
    <>
      <div className="mt-[32px] gap-[24px] max-sm:gap-[20px] flex">
        <Image
          src={uppercaseimg}
          alt="UppercaseCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeUppercase(!includeUpperCase)}
        />
        <p className="text-[#E6E5EA]  max-sm:text-[16px]  text-[18px] leading-normal tracking-normal">
          Include Uppercase Letters
        </p>
      </div>
    </>
  );
}

export default IncludeUpperCase;

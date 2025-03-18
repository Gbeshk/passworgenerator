import Image from "next/image";
import React from "react";
interface IncludeNumbersProps {
  numberimg: string;
  setIncludeNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  includeNumbers: boolean;
}
function IncludeNumbers({
  numberimg,
  setIncludeNumbers,
  includeNumbers,
}: IncludeNumbersProps) {
  return (
    <>
      <div className="mt-[19px] max-sm:mt-[16px] max-sm:gap-[20px] gap-[24px] flex">
        <Image
          src={numberimg}
          alt="NumberCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeNumbers(!includeNumbers)}
        />
        <p className="text-[#E6E5EA]  max-sm:text-[16px] text-[18px]  leading-normal tracking-normal">
          Include Numbers
        </p>
      </div>
    </>
  );
}

export default IncludeNumbers;

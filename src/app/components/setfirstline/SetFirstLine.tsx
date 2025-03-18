import React from "react";
interface SetFirstLineProps {
  passwordLength: number;
}

function SetFirstLine({ passwordLength }: SetFirstLineProps) {
  return (
    <>
      <div className="flex items-center mt-[24px] max-sm:mt-[16px] justify-between">
        <p className="text-[#E6E5EA] max-sm:text-[16px]  text-[18px]  leading-normal">
          Character Length
        </p>
        <p className="text-[#A4FFAF] max-sm:text-[24px]  text-[32px]  leading-normal">
          {passwordLength}
        </p>
      </div>
    </>
  );
}

export default SetFirstLine;

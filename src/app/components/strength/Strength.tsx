import React from "react";
interface StrengthProps {
  passStrength: string;
  strength: number;
  color: string;
}
function Strength({ passStrength, strength, color }: StrengthProps) {
  return (
    <>
      <div className="w-[476px] max-sm:w-[311px] max-sm:h-[56px] h-[72px] bg-[#18171F] mt-[32px] flex items-center justify-between px-[32px] max-sm:px-[16px]">
        <p className="text-[#817D92]  max-sm:text-[16px]  text-[18px]  leading-normal">
          STRENGTH
        </p>
        <div className="flex items-center">
          <p className="text-[#E6E5EA]   text-[24px] max-sm:text-[18px]  leading-normal">
            {passStrength}
          </p>
          <div className="flex gap-[8px] ml-[15.5px]">
            <div
              className={`w-[10px] h-[28px] ${
                strength >= 0
                  ? `bg-[${color}] border-none`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] ${
                strength >= 2
                  ? `bg-[${color}] border-none`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] ${
                strength >= 3
                  ? `bg-[${color}] border-none`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] ${
                strength >= 4
                  ? `bg-[${color}] border-none`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Strength;

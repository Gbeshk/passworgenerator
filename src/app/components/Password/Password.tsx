"use client";
import React from "react";
import Image from "next/image";
interface PasswordProps {
  password: string;
}
function Password({ password }: PasswordProps) {
  return (
    <div className="mt-[31px] max-sm:pl-[16px] max-sm:pr-[22px] max-sm:mt-[16px] max-sm:w-[343px] max-sm:h-[64px] pl-[32px] pr-[28px] w-[540px] h-[80px] bg-[#24232C] flex items-center justify-between">
      <p className="text-[#E6E5EA] font-jetbrains-mono max-sm:text-[24px] text-[32px] font-bold ">
        {password}
      </p>
      <Image
        src={"images/copyicon.svg"}
        alt="Password Image"
        width={200}
        height={200}
        className="w-[21px] max-sm:w-[17.5px] max-sm:h-[20px] h-[24px] cursor-pointer"
        onClick={() => {}}
      />
    </div>
  );
}

export default Password;

"use client";
import React from "react";
import Image from "next/image";
interface PasswordProps {
  password: string;
}
function Password({ password }: PasswordProps) {
  return (
    <div className="!mt-[31px] pl-[32px] pr-[28px] w-[540px] h-[80px] bg-[#24232C] flex items-center justify-between">
      <p className="text-[#E6E5EA] font-jetbrains-mono text-[32px] font-bold ">
        {password}
      </p>
      <Image
        src={"images/copyicon.svg"}
        alt="Password Image"
        width={200}
        height={200}
        className="w-[21px] h-[24px] cursor-pointer"
        onClick={() => {}}
      />
    </div>
  );
}

export default Password;

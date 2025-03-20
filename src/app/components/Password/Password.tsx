"use client";
import React, { useState } from "react";
import Image from "next/image";
interface PasswordProps {
  password: string;
  copied: string;
  setCopied: React.Dispatch<React.SetStateAction<string>>;
}
function Password({ password, copied, setCopied }: PasswordProps) {
  const [copyIcon, setCopyIcon] = useState("images/copyicon.svg");
  return (
    <div className="mt-[31px] max-sm:pl-[16px] max-sm:pr-[22px] max-sm:mt-[16px] max-sm:w-[343px] max-sm:h-[64px] pl-[32px] pr-[28px] w-[540px] h-[80px] bg-[#24232C] flex items-center justify-between">
      <p className="text-[#E6E5EA] font-jetbrains-mono max-sm:text-[24px] text-[32px] font-bold">
        {password}
      </p>
      <div className="flex items-center">
        <p
          className={` text-[#A4FFAF] ${copied} mr-[16px] font-mono text-xl font-bold leading-normal`}
        >
          COPIED
        </p>
        <Image
          src={copyIcon}
          alt="Password Image"
          width={200}
          height={200}
          onMouseEnter={() => {
            setCopyIcon("images/copyiconhover.svg");
          }}
          onMouseLeave={() => {
            setCopyIcon("images/copyicon.svg");
          }}
          className="w-[21px] max-sm:w-[17.5px] max-sm:h-[20px] h-[24px] cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopied("inline");
          }}
        />
      </div>
    </div>
  );
}

export default Password;

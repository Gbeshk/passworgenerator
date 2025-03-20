import Image from "next/image";
import React, { useState } from "react";
interface GenerateDivProps {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordLength: number;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setCopied: React.Dispatch<React.SetStateAction<string>>;
}
function GenerateDiv({
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols,
  passwordLength,
  setPassword,
  setCopied,
}: GenerateDivProps) {
  function Generate() {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    let ourpass = "";
    if (includeUpperCase) {
      ourpass += upperCase;
    }
    if (includeLowerCase) {
      ourpass += lowerCase;
    }
    if (includeNumbers) {
      ourpass += number;
    }
    if (includeSymbols) {
      ourpass += symbol;
    }
    if (ourpass != "") {
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        const random = Math.floor(Math.random() * ourpass.length);
        password += ourpass[random];
      }

      setPassword(password);
    }
  }
  const [arrowSrc, setArrowSrc] = useState("images/arrow.svg");

  return (
    <>
      <div
        onClick={() => {
          Generate();
          setCopied("hidden");
        }}
        onMouseEnter={() => {
          setArrowSrc("images/arrowhover.svg");
        }}
        onMouseLeave={() => {
          setArrowSrc("images/arrow.svg");
        }}
        className="w-[476px] hover:border-2 hover:border-[#A4FFAF] transition-all duration-300 group h-[65px] max-sm:w-[311px] max-sm:h-[56px] hover:bg-[#24232C] bg-[#A4FFAF] max-sm:mt-[16px] mt-[32px] cursor-pointer flex items-center justify-center gap-[24px] "
      >
        <h1 className="text-[#24232C] transition-all duration-300 group-hover:text-[#A4FFAF] text-[18px] max-sm:text-[18px] leading-normal ">
          GENERATE
        </h1>
        <Image
          src={arrowSrc}
          alt="arrow"
          width={200}
          height={200}
          className=" w-[11px] h-[12px] cursor-pointer "
        />
      </div>
    </>
  );
}

export default GenerateDiv;

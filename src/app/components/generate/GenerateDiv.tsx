import Image from "next/image";
import React from "react";
interface GenerateDivProps {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordLength: number;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function GenerateDiv({
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols,
  passwordLength,
  setPassword,
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
  return (
    <>
      <div
        onClick={() => {
          Generate();
        }}
        className="w-[476px] h-[65px] max-sm:w-[311px] max-sm:h-[56px] bg-[#A4FFAF] max-sm:mt-[16px] mt-[32px] cursor-pointer flex items-center justify-center gap-[24px] "
      >
        <h1 className="text-dark-grey  text-[18px] max-sm:text-[18px] leading-normal ">
          GENERATE
        </h1>
        <Image
          src={"images/arrow.svg"}
          alt="arrow"
          width={200}
          height={200}
          className="w-[11px] h-[12px] cursor-pointer"
        />
      </div>
    </>
  );
}

export default GenerateDiv;

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
interface SetPasswordProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
function SetPassword({ setPassword }: SetPasswordProps) {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUppercase] = useState(true);
  const [includeLowerCase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength, setStrength] = useState(0);
  const [passStrength, setPassStrength] = useState("");
  const [color, setColor] = useState("#FB7C58");
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

  useEffect(() => {
    let x = 0;
    if (includeUpperCase) x++;
    if (includeLowerCase) x++;
    if (includeNumbers) x++;
    if (includeSymbols) x++;

    setStrength(x);
    if (x == 0 || x == 1) {
      setPassStrength("TOO WEAK!");
      setColor("#F64A4A");
    }
    if (x == 2) {
      setPassStrength("WEAK");
      setColor("#FB7C58");
    }
    if (x == 3) {
      setPassStrength("MEDIUM");
      setColor("#F8CD65");
    }
    if (x == 4) {
      setPassStrength("STRONG");
      setColor("#A4FFAF");
    }
  }, [includeUpperCase, includeLowerCase, includeNumbers, includeSymbols]);
  const uppercaseimg = includeUpperCase
    ? "images/full.svg"
    : "images/blank.svg";
  const lowercaseimg = includeLowerCase
    ? "images/full.svg"
    : "images/blank.svg";
  const numberimg = includeNumbers ? "images/full.svg" : "images/blank.svg";
  const symbolimg = includeSymbols ? "images/full.svg" : "images/blank.svg";

  return (
    <div className="mt-[24px] w-[540px] h-[528px] bg-[#24232C] px-[32px]">
      <div className="flex items-center mt-[24px] justify-between">
        <p className="text-[#E6E5EA]  text-[18px]  leading-normal">
          Character Length
        </p>
        <p className="text-[#A4FFAF]  text-[32px]  leading-normal">
          {passwordLength}
        </p>
      </div>
      <input
        className="w-full mt-[16px] h-[8px] bg-[#A4FFAF] cursor-pointer "
        type="range"
        min="4"
        max="20"
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
      />
      <div className="mt-[32px] gap-[24px] flex">
        <Image
          src={uppercaseimg}
          alt="UppercaseCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeUppercase(!includeUpperCase)}
        />
        <p className="text-[#E6E5EA]  text-[18px] leading-normal tracking-normal">
          Include Uppercase Letters
        </p>
      </div>
      <div className="mt-[19px] gap-[24px] flex">
        <Image
          src={lowercaseimg}
          alt="LowercaseCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeLowercase(!includeLowerCase)}
        />
        <p className="text-[#E6E5EA] text-[18px]  leading-normal tracking-normal">
          Include Lowercase Letters
        </p>
      </div>
      <div className="mt-[19px] gap-[24px] flex">
        <Image
          src={numberimg}
          alt="NumberCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeNumbers(!includeNumbers)}
        />
        <p className="text-[#E6E5EA]  text-[18px]  leading-normal tracking-normal">
          Include Numbers
        </p>
      </div>
      <div className="mt-[19px] gap-[24px] flex">
        <Image
          src={symbolimg}
          alt="NumberCheckBox"
          width={200}
          height={200}
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setIncludeSymbols(!includeSymbols)}
        />
        <p className="text-[#E6E5EA]  text-[18px]  leading-normal tracking-normal">
          Include Symbols
        </p>
      </div>
      <div className="w-[476px] h-[72px] bg-[#18171F] mt-[32px] flex items-center justify-between px-[32px]">
        <p className="text-[#817D92]  text-[18px]  leading-normal">STRENGTH</p>
        <div className="flex">
          <p className="text-[#E6E5EA]   text-[24px]  leading-normal">
            {passStrength}
          </p>
          <div className="flex gap-[8px] ml-[15.5px]">
            <div
              className={`w-[10px] h-[28px] border-[2px] border-[#E6E5EA] ${
                strength >= 0
                  ? `border-none bg-[${color}]`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] border-[2px] border-[#E6E5EA] ${
                strength >= 2
                  ? `border-none bg-[${color}]`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] border-[2px] border-[#E6E5EA] ${
                strength >= 3
                  ? `border-none bg-[${color}]`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
            <div
              className={`w-[10px] h-[28px] border-[2px] border-[#E6E5EA] ${
                strength >= 4
                  ? `border-none bg-[${color}]`
                  : "border-[2px] border-[#E6E5EA]"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          Generate();
        }}
        className="w-[476px] h-[65px] bg-[#A4FFAF] mt-[32px] cursor-pointer flex items-center justify-center gap-[24px] "
      >
        <h1 className="text-dark-grey  text-[18px] leading-normal ">
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
    </div>
  );
}

export default SetPassword;

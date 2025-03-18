"use client";
import React, { useState, useEffect } from "react";
import SetFirstLine from "../setfirstline/SetFirstLine";
import Input from "../input/Input";
import IncludeUpperCase from "../includeuppercase/IncludeUpperCase";
import IncludeLowerCase from "../includelowercase/IncludeLowerCase";
import IncludeNumbers from "../includenumbers/IncludeNumbers";
import IncludeSymbols from "../includesymbols/IncludeSymbols";
import Strength from "../strength/Strength";
import GenerateDiv from "../generate/GenerateDiv";
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
    <>
      <div className="mt-[24px] w-[540px]  max-sm:w-[343px]  max-sm:h-[430px] h-[528px] bg-[#24232C] px-[32px] max-sm:px-[16px]">
        <SetFirstLine passwordLength={passwordLength} />
        <Input
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUpperCase
          uppercaseimg={uppercaseimg}
          setIncludeUppercase={setIncludeUppercase}
          includeUpperCase={includeUpperCase}
        />
        <IncludeLowerCase
          lowercaseimg={lowercaseimg}
          setIncludeLowercase={setIncludeLowercase}
          includeLowerCase={includeLowerCase}
        />
        <IncludeNumbers
          numberimg={numberimg}
          setIncludeNumbers={setIncludeNumbers}
          includeNumbers={includeNumbers}
        />
        <IncludeSymbols
          symbolimg={symbolimg}
          setIncludeSymbols={setIncludeSymbols}
          includeSymbols={includeSymbols}
        />
        <Strength
          passStrength={passStrength}
          strength={strength}
          color={color}
        />
        <GenerateDiv
          includeUpperCase={includeUpperCase}
          includeLowerCase={includeLowerCase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          passwordLength={passwordLength}
          setPassword={setPassword}
        />
      </div>
      <div className="hidden">
        <div className="w-[10px] h-[10px] bg-[#F64A4A]"></div>
        <div className="w-[10px] h-[10px] bg-[#FB7C58]"></div>
        <div className="w-[10px] h-[10px] bg-[#F8CD65]"></div>
        <div className="w-[10px] h-[10px] bg-[#A4FFAF]"></div>
      </div>
    </>
  );
}

export default SetPassword;

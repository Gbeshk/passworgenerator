import React from "react";
interface InputProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}
function Input({ passwordLength, setPasswordLength }: InputProps) {
  return (
    <>
      <input
        className="w-full mt-[16px] max-sm:mt-[8px] h-[8px] bg-[#A4FFAF] cursor-pointer "
        type="range"
        min="4"
        max="20"
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
      />
    </>
  );
}

export default Input;

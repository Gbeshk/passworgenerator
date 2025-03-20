import React from "react";

function Header() {
  return (
    <h1
      onClick={() => {
        window.location.reload();
      }}
      className="cursor-pointer text-[#817D92] font-jetbrains-mono max-sm:text-[16px] text-[24px] font-bold leading-normal"
    >
      Password Generator
    </h1>
  );
}

export default Header;

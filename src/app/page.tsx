"use client";
import { useState } from "react";
import Header from "./components/Header/Header";
import Password from "./components/Password/Password";
import SetPassword from "./components/setpassword/SetPassword";
export default function Home() {
  const [password, setPassword] = useState("Password");
  const [copied, setCopied] = useState("hidden");

  return (
    <>
      <div className="flex items-center flex-col">
        <Header />
        <Password copied={copied} setCopied={setCopied} password={password} />
        <SetPassword setPassword={setPassword} setCopied={setCopied} />
      </div>
    </>
  );
}

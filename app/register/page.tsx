"use client";

import LoginStep1 from "@/components/ui/LoginStep1";
import LoginStep2 from "@/components/ui/LoginStep2";
import { useState } from "react";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div>
      {step === 1 && (
        <LoginStep1
          account={account}
          setAccount={setAccount}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <LoginStep2
          account={account}
          setAccount={setAccount}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default RegisterPage;

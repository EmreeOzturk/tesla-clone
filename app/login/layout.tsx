import LoginFooter from "@/components/layout/loginFooter";
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <LoginFooter />
    </>
  );
};

export default LoginLayout;

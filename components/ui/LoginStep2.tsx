"use client";
import React from "react";

type Props = {
  account: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  setAccount: (account: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => void;
  setStep: (step: number) => void;
};

const LoginStep2: React.FC<Props> = ({ account, setAccount, setStep }) => {
  return (
    <div className="h-screen  pt-36 flex flex-col items-center justify-start">
      <div className="space-y-8 w-1/4">
        <div className="text-sm ">Step 2 of 2</div>
        <div className="text-4xl font-bold">Create Account</div>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="passwprd">Password</label>
            <input
              type="password"
              id="passwprd"
              autoComplete="off"
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="confPassword">Confirm Password</label>
            <input
              type="password"
              id="confPassword"
              autoComplete="off"
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
        </form>
        <div className="text-sm">
          Learn about{" "}
          <span
            className="
            text-blue-500"
          >
            Tesla Updates
          </span>
        </div>
        <div>
          <button
            disabled={
              account.firstName === "" ||
              account.lastName === "" ||
              account.email === "" ||
              account.password === ""
            }
            className={`disabled:bg-[#9eb4f0] bg-[#5880ee]  w-full py-2 font-bold rounded-md text-slate-200`}
            onClick={async () => {
              const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(account),
              })
                .then((res) => res.json())
                .then(() => alert("Account Created"))
                .catch(() => alert("Error Creating Account"));
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStep2;

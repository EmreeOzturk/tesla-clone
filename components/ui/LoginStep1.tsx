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

const LoginStep1: React.FC<Props> = ({ account, setAccount, setStep }) => {
  return (
    <div className="h-screen  pt-36 flex flex-col items-center justify-start">
      <div className="space-y-8 w-1/4">
        <div className="text-sm ">Step 1 of 2</div>
        <div className="text-4xl font-bold">Create Account</div>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              autoComplete="off"
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              autoComplete="off"
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
        </form>
        <div className="flex items-center justify-center gap-1 px-8">
          <div className="text-sm">
            By continuing, I understand and agree to the{" "}
            <span className="text-blue-500">Terms of Service</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>
          </div>
        </div>
        <div>
          <button
            disabled={account.firstName === "" || account.lastName === ""}
            className={`disabled:bg-[#9eb4f0] bg-[#5880ee]  w-full py-2 font-bold rounded-md text-slate-200`}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStep1;

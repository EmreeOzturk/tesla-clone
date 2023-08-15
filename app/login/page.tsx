"use client";
import Link from "next/link";
import type { FormEvent } from "react";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  const handleLogin = async (data: FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    const { email, password } = data.target as HTMLFormElement;
    console.log(email, password);
    await signIn("credentials", {
      email: email as string,
      password: password as string,
    });
  };

  return (
    <div className="h-screen  pt-36 flex flex-col items-center justify-start">
      <div className="space-y-8 w-1/4">
        <div className="text-4xl font-bold">Sign In</div>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="focus:outline-none focus:border focus:border-slate-300  border border-white bg-[#f4f4f4] rounded-md p-2"
            />
          </div>
          <div className="underline underline-offset-2 text-center text-slate-400">
            Trouble signing in?
            <span className="text-blue-500"> Contact support</span>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#9eb4f0] w-full py-2 font-bold rounded-md text-slate-200"
            >
              Next
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-1 px-8">
          <div className="h-[0.3px] flex-1 bg-slate-600 opacity-50"></div>
          <div className="opacity-90">Or</div>
          <div className="h-[1px] flex-1 bg-slate-600 opacity-50"></div>
        </div>
        <div className="w-full ">
          <Link
            href="/register"
            className="bg-[#f4f4f4] text-center hover:bg-[#eee] block min-w-full py-2 font-bold rounded-md text-slate-500"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

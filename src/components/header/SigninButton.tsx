"use client";
import { GithubLogo, X } from "phosphor-react";

export function SigninButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button
      type="button"
      className="text-white h-12 px-4 rounded-full bg-neutral-800 flex gap-x-2 items-center justify-center font-bold hover:brightness-90 transition-all"
    >
      <GithubLogo size={20} color="#04d361" />
      Luan Henrique
      <X size={20} color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className="text-white h-12 px-4 rounded-full bg-neutral-800 flex gap-x-2 items-center justify-center font-bold hover:brightness-90 transition-all"
    >
      <GithubLogo size={20} color="#eba417" />
      Sign in with Github
    </button>
  );
}

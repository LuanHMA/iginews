import Image from "next/image";
import Logo from "../../assets/ig.news.svg";
import { Nav } from "./Nav";
import { SigninButton } from "./SigninButton";

export function Header() {
  return (
    <header className="w-full bg-neutral-900 border-b-[1px] border-neutral-800">
      <div className="max-w-6xl m-auto px-8 h-20 flex items-center justify-between ml-auto">
        <div className="flex items-center gap-x-20">
          <Image src={Logo} height={30} width={108} alt="Ig news" />

          <Nav />
        </div>
        <SigninButton />
      </div>
    </header>
  );
}

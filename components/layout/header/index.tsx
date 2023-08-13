import Image from "next/image";
import logo from "@/public/logo.png";
import Icon from "@/components/ui/common/Icon";
import Link from "next/link";
import { HEADER_ICONS } from "@/consts";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className=" w-full h-16 flex items-center justify-between px-10 bg-transparent fixed z-50 ">
      <div className="flex items-center justify-center h-20 w-40 relative">
        <Link href="/">
          <Image src={logo} alt="tesla-logo" fill />
        </Link>
      </div>
      <HeaderMenu />
      <div>
        <ul className="space-x-2">
          {HEADER_ICONS.map((item) => (
            <li
              key={item.label}
              className="inline-block p-2 rounded-md hover:bg-slate-300 transition-all ease-in cursor-pointer"
            >
              <Link
                href={{
                  pathname: item?.href,
                }}
              >
                <Icon icon={item.icon} className="h-[1.25rem] w-[1.25rem]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

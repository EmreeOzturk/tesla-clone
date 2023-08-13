import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import type { Header_Icons } from "@/types/types";

export const HEADER_MENU = [
  {
    label: "Vehicles",
  },
  {
    label: "Energy",
  },
  {
    label: "Charging",
  },
  {
    label: "Discover",
  },
  {
    label: "Shop",
  },
];

export const HEADER_ICONS: Header_Icons[] = [
  {
    label: "Question",
    icon: AiOutlineQuestionCircle,
    href: "/question",
  },
  {
    label: "Language",
    icon: BiWorld,
  },
  {
    label: "User",
    icon: PiUserCircle,
    href: "/login",
  },
];

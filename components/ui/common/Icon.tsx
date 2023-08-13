import { IconProps } from "@/types/prop-types";

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  const Icon = icon;
  return <Icon className={className} />;
};

export default Icon;

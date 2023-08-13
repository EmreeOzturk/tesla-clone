"use client";

type Props = {
  showDropdown: boolean;
  setShowDropdown: (showDropdown: boolean) => void;
  dropdownContent: string;
  setDropdownContent: (dropdownContent: string) => void;
};
const HeaderDropdownMenu: React.FC<Props> = ({
  setShowDropdown,
  showDropdown,
  dropdownContent,
  setDropdownContent,
}) => {
  return (
    <div
      onMouseOver={() => {
        setShowDropdown(true);
      }}
      onMouseLeave={() => {
        setShowDropdown(false);
        setDropdownContent("");
      }}
      className={`fixed -top-[100%] ${
        showDropdown && "-top-0"
      }  left-0 -z-10 w-screen h-80 bg-gray-200 transition-all duration-700 ease-out flex items-center justify-center`}
    >
      <h1 className="text-4xl font-bold">{dropdownContent}</h1>
    </div>
  );
};

export default HeaderDropdownMenu;

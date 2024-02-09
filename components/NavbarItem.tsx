
import React from "react";

interface NavbarItemProps {
  label: string;
}


const NavbarItem: React.FC<NavbarItemProps> = ({
  label
}) => {
  return (
  <div className="text-white cutsor-pointer hover:text-grey-300 transition">
    {label}
  </div>
  );
};
export default NavbarItem;

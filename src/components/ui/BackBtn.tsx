import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const BackBtn: React.FC<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ ...props }) => {
  return (
    <Link
      {...props}
      className="text-cyan-500 py-2 px-6 rounded-lg bg-gray-800 block text-center"
    >
      Root
    </Link>
  );
};

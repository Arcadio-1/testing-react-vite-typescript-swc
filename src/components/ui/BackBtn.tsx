import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const BackBtn: React.FC<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ ...props }) => {
  return (
    <Link
      {...props}
      className="text-cyan-500 sticky top-5 left-5 py-2 px-6 rounded-lg bg-gray-800 hover:text-cyan-300"
    >
      Back
    </Link>
  );
};

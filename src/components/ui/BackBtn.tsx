import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "../lib/utils";

export const BackBtn: React.FC<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-cyan-500 py-2 px-6 rounded-lg bg-gray-800 block text-center",
        className
      )}
    >
      Root
    </Link>
  );
};

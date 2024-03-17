import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button } from "./shadcn/button";
import HomeIcon from "./HomeIcon";
import { cn } from "../../lib/utils";

export const Nav: React.FC = () => {
  const navClass = ({ isActive }: { isActive: boolean }) => {
    let classes = "px-3 py-1 rounded-lg text-slate-200 ";
    if (isActive) {
      classes += "bg-slate-300 text-gray-800";
    }
    return classes;
  };
  const { setAuth, auth } = useAuth();
  return (
    <nav className="flex justify-between items-center capitalize border-b-2 pb-2 border-opacity-50 border-b-white">
      <NavLink
        className={({ isActive }) =>
          cn(
            `border-2 ${isActive ? "border-lime-700" : ""} group`,
            navClass({ isActive })
          )
        }
        end
        to={"/partFour"}
      >
        {({ isActive }: { isActive: boolean }) => (
          <div className="flex items-center gap-1">
            <HomeIcon
              className={`group-hover:fill-blue-700 size-6 ${
                isActive ? "fill-gray-600" : ""
              }`}
            />
            <span className="group-hover:text-blue-700">Home</span>
          </div>
        )}
      </NavLink>
      {auth ? (
        <ul>
          <li>
            <Button
              onClick={() => {
                setAuth(false);
                sessionStorage.removeItem("token");
              }}
            >
              logout
            </Button>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-2 text-slate-200">
          <li>
            <NavLink className={navClass} to={"/partFour/login"}>
              login
            </NavLink>
          </li>
          <li>
            <NavLink className={navClass} to={"/partFour/signup"}>
              signup
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

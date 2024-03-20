import React from "react";
import notfound_Svg from "../not-found.png";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Not_found: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-6 w-full max-w-xl mx-auto p-8">
      <img
        className=""
        src={notfound_Svg}
        width={200}
        height={80}
        alt="no books found"
      />
      <Link className="capitalize text-2xl" to={"/"}>
        <Button>Go Away! Read Some Books!</Button>
      </Link>
    </div>
  );
};

export default Not_found;

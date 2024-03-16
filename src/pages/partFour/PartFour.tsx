import React from "react";
import { cn } from "../../components/lib/utils";
import useAuth from "../../components/partFour/hooks/useAuth";

const PartFour: React.FC = () => {
  const { auth } = useAuth();
  return (
    <div
      className={cn(`flex justify-center py-4 capitalize`, {
        "bg-lime-700": auth,
        "bg-rose-900": !auth,
      })}
    >
      {auth ? (
        <span className="">you are logged in</span>
      ) : (
        <span className="">you are not logged in</span>
      )}
    </div>
  );
};

export default PartFour;

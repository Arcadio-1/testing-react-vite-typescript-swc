import React from "react";

type Props = {
  lines: number;
  label: string;
};

export const Item: React.FC<Props> = ({ lines, label }) => {
  return (
    <div className="flex gap-2">
      <label>{label}</label>
      <span className="bg-lime-600 px-4 rounded-lg">{lines}</span>
    </div>
  );
};

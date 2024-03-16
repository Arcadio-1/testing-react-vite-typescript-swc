import React from "react";
import { Item } from "./Item";

type Props = {
  lines: string[][];
};

export const Details: React.FC<Props> = ({ lines }) => {
  return (
    <div className="flex gap-2">
      <Item label="Horizontal :" lines={lines.length - 1} />
      <Item label="Vertical :" lines={lines[0].length - 1} />
    </div>
  );
};

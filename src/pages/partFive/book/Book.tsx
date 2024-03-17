import React from "react";
import { useParams } from "react-router-dom";

export const Book = () => {
  const param = useParams();
  console.log(param);
  return <div>Book id</div>;
};

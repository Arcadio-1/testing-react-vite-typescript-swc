import React from "react";
import { useParams } from "react-router-dom";
import BookDetils from "../../../components/partFive/BookDetils/BookDetils";

export const Book: React.FC = () => {
  const param = useParams();
  const { id } = param;

  return (
    <section className="flex items-center justify-center mt-5">
      <BookDetils id={id} />
    </section>
  );
};

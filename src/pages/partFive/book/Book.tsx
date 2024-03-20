import React from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../../../components/partFive/servicee/queries";
import { Link } from "react-router-dom";
import BookCard from "../../../components/partFive/components/BookCard";
import { Button } from "../../../components/ui/button";
import Back_icon from "../../../components/partFive/components/ui/icons/Back_icon";
import Not_found from "../../../components/partFive/components/Not_found";
import Details from "../../../components/partFive/components/Details";

export const Book: React.FC = () => {
  const param = useParams();
  const { id } = param;
  const bookQuery = useBook({ id: id || "" });

  return (
    <section className="flex items-center justify-center mt-5">
      <div className="w-full flex justify-center">
        {bookQuery.isPending ? (
          <h1 className="text-lg text-first_text_color">Loading</h1>
        ) : (
          <>
            {bookQuery.isSuccess ? (
              <BookCard
                className="max-w-80 grow"
                book={bookQuery.data}
                custom_data={<Details book={bookQuery.data} />}
              >
                <Link to={`/partFive`}>
                  <Button className="w-full flex items-center justify-center text-xl">
                    <Back_icon />
                    Home
                  </Button>
                </Link>
              </BookCard>
            ) : (
              <Not_found />
            )}
          </>
        )}
      </div>
    </section>
  );
};

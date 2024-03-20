import React from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../../../components/partFive/servicee/queries";
import Details from "../../../components/partFive/BookDetils/Details";
import BookCard from "../../../components/partFive/ui/BookCard";
import Notfound from "../../../components/partFive/ui/Not_found";
import Button from "../../../components/partFive/ui/Button";
import Backicon from "../../../components/partFive/ui/icons/Back_icon";
import { Link } from "react-router-dom";

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
                    <Backicon />
                    Home
                  </Button>
                </Link>
              </BookCard>
            ) : (
              <Notfound />
            )}
          </>
        )}
      </div>
    </section>
  );
};

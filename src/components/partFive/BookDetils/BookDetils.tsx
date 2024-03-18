import Details from "./Details";
import BookCard from "../util/BookCard";
import Notfound from "../util/Not_found";
import Button from "../ui/Button";
import Backicon from "../ui/icons/Back_icon";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "../api/books";
import { useEffect } from "react";

interface IBook {
  id: string | undefined;
}

const BookDetils = ({ id = "" }: IBook) => {
  const postQuery = useQuery({
    queryKey: ["books", id],
    queryFn: () => getBook(id),
  });
  useEffect(() => {
    console.log(postQuery.data);
  }, [postQuery.data]);

  return (
    <div className="w-full flex justify-center">
      {postQuery.status === "pending" ? (
        <h1 className="text-lg text-first_text_color">Loading</h1>
      ) : (
        <>
          {postQuery.status !== "error" ? (
            <BookCard
              className="max-w-80 grow"
              book={postQuery.data}
              custom_data={<Details book={postQuery.data} />}
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
  );
};

export default BookDetils;

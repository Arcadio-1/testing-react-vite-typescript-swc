import Details from "./Details";
import BookCard from "../util/BookCard";
import Notfound from "../util/Not_found";
import Button from "../ui/Button";
import Backicon from "../ui/icons/Back_icon";
import { Link } from "react-router-dom";
import { useBook } from "../servicee/queries";

interface IBook {
  id: string | undefined;
}

const BookDetils = ({ id = "" }: IBook) => {
  const bookQuery = useBook({ id: id });

  return (
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
  );
};

export default BookDetils;

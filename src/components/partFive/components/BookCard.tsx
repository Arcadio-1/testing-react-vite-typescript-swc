import React, { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Book } from "../types/types";
import {
  useAddToMyBookList,
  useRemoveFromMyBookList,
} from "../servicee/mutations";
import { useMyBooksIds } from "../servicee/queries";
import Loading from "../../partOne/ui/Loading";
import Button from "./ui/Button";
import Close_icon from "./ui/icons/Close_icon";
import Plus_icon from "./ui/icons/Plus_icon";
import SpinnerIcon from "./ui/icons/SpinnerIcon";

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book;
  custom_data?: ReactNode;
  children?: ReactNode;
}

const BookCard: React.FC<BookCardProps> = ({
  book: { imageLink, title, id },
  className,
  custom_data,
  children,
  ...props
}) => {
  const addToMyBookList = useAddToMyBookList();
  const removeFromMyBookList = useRemoveFromMyBookList();

  const myBooksQuery = useMyBooksIds(1);
  const book = myBooksQuery.data?.find((item) => item.book_id === id);

  return (
    <article
      className={cn(" h-full bg-bg_2 p-2 rounded-lg", className)}
      {...props}
    >
      <div className="flex flex-col justify-between items-center h-full ">
        <Link to={`/partFive/books/${id}`}>
          <img
            src={`/${imageLink}`}
            alt={title}
            className=""
            width={"150"}
            height={"220"}
            loading="lazy"
          />
        </Link>
        <div className="w-full flex flex-col gap-2 py-2">
          {custom_data ? (
            <>{custom_data}</>
          ) : (
            <h2 className="text-xl text-center">{title}</h2>
          )}
          {myBooksQuery.status === "success" ? (
            book ? (
              <Button
                disabled={removeFromMyBookList.status === "pending"}
                onClick={async () => {
                  removeFromMyBookList.mutate(book.id);
                }}
                className="w-full flex items-center justify-center text-xl"
              >
                <Close_icon />
                Remove
                {removeFromMyBookList.status === "pending" && <SpinnerIcon />}
              </Button>
            ) : (
              <Button
                disabled={addToMyBookList.status === "pending"}
                onClick={async () => {
                  console.log(id);

                  addToMyBookList.mutate({ book_id: id, user_id: 1 });
                  // const res = await addToMyBooks(id);
                  // console.log(res);
                }}
                className="w-full flex items-center justify-center text-xl"
              >
                <Plus_icon />
                Add
                {addToMyBookList.status === "pending" && <SpinnerIcon />}
              </Button>
            )
          ) : (
            <Button className="w-full flex items-center justify-center text-xl">
              <Loading />
            </Button>
          )}

          {children}
        </div>
      </div>
    </article>
  );
};

export default BookCard;

import React, { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Book } from "../types/types";
import Button from "./Button";
import Plus_icon from "./icons/Plus_icon";
import { removeToMyBooks } from "../servicee/booksApi";
import Close_icon from "./icons/Close_icon";
import { useAddToMyBookList } from "../servicee/mutations";
import { useMyBooksIds } from "../servicee/queries";
import Loading from "../../partOne/ui/Loading";

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

  const myBooksQuery = useMyBooksIds(1);

  useEffect(() => {
    console.log(myBooksQuery.status);
  }, [myBooksQuery.status]);

  // const addHandler = () => {
  //   dispatch(add(id));
  // };
  // const removeHandler = () => {
  //   dispatch(remove(id));
  // };

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
            myBooksQuery.data?.includes(id) ? (
              <Button
                onClick={async () => {
                  console.log("log");
                  const res = await removeToMyBooks(id);
                  console.log(res);
                }}
                className="w-full flex items-center justify-center text-xl"
              >
                <Close_icon />
                Remove
              </Button>
            ) : (
              <Button
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

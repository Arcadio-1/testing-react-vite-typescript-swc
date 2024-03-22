import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useBook,
  useMyBooksIds,
} from "../../../components/partFive/servicee/queries";
import { Link } from "react-router-dom";
import BookCard from "../../../components/partFive/components/BookCard";
import { Button } from "../../../components/ui/button";
import Back_icon from "../../../components/partFive/components/ui/icons/Back_icon";
import Not_found from "../../../components/partFive/components/Not_found";
import Details from "../../../components/partFive/components/Details";
import { Trash2Icon } from "lucide-react";
import { useDeleteFromBookList } from "../../../components/partFive/servicee/mutations";
import SpinnerIcon from "../../../components/partFive/components/ui/icons/SpinnerIcon";

export const Book: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const param = useParams();
  const { id } = param;
  const bookQuery = useBook({ id: id || "" });
  const deleteFromBookList = useDeleteFromBookList();

  const myBooksQuery = useMyBooksIds(1);
  const book = myBooksQuery.data?.find((item) => item.book_id === id);

  useEffect(() => {
    if (deleteFromBookList.status === "success") {
      navigate("/partFive");
    }
    if (deleteFromBookList.status === "error") {
      setErrorMessage("something went wrong try again");
    }
  }, [deleteFromBookList.status]);

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
                <Button
                  disabled={deleteFromBookList.status === "pending"}
                  onClick={async () => {
                    setErrorMessage("");
                    if (book) {
                      setErrorMessage("first remove it from My Book List");
                      return;
                    }
                    const res = deleteFromBookList.mutate(bookQuery.data.id);
                    console.log(res);
                  }}
                  className="w-full flex gsp-8 items-center justify-center text-xl"
                >
                  <Trash2Icon className="h-9 w-9 p-2 stroke-red-500" />
                  Delete
                  {deleteFromBookList.status === "pending" && (
                    <SpinnerIcon className="mx-2 h-4 w-4 border-2" />
                  )}
                </Button>
                {errorMessage && (
                  <span className="text-center text-red-500 capitalize">
                    {errorMessage}
                  </span>
                )}
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

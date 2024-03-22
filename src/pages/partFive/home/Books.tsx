import { Link } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { useContext, useEffect } from "react";
import { useBooks } from "../../../components/partFive/servicee/queries";
import { Context } from "../../../components/partFive/components/Layout/Layout";
import List_skeleton_loading from "../../../components/partFive/components/List/List_skeleton_loading";
import List from "../../../components/partFive/components/List/List";
import BookCard from "../../../components/partFive/components/BookCard";
import Button from "../../../components/partFive/components/ui/Button";
import More_icon from "../../../components/partFive/components/ui/icons/More_icon";
import Not_found from "../../../components/partFive/components/Not_found";

export const Books: React.FC = () => {
  const { searchTitle } = useContext(Context);

  const { data, status } = useBooks({ title: searchTitle });
  useEffect(() => {
    console.log(status);
  }, [status]);
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {status === "pending" ? (
        <List_skeleton_loading />
      ) : (
        <>
          {status === "success" && data.data?.length ? (
            <List>
              {data.data.map((book: Book) => {
                return (
                  <BookCard key={book.id} book={book}>
                    <Link to={`/partFive/books/${book.id}`}>
                      <Button className="w-full flex items-center justify-center text-xl">
                        <More_icon />
                        Deatils
                      </Button>
                    </Link>
                  </BookCard>
                );
              })}
            </List>
          ) : (
            <Not_found />
          )}
        </>
      )}
    </section>
  );
};

import ListSkeletonZLoading from "../../../components/partFive/ui/List/List_skeleton_loading";
import List from "../../../components/partFive/ui/List/List";
import BookCard from "../../../components/partFive/ui/BookCard";
import Button from "../../../components/partFive/ui/Button";
import Moreicon from "../../../components/partFive/ui/icons/More_icon";
import Notfound from "../../../components/partFive/ui/Not_found";
import { Link } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { useContext } from "react";
import { Context } from "../../../components/partFive/ui/Layout/Layout";
import { useBooks } from "../../../components/partFive/servicee/queries";

export const Books: React.FC = () => {
  const { searchTitle } = useContext(Context);

  const { data, status } = useBooks({ title: searchTitle });
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {status === "pending" ? (
        <ListSkeletonZLoading />
      ) : (
        <>
          {status !== "error" && data.length ? (
            <List>
              {data.map((book: Book) => {
                return (
                  <BookCard key={book.id} book={book}>
                    <Link to={`/partFive/books/${book.id}`}>
                      <Button className="w-full flex items-center justify-center text-xl">
                        <Moreicon />
                        Deatils
                      </Button>
                    </Link>
                  </BookCard>
                );
              })}
            </List>
          ) : (
            <Notfound />
          )}
        </>
      )}
    </section>
  );
};

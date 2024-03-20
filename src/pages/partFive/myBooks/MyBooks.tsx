import ListSkeletonZLoading from "../../../components/partFive/ui/List/List_skeleton_loading";
import List from "../../../components/partFive/ui/List/List";
import BookCard from "../../../components/partFive/ui/BookCard";
import Button from "../../../components/partFive/ui/Button";
import Moreicon from "../../../components/partFive/ui/icons/More_icon";
import Notfound from "../../../components/partFive/ui/Not_found";
import { Link } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../../../components/partFive/ui/Layout/Layout";
import {
  useInfiniteBooks,
  useMyBooks,
  useMyBooksIds,
} from "../../../components/partFive/servicee/queries";

export const MyBooks: React.FC = () => {
  const { searchTitle } = useContext(Context);
  const myBooksQuery = useMyBooksIds(1);
  const booksQuery = useMyBooks(myBooksQuery.data);

  useEffect(() => {
    console.log(booksQuery);
  }, [booksQuery]);
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      <List>
        {booksQuery.map((data, index) => {
          return data.status === "success" ? (
            <BookCard key={data.data.id} book={data.data}>
              <Link to={`/partFive/books/${data.data.id}`}>
                <Button className="w-full flex items-center justify-center text-xl">
                  <Moreicon />
                  Deatils
                </Button>
              </Link>
            </BookCard>
          ) : (
            <div key={index}></div>
          );
        })}
      </List>
    </section>
  );
};

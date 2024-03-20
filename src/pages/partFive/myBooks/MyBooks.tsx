import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import {
  useMyBooks,
  useMyBooksIds,
} from "../../../components/partFive/servicee/queries";
import { Context } from "../../../components/partFive/components/Layout/Layout";
import List from "../../../components/partFive/components/List/List";
import BookCard from "../../../components/partFive/components/BookCard";
import Button from "../../../components/partFive/components/ui/Button";
import More_icon from "../../../components/partFive/components/ui/icons/More_icon";

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
                  <More_icon />
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

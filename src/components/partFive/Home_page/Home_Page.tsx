import ListSkeletonZLoading from "../util/List/List_skeleton_loading";
import List from "../util/List/List";
import BookCard from "../util/BookCard";
import Button from "../ui/Button";
import Moreicon from "../ui/icons/More_icon";
import Notfound from "../util/Not_found";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../types/types";
import { getBooks } from "../api/books";
import { useContext } from "react";
import { Context } from "../util/Layout/Layout";

const HomePage = () => {
  const { searchTitle } = useContext(Context);
  const postsQuery = useQuery({
    queryKey: ["books", searchTitle],
    queryFn: () => getBooks(searchTitle),
    // placeholderData: [{ id: 1, title: "Initial Data" }],
  });

  return (
    <>
      {postsQuery.status === "pending" ? (
        <ListSkeletonZLoading />
      ) : (
        <>
          {postsQuery.status !== "error" && postsQuery.data.length ? (
            <List>
              {postsQuery.data.map((book: Book) => {
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
    </>
  );
};

export default HomePage;

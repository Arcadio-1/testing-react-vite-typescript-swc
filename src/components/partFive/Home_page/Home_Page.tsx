import ListSkeletonZLoading from "../util/List/List_skeleton_loading";
import List from "../util/List/List";
import BookCard from "../util/BookCard";
import Button from "../ui/Button";
import Moreicon from "../ui/icons/More_icon";
import Notfound from "../util/Not_found";
// import {
//   allFilterdBooks,
//   useFetchAllBooksQuery,
// } from "../../lib/store/features/books_api/books-api-slice";
// import { useAppSelector } from "../../lib/store/hooks";
import { Link } from "react-router-dom";
// import { useQueryClient } from "@t2eanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../types/types";
// import { useQuery } from "@tanstack/react-query";

const getPosts = () => {
  return axios.get("https://my-json-server.typicode.com/Arcadio-1/books/books");
};

const HomePage = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // placeholderData: [{ id: 1, title: "Initial Data" }],
  });

  // if (postsQuery.status === "pending") return <h1>Loading...</h1>;
  // if (postsQuery.status === "error") {
  //   return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  // }
  // console.log(postsQuery.data.data);
  // const { isLoading, isSuccess } = useFetchAllBooksQuery();
  // const books = useAppSelector(allFilterdBooks);
  return (
    <>
      {postsQuery.status === "pending" ? (
        <ListSkeletonZLoading />
      ) : (
        <>
          {postsQuery.status !== "error" && postsQuery.data.data.length ? (
            <List>
              {postsQuery.data.data.map((book: Book) => {
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

import Details from "./Details";
import BookCard from "../util/BookCard";
import Notfound from "../util/Not_found";
import Button from "../ui/Button";
import Backicon from "../ui/icons/Back_icon";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IBook {
  id: string | undefined;
}

const getPost = (id: string) => {
  return axios.get(
    `https://my-json-server.typicode.com/Arcadio-1/books/books/${id}`
  );
};

const BookDetils = ({ id = "" }: IBook) => {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  // const { data: book, isLoading, isSuccess } = useFetchBookQuery(id);
  return (
    <div className="w-full flex justify-center">
      {postQuery.status === "pending" ? (
        <h1 className="text-lg text-first_text_color">Loading</h1>
      ) : (
        <>
          {postQuery.status !== "error" ? (
            <BookCard
              className="max-w-80 grow"
              book={postQuery.data?.data}
              custom_data={<Details book={postQuery.data?.data} />}
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

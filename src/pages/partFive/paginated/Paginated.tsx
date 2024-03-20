import ListSkeletonZLoading from "../../../components/partFive/ui/List/List_skeleton_loading";
import List from "../../../components/partFive/ui/List/List";
import BookCard from "../../../components/partFive/ui/BookCard";
import Button from "../../../components/partFive/ui/Button";
import Moreicon from "../../../components/partFive/ui/icons/More_icon";
import Notfound from "../../../components/partFive/ui/Not_found";
import { Link, useSearchParams } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { useContext } from "react";
import { Context } from "../../../components/partFive/ui/Layout/Layout";
import { usePaginatedBooks } from "../../../components/partFive/servicee/queries";
import { PaginationBar } from "../../../components/partFive/ui/PaginationBar";

export const Paginated: React.FC = () => {
  const { searchTitle } = useContext(Context);

  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, status } = usePaginatedBooks({
    title: searchTitle,
    page: currentPage,
  });

  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {status === "pending" ? (
        <ListSkeletonZLoading />
      ) : (
        <>
          {status !== "error" && data.posts.length ? (
            <div>
              <List>
                {data.posts.map((book: Book) => {
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
              <PaginationBar
                nextPage={data.nextPage}
                previousPage={data.previousPage}
                currentPage={currentPage}
                totalPages={data.totalPages}
              />
            </div>
          ) : (
            <Notfound />
          )}
        </>
      )}
    </section>
  );
};

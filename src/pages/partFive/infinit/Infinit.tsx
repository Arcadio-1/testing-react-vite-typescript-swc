import { Link, useSearchParams } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { Fragment } from "react";
import { useInfiniteBooks } from "../../../components/partFive/servicee/queries";
import List_skeleton_loading from "../../../components/partFive/components/List/List_skeleton_loading";
import List from "../../../components/partFive/components/List/List";
import BookCard from "../../../components/partFive/components/BookCard";
import Button from "../../../components/partFive/components/ui/Button";
import More_icon from "../../../components/partFive/components/ui/icons/More_icon";
import Not_found from "../../../components/partFive/components/Not_found";
export const Infinit: React.FC = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";

  const booksQuery = useInfiniteBooks({ title });

  // useEffect(() => {
  //   console.log(booksQuery);
  // }, [booksQuery]);
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {booksQuery.isPending ? (
        <List_skeleton_loading />
      ) : (
        <>
          {booksQuery.isSuccess && booksQuery.data.pages.length ? (
            <div>
              <List>
                {booksQuery.data?.pages.map((group, index) => {
                  return (
                    <Fragment key={index}>
                      {group.map((book: Book) => {
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
                    </Fragment>
                  );
                })}
              </List>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => booksQuery.fetchNextPage()}
                  disabled={
                    !booksQuery.hasNextPage || booksQuery.isFetchingNextPage
                  }
                >
                  {booksQuery.isFetchingNextPage
                    ? "Loading more..."
                    : booksQuery.hasNextPage
                    ? "Load More"
                    : "Nothing more to load"}
                </button>
              </div>
            </div>
          ) : (
            <Not_found />
          )}
        </>
      )}
    </section>
  );
};

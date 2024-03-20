import ListSkeletonZLoading from "../../../components/partFive/util/List/List_skeleton_loading";
import List from "../../../components/partFive/util/List/List";
import BookCard from "../../../components/partFive/util/BookCard";
import Button from "../../../components/partFive/ui/Button";
import Moreicon from "../../../components/partFive/ui/icons/More_icon";
import Notfound from "../../../components/partFive/util/Not_found";
import { Link } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { Fragment, useContext } from "react";
import { Context } from "../../../components/partFive/util/Layout/Layout";
import { useInfiniteBooks } from "../../../components/partFive/servicee/queries";
export const Infinit: React.FC = () => {
  const { searchTitle } = useContext(Context);
  const booksQuery = useInfiniteBooks({ title: searchTitle });

  // useEffect(() => {
  //   console.log(booksQuery);
  // }, [booksQuery]);
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {booksQuery.isPending ? (
        <ListSkeletonZLoading />
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
                                <Moreicon />
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
            <Notfound />
          )}
        </>
      )}
    </section>
  );
};

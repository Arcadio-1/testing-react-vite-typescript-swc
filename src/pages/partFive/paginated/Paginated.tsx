import { Link, useSearchParams } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { usePaginatedBooks } from "../../../components/partFive/servicee/queries";
import List_skeleton_loading from "../../../components/partFive/components/List/List_skeleton_loading";
import List from "../../../components/partFive/components/List/List";
import BookCard from "../../../components/partFive/components/BookCard";
import Button from "../../../components/partFive/components/ui/Button";
import More_icon from "../../../components/partFive/components/ui/icons/More_icon";
import { PaginationBar } from "../../../components/partFive/components/PaginationBar";
import Not_found from "../../../components/partFive/components/Not_found";
import { Aside } from "../../../components/partFive/components/aside/Aside";
import { Sort } from "../../../components/partFive/components/sort/Sort";

export const Paginated: React.FC = () => {
  // const { searchTitle } = useContext(Context);

  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "0";
  const langs = searchParams.get("langs") || "";
  const title = searchParams.get("title") || "";

  const { data, status } = usePaginatedBooks({
    title: title,
    sort: sort,
    page: currentPage,
    language: langs,
  });

  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {status === "pending" ? (
        <List_skeleton_loading />
      ) : (
        <>
          {status !== "error" && data.posts.length ? (
            <div className="flex gap-2 bg-gray-900 rounded-lg px-3 py-2">
              <Aside />
              <div>
                <Sort />
                <List>
                  {data.posts.map((book: Book) => {
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
                <PaginationBar
                  nextPage={data.nextPage}
                  previousPage={data.previousPage}
                  currentPage={currentPage}
                  totalPages={data.totalPages}
                />
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

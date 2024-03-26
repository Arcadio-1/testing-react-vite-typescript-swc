import { Link, useSearchParams } from "react-router-dom";
import { Book } from "../../../components/partFive/types/types";
import { useBooks } from "../../../components/partFive/servicee/queries";
import List_skeleton_loading from "../../../components/partFive/components/List/List_skeleton_loading";
import List from "../../../components/partFive/components/List/List";
import BookCard from "../../../components/partFive/components/BookCard";
import Button from "../../../components/partFive/components/ui/Button";
import More_icon from "../../../components/partFive/components/ui/icons/More_icon";
import Not_found from "../../../components/partFive/components/Not_found";

export const Books: React.FC = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";

  const { data: request, status } = useBooks({ title });
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      {status === "pending" ? (
        <List_skeleton_loading />
      ) : (
        <>
          {status === "success" && request.data?.length ? (
            <div className="flex gap-2 bg-gray-900 rounded-lg px-3 py-2">
              <List>
                {request.data.map((book: Book) => {
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
            </div>
          ) : (
            <Not_found />
          )}
        </>
      )}
    </section>
  );
};

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getBook, getBooks } from "./booksApi";

export const useBooks = ({ title = "" }) => {
  return useQuery({
    queryKey: ["books", title],
    queryFn: () => getBooks(title),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};

export const useBook = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["books", id],
    queryFn: () => getBook(id),
  });
};

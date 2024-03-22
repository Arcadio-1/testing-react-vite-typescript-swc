import {
  keepPreviousData,
  useInfiniteQuery,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import {
  getBook,
  getBooks,
  getMyBooks,
  getbooksPaginated,
  getinfinitBooks,
} from "./booksApi";
import { MyBook } from "../types/types";

export const useBooks = ({ title = "" }) => {
  return useQuery({
    queryKey: ["books", title],
    queryFn: () => getBooks(title),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};

export const useInfiniteBooks = ({ title = "" }: { title: string }) => {
  return useInfiniteQuery({
    queryKey: ["bookss", title],
    queryFn: (param) => getinfinitBooks({ pageParam: param.pageParam, title }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      firstPageParam - 1;
    },
  });
};

export const usePaginatedBooks = ({ page = 1, title = "" }) => {
  return useQuery({
    queryKey: ["books", title, page],
    queryFn: () => getbooksPaginated(page, title, 10),
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

export const useMyBooksIds = (user_id: number) => {
  return useQuery({
    queryKey: ["myBooks"],
    queryFn: () => getMyBooks(user_id),
  });
};

export const useMyBooks = (myBooks: MyBook[] | undefined) => {
  return useQueries({
    queries: (myBooks ?? []).map((id) => {
      return {
        queryKey: ["myBooks", id?.book_id],
        queryFn: () => getBook(id?.book_id),
      };
    }),
  });
};

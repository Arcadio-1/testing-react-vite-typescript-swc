import axios from "axios";
import { Book, MyBook, MyBookData } from "../types/types";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getBooks = async (title: string) => {
  return (
    await axiosInstance.get<Book[]>(`books/?title_like=${title}`, {
      params: { _sort: "title" },
    })
  ).data;
};

export const getinfinitBooks = async ({
  pageParam,
  title,
}: {
  pageParam: number;
  title: string;
}) => {
  return (
    await axiosInstance.get<Book[]>(
      `books?_page=${pageParam + 1}&_limit=10&title_like=${title}`
    )
  ).data;
};

export const getBook = async (id: string) => {
  return (await axiosInstance.get<Book>(`/books/${id}`)).data;
};

export const getbooksPaginated = async (
  page: number,
  title: string,
  limit: number
) => {
  return await axiosInstance
    .get<Book[]>(`books/?title_like=${title}`, {
      params: { _page: page, _sort: "title", _limit: limit },
    })
    .then((res) => {
      const totalPages = Math.ceil(
        parseInt(res.headers["x-total-count"]) / limit
      );

      const hasNext = page < totalPages;
      return {
        totalPages: totalPages,
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
};

export const createBook = async ({
  title,
}: {
  title: string;
  body: string;
}) => {
  return await axiosInstance
    .post("/books", {
      title,
      userId: 1,
      id: Date.now().toString(),
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink: "images/things-fall-apart.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      year: 1958,
    })
    .then((res) => res.data);
};
export const getMyBooks = async (user_id: number) => {
  return await axiosInstance
    .get<MyBook[] | []>(`/myBooks?user_id=${user_id}`)
    .then((res) => {
      if (res.data.length) {
        return res.data.map((item) => item.book_id);
      } else {
        return [];
      }
    });
};

export const addToMyBooks = async (myBook: MyBookData) => {
  return await axiosInstance.post("myBooks", myBook).then((res) => res.data);
};
export const removeToMyBooks = async (id: string) => {
  return await axiosInstance.delete(`/myBooks/${id}`).then((res) => res.data);
};

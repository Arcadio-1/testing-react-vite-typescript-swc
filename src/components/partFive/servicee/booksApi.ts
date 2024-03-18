import axios from "axios";
import { Book } from "../types/types";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getBooks = async (title: string) => {
  console.log(title);
  return (
    await axiosInstance.get<Book[]>(`books/?title_like=${title}`, {
      params: { _sort: "title" },
    })
  ).data;
};

export const getBook = async (id: string) => {
  return (await axiosInstance.get(`/books/${id}`)).data;
};

export const getbooksPaginated = async (page: number) => {
  return await axiosInstance
    .get("/books", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
      return {
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
export const getMyBooks = async () => {
  return await axiosInstance.get("/myBooks");
};

export const getBookInMyBook = async () => {
  console.log("run");
  return await axiosInstance.get(`/myBooks`).then((res) => {
    return res.data;
  });
};

export const addToMyBooks = async (id: string) => {
  console.log("run");
  return await axiosInstance
    .post("/myBooks", {
      id,
    })
    .then((res) => res.data);
};
export const removeToMyBooks = async (id: string) => {
  return await axiosInstance.delete(`/myBooks/${id}`).then((res) => res.data);
};

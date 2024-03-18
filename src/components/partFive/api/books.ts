import axios from "axios";

export const getBooks = async (title = "") => {
  return axios
    .get(`http://localhost:3000/books/?title_like=${title}`, {
      params: { _sort: "title" },
    })
    .then((res) => res.data);
};

export const searchBooksWithTitle = async (title: string) => {
  return axios
    .get(`http://localhost:3000/books/?title=${title}`, {
      params: { _sort: "title" },
    })
    .then((res) => res.data);
};

export const getbooksPaginated = async (page: number) => {
  return axios
    .get("http://localhost:3000/books", {
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

export const getBook = async (id: string) => {
  return axios.get(`http://localhost:3000/books/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const createBook = async ({
  title,
}: {
  title: string;
  body: string;
}) => {
  return axios
    .post("http://localhost:3000/books", {
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

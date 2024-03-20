export interface Book {
  id: string;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}
export interface MyBook {
  id: number;
  user_id: number;
  book_id: string;
}
export type MyBookData = Omit<MyBook, "id">;
export enum Paths {
  home = "/",
  my_books = "/myBooks",
  book = "book",
}

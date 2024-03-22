import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToMyBooks, deleteBook, removeFromMyBooks } from "./booksApi";
import { MyBookData } from "../types/types";

export const useAddToMyBookList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (myBook: MyBookData) => addToMyBooks(myBook),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("success");
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["myBooks"] });
      }
    },
  });
};
export const useRemoveFromMyBookList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (myBook_id: number) => removeFromMyBooks({ id: myBook_id }),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("success");
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["myBooks"] });
      }
    },
  });
};
export const useDeleteFromBookList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book_id: string) => deleteBook({ id: book_id }),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("success");
    },

    onSettled: async (w, error) => {
      console.log(w);
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["books"] });
      }
    },
  });
};

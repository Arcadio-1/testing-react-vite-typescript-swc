import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToMyBooks } from "./booksApi";
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

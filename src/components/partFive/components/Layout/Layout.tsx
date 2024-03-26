import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BackBtn } from "../../../ui/BackBtn";
import Nav from "../Navbar/Nav";
import Nav_sub from "../Navbar/Nav_sub";

interface IContext {
  searchTitle: string;
  setSearchTitle: React.Dispatch<React.SetStateAction<string>>;
  languages: string[];
  setLanguages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Context = createContext<IContext>({
  searchTitle: "",
  setSearchTitle: (): string => "",
  languages: [],
  setLanguages: (): string[] => [],
});

export const Layout: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 1000 * 60 * 5, retry: 5, retryDelay: 1000 },
    },
  });
  return (
    <div>
      <BackBtn to={"/"} className="my-2" />
      <Context.Provider
        value={{ searchTitle, setSearchTitle, languages, setLanguages }}
      >
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Nav_sub />
          <main className="pb-14 md:pb-2 pt-2">
            <Outlet />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Context.Provider>
    </div>
  );
};
export const useGlobalContextPartFive = () => useContext(Context);

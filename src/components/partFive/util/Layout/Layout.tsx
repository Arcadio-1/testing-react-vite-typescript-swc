import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import Nav from "../Navbar/Nav";
import Navsub from "../Navbar/Nav_sub";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BackBtn } from "../../../ui/BackBtn";

interface IContext {
  searchTitle: string;
  setSearchTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<IContext>({
  searchTitle: "",
  setSearchTitle: (): string => "",
});

export const Layout: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  });
  return (
    <div>
      <BackBtn to={"/"} className="my-2" />
      <Context.Provider value={{ searchTitle, setSearchTitle }}>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Navsub />
          <main className="pb-14 md:pb-2 pt-2">
            <Outlet />
          </main>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Context.Provider>
    </div>
  );
};

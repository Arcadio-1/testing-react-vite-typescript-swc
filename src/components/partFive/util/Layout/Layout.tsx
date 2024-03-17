import React from "react";
import { Outlet } from "react-router";
import Nav from "../Navbar/Nav";
import Navsub from "../Navbar/Nav_sub";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const Layout = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Navsub />
        <main className="pb-14 md:pb-2 pt-2">
          <Outlet />
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

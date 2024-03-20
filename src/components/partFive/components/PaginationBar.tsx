import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
type Props = {
  currentPage: number;
  nextPage: number | undefined;
  previousPage: number | undefined;
  totalPages: number;
};
export const PaginationBar: React.FC<Props> = ({
  nextPage,
  currentPage,
  previousPage,
  totalPages,
}) => {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 2, 5));
  const minPage = Math.max(1, Math.min(currentPage - 2, maxPage - 4));
  let numberedPageItems: JSX.Element[] = [];
  for (let pages = minPage; pages <= maxPage; pages++) {
    numberedPageItems.push(
      <PaginationItem key={pages}>
        <PaginationLink
          isActive={currentPage === pages}
          className=""
          to={`?page=${pages}`}
        >
          {pages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination className={`${totalPages === 1 ? "opacity-35" : ""} `}>
      <PaginationContent>
        {/* prev */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className={`text-slate-200 ${
                currentPage === 1
                  ? "opacity-35 hover:bg-transparent hover:text-slate-200"
                  : ""
              }`}
              to={`?page=${previousPage ? previousPage : "1"}`}
            />
          </PaginationItem>
        )}
        {/* page number */}
        {numberedPageItems}
        {/* ... */}
        {currentPage < totalPages &&
          totalPages > 2 &&
          currentPage + 2 < totalPages && (
            <PaginationItem>
              <PaginationLink
                className="text-slate-200"
                to={`?page=${totalPages}`}
              >
                <PaginationEllipsis />
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}
        {/* next */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationNext
              className={`text-slate-200 ${
                currentPage === totalPages
                  ? "opacity-35 hover:bg-transparent hover:text-slate-200"
                  : ""
              }`}
              to={`?page=${nextPage ? nextPage : totalPages}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

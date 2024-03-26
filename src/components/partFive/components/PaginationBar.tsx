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
import { useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";
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

  const [_, setSearchParam] = useSearchParams();

  const handleAddParameter = (value: number) => {
    setSearchParam((currentParams) => {
      const newParams = new URLSearchParams(currentParams);
      newParams.set("page", value.toString());
      return newParams;
    });
  };

  for (let pages = minPage; pages <= maxPage; pages++) {
    numberedPageItems.push(
      <PaginationItem key={pages}>
        <PaginationLink
          onClick={() => handleAddParameter(pages)}
          isActive={currentPage === pages}
          className={cn(``, {
            "text-gray-900": currentPage === pages,
          })}
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
              onClick={() => {
                handleAddParameter(previousPage ? previousPage : 1);
              }}
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
                onClick={() => handleAddParameter(totalPages)}
                className="text-slate-200"
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
              onClick={() => {
                handleAddParameter(nextPage ? nextPage : totalPages);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../../types/types";
import useCurrentPath from "../../../Hook/useCurrentPath";
import Button from "../../ui/Button";
import My_books_icon from "../../ui/icons/My_books_icon";
export const ExtraNavLinks: React.FC = () => {
  const { currentPath } = useCurrentPath();
  return (
    <div>
      <ul className="flex gap-2 flex-wrap">
        <li>
          <Link to={"/partFive/paginated"}>
            <Button selected={currentPath === Paths.my_books} className="group">
              <My_books_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
              paginated books
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/partFive/infinit"}>
            <Button selected={currentPath === Paths.my_books} className="group">
              <My_books_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
              infinit books
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/partFive/manage"}>
            <Button selected={currentPath === Paths.my_books} className="group">
              <My_books_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
              manage books
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

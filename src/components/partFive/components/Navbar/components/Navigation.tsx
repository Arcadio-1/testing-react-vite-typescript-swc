import { Link } from "react-router-dom";
import useCurrentPath from "../../../Hook/useCurrentPath";
import { Paths } from "../../../types/types";
import Button from "../../ui/Button";
import Home_icon from "../../ui/icons/Home_icon";
import My_books_icon from "../../ui/icons/My_books_icon";

const Navigation: React.FC = () => {
  const { currentPath } = useCurrentPath();
  return (
    <ul className="hidden md:flex items-center justify-center gap-2">
      <li>
        <Link to={"/partFive"}>
          <Button selected={currentPath === Paths.home} className="group">
            <Home_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color transition-all duration-200" />
            Home
          </Button>
        </Link>
      </li>
      <li>
        <Link to={"/partFive/myBooks"}>
          <Button selected={currentPath === Paths.my_books} className="group">
            <My_books_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
            my books
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

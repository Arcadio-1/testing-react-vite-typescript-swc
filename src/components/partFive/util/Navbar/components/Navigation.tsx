import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import Homeicon from "../../../ui/icons/Home_icon";
import Mybooksicon from "../../../ui/icons/My_books_icon";
import useCurrentPath from "../../../Hook/useCurrentPath";
import { Paths } from "../../../types/types";

const Navigation: React.FC = () => {
  const { currentPath } = useCurrentPath();
  return (
    <ul className="hidden md:flex items-center justify-center gap-2">
      <li>
        <Link to={"/partFive"}>
          <Button selected={currentPath === Paths.home} className="group">
            <Homeicon className="h-6 w-6 fill-first group-hover:fill-first_text_color transition-all duration-200" />
            Home
          </Button>
        </Link>
      </li>
      <li>
        <Link to={"/partFive/myBooks"}>
          <Button selected={currentPath === Paths.my_books} className="group">
            <Mybooksicon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
            my books
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

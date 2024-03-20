import { Link } from "react-router-dom";
import { Paths } from "../../types/types";
import useCurrentPath from "../../Hook/useCurrentPath";
import Button from "../ui/Button";
import Home_icon from "../ui/icons/Home_icon";
import My_books_icon from "../ui/icons/My_books_icon";

const Nav_sub: React.FC = () => {
  const { currentPath } = useCurrentPath();

  return (
    <aside className="fixed flex z-50 bottom-0 right-0 items-center justify-center gap-2 px-2 w-full rounded-t-xl bg-bg_2 bg-opacity-60 backdrop-blur-sm md:hidden border-t-first border-t-[1px]">
      <Link className="w-full" to={"/"}>
        <Button
          selected={currentPath === Paths.home}
          className="border-transparent py-2 w-full justify-center"
        >
          <Home_icon className="h-6 w-6 fill-first " />
          Home
        </Button>
      </Link>
      <div className="border h-6 opacity-20"></div>
      <Link className="w-full" to={"/myBooks"}>
        <Button
          selected={currentPath === Paths.my_books}
          className="border-transparent py-2 w-full justify-center"
        >
          <My_books_icon className="h-6 w-6 fill-first" />
          my books
        </Button>
      </Link>
    </aside>
  );
};

export default Nav_sub;

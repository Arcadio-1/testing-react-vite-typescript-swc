import logo_image from "../../../Logo.png";
import { Link } from "react-router-dom";
const Logo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="flex justify-center items-center w-full md:w-auto "
    >
      <img
        src={logo_image}
        alt={"dummy lib"}
        className="max-w-36 md:max-w-48"
        width={200}
        height={20}
      />
    </Link>
  );
};

export default Logo;

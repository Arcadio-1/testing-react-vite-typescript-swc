import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Root</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="description" content="Select part" />
      </Helmet>
      <div className="flex flex-col gap-2">
        <Link className="text-red-400" to={"/partOne"}>
          three step form chart
        </Link>
        <Link className="text-yellow-500" to={"/partTwo"}>
          dynamic table on image
        </Link>
        <Link className="text-purple-600" to={"/partThree"}>
          category manager
        </Link>
        <Link className="text-pink-500" to={"/partFour"}>
          password strength +login/signup
        </Link>
        <Link className="text-pink-500" to={"/partFive"}>
          books with react query
        </Link>
      </div>
    </>
  );
};

export default Home;

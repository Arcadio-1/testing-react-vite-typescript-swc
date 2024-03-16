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
          part one
        </Link>
        <Link className="text-yellow-500" to={"/partTwo"}>
          part two
        </Link>
        <Link className="text-yellow-500" to={"/partThree"}>
          part three
        </Link>
      </div>
    </>
  );
};

export default Home;

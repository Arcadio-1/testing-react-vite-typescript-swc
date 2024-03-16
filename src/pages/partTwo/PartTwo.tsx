import { Image } from "antd";
import { useState } from "react";
import { Details } from "../../components/partTwo/Details/Details";
import Actions from "../../components/partTwo/actions/Actions";
import { Container } from "../../components/ui/Container";
import { BackBtn } from "../../components/ui/BackBtn";
import { OverLay } from "../../components/partTwo/OverLay";
import { Helmet } from "react-helmet-async";

const PartTwo = () => {
  const [lines, setLines] = useState<string[][]>([["0/0"]]);

  return (
    <div>
      <Helmet>
        <title>Part Two</title>
        <link rel="icon" type="image/svg+xml" href="/fish.svg" />
        <meta name="description" content="second part of task one" />
      </Helmet>
      <BackBtn to={"/"} />
      <Container className="max-w-3xl">
        <div className="relative h-auto flex grid-cols-6">
          <Image width={"auto"} className="size-max" src="/main.jpg" />
          <OverLay lines={lines} />
        </div>
        <Details lines={lines} />
        <Actions setLines={setLines} lines={lines} />
      </Container>
    </div>
  );
};

export default PartTwo;

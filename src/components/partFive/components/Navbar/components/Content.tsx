import Searchinput from "./Search_input";
import Navigation from "./Navigation";
import Logo from "./Logo";
import React from "react";
import { ExtraNavLinks } from "./ExtraNavLinks";
const Content: React.FC = () => {
  return (
    <section className="bg-bg_2 relative">
      <nav
        className={`max-w-1320 py-2 md:py-3 px-2 flex items-center justify-between gap-1 md:gap-5 mx-auto flex-wrap bg-bg_2`}
      >
        <Logo />
        <Searchinput />
        <Navigation />
      </nav>
      <ExtraNavLinks />
    </section>
  );
};

export default Content;

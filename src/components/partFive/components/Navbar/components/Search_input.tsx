import { useContext } from "react";
import Button from "../../../ui/Button";
import CloseIcon from "../../../ui/icons/Close_icon";
import SearchIcon from "../../../ui/icons/Search_icon";
import { Context } from "../../../ui/Layout/Layout";

const Search_input: React.FC = () => {
  const { searchTitle, setSearchTitle } = useContext(Context);
  return (
    <div className="relative md:max-w-[40rem] grow mr-auto">
      <label htmlFor="search_input" className="absolute top-1/4 left-2">
        <SearchIcon className="h-5 w-5 opacity-65 fill-first_text_color" />
      </label>
      <input
        placeholder="Enter Title..."
        onChange={(event) => {
          setSearchTitle(event.target.value);
        }}
        value={searchTitle}
        id="search_input"
        type="text"
        className="bg-bg_1 w-full px-10 md:leading-9 leading-8 focus:outline-none focus:border-first focus:ring-1 focus:ring-first rounded-lg text-first_text_color"
      />
      {searchTitle && (
        <Button
          onClick={() => {
            setSearchTitle("");
          }}
          className="absolute top-1 right-1 px-1"
        >
          <CloseIcon className="h-4 w-4 opacity-65" />
        </Button>
      )}
    </div>
  );
};

export default Search_input;

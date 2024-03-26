import Search_icon from "../../ui/icons/Search_icon";
import Button from "../../ui/Button";
import Close_icon from "../../ui/icons/Close_icon";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search_input: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [searchTitle, setSearchTitle] = useState(
    searchParam.get("title") ?? ""
  );
  const timeoutRef = useRef<number | null>(null);

  // useEffect(() => {
  //   console.log(searchTitle);
  // }, [searchTitle]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(event.target.value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSearchParam((currentParams) => {
        const newSearchParam = new URLSearchParams(currentParams);
        if (event.target.value) {
          newSearchParam.set("title", event.target.value);
        } else {
          newSearchParam.delete("title");
        }
        return newSearchParam;
      });

      console.log(event.target.value);
    }, 500);
  };
  return (
    <div className="relative md:max-w-[40rem] grow mr-auto">
      <label htmlFor="search_input" className="absolute top-1/4 left-2">
        <Search_icon className="h-5 w-5 opacity-65 fill-first_text_color" />
      </label>
      <input
        placeholder="Enter Title..."
        onChange={(event) => {
          handleChange(event);
        }}
        value={searchTitle}
        id="search_input"
        type="text"
        className="bg-bg_1 w-full px-10 md:leading-9 leading-8 focus:outline-none focus:border-first focus:ring-1 focus:ring-first rounded-lg text-first_text_color"
      />
      {searchTitle && (
        <Button
          onClick={() => {
            setSearchParam((currentParams) => {
              const newSearchParam = new URLSearchParams(currentParams);
              newSearchParam.delete("title");
              return newSearchParam;
            });
            setSearchTitle("");
          }}
          className="absolute top-1 right-1 px-1"
        >
          <Close_icon className="h-4 w-4 opacity-65" />
        </Button>
      )}
    </div>
  );
};

export default Search_input;

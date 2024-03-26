import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface LanguageItem {
  label: string;
  value: "0" | "1" | "2";
}
const languageItems: LanguageItem[] = [
  {
    label: "english",
    value: "0",
  },
  {
    label: "french",
    value: "1",
  },
  {
    label: "Russian",
    value: "2",
  },
];

export const Filters: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  // const [selectedLangs, setSelectedLangs] = useState<string[]>(
  //   searchParam.get("langs")?.split(/\ /) ?? []
  // );
  const selectedLangs = searchParam.get("langs")?.split(/\ /) ?? [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let langArr = searchParam.get("langs")?.split(/\ /) ?? [];
    if (checked) {
      langArr.push(value);
    } else {
      langArr = langArr.filter((e) => e !== value);
    }
    // setSelectedLangs(langArr);
    if (langArr.length) {
      setSearchParam((currentParams) => {
        const newParams = new URLSearchParams(currentParams);
        newParams.set("langs", langArr.join(" "));
        newParams.delete("page");
        return newParams;
      });
    } else {
      setSearchParam((currentParams) => {
        const newParams = new URLSearchParams(currentParams);
        newParams.delete("langs");
        newParams.delete("page");
        return newParams;
      });
    }
  };
  return (
    <div>
      <h2 className="text-md">Languages:</h2>
      <div className="pl-2 py-2 flex flex-col gap-2 border-b border-b-first border-opacity-50">
        {languageItems.map((language) => (
          <div key={language.value} className="flex">
            <input
              className="h-5 w-5 cursor-pointer"
              type="checkbox"
              checked={
                selectedLangs
                  ? selectedLangs.indexOf(language.value) !== -1
                  : false
              }
              id={language.value}
              value={language.value}
              onChange={handleChange}
            />
            <label
              htmlFor={language.value}
              className="cursor-pointer px-2 text-md capitalize"
            >
              {language.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

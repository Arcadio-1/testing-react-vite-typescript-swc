import { useSearchParams } from "react-router-dom";
import SortIcon from "../ui/icons/SortIcon";
import { cn } from "../../../lib/utils";
export interface SortItem {
  label: string;
  value: "0" | "1" | "2" | "3" | "4";
}
const sortItems: SortItem[] = [
  {
    label: "title",
    value: "0",
  },
  {
    label: "more page",
    value: "1",
  },
  {
    label: "less page",
    value: "2",
  },
  {
    label: "oldest",
    value: "3",
  },
  {
    label: "newest",
    value: "4",
  },
];

export const Sort = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortParam = searchParam.get("sort") ?? "0";

  const handleAddParameter = (value: string) => {
    // const newParams = new URLSearchParams(searchParam);
    // const bqArr = searchParam.getAll("baq").length ?? null;
    // console.log("1", bqArr);
    // console.log(newParams.toString());
    // const sortObject = Object.fromEntries(newParams);
    // console.log({ ...sortObject });

    // const yes = {
    //   sort: "1",
    //   bq: [],
    // };
    // setSearchParam(yes);
    setSearchParam((currentParams) => {
      const newParams = new URLSearchParams(currentParams);
      newParams.set("sort", value);
      newParams.delete("page");
      return newParams;
    });
  };

  return (
    <div className="hidden items-center gap-3 py-2 md:flex border-b-[1px] border-b-first">
      <div className="flex items-center justify-center">
        <SortIcon className="h-7 w-7 stroke-dark_4" />
        <label className="capitalize text-lg">sort:</label>
      </div>
      <div className="flex gap-4">
        {sortItems.map((item) => {
          return (
            <button
              onClick={() => handleAddParameter(item.value)}
              key={item.value}
              className={cn(
                `focus:outline-none hover:border-transparent hover:border-b-slate-200 cursor-pointer rounded-md px-2 py-1 text-lg text-slate-200 hover:text-slate-50`,
                {
                  "border-b-2 border-b-first": item.value === sortParam,
                }
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

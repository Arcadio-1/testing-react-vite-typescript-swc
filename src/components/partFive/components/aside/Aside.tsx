import { Filters } from "./Filters";

export const Aside = () => {
  return (
    <aside className="border-2 border-opacity-55 border-first rounded-md min-w-52 p-2">
      <div className="border-b-2 border-b-first border-opacity-50 pb-1 mb-2">
        <h2 className="capitalize text-lg">filters</h2>
      </div>
      <Filters />
    </aside>
  );
};

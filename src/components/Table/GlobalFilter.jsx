import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      {" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Rechercher ...`}
        className="rounded-lg focus:border-2 focus-visible:outline-0 px-2 py-1 border-2 border-transparent m-2 drop-shadow-none focus-visible:drop-shadow ease-linear transition-all duration-150 hover:border-sky-500 focus-visible:border-sky-500 "
      />
    </span>
  );
};
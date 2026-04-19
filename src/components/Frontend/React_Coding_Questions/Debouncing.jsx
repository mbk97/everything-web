import { useState, useEffect } from "react";

const Debouncing = () => {
  const [searchVal, setSearchVal] = useState("");
  // const [debouncedSearchVal, setDebouncedSearchVal] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedSearchVal(searchVal);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [searchVal]);

  const debouncedSearchVal = useDebounceHook(searchVal, 3000);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="h-[45px] m-10 border"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <h1>{debouncedSearchVal}</h1>
    </div>
  );
};

export default Debouncing;

// ! Custom hook for debouncing
const useDebounceHook = (value, time) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => clearTimeout(timer);
  }, [value, time]);

  return debouncedValue;
};

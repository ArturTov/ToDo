import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToDO } from "../../redux/actions/itemActions";

export const CoustmInputArrow = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [active, setActiv] = useState(false);
  return (
    <div className="mx-auto">
      {active ? (
        <div className="">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(setToDO(value));
                    setActiv(false);
                  }
                }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="write terxt"
              />
              <div
                className="absolute inset-y-0 right-[22px] cursor-pointer flex items-center z-50 "
                onClick={() => {
                  if (value) {
                    dispatch(setToDO(value));
                    setActiv(false);
                  }
                }}>
                <span className="w-2">
                  <svg
                    className="w-[15px] h-[15px] text-gray-800 dark:text-dark"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.4"
                      d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span
          className="cursor-pointer"
          onClick={() => {
            setActiv(true);
          }}>
          <svg
            className="w-[15px] h-[15px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

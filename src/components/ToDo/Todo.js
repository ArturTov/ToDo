import { useState } from "react";
import { CoustmInput } from "../CoustmInput/CoustmInput";
import { useDispatch } from "react-redux";
import {
  setChangeToDoItem,
  setDeleteItem,
  setItem,
} from "../../redux/actions/itemActions";

export const ToDo = ({ id, name, index, children, className = "" }) => {
  const [isOpenchangeIten, setISOpenchangeModal] = useState(false);
  const [openNewItem, setOpenNewItem] = useState(false);
  const [openChildren, setOpenChildren] = useState(false);
  const [changeVlaue, setChangevalue] = useState(name);
  const [NewItemValue, setNewItemValue] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`w-full h-12 shadow-light px-2 hover:bg-slate-300 bg-slate-400 flex justify-between items-center ${className}`}>
        {isOpenchangeIten ? (
          <CoustmInput
            value={changeVlaue}
            onChange={(e) => {
              setChangevalue(e.target.value);
            }}
            onKeyDown={() => {
              dispatch(setChangeToDoItem({ id: id, name: changeVlaue }));
              setISOpenchangeModal(false);
            }}
          />
        ) : (
          <h5 className="flex justify-center gap-1">
            {Array.isArray(children) && (
              <span
                onClick={() => {
                  setOpenChildren(!openChildren);
                }}
                className={`cursor-pointer mb-[7px] ${
                  openChildren && "rotate-180"
                }`}>
                <svg
                  className="w-[15px] h-[15px]  text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.4"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </span>
            )}

            {name}
          </h5>
        )}
        {openNewItem && (
          <CoustmInput
            value={NewItemValue}
            onChange={(e) => {
              setNewItemValue(e.target.value);
            }}
            onKeyDown={() => {
              dispatch(setItem({ id: id, name: NewItemValue }));
              setOpenNewItem(false);
            }}
          />
        )}
        <div className="flex gap-1 ">
          <span
            className="cursor-pointer"
            onClick={() => {
              setISOpenchangeModal(true);
            }}>
            <svg
              className="w-[15px] h-[15px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
              <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
            </svg>
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setOpenNewItem(true);
            }}>
            <svg
              className="w-[15px] h-[15px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              dispatch(setDeleteItem(id));
            }}>
            <svg
              className="w-[15px] h-[15px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16">
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.4"
                d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </span>
        </div>
      </div>
      {Array.isArray(children) && openChildren && (
        <div className=" flex flex-col gap-3 justify-end">
          {children.map((el, index) => (
            <ToDo
              key={el.id}
              id={el.id}
              name={el.name}
              index={index}
              children={el.children}
            />
          ))}
        </div>
      )}
    </>
  );
};

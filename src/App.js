import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CoustmInputArrow } from "./components/CoustmInputArrow/CoustmInputArrow";
import { ToDo } from "./components/ToDo/Todo";
import { insertChildren } from "./utils";
import { add } from "./redux/actions/itemActions";

function App() {
  const toDo = useSelector((state) => state.toDo.items);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
    console.log(JSON.parse(localStorage.getItem("toDo")));
  }, [toDo.length, dispatch]);

  return (
    <div className="App">
      <div className="container">
        <CoustmInputArrow />
        <div className="mt-12 flex flex-col gap-3">
          {insertChildren(toDo).map((el, index) => (
            <ToDo
              key={el.id}
              id={el.id}
              name={el.name}
              index={index}
              children={el.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

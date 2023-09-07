import { useSelector } from "react-redux";
import "./App.css";
import { CoustmInputArrow } from "./components/CoustmInputArrow/CoustmInputArrow";
import { ToDo } from "./components/ToDo/Todo";
import { insertChildren } from "./utils";

function App() {
  const toDo = useSelector((state) => state.toDo.items);

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

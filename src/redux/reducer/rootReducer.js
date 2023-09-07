import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";
const rootReducer = combineReducers({
  toDo: toDoReducer,
});
export default rootReducer;

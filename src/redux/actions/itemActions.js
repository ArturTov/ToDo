import { actions_types } from "../constants/action_type";

export const setToDO = (payload) => {
  return {
    type: actions_types.SET_TODO,
    payload,
  };
};
export const setItem = (payload) => {
  return {
    type: actions_types.NEW_TODO_ITEM,
    payload,
  };
};
export const setChangeToDoItem = (payload) => {
  return {
    type: actions_types.CHANGE_TODO_ITEM,
    payload,
  };
};
export const setDeleteItem = (payload) => {
  return {
    type: actions_types.DELETE_TODO,
    payload,
  };
};
export const add = (payload) => {
  return {
    type: actions_types.ADD,
    payload,
  };
};

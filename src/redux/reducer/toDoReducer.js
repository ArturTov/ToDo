import { actions_types } from "../constants/action_type";
const id = () => {
  return Math.random().toString();
};

export const toDoReducer = (
  state = {
    items: [
      {
        id: 101,
        name: "Shirts",
        parent_id: null,
      },
      {
        id: 102,
        name: "Scarves",
        parent_id: null,
      },
      {
        id: 103,
        name: "Jeans",
        parent_id: null,
      },
      {
        id: 1011,
        name: "Long Sleeve",
        parent_id: 101,
      },
      {
        id: 1012,
        name: "Short Sleeve",
        parent_id: 1011,
      },
      {
        id: 1031,
        name: "Wide leg",
        parent_id: 103,
      },
      {
        id: 10121,
        name: "Graphic tee",
        parent_id: 1012,
      },
      {
        id: 10122,
        name: "Button down",
        parent_id: 1012,
      },
    ],
  },
  { type, payload }
) => {
  switch (type) {
    case actions_types.SET_TODO:
      return {
        ...state,
        items: [
          {
            id: id(),
            name: payload,
            parent_id: null,
          },
          ...state.items,
        ],
      };
    case actions_types.CHANGE_TODO_ITEM:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              name: payload.name,
            };
          }
          return el;
        }),
      };
    case actions_types.NEW_TODO_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: id(),
            name: payload.name,
            parent_id: payload.id,
          },
        ],
      };
    case actions_types.DELETE_TODO:
      return {
        ...state,
        items: [
          ...state.items
            .filter((el) => el.id !== payload)
            .filter((el) => el.parent_id !== payload),
        ],
      };
    case actions_types.ADD:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

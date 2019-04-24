let nextTodoId = 0;

// Action Types
const ADD_TODO = "todo/ADD_TODO";
const SET_VISIBILITY_FILTER = "todo/SET_VISIBILITY_FILTER";
const TOGGLE_TODO = "todo/TOGGLE_TODO";

// Reducer
const initialState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state
  }
}

// Action Creators
export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

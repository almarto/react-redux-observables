import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import "rxjs";

import todosReducer from "../components/todos/todosReducer";
import counterReducer from "../components/counter/counterReducer";
import {
  incrementEpic,
  decrementEpic
} from "../components/counter/counterEpics";

const rootEpic = combineEpics(incrementEpic, decrementEpic);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer
});

const initialState = { todos: [], counter: 0 };

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;

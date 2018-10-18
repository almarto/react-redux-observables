import React, { Fragment } from "react";

import TodoContainer from "./components/todos/TodoContainer";
import AddTodo from "./components/todos/AddTodo";
import CounterContainer from "./components/counter/CounterContainer";

const App = () => (
  <Fragment>
    <h1>Hello World</h1>
    <CounterContainer />
    <AddTodo />
    <TodoContainer />
  </Fragment>
);

export default App;

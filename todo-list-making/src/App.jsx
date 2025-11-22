import React from "react";
import { TodoProvider } from "@/context/TodoContext";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import "./App.css";

const App = () => (
  <TodoProvider>
    <div>
      <h2>Professional To-Do List</h2>
      <AddTodo />
      <TodoList />
    </div>
  </TodoProvider>
);

export default App;

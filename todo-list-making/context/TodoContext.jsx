import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

const LOCAL_STORAGE_KEY = "todos";

const getInitialTodos = () => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const generateId = () => Date.now() + Math.random();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: generateId(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, toggleTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

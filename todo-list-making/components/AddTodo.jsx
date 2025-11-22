import React, { useState } from "react";
import { useTodos } from "@/context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new To-Do"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;

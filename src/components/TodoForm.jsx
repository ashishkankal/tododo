import React, { useState } from "react";
import { useDispatch } from "react-redux";

let nextTodoId = 0;
const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    text,
  },
});
const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="mb-2 flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) {
          return;
        }
        dispatch(addTodo(value));
        setValue("");
      }}
    >
      <input
        className="p-2 border rounded-md flex-1"
        value={value}
        placeholder="What do you want to do?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 border px-3 py-2 border-solid rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;

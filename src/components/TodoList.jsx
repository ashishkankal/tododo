import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";

const selectTodos = (state) => state.todo;

const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: {
    id,
  },
});

const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});

const clearTodos = (id) => ({
  type: "CLEAR_TODO",
});
const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearTodos());
    };
  }, [dispatch]);

  return (
    <div className="space-y-2">
      {todos.map((item) => (
        <div key={item.id} className="flex items-center">
          <TodoItem
            onClick={() => dispatch(completeTodo(item.id))}
            completed={item.completed}
            className="flex-1"
          >
            <AiOutlineCheckCircle className="mr-1" />
            {item.text}
          </TodoItem>
          <span
            className="flex h-full p-2 rounded-md cursor-pointer"
            onClick={() => dispatch(deleteTodo(item.id))}
          >
            <CiTrash size={20} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Page1 = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl text-center font-semibold mb-8">TODO App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Page1;

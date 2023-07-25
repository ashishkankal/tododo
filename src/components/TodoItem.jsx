import React from "react";
import cn from "classnames";
const TodoItem = ({ children, onClick, completed, className }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-2 border rounded-md flex items-center hover:shadow-md transition-all hover:cursor-pointer",
        className,
        completed && "line-through"
      )}
    >
      {children}
    </div>
  );
};

export default TodoItem;

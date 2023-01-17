import { Button } from "react-bootstrap";
import React from "react";
import TodoList from "./TodoList";

const TodoClear = ({ todos, removeTodos }) => {
  return (
    <div>
      {todos.length > 1 ? (
        <Button onClick={removeTodos} className="mt-4 d-block mx-auto btn-dark">
          Clear List
        </Button>
      ) : null}
    </div>
  );
};

export default TodoClear;

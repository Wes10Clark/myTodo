import React from "react";
import { Button } from "react-bootstrap";

const TodoList = ({ todo, removeTodo }) => {
  return (
    <div>
      <h2 className="bg-primary text-center">
        {todo.input}

        <Button className="" onClick={() => removeTodo(todo.id)}>
          X
        </Button>
      </h2>
    </div>
  );
};

export default TodoList;

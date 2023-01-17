import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTodo">
        <Form.Control
          className="mb-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
        />
      </Form.Group>
      <Button className="mx-auto mb-2 d-block" variant="dark" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}
export default TodoForm;

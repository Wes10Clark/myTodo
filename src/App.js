import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoClear from "./components/TodoClear";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, input: input };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const removeTodos = () => {
    setTodos([]);
  };
  const removeTodo = (id) => {
    let UpdatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(UpdatedTodos);
  };

  return (
    <div>
      <h1 className="text-center mt-5">Todo Tracker</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => {
          return <TodoList todo={todo} id={todo.id} removeTodo={removeTodo} />;
        })}
      </div>
      <TodoClear todos={todos} removeTodos={removeTodos} />
    </div>
  );
}

export default App;

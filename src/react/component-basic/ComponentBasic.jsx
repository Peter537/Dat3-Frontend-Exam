import { useState } from "react";
import TodoList from "./TodoList";

function ComponentBasic() {
  const [todos, setTodos] = useState([
    { task: "Complete assignment", completed: false },
    { task: "Make React project", completed: true },
  ]);

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default ComponentBasic;

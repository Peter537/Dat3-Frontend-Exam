/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo.task}
          completed={todo.completed}
          onToggle={() => toggleTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;

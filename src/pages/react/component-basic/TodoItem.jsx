/* eslint-disable react/prop-types */
function TodoItem({ task, completed, onToggle }) {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </span>
    </div>
  );
}

export default TodoItem;

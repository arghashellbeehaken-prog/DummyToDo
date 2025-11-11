function TodoItem({ todo, onDelete, onUpdate }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <div className="todo-actions">
        <button onClick={onUpdate} className="update-btn">
          Update
        </button>
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

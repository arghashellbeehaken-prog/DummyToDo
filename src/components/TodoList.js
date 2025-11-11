import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return <p>No todos yet! Add one above 👆</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onUpdate={() => onUpdate(todo)}
        />
      ))}
    </ul>
  );
}

export default TodoList;

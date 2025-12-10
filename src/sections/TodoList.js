import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { removeTodo } from "../actions/todoSlice";

const TodoList = ({ onUpdate }) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  if (!todos.length) return <p>No todos yet! Add one above 👆</p>;

  return (
    <ul className="todo-list">
      {todos.map(({ id, text }) => (
        <TodoItem
          key={id}
          text={text}
          onDelete={() => dispatch(removeTodo(id))}
          onUpdate={() => onUpdate({ id, text })}
        />
      ))}
    </ul>
  );
}

export default TodoList;

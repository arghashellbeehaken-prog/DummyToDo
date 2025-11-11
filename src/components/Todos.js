import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../actions/todoSlice";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState(null);

  const handleAdd = () => {
    setIsUpdateMode(false);
    setInput("");
    setShowModal(true);
  };

  const handleUpdate = (todo) => {
    setIsUpdateMode(true);
    setCurrentId(todo.id);
    setInput(todo.text);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (isUpdateMode) {
      dispatch(updateTodo({ id: currentId, text: input }));
    } else {
      dispatch(addTodo(input));
    }

    setShowModal(false);
    setInput("");
  };

  const handleDelete = (id) => dispatch(removeTodo(id));

  return (
    <div className="todos-container">
      <h1 className="heading">Todo List</h1>
      <button onClick={handleAdd} className="add-btn">
        + Add Todo
      </button>

      <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />

      {showModal && (
        <TodoModal
          isUpdateMode={isUpdateMode}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Todos;

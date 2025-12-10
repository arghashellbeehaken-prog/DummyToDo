import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../actions/todoSlice";
import TodoList from "./TodoList";
import TodoModal from "../components/TodoModal";
import { TODO_MAX_LENGTH } from "../utils/constants";

const Todos = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState(null);

  const handleAdd = () => {
    setCurrentId(null);
    setShowModal(true);
  };

  const handleUpdate = ({ id, text }) => {
    setCurrentId(id);
    setInput(text);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (currentId) {
      dispatch(updateTodo({ id: currentId, text: input }));
    } else {
      dispatch(addTodo(input));
    }

    setShowModal(false);
    setInput("");
    setCurrentId(null);
  };

  return (
    <div className="todos-container">
      <h1 className="heading">Todo List</h1>
      <button onClick={handleAdd} className="add-btn">
        + Add Todo
      </button>
      <TodoList onUpdate={handleUpdate} />
      {showModal && (
        <TodoModal
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
          maxLength={TODO_MAX_LENGTH}
        />
      )}
    </div>
  );
};

export default Todos;

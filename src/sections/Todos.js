import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../actions/todoSlice";
import TodoList from "./TodoList";
import TodoModal from "../components/TodoModal";

const Todos = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [currentId, setCurrentId] = useState(null);

  const closeModal = () => {
    setCurrentId(null);
    setInput("");
    setShowModal(false);
  };

  const handleUpdate = ({ id, text }) => {
    setCurrentId(id);
    setInput(text);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (currentId) dispatch(updateTodo({ id: currentId, text: input }));
    else dispatch(addTodo(input));

    closeModal();
  };

  return (
    <div className="todos-container">
      <h1 className="heading">Todo List</h1>

      <button onClick={() => setShowModal(true)} className="add-btn">
        + Add Todo
      </button>

      <TodoList onUpdate={handleUpdate} />

      {showModal && (
        <TodoModal
          input={input}
          id={currentId}
          setInput={setInput}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Todos;

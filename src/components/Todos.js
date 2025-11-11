import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, addTodo } from "../todo/todoSlice";

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

    dispatch(isUpdateMode ? updateTodo({ id: currentId, text: input }) : addTodo(input));

    setShowModal(false);
    setInput("");
  };

  return (
    <div className="todos-container">
      <h1 className="heading">Todo List</h1>
      <button onClick={handleAdd} className="add-btn">
        + Add Todo
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <div>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-btn">
                Delete
              </button>
              <button onClick={() => handleUpdate(todo)} className="update-btn">
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{isUpdateMode ? "Update Todo" : "Add New Todo"}</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter todo title"
                autoFocus
              />
              <div className="modal-actions">
                <button type="submit">{isUpdateMode ? "Update" : "Add"}</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todos;

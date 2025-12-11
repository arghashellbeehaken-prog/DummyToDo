import { TODO_MAX_LENGTH } from "../utils/constants";

const TodoModal = ({ input, id, setInput, onSubmit, onClose }) => {
  return (
    <div className="modal-overlay" onClick={() => onClose()}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>{id ? "Update Todo" : "Add New Todo"}</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo title"
            autoFocus
            maxLength={TODO_MAX_LENGTH}
          />
          <div className="modal-actions">
            <button type="submit">{id ? "Update" : "Add"}</button>
            <button type="button" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;

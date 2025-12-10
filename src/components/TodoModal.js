const TodoModal = ({ input, setInput, onSubmit, onClose, maxLength }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>{input ? "Update Todo" : "Add New Todo"}</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo title"
            autoFocus
            maxLength={maxLength}
          />
          <div className="modal-actions">
            <button type="submit">{input ? "Update" : "Add"}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;

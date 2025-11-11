function TodoModal({ isUpdateMode, input, setInput, onSubmit, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>{isUpdateMode ? "Update Todo" : "Add New Todo"}</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo title"
            autoFocus
          />
          <div className="modal-actions">
            <button type="submit">{isUpdateMode ? "Update" : "Add"}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;

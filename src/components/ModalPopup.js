const ModalPopup = ({ show, onClose, item }) => {
    if (!show) return null;
  
    return (
      <div>
        <div>
          <h2>New Entry Added</h2>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Description: {item.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default ModalPopup;
  
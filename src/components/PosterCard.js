const PosterCard = ({ item, onDelete }) => (
    <div>
      <h2>{item.name}</h2>
      <p>Age: {item.age}</p>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
  
  export default PosterCard;
  
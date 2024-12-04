import React, { useState } from "react";
import PosterForm from "./components/PosterForm";
import PosterList from "./components/PosterList";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardExample from './components/CardExample';

const App = () => {
  const [posters, setPosters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPoster, setNewPoster] = useState(null);


  const handleSubmit = (poster) => {
    const newPoster = { ...poster, id: Date.now() };
    setPosters([...posters, newPoster]);
    setNewPoster(newPoster);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setPosters(posters.filter((poster) => poster.id !== id));
  };

  return (
    <div>
      <div className="App">
        <CardExample />
      </div>
      <PosterForm onSubmit={handleSubmit} />
      <PosterList data={posters} onDelete={handleDelete} />
    </div>
  );
};

export default App;

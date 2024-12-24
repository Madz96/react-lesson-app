import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PosterDetails from '../../components/PosterDetails';  

const PostManager = ({ posters, onAddPoster, onSaveEdit, onDeletePoster }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false); 
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [posterName, setPosterName] = useState('');

  
  const handleShowModal = (poster) => {
    if (poster) {
      setPosterName(poster.title);
      setSelectedPoster(poster);
    } else {
      setPosterName('');
      setSelectedPoster(null);
    }
    setShowModal(true);
    setShowDetailsModal(false); 
  };

  const handleCloseModal = () => setShowModal(false);

  const handleShowDetailsModal = (poster) => {
    setSelectedPoster(poster);
    setShowDetailsModal(true); 
    setShowModal(false); 
  };

  const handleCloseDetailsModal = () => setShowDetailsModal(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoster = { id: selectedPoster ? selectedPoster.id : Date.now(), title: posterName };
    
    if (selectedPoster) {
      onSaveEdit(newPoster);
    } else {
      onAddPoster(newPoster);
    }

    setShowModal(false); 
  };

  return (
    <div>
      <h1>Manage Posters</h1>
      <div>
        <button onClick={() => handleShowModal(null)}>Add Poster</button>
      </div>
      <div>
        {posters.map((poster) => (
          <div key={poster.id}>
            <h3>{poster.title}</h3>
            <button onClick={() => handleShowModal(poster)}>Edit</button>
            <button onClick={() => onDeletePoster(poster.id)}>Delete</button>
            <button onClick={() => handleShowDetailsModal(poster)}>View Details</button>
          </div>
        ))}
      </div>

     
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPoster ? 'Edit Poster' : 'Add Poster'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="posterName">
              <Form.Label>Poster Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Poster Title"
                value={posterName}
                onChange={(e) => setPosterName(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                {selectedPoster ? 'Save Changes' : 'Add Poster'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

    
      {showDetailsModal && selectedPoster && (
        <Modal show={true} onHide={handleCloseDetailsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Poster Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PosterDetails poster={selectedPoster} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetailsModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default PostManager;

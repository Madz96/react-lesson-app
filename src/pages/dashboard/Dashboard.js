import React, { useState } from 'react'
import { usePostList } from "../../containers/PostListContext";
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import GNeuro from '../../../src/assets/GNeuro.jpg'
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
    const {postData} = usePostList();
    const totalPosts = postData.length;
    const lastPost = postData[postData.length - 1];
    const [show, setShow] = useState(false);
    const postContent = postData.Content;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString(); 
  };

  const postContent1 = () => {
    <Card>
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
      <img src={GNeuro} alt="GNeuro" style={{ width: "200px", height: "auto", borderRadius: "50%"}} />
        <h1 style={{ margin: 0 }}>Welcome to the Posts Statistics Page!</h1> 
        </div>

      

       
        <br></br>
        <br></br>
<center>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Posts!</Accordion.Header>
        <Accordion.Body>
        
  
      <>
      <Button variant="primary" onClick={handleShow}>Click Here to Read the Newest Posts! <Badge bg="secondary">{totalPosts}</Badge>
      <span className="visually-hidden"></span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "grey", color: "white" }}>
          <Modal.Title>Today's Posts!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>{postData.length > 0 ? (
                                <div style={{ marginTop: "20px" }}>
                                  <ListGroup>
                                    {postData.map((post, index) => (
                                        <div key={index} style={{ marginBottom: "10px" }}>
                                          <ListGroup.Item><h6>Post No:{post.id}</h6></ListGroup.Item>
                                          <ListGroup.Item> <h5>{post.Title}</h5></ListGroup.Item>
                                          <ListGroup.Item> <p>{post.Content}</p></ListGroup.Item>
                                          <ListGroup.Item><small>Created: {formatTimestamp(post.createdTime)}</small></ListGroup.Item>
                                          <ListGroup.Item action onClick={postContent1}>See this Post!</ListGroup.Item>
                                        </div>
                                    ))}</ListGroup></div>
                                  ) : (
                                      <p>No posts available.</p>
                                  )}</Modal.Body>
        <Modal.Footer style={{ backgroundColor: "lightgrey", color: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>

        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Latest Post</Accordion.Header>
        <Accordion.Body>
        {lastPost && (
          <>
            <h3>{lastPost.Title}</h3>
            <p>{lastPost.Content}</p>
            <small>Created: {formatTimestamp(lastPost.createdTime)}</small>
          </>
        )}
         </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </center>

        </div>
  );
};

export default Dashboard;

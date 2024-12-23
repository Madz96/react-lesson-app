import React, { useState } from 'react'
import { usePostList } from "../../containers/PostListContext";
import Accordion from 'react-bootstrap/Accordion';

const Dashboard = () => {
    const {postData} = usePostList();
    const totalPosts = postData.length;
    const lastPost = postData[postData.length - 1];

  return (
    <div>
      <br></br>
      <br></br>
        <h1>WELCOME TO GNEURO ENGINEERING (PVT) LTD!</h1>
        <br></br>
        <br></br>
<center>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Total Post Count</Accordion.Header>
        <Accordion.Body>
        <p>Total Posts: {totalPosts}</p>
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Last Post</Accordion.Header>
        <Accordion.Body>
        {lastPost && (
          <>
            <h3>{lastPost.Title}</h3>
            <p>{lastPost.Content}</p>
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

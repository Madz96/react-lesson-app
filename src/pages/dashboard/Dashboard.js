import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { usePostList } from "../../containers/PostListContext";
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import GNeuro from '../../../src/assets/GNeuro.jpg';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { postData } = usePostList();
    const totalPosts = postData.length;
    const lastPost = postData[postData.length - 1];
    const [show, setShow] = useState(false);
    const postContent = JSON.stringify(postData);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    const postContent1 = () => {
        alert(postContent);
    };

    // Prepare data for the bar chart
    const chartData = {
        labels: postData.map((post, index) => `Post ${index + 1}`),
        datasets: [
            {
                label: 'Number of Posts',
                data: postData.map(() => 1), // Example: 1 post per label
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Post Statistics',
            },
        },
    };

    return (
        <div>
            <br />
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
                <img src={GNeuro} alt="GNeuro" style={{ width: "200px", height: "auto", borderRadius: "50%" }} />
                <h1 style={{ margin: 0 }}>Welcome to the Posts Statistics Page!</h1>
            </div>
            <br />
            <br />
            <center>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Posts!</Accordion.Header>
                        <Accordion.Body>
                            <>
                                <Button variant="primary" onClick={handleShow}>
                                    Click Here to Read the Newest Posts! <Badge bg="secondary">{totalPosts}</Badge>
                                    <span className="visually-hidden"></span>
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton style={{ backgroundColor: "grey", color: "white" }}>
                                        <Modal.Title>Today's Posts!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
                                        {postData.length > 0 ? (
                                            <div style={{ marginTop: "20px" }}>
                                                <ListGroup>
                                                    {postData.map((post, index) => (
                                                        <div key={index} style={{ marginBottom: "10px" }}>
                                                            <ListGroup.Item><h6>Post No: {post.id}</h6></ListGroup.Item>
                                                            <ListGroup.Item><h5>{post.Title}</h5></ListGroup.Item>
                                                            <ListGroup.Item><p>{post.Content}</p></ListGroup.Item>
                                                            <ListGroup.Item><small>Created: {formatTimestamp(post.createdTime)}</small></ListGroup.Item>
                                                            <ListGroup.Item action onClick={postContent1}>See this Post in JSON format!</ListGroup.Item>
                                                        </div>
                                                    ))}
                                                </ListGroup>
                                            </div>
                                        ) : (
                                            <p>No posts available.</p>
                                        )}
                                    </Modal.Body>
                                    <Modal.Footer style={{ backgroundColor: "lightgrey", color: "white" }}>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                    <br />
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
                    <br />
                    <br />
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Post Statistics</Accordion.Header>
                        <Accordion.Body>
                            <Bar data={chartData} options={chartOptions} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </center>
        </div>
    );
};

export default Dashboard;

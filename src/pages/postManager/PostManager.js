import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePostList } from "../../containers/PostListContext";



const PostManager = () => {
    const {postData} = usePostList();
    const totalPosts = postData.length;
    const lastPost = postData[postData.length - 1];


    return (
        <div>
        <h1>GNEURO ENGINEERING (PVT) LTD!</h1>
     
        <p>Total Posts: {totalPosts}</p>

        <h2>Last Post</h2>
        {lastPost && (
          <>
            <h3>{lastPost.Title}</h3>
            <p>{lastPost.Content}</p>
          </>
        )}

        </div>
    )
}

export default PostManager;
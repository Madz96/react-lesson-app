import { useState, useContext, createContext, useMemo } from 'react';

export const PostListContext = createContext();

const PostListProvider = ({ children, ...props }) => {
   const [postData, setPostData] = useState(
      JSON.parse(localStorage.getItem('posts')) || []
   );

   const values = useMemo(
      () => ({
         postData,
         setPostData,
      }),
      [postData]
   );

   return (
      <PostListContext.Provider value={values}>
         {children}
      </PostListContext.Provider>
   );
};

export const usePostList = () => {
   return useContext(PostListContext);
};

export default PostListProvider;

import { useState, useEffect, useContext, createContext, useMemo } from "react";

export const PostListContext = createContext();

const PostListProvider = ({ children, ...props }) => {
  const [postData, setPostData] = useState([
    {
        id: 1,
        Name: "Post1",
        Title: "GNeuro Constructions - Aluminium",
        Content: "GNeuro Aluminium works: Aluminium, Windows, Glass, Shop Fronts, Shower Cubicles"

  },
  {
    id: 2,
    Name: "Post2",
    Title: "GNeuro Constructions - Roller Doors",
    Content: "GNeuro Roller Doors works: Manual Roller Doors, Remote Roller Doors, Roller Shutters"

},

{
    id: 3,
    Name: "Post3",
    Title: "GNeuro IT Services",
    Content: "GNeuro IT works: Software Engineering, Network and Network Security Engineering, Cyber Security and Automation"

},
]);



const values = useMemo(
    () => ({
      postData,
      setPostData
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

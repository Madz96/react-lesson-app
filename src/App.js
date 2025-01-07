import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import MainLayout from './wrappers/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import PostManager from './pages/postManager/PostManager';
import PostListProvider from "./containers/PostListContext.js";

import { routeHelper } from './helpers/routeHelper';

import { addPoster, saveEdit, deletePoster } from './services/posterServices';

import './App.css';

const App = () => {
   const [posters, setPosters] = useState(JSON.parse(localStorage.getItem('posts')) || []);
   const [currentPoster, setCurrentPoster] = useState(null);

   const handleAddPoster = (newPoster) => {
      setPosters(addPoster(posters, newPoster));
   };

   const handleEditPoster = (posterToEdit) => {
      setCurrentPoster(posterToEdit);
   };

   const handleSaveEdit = (updatedPoster) => {
      setPosters(saveEdit(posters, updatedPoster));
      setCurrentPoster(null);
   };

   const handleDeletePoster = (id) => {
      setPosters(deletePoster(posters, id));
   };

   return (
      <BrowserRouter>
         <Routes>
          <Route element={<MainLayout />}>
               <Route
                  path={routeHelper.DASHBOARD.PATH}
                  element={<PostListProvider><Dashboard /></PostListProvider>}
               />
               <Route
                  path={routeHelper.POST_MANAGER.PATH}
                  element={
                     <PostManager
                        posters={posters}
                        currentPoster={currentPoster}
                        onAddPoster={handleAddPoster}
                        onEditPoster={handleEditPoster}
                        onSaveEdit={handleSaveEdit}
                        onDeletePoster={handleDeletePoster}
                     />
                  }
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;

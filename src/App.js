import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './wrappers/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import PostManager from './pages/postManager/PostManager';
import PostListProvider from "./containers/PostListContext.js";

import { routeHelper } from './helpers/routeHelper';

import './App.css';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
               <Route
                  path={routeHelper.DASHBOARD.PATH}
                  element={<Dashboard />}
               />
         
               <Route
                  path={routeHelper.POST_MANAGER.PATH}
                  element={<PostManager />}
               />
                

   
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;

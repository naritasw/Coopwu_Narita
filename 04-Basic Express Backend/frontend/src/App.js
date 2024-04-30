import React from "react";
import CreateOneUser from './views/CreateUser';
import UserList from './views/UserList';
import DetailUser from './views/DetailUser';

import './App.css';


import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";

function App() {
  return (
   <div>
      <BrowserRouter basename='/'>
        <Topbar appTitle='IARC Devboard' />{" "}
        <Routes>
          <Route path='/create' element={<CreateOneUser />} />
          <Route path='/' element={<UserList />} />
          <Route path='/detail/:id' element={<DetailUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
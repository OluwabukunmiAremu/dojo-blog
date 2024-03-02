import React from 'react'

import Navbar from './navbar';
import Home from './Home'
import Create from './create'
import BlogDetails from './BlogDetails';

import { Routes, Route } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="create" element={<Create />} />
          <Route path='*' element= {<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

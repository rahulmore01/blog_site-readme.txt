import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";
import Write from "./Components/Write";
import Login from "./Components/Login";
import Register from "./Components/Register";
import SingleHomePost from "./Components/SingleHomePost";
import React from 'react'
import { BrowserRouter as Router ,Routes, Route,Link, BrowserRouter } from "react-router-dom";

function App() {
// if user logged in succesfully then no need to show him register page even if he clicks register.(true means user logged in)
  const user =true;
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/register" element={user ?  <Register /> : <Home/>} />
      </Routes>

      <Routes>
      <Route path="/login" element={user ?  <Login /> : <Home/>} />
      </Routes>

      <Routes>
        <Route path="/Settings" element={user ? <Settings /> : <Register/>} />
      </Routes>

      <Routes>
        <Route path="/write" element={user? <Write /> : <Register/>} />
      </Routes>
{/* no conditions because visitors should be able to only see the post */}
      <Routes>
        <Route path="/SingleHomePost/:PostId" element={<SingleHomePost />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


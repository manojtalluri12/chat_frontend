import React from "react";
import Register from "./components/Page/Register";
import Login from "./components/Page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Page/Navbar";
import { TodoProvider } from "./TodoProvider.js/TodoProvider";
import Profile from "./components/Profile/Profile";
import Home from "./components/Page/Home";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer";
import NotFound from "./components/Page/NotFound";
import { ToastContainer, toast } from 'react-toastify';
import { ColorTheme } from "./ColorTheme/ColorTheme";
const App = () => {
  return (
      <BrowserRouter>
       <ColorTheme>
        <TodoProvider>
        <Navbar />
        <hr></hr>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/chat" element={<Todo />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <ToastContainer/>
        <hr></hr>
        <Footer/>
        </TodoProvider>
        </ColorTheme>
      </BrowserRouter>
  
  );
};

export default App;

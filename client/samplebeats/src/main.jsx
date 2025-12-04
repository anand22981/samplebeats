import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Blog from './pages/Blog.jsx';
import Samples from './pages/Samples.jsx';
import Contacts from "./pages/Contacts.jsx";
import Sigin from './Auth/Sigin.jsx'
import Signup from "./Auth/Signup.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Blogs" element ={<Blog/>}/>
      <Route path="/Samples" element ={<Samples/>}/>
      <Route path="/Contacts" element ={<Contacts/>}/>
      <Route path ="/Sigin" element ={<Sigin/>}/>
      <Route path ="/Signup" element ={<Signup/>}/>
    </Routes>
  </BrowserRouter>
);

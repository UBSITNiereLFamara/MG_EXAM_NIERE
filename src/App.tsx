import { useState, useRef, ChangeEvent,  FormEvent,} from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedback";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
     
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/BookRequest" element={<BookRequest/>}/>
      <Route path="/EventFeedback" element={<EventFeedback/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

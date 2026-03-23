import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import EventFeedback from "./pages/EventFeedback";

function App() {
  return (
    <Router>
      <NavBar />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-request" element={<BookRequest />} />
          <Route path="/event-feedback" element={<EventFeedback />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

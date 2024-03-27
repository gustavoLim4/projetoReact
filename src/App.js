import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Project from "./components/pages/Project";


function App() {
  return (
    <Router>
     
      <NavBar/>

      <Container customClass = "min-height">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

      </Container>

      <Footer/>

    </Router>
    
  );
}

export default App;

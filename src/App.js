import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Project from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Projectores from "./components/pages/Projectores";

function App() {
  return (
    <Router>
     
      <NavBar/>

      <Container customClass = "min-height">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectores/:id" element={<Projectores />} />
        </Routes>

      </Container>

      <Footer/>

    </Router>
    
  );
}

export default App;

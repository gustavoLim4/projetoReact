import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../Project/ProjectCard";
import { useState, useEffect } from "react";
import Load from "../layout/Load"

function Projects() {
  const [Projects, setProjects] = useState([]);
  const [removeLoad , setRemoveLoad] = useState (false)
  const [projetcMessage, setProjectsMessage] = useState ('')
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }


  useEffect(() => {
    setTimeout (() => {
      fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveLoad(true)
      })
      .catch((err) => console.log(err));
    }, 1000)
  }, []);

  function removeProject (id) {
    fetch(`http://localhost:5000/projects/${id}`, {
  method:"DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  }).then(resp => resp.json())
  .then(data => {
    setProjects(Projects.filter((project) => project.id !== id))
    setProjectsMessage ('Projeto removido com sucesso!')
  })
.catch(err => console.log(err))

  }

  return (
    <div className={styles.porject_container}>
      <div className={styles.title_container}>
        <h1 className={styles.projetos}>
          {" "}
          Meus <span>Projetos</span>
        </h1>
        <LinkButton to="/project " text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projetcMessage && <Message type="success" msg={message} />}
      <Container customClass="start">
        {Projects.length > 0 && Projects.map((project) =>

         <ProjectCard 
          id = {project.id}
          name={project.name}
          budget={project.budget} 
          category={project.category.name}
          key={project.id}
          handleRemove={removeProject}
         
         />)}
          {!removeLoad && <Load/>}
          {removeLoad && Projects.length === 0 && (
            <p>Não há projetos cadastrados...</p>
          )}
      </Container>
    </div>
  );
}

export default Projects;

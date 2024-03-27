import {useNavigate } from 'react-router-dom'
import styles from "./Project.module.css";
import ProjectForm from "../Project/ProjectForm";
function Project() {

  const navigate = useNavigate();

  function createPost (project) {

    //intialize conts and service
    project.cost = 0
    project.services = []

    fetch ("http://localhost:5000/projects" , {
      method : "POST",
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      navigate('/projects', { state: { message: 'Projeto criado com sucesso' }, });
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newprojet_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços </p>
      <ProjectForm handleSubmit= {createPost} btnText= "Criar projeto"/>
    </div>
  );
}

export default Project;

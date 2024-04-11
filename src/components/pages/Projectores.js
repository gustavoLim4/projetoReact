import styles from "./Projectores.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Load from "../layout/Load";
import Container from "../layout/Container";
import ProjectForm from "../Project/ProjectForm";

function Projectores() {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log);
    }, 300);
  }, [id]);

  function ediPost(project) {
    //budget validation
    if(project.budget < project.cost) {

    }

    fetch(`http://localhost:5000/projects/${project.id}` , {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then((data) => {

      setProject(data)
      setShowProjectForm(false)
      //mensagem
    })
    .catch(err => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.projectores_details}>
          <Container customClass="colum">
            <div className={styles.details_container}>
              <h1>Projeto : {project.name}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm ? "Editar Projetos" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.projectores_info}>
                  <p>
                    <span>Categoria:</span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span>
                    R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span>
                    R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projectores_info}>
                  <ProjectForm
                    handleSubmit ={ediPost}
                    btnText="Concluir edição"
                    projectData ={ project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}

export default Projectores;

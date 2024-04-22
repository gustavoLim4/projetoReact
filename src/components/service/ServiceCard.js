import styles from "../Project/ProjectCard.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id , cost)
  };
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total :</span> R$ {cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_action}>
        <button onClick={remove}>
          <FaRegTrashAlt />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;

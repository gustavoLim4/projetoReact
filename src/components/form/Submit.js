import styles from "./Submit.module.css";

function Submit({ text }) {
  return (
    <div >
        <buttom className = {styles.btn}>{text}</buttom>
    </div>
  );
}
export default Submit;
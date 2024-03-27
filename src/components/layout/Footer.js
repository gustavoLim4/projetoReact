import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li className= {styles.face}>
          <FaFacebook />
        </li>
        <li className={styles.insta}>
          <FaInstagram />
        </li>
        <li className={styles.linkedin}>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.costs}>
        <span>Costs </span>
          &copy; 2021
      </p>
    </footer>
  );
}

export default Footer;

import styles from "./Footer.module.css";
import logo from "../../assets/github-mark-white.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="" />
        <a href="https://github.com/hangodek/project_Notes/commits/main/">
          hangodek - Click here to see the commit log
        </a>
      </footer>
    </>
  );
}

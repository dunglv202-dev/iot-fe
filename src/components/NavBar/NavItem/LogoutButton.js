import styles from "./NavItem.module.css";

function LogoutButton({ label, icon }) {
  return (
    <li className={styles["nav-item"]}>
      <div className={styles["icon"]}>{icon}</div>
      <span className={styles["label"]}>{label}</span>
    </li>
  );
}

export default LogoutButton;

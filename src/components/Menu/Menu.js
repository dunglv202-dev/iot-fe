import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Menu.module.css";
import { useState } from "react";

function Menu() {
  const [darkmode, setDarkmode] = useState(false);

  const swithThemeMode = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <div className={styles["menu"]}>
      <SearchBox />
      <div onClick={swithThemeMode}>
        {darkmode ? (
          <LightModeIcon className={`${styles["theme-btn"]} ${styles["light"]}`} />
        ) : (
          <DarkModeIcon className={`${styles["theme-btn"]} ${styles["dark"]}`} />
        )}
      </div>
    </div>
  );
}

export default Menu;

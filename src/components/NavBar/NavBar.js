import NavItem from "./NavItem/NavItem";
import styles from "./NavBar.module.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import WifiTetheringErrorIcon from "@mui/icons-material/WifiTetheringError";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutButton from "./NavItem/LogoutButton";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import Card from "../Ui/Card";

function NavBar() {
  return (
    <Card className={styles["nav-bar"]}>
      <nav>
        <ul>
          <div className={styles["nav-head"]}>
            <NavItem label="Homepage" path="" icon={<OtherHousesIcon />} />
          </div>
          <div className={styles["nav-main"]}>
            <NavItem label="Dashboard" path="dashboard" icon={<BarChartIcon />} />
            <NavItem label="Profile" path="profile" icon={<AccountCircleIcon />} />
            <NavItem label="Sensor Data" path="data" icon={<WifiTetheringErrorIcon />} />
            <NavItem label="History" path="history" icon={<HistoryIcon />} />
          </div>
          <div className={styles["nav-end"]}>
            <LogoutButton label="Logout" icon={<LogoutIcon />} />
          </div>
        </ul>
      </nav>
    </Card>
  );
}

export default NavBar;

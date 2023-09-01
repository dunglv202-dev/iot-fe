import Chart from "../components/Chart/Chart";
import DeviceControl from "../components/DeviceControl/DeviceControl";
import StatCard from "../components/StatCard/StatCard";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import styles from "./Dashboard.module.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { PiFanLight, PiFanFill, PiLightbulbFilamentLight, PiLightbulbFilamentFill } from "react-icons/pi";

function DashboardPage() {
  return (
    <div id={styles["content"]}>
      <WelcomeCard />
      <StatCard label="Temperature" value="22" unit="degree" />
      <StatCard label="Humidity" value="92" unit="percent" />
      <StatCard label="Lighting" value="50,000" unit="lux" />
      <Chart />
      <DeviceControl
        label="Led"
        offIcon={<PiLightbulbFilamentLight />}
        onIcon={<PiLightbulbFilamentFill className={styles["bulb-on"]} />}
      />
      <DeviceControl
        label="Fan"
        offIcon={<PiFanLight className={styles["fan-off"]} />}
        onIcon={<PiFanFill className={styles["fan-on"]} />}
      />
    </div>
  );
}

export default DashboardPage;

import { PiFanFill, PiFanLight, PiLightbulbFilamentFill, PiLightbulbFilamentLight } from "react-icons/pi";
import { CiTempHigh } from "react-icons/ci";
import { BsDroplet, BsSun } from "react-icons/bs";
import Chart from "../components/Chart/Chart";
import DeviceControl from "../components/DeviceControl/DeviceControl";
import Menu from "../components/Menu/Menu";
import StatCard from "../components/StatCard/StatCard";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import styles from "./Dashboard.module.css";

function DashboardPage() {
  return (
    <div id={styles["content"]}>
      <Menu />
      <WelcomeCard />
      <StatCard label="Temperature" icon={<CiTempHigh fontSize={46} />} value="22" unit="degree" />
      <StatCard label="Humidity" icon={<BsDroplet fontSize={38} />} value="92" unit="percent" />
      <StatCard label="Lighting" icon={<BsSun fontSize={38} />} value="50,000" unit="lux" />
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

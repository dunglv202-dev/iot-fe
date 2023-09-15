import { useState } from "react";
import { BsDroplet, BsSun } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { PiFanFill, PiFanLight, PiLightbulbFilamentFill, PiLightbulbFilamentLight } from "react-icons/pi";
import Chart from "../components/Chart/Chart";
import DeviceControl from "../components/DeviceControl/DeviceControl";
import Menu from "../components/Menu/Menu";
import StatCard from "../components/StatCard/StatCard";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import useWebsocket from "../hooks/useWebsocket";
import styles from "./Dashboard.module.css";

function DashboardPage() {
  const [sensorData, setSensorData] = useState({ temperature: "-", humidity: "-" });
  const client = useWebsocket("ws://localhost:8080/websocket");
  client.onConnect = () => {
    client.subscribe("/topic/dht", (message) => {
      setSensorData(JSON.parse(message.body));
    });
  };

  return (
    <div id={styles["content"]}>
      <Menu />
      <WelcomeCard />
      <StatCard label="Temperature" icon={<CiTempHigh fontSize={46} />} value={sensorData.temperature} unit="degree" />
      <StatCard label="Humidity" icon={<BsDroplet fontSize={38} />} value={sensorData.humidity} unit="percent" />
      <StatCard label="Lighting" icon={<BsSun fontSize={38} />} value="50,000" unit="lux" />
      <Chart />
      <DeviceControl
        label="Led"
        deviceId="led"
        offIcon={<PiLightbulbFilamentLight />}
        onIcon={<PiLightbulbFilamentFill className={styles["bulb-on"]} />}
      />
      <DeviceControl
        label="Fan"
        deviceId="fan"
        offIcon={<PiFanLight className={styles["fan-off"]} />}
        onIcon={<PiFanFill className={styles["fan-on"]} />}
      />
    </div>
  );
}

export default DashboardPage;

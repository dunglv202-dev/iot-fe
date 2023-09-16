import { useState } from "react";
import { CiTempHigh } from "react-icons/ci";
import { PiFanFill, PiFanLight, PiLightbulbFilamentFill, PiLightbulbFilamentLight } from "react-icons/pi";
import { BsDroplet, BsSun } from "react-icons/bs";
import Chart from "../components/Chart/Chart";
import DeviceControl from "../components/DeviceControl/DeviceControl";
import Menu from "../components/Menu/Menu";
import StatCard from "../components/StatCard/StatCard";
import useWebsocket from "../hooks/useWebsocket";
import styles from "./Dashboard.module.css";

const MAX_CHART_POINT = 20;
const tempConfig = {
  low: 18,
  high: 30,
};
const humidConfig = {
  low: 70,
  high: 90,
};
const lightConfig = {
  low: 100,
  high: 200,
};
const chartData = {
  labels: [],
  data: [],
};

function DashboardPage() {
  const [sensorData, setSensorData] = useState({ temperature: "-", humidity: "-" });
  const client = useWebsocket("ws://localhost:8080/websocket");
  client.onConnect = () => {
    client.subscribe("/topic/dht", (message) => {
      let receivedData = JSON.parse(message.body);
      setSensorData(receivedData);
      // chartData.labels.shift();
      console.log(receivedData.timestamp);
      chartData.labels.push(
        new Intl.DateTimeFormat("en", {
          timeStyle: "medium",
        }).format(new Date(receivedData.timestamp))
      );
      // chartData.data.shift();
      chartData.data.push(receivedData);
      chartData.labels = chartData.labels.slice(-MAX_CHART_POINT);
      chartData.data = chartData.data.slice(-MAX_CHART_POINT);
    });
  };

  return (
    <div id={styles["content"]}>
      <Menu />
      <StatCard
        label="Temperature"
        config={tempConfig}
        icon={<CiTempHigh fontSize={46} />}
        value={sensorData.temperature}
        unit="degree"
      />
      <StatCard
        label="Humidity"
        config={humidConfig}
        icon={<BsDroplet fontSize={38} />}
        value={sensorData.humidity}
        unit="percent"
      />
      <StatCard label="Lighting" config={lightConfig} icon={<BsSun fontSize={38} />} value={120} unit="lux" />
      <Chart {...chartData} />
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

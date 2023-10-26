import { useEffect, useState } from "react";
import { CiTempHigh } from "react-icons/ci";
import {
  PiFanFill,
  PiFanLight,
  PiLightbulbFilamentFill,
  PiLightbulbFilamentLight,
  PiWarningLight,
  PiWarningFill,
} from "react-icons/pi";
import { SiSonarcloud } from "react-icons/si";
import { BsDroplet, BsSun } from "react-icons/bs";
import Chart from "../components/Chart/Chart";
import DeviceControl from "../components/DeviceControl/DeviceControl";
import Menu from "../components/Menu/Menu";
import StatCard from "../components/StatCard/StatCard";
import useWebsocket from "../hooks/useWebsocket";
import styles from "./Dashboard.module.css";
import DeviceState from "../components/DeviceState/DeviceState";

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
  high: 1000,
};
const dustConfig = {
  low: 20,
  high: 80,
};

function DashboardPage() {
  const [sensorData, setSensorData] = useState({ temperature: "-", humidity: "-", lighting: "-", dustLevel: "-" });
  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });
  const client = useWebsocket("ws://localhost:8080/websocket");
  client.onConnect = () => {
    client.subscribe("/topic/dht", (message) => {
      let receivedData = JSON.parse(message.body);
      setSensorData(receivedData);
      // chartData.labels.shift();
      let newChartData = { ...chartData };
      newChartData.labels.push(
        new Intl.DateTimeFormat("en", {
          timeStyle: "medium",
        }).format(new Date(receivedData.timestamp))
      );
      // chartData.data.shift();
      newChartData.data.push(receivedData);
      newChartData.labels = chartData.labels.slice(-MAX_CHART_POINT);
      newChartData.data = chartData.data.slice(-MAX_CHART_POINT);
      setChartData(newChartData);
    });
  };

  useEffect(() => {
    async function fetchHistory() {
      let resp = await fetch("http://localhost:8080/api/sensor/history").then((res) => res.json());
      setChartData({
        labels: resp.data.map((h) =>
          new Intl.DateTimeFormat("en", {
            timeStyle: "medium",
          }).format(new Date(h.timestamp))
        ),
        data: resp.data.map((h) => ({ temperature: h.temperature, humidity: h.humidity, lighting: h.lighting })),
      });
    }
    fetchHistory();
  }, []);

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
      <StatCard
        label="Lighting"
        config={lightConfig}
        icon={<BsSun fontSize={38} />}
        value={sensorData.lighting}
        unit="lux"
      />
      <StatCard
        label="Dust"
        config={dustConfig}
        icon={<SiSonarcloud fontSize={38} />}
        value={sensorData.dustLevel}
        unit="percent"
      />
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
      <DeviceState
        deviceId="warning_led"
        offIcon={<PiWarningLight />}
        onIcon={<PiWarningFill className={styles["warning-on"]} />}
      />
    </div>
  );
}

export default DashboardPage;

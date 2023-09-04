import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "../Ui/Card";
import styles from "./Chart.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    temperature: {
      type: "linear",
      display: true,
      ticks: {
        display: false,
      },
    },
    humidity: {
      type: "linear",
      display: false,
    },
    lighting: {
      type: "linear",
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Temperature",
      data: labels.map(() => Math.random() * 22 + 18),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "temperature",
    },
    {
      label: "Humidity",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "humidity",
    },
    {
      label: "Lighting",
      data: labels.map(() => Math.random() * 100_000 + 50_000),
      borderColor: "rgb(255, 214, 68)",
      backgroundColor: "rgba(255, 214, 68, 0.5)",
      yAxisID: "lighting",
    },
  ],
};

function Chart() {
  return (
    <Card className={styles["chart"]}>
      <Line options={options} data={data} />
    </Card>
  );
}

export default Chart;

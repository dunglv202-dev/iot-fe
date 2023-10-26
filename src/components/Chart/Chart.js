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
      suggestedMin: 25,
      suggestedMax: 40,
    },
    humidity: {
      type: "linear",
      display: false,
      suggestedMin: 50,
      suggestedMax: 85,
    },
    lighting: {
      type: "linear",
      display: false,
      suggestedMin: 100,
      suggestedMax: 150,
    },
    dustLevel: {
      type: "linear",
      display: false,
      suggestedMin: 50,
      suggestedMax: 90,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};

function Chart({ labels, data }) {
  const datasets = [
    {
      label: "Temperature",
      data: data.map((record) => record.temperature),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "temperature",
    },
    {
      label: "Humidity",
      data: data.map((record) => record.humidity),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "humidity",
    },
    {
      label: "Lighting",
      data: data.map((record) => record.lighting),
      borderColor: "rgb(255, 214, 68)",
      backgroundColor: "rgba(255, 214, 68, 0.5)",
      yAxisID: "lighting",
    },
    {
      label: "Dust Level",
      data: data.map((record) => record.dustLevel),
      borderColor: "rgb(137, 151, 169)",
      backgroundColor: "rgba(137, 151, 169, 0.5)",
      yAxisID: "dustLevel",
    },
  ];

  return (
    <Card className={styles["chart"]}>
      <Line options={options} data={{ labels, datasets }} />
    </Card>
  );
}

export default Chart;

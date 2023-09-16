import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/DateFormatter";
import styles from "../../components/Table/Table.module.css";

function SensorDataPage() {
  const [sensorDataHistory, setSensorDataHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      let history = await await fetch("http://localhost:8080/api/sensor/history").then((res) => res.json());
      setSensorDataHistory(history);
    }
    fetchHistory();
  }, []);

  return (
    <>
      <div className={styles["header"]}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="From" />
          <DatePicker label="To" />
        </LocalizationProvider>
        <Button>Filter</Button>
      </div>
      <Table>
        <TableHead className={styles["table__head"]}>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Lighting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles["table__body"]}>
          {sensorDataHistory.map((history) => (
            <TableRow key={history.timestamp}>
              <TableCell>{formatDate(new Date(history.timestamp))}</TableCell>
              <TableCell>{history.temperature}°C</TableCell>
              <TableCell>{history.humidity}%</TableCell>
              <TableCell>{history.lighting} lux</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default SensorDataPage;

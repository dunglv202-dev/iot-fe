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
import pagination from "../../components/Pagination/Pagination.module.css";
import { Pagination } from "@mui/material";

function SensorDataPage() {
  const [sensorDataHistory, setSensorDataHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleChange = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function fetchHistory() {
      let resp = await fetch(`http://localhost:8080/api/sensor/history?page=${page - 1}`).then((res) => res.json());
      setSensorDataHistory(resp.data);
      setTotalPage(resp.totalPage);
    }
    fetchHistory();
  }, [page, totalPage]);

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
            <TableCell>Temperature</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Lighting</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles["table__body"]}>
          {sensorDataHistory.map((history) => (
            <TableRow key={history.timestamp}>
              <TableCell>{history.temperature}°C</TableCell>
              <TableCell>{history.humidity}%</TableCell>
              <TableCell>{history.lighting} lux</TableCell>
              <TableCell>{formatDate(new Date(history.timestamp))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={pagination["pagination"]}>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </div>
    </>
  );
}

export default SensorDataPage;

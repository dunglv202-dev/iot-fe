import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../../components/Button/Button";
import styles from "./SensorData.module.css";

function SensorDataPage() {
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
          <TableRow>
            <TableCell>now</TableCell>
            <TableCell>20 degree</TableCell>
            <TableCell>90%</TableCell>
            <TableCell>50000 lux</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default SensorDataPage;

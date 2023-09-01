import Card from "../Ui/Card";
import styles from "./DeviceControl.module.css";
import { useState } from "react";
import { Switch } from "@mui/material";

function DeviceControl({ label, offIcon, onIcon }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <Card className={styles["device-control-cont"]}>
      <div className={styles["device__icon"]}>{isOn ? onIcon : offIcon}</div>
      <h2 className={styles["device__name"]}>{label}</h2>
      <div className={styles["actions"]}>
        <Switch onChange={(e) => setIsOn(e.target.checked)} />
      </div>
    </Card>
  );
}

export default DeviceControl;

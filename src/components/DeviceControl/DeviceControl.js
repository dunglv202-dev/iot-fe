import { Switch } from "@mui/material";
import { useState } from "react";
import Card from "../Ui/Card";
import styles from "./DeviceControl.module.css";

function DeviceControl({ deviceId, label, offIcon, onIcon }) {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = async (e) => {
    try {
      let state = e.target.checked;
      await fetch(`http://localhost:8080/api/devices/${deviceId}/state`, {
        method: "POST",
        body: state ? "on" : "off",
      });
      setIsOn(state);
    } catch (e) {
      alert("Could not change device state");
      console.error(e);
    }
  };

  return (
    <Card className={styles["device-control-cont"]}>
      <div className={styles["device__icon"]}>{isOn ? onIcon : offIcon}</div>
      <h2 className={styles["device__name"]}>{label}</h2>
      <div className={styles["actions"]}>
        <Switch checked={isOn} onChange={handleSwitch} />
      </div>
    </Card>
  );
}

export default DeviceControl;

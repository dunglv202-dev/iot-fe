import { Switch } from "@mui/material";
import { useState } from "react";
import Card from "../Ui/Card";
import styles from "./DeviceControl.module.css";
import useWebsocket from "../../hooks/useWebsocket";

function DeviceControl({ deviceId, label, offIcon, onIcon }) {
  const [isOn, setIsOn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const client = useWebsocket("ws://localhost:8080/websocket");

  client.onConnect = () => {
    client.subscribe(`/topic/esp8266/${deviceId}/state`, (message) => {
      setIsOn(message.body === "on");
    });
  };

  const handleSwitch = async (e) => {
    let state = e.target.checked;
    try {
      setIsDisabled(true);
      setIsOn(state);
      let resp = await fetch(`http://localhost:8080/api/devices/${deviceId}/state`, {
        method: "POST",
        body: state ? "on" : "off",
      });
      if (!resp.ok) throw new Error("Something went wrong!");
    } catch (e) {
      alert("Could not change device state");
      setIsOn((prev) => !prev);
      console.error(e);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <Card className={styles["device-control-cont"]}>
      <div className={styles["device__icon"]}>{isOn ? onIcon : offIcon}</div>
      <h2 className={styles["device__name"]}>{label}</h2>
      <div className={styles["actions"]}>
        <Switch checked={isOn} onChange={handleSwitch} disabled={isDisabled} />
      </div>
    </Card>
  );
}

export default DeviceControl;

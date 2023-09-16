import { useEffect, useState } from "react";
import styles from "./HistoryTimeline.module.css";
import TimelineItem from "./TimelineItem/TimelineItem";

function HistoryTimeline() {
  const [actionHistory, setActionHistory] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      let history = await await fetch("http://localhost:8080/api/actions/history").then((res) => res.json());
      setActionHistory(history);
    }
    fetchHistory();
  }, []);

  return (
    <ul className={styles["history-timeline"]}>
      {actionHistory.map((history) => (
        <TimelineItem key={history.timestamp} timestamp={new Date(history.timestamp)} content={history.detail} />
      ))}
      <TimelineItem timestamp={new Date()} content="Unknown" />
    </ul>
  );
}

export default HistoryTimeline;

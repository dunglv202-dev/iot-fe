import HistoryTimeline from "../../components/HistoryTimeline/HistoryTimeline";
import styles from "./ActionHistory.module.css";

function ActionHistoryPage() {
  return (
    <>
      <h1 className={styles["heading"]}>Now</h1>
      <HistoryTimeline />
    </>
  );
}

export default ActionHistoryPage;

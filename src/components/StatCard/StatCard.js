import Card from "../Ui/Card";
import styles from "./StatCard.module.css";

function StatCard({ label, value, unit }) {
  return (
    <Card className={styles["stat"]}>
      <h2 className={styles["label"]}>{label}</h2>
      <div className={styles["icon"]}></div>
      <div>
        <div className={styles["figure"]}>{value}</div>
        <div className={styles["unit"]}>{unit}</div>
        <div className={styles["judge"]}>-12% than average</div>
      </div>
    </Card>
  );
}

export default StatCard;

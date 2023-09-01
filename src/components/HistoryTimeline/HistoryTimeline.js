import styles from "./HistoryTimeline.module.css";
import TimelineItem from "./TimelineItem/TimelineItem";

function HistoryTimeline() {
  return (
    <ul className={styles["history-timeline"]}>
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
      <TimelineItem timestamp={new Date()} content="Unknown" />
    </ul>
  );
}

export default HistoryTimeline;

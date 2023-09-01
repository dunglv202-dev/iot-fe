export function formatDate(date) {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

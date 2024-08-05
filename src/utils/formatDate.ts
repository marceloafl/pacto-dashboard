export function formatDate(dateValue) {
  const date = new Date(dateValue);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const isPM = hours >= 12;
  hours = hours % 12 || 12;
  const period = isPM ? "pm" : "am";

  return `${day}/${month}/${year} ${hours}:${minutes} ${period}`;
}

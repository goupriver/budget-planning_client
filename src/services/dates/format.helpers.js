export function getCurrentDate() {
  return new Date();
}

export function getYear(date) {
  return date.getFullYear();
}

export function getDay(date) {
  return date.getDate();
}

export function getMonth(date) {
  return date.getMonth();
}

export function getDateStartOfMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month, 1);
}

export function getDateEndtOfMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0);
}

export function getMonthString(date) {
  // Example return value: "September"
  let formatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  return formatter.format(date);
}

export function getMonthStringShort(date) {
  // Example return value: "Sep, Mar, Apr"
  let formatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  const d = formatter.format(date);
  if (d === "July" || d === "June") {
    return d;
  } else if(d === "September") {
    return d.slice(0, 4);
  } else {
    return d.slice(0, 3);
  }
}

export function getDayOfWeek(date) {
  // Example return value: "Monday"
  let formatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
  return formatter.format(date);
}

export function howDaysInMonth(date) {
  const [year, month] = [date.getFullYear(), date.getMonth()];

  return new Date(year, month + 1, 0).getDate();
}
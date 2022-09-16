import { endOfMonth, format, formatISO, startOfMonth } from "date-fns";

import { stringIntoDate } from "./_parse.helpers";

export function getDayMonthYearString(date) {
  return formatISO(date, { representation: "date" });
}

export function getDayMonthString(date) {
  return (formatISO(date, { representation: "date" })).slice(0,-3)
}

export function dateOfWeek(date) {
  return typeof date === "number"
    ? format(date, "iiii")
    : format(stringIntoDate(date), "iiii");
}

export function dateOfMonth(date) {
  return typeof date === "object"
    ? format(date, "do")
    : format(stringIntoDate(date), "do");
}

export function getMonth(date) {
  return typeof date === "object"
    ? format(date, "MMMM")
    : format(stringIntoDate(date), "MMMM");
}

export function getShortMonth(date) {
  return typeof date === "object"
    ? format(date, "MMM")
    : format(stringIntoDate(date), "MMM");
}

export function getYear(date) {
  return typeof date === "object"
    ? format(date, "yyyy")
    : format(stringIntoDate(date), "yyyy");
}

export function getFullDate(date) {
  return typeof date === "object"
    ? format(date, "EEEE, d MMMM")
    : format(stringIntoDate(date), "EEEE, d MMMM");
}

export function getDayAndMonth(date) {
  return typeof date === "number"
    ? format(date, "d MMMM")
    : format(stringIntoDate(date), "d MMMM");
}

export function getCompareDate(date) {
  const sortedDate = date.sort((a, b) =>
    a.toISOString().localeCompare(b.toISOString())
  );

  return sortedDate.map((element) => {
    return {
      startOfMonth: startOfMonth(element),
      endOfMonth: endOfMonth(element),
    };
  });
}

export function getYearMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return `${year}-${month + 1}`;
}

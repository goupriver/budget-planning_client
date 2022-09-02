import { format, formatISO } from "date-fns";

import { stringIntoDate } from "./_parse.helpers";

export function getDayMonthYearString(date) {
  return formatISO(date, { representation: "date" });
}

export function dateOfWeek(date) {
  return typeof date === "object"
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
  return typeof date === "object"
    ? format(date, "d MMMM")
    : format(stringIntoDate(date), "d MMMM");
}

import { format, formatISO } from "date-fns";
import { stringIntoDate } from "./_parse.helpers";
///////

export function getCurrentDate(): Date {
  return new Date()
}

export function getYear(date: Date): number {
  return date.getFullYear()
}

export function getDay(date: Date): number {
  return date.getDate()
}

export function getMonth(date: Date): number {
  return date.getMonth()
}

export function getDateStartOfMonth(date: Date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  return new Date(year, month, 1)
}

export function getDateEndtOfMonth(date: Date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  return new Date(year, month + 1, 0)
}

export function getMonthString(date: Date) {
  // Example return value: "September"
  let formatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  return formatter.format(date)
}

export function getDayOfWeek(date: Date): string {
  // Example return value: "Monday"
  let formatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
  return formatter.format(date)
}

//////

export function getDayMonthYearString(date: Date) {
  return formatISO(date, { representation: "date" });
}




export function getYearOld(date: Date | string) {
  return typeof date === "object"
    ? format(date, "yyyy")
    : format(stringIntoDate(date), "yyyy");
}

export function getFullDate(date: Date | string) {
  return typeof date === "object"
    ? format(date, "EEEE, d MMMM")
    : format(stringIntoDate(date), "EEEE, d MMMM");
}

export function getDayAndMonth(date: Date | string) {
  return typeof date === "number"
    ? format(date, "d MMMM")
    : format(stringIntoDate(date), "d MMMM");
}

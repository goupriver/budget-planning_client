import { format } from "date-fns";

import { stringIntoDate } from "./_parse.helpers";

export function dateOfWeek(date) {
  return typeof date === 'object' 
  ? format((date), "iiii")
  : format(stringIntoDate(date), "iiii")
}

export function dateOfMonth(date) {
  return typeof date === 'object' 
  ? format((date), "do")
  : format(stringIntoDate(date), "do")
}

export function getMonth(date) {
  return typeof date === 'object' 
  ? format((date), "MMMM")
  : format(stringIntoDate(date), "MMMM")
}

export function getYear(date) {
  return typeof date === 'object' 
  ? format((date), "yyyy")
  : format(stringIntoDate(date), "yyyy")
}
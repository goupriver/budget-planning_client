import { parseISO } from "date-fns";

export function stringIntoDate(string) {
  return parseISO(string)
}
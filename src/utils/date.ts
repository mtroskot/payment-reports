import { format } from "date-fns";
import { DEFAULT_DATE_FORMAT } from "src/types/data";

export function formatDate(date: Date, dateFormat = DEFAULT_DATE_FORMAT): string {
  return format(date, dateFormat);
}

import { format, formatDistance } from 'date-fns';

export const convertDateToLocal = (date, dateFormat = 'yyyy-MM-dd hh:mm:ss') =>
  format(new Date(date), dateFormat);
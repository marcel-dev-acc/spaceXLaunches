import * as dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(AdvancedFormat);

const wrapTimestamp = (timestamp: number) => dayjs.unix(timestamp);

export const formatTimestamp = (timestamp: number, fmt: string) => {
  const d = wrapTimestamp(timestamp);
  return d.format(fmt);
};

export const timestampGetYear = (timestamp: number) => {
  const d = wrapTimestamp(timestamp);
  return d.year();
};
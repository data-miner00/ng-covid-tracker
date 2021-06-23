import * as moment from 'moment';

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const calculateDelta = (current: number, previous: number): string => {
  return (((current - previous) / previous) * 100).toFixed(2);
};

export function getFormattedDateForAPI(dayOffset: number): string {
  return moment().subtract(dayOffset, 'days').startOf('day').format('M-D-YYYY');
}

export function getFormattedDateForDisplay(date: string): string {
  return moment(date).calendar();
}

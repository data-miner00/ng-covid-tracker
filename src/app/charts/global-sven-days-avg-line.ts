import { EChartsOption } from 'echarts';

export default (dates: string[]): EChartsOption => {
  return {
    title: {
      text: 'New cases for the past 7 days',
    },
    xAxis: {
      type: 'category',
      data: ['ABC', 'BCD', 'CDF', 'JGF', 'FIF', 'IGO', 'FIF'],
    },
    yAxis: {
      type: 'value',
      name: 'Number of cases',
    },
    series: [
      {
        data: [23, 56, 34, 76, 63, 2, 75],
        type: 'line',
        name: 'Confirmed cases',
      },
      {
        data: [1, 45, 4, 2, 7, 23, 6],
        type: 'line',
        name: 'Death cases',
      },
    ],
    legend: {
      right: 0,
    },
    tooltip: {},
  };
};

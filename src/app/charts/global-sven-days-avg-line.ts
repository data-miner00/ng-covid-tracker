import { EChartsOption } from 'echarts';

export default (
  dates: string[],
  confirmed: number[],
  deaths: number[]
): EChartsOption => {
  return {
    title: {
      text: 'Daily cases for the past 4 days',
    },
    xAxis: {
      type: 'category',
      data: dates,
    },
    yAxis: {
      type: 'value',
      name: 'Number of cases',
    },
    series: [
      {
        data: confirmed,
        type: 'line',
        name: 'Confirmed cases',
        color: '#ef6565',
      },
      {
        data: deaths,
        type: 'line',
        name: 'Death cases',
        color: '#242331',
      },
    ],
    legend: {
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
    },
    media: [
      {
        query: {
          maxWidth: 640,
        },
        option: {
          legend: {
            right: 'center',
            top: 'bottom',
          },
        },
      },
      {
        query: {
          maxWidth: 768,
        },
        option: {
          legend: {
            right: 'right',
            top: 'top',
          },
        },
      },
    ],
  };
};

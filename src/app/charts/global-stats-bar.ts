import { EChartsOption } from 'echarts';

export default (
  confirmed: number,
  recovered: number,
  deaths: number
): EChartsOption => {
  return {
    title: {
      text: 'Total Covid-19 case statistics since outbreak',
    },
    xAxis: {
      type: 'category',
      data: [
        'Total confirmed',
        'Total recovered',
        'Total deaths',
        'Active cases',
      ],
    },
    yAxis: {
      type: 'value',
      name: 'Total Case (in millions)',

      axisLabel: {
        formatter: function (value, index) {
          if (value == 0) return '0';
          return value / 1000000 + ' mil';
        },
      },
      show: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        data: [
          {
            value: confirmed,
            itemStyle: {
              color: '#ef6565',
            },
          },
          {
            value: recovered,
            itemStyle: {
              color: '#FFc0c0',
            },
          },
          {
            value: confirmed - recovered - deaths,
            itemStyle: {
              color: '#648DE5',
            },
          },
          {
            value: deaths,
            itemStyle: {
              color: '#242331',
            },
          },
        ],
        type: 'bar',
      },
    ],
    media: [
      {
        query: {
          minWidth: 300,
          minAspectRatio: 1.3,
        },
        option: {
          legend: {},
        },
      },
    ],
  };
};

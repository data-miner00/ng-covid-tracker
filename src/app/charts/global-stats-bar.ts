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
            value: confirmed, //178673297,
            itemStyle: {
              color: '#FF9800',
            },
          },
          {
            value: recovered, //163197981,
            itemStyle: {
              color: '#CCE2CB',
            },
          },
          {
            value: deaths, //3868612,
            itemStyle: {
              color: '#FF968A',
            },
          },
          {
            value: confirmed - recovered - deaths, //178673297 - 3868612 - 163197981,
            itemStyle: {
              color: 'gray',
            },
          },
        ],
        type: 'bar',
      },
    ],
  };
};

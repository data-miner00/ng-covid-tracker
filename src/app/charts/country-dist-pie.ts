import { EChartsOption } from 'echarts';

export default (
  country: string,
  confirmed: number,
  deaths: number,
  recovered: number
): EChartsOption => {
  return {
    title: {
      text: `Case distribution for ${country}`,
      left: 0,
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      right: 'right',
    },
    series: [
      {
        name: 'Case',
        type: 'pie',
        radius: '50%',
        data: [
          { value: recovered, name: 'Recovered cases' },
          { value: deaths, name: 'Death cases' },
          { value: confirmed - recovered - deaths, name: 'Active cases' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
};

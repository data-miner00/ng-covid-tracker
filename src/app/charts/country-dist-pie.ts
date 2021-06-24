import { EChartsOption } from 'echarts';

export default (
  country: string,
  confirmed: number,
  deaths: number,
  recovered: number
): EChartsOption => {
  const colorPalette: string[] = ['#648DE5', '#ef6565', '#62929E'];
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
          { value: recovered, name: 'Recovered' },
          { value: deaths, name: 'Death' },
          { value: confirmed - recovered - deaths, name: 'Active' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,

          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center',
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0,
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33,
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        color: colorPalette,
      },
    ],

    media: [
      {
        query: {
          maxWidth: 640,
        },
        option: {
          legend: {
            left: 'left',
            top: 'bottom',
          },
        },
      },
      {
        query: {
          maxWidth: 1200,
        },
        option: {
          legend: {
            left: 'right',
            top: 'top',
          },
        },
      },
    ],
  };
};

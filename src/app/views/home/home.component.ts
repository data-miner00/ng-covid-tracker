import { Component, OnInit } from '@angular/core';
import Confirmed from 'src/app/interfaces/Confirmed';
import { CovidApiService } from 'src/app/service/covid-api.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  confirmed: Confirmed[] = [];
  chartOption: EChartsOption;

  constructor(private covidApiService: CovidApiService) {}

  ngOnInit(): void {
    this.chartOption = {
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
      series: [
        {
          data: [
            {
              value: 178673297,
              itemStyle: {
                color: '#FF9800',
              },
            },
            {
              value: 163197981,
              itemStyle: {
                color: '#CCE2CB',
              },
            },
            {
              value: 3868612,
              itemStyle: {
                color: '#FF968A',
              },
            },
            {
              value: 178673297 - 3868612 - 163197981,
              itemStyle: {
                color: 'gray',
              },
            },
          ],
          type: 'bar',
        },
      ],
    };
  }
}

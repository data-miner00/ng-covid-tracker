import { Component, OnInit } from '@angular/core';
import Confirmed from 'src/app/interfaces/Confirmed';
import { CovidApiService } from 'src/app/service/covid-api.service';
import { EChartsOption } from 'echarts';
import globalStatsBar from 'src/app/charts/global-stats-bar';

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
    this.chartOption = globalStatsBar(178673297, 163197981, 3868612);
  }
}

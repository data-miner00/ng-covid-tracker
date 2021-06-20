import { Component, OnInit } from '@angular/core';
import Confirmed from 'src/app/interfaces/Confirmed';
import { CovidApiService } from 'src/app/service/covid-api.service';
import { EChartsOption } from 'echarts';
import globalStatsBar from 'src/app/charts/global-stats-bar';
import globalSvenDaysAvgLine from 'src/app/charts/global-sven-days-avg-line';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import countryNames from 'src/data/country-array.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  confirmed: Confirmed[] = [];
  chartOption: EChartsOption;
  globalLineChart: EChartsOption;
  faCheckCircle: IconDefinition = faCheckCircle;
  countries: string[] = countryNames;

  constructor(private covidApiService: CovidApiService) {}

  ngOnInit(): void {
    this.chartOption = globalStatsBar(178673297, 163197981, 3868612);
    this.globalLineChart = globalSvenDaysAvgLine([''], [], []);
  }
}

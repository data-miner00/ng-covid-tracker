import { Component, OnInit } from '@angular/core';
import Confirmed from 'src/app/interfaces/Confirmed';
import { CovidApiService } from 'src/app/service/covid-api.service';
import { EChartsOption } from 'echarts';
import globalStatsBar from 'src/app/charts/global-stats-bar';
import globalSvenDaysAvgLine from 'src/app/charts/global-sven-days-avg-line';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import countryNames from 'src/data/country-array.json';
import countryDistPie from 'src/app/charts/country-dist-pie';
import {
  getFormattedDateForDisplay,
  getFormattedDateForAPI,
  calculateDelta,
} from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  globalConfirmed: number;
  globalRecovered: number;
  globalDeaths: number;
  globalLastUpdate: string;

  globalConfirmedYesterday: number = 0;
  globalRecoveredYesterday: number = 0;
  globalDeathsYesterday: number = 0;

  globalNewConfirmed: number;
  globalNewRecovered: number;
  globalNewDeaths: number;

  globalNewConfirmedDelta: string;
  globalNewRecoveredDelta: string;
  globalNewDeathsDelta: string;

  chartOption: EChartsOption;
  globalLineChart: EChartsOption;
  countryDistChart: EChartsOption;

  faCheckCircle: IconDefinition = faCheckCircle;

  countries: string[] = countryNames;
  selectedCountry: string = 'Malaysia';

  constructor(private covidApiService: CovidApiService) {}

  ngOnInit(): void {
    // Async calls needs to be nested
    this.covidApiService.getGeneralInfo().subscribe((general) => {
      this.globalConfirmed = general.confirmed.value;
      this.globalRecovered = general.recovered.value;
      this.globalDeaths = general.deaths.value;
      this.globalLastUpdate = getFormattedDateForDisplay(general.lastUpdate);

      this.covidApiService
        .getDailyAccordingDate(getFormattedDateForAPI(1))
        .subscribe((dailys) => {
          dailys.forEach((daily) => {
            console.log(daily.confirmed);
            this.globalConfirmedYesterday += Number(daily.confirmed);
            this.globalRecoveredYesterday += Number(daily.recovered);
            this.globalDeathsYesterday += Number(daily.deaths);
          });

          this.globalNewConfirmed =
            this.globalConfirmed - this.globalConfirmedYesterday;
          this.globalNewRecovered =
            this.globalRecovered - this.globalRecoveredYesterday;
          this.globalNewDeaths = this.globalDeaths - this.globalDeathsYesterday;

          this.globalNewConfirmedDelta = calculateDelta(
            this.globalConfirmed,
            this.globalConfirmedYesterday
          );
          this.globalNewRecoveredDelta = calculateDelta(
            this.globalRecovered,
            this.globalRecoveredYesterday
          );
          this.globalNewDeathsDelta = calculateDelta(
            this.globalDeaths,
            this.globalDeathsYesterday
          );
          console.log(this.globalConfirmedYesterday);
          console.log(this.globalNewConfirmed);
          console.log(this.globalNewConfirmedDelta);

          this.chartOption = globalStatsBar(
            this.globalConfirmed,
            this.globalRecovered,
            this.globalDeaths
          );
        });
    });

    this.globalLineChart = globalSvenDaysAvgLine([''], [], []);
    this.countryDistChart = countryDistPie(
      this.selectedCountry,
      696408,
      4408,
      628185
    );
  }

  onCountryChange(): void {
    console.log(this.selectedCountry);
    // this.countryDistChart = countryDistPie(
    //   this.selectedCountry,
    //   70000,
    //   100,
    //   59966
    // );
  }
}

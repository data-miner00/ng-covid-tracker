import { Component, OnInit, OnDestroy } from '@angular/core';
import { CovidApiService } from 'src/app/services/covid-api.service';
import { EChartsOption } from 'echarts';
import globalStatsBar from 'src/app/charts/global-stats-bar';
import globalSvenDaysAvgLine from 'src/app/charts/global-sven-days-avg-line';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import countryNames from 'src/data/country-array.json';
import countryDistPie from 'src/app/charts/country-dist-pie';
import { numberWithCommas } from 'src/app/utils';

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
export class HomeComponent implements OnInit, OnDestroy {
  globalConfirmed: number = 0;
  globalRecovered: number = 0;
  globalDeaths: number = 0;
  globalLastUpdate: string;

  globalConfirmedYesterday: number = 0;
  globalRecoveredYesterday: number = 0;
  globalDeathsYesterday: number = 0;

  globalNewConfirmed: number;
  globalNewRecovered: number;
  globalNewDeaths: number;

  globalNewConfirmedDelta: string;
  globalNewRecoveredDelta: string = '323fjusa';
  globalNewDeathsDelta: string;

  globalConfirmedStr: string;
  globalRecoveredStr: string;
  globalDeathsStr: string;

  chartOption: EChartsOption;
  globalLineChart: EChartsOption;
  countryDistChart: EChartsOption;

  faCheckCircle: IconDefinition = faCheckCircle;

  countries: string[] = countryNames;
  selectedCountry: string = 'Malaysia';

  selectedCountryConfirmed: string;
  selectedCountryRecovered: string;
  selectedCountryDeaths: string;
  selectedCountryLastUpdate: string;

  constructor(private covidApiService: CovidApiService) {}

  ngOnInit(): void {
    // Async calls needs to be nested
    this.covidApiService.getGeneralInfo().subscribe((general) => {
      this.globalConfirmed = general.confirmed.value;
      this.globalRecovered = general.recovered.value;
      this.globalDeaths = general.deaths.value;
      this.globalLastUpdate = getFormattedDateForDisplay(general.lastUpdate);

      this.globalConfirmedStr = numberWithCommas(general.confirmed.value);
      this.globalRecoveredStr = numberWithCommas(general.recovered.value);
      this.globalDeathsStr = numberWithCommas(general.deaths.value);
    });

    this.covidApiService
      .getDailyAccordingDate(getFormattedDateForAPI(2))
      .subscribe((dailys) => {
        dailys.forEach((daily) => {
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

    this.fetchCountryData();

    this.globalLineChart = globalSvenDaysAvgLine([''], [], []);
  }

  onCountryChange(): void {
    console.log(this.selectedCountry);
    this.fetchCountryData();
  }

  fetchCountryData(): void {
    this.covidApiService
      .getTotalByCountry(this.selectedCountry)
      .subscribe(({ confirmed, recovered, deaths, lastUpdate }) => {
        this.selectedCountryConfirmed = numberWithCommas(confirmed.value);
        this.selectedCountryRecovered = numberWithCommas(recovered.value);
        this.selectedCountryDeaths = numberWithCommas(deaths.value);
        this.selectedCountryLastUpdate = getFormattedDateForDisplay(lastUpdate);

        this.countryDistChart = countryDistPie(
          this.selectedCountry,
          confirmed.value,
          deaths.value,
          recovered.value
        );
      });
  }

  ngOnDestroy(): void {}
}

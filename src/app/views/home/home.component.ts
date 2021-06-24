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
  selectedCountryNewConfirmed: string;
  selectedCountryNewRecovered: string;
  selectedCountryNewDeaths: string;
  selectedCountryConfirmedVal: number;
  selectedCountryRecoveredVal: number;
  selectedCountryDeathsVal: number;
  selectedCountryRecoveredYesterday: number;
  selectedCountryConfirmedYesterday: number;
  selectedCountryDeathsYesterday: number;

  buttonLoading: boolean = false;

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
          if (daily.countryRegion === this.selectedCountry) {
            this.selectedCountryConfirmedYesterday = Number(daily.confirmed);
            this.selectedCountryRecoveredYesterday = Number(daily.recovered);
            this.selectedCountryDeathsYesterday = Number(daily.deaths);
          }
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

        this.chartOption = globalStatsBar(
          this.globalConfirmed,
          this.globalRecovered,
          this.globalDeaths
        );
      });

    this.fetchCountryData();

    // set timeout for the fetchcountrydata to run first
    setTimeout(() => {
      this.selectedCountryNewConfirmed = numberWithCommas(
        this.selectedCountryConfirmedVal -
          this.selectedCountryConfirmedYesterday
      );
      this.selectedCountryNewRecovered = numberWithCommas(
        this.selectedCountryRecoveredVal -
          this.selectedCountryRecoveredYesterday
      );
      this.selectedCountryNewDeaths = numberWithCommas(
        this.selectedCountryDeathsVal - this.selectedCountryDeathsYesterday
      );
    }, 3000);

    const dates = [
      getFormattedDateForAPI(2),
      getFormattedDateForAPI(3),
      getFormattedDateForAPI(4),
      getFormattedDateForAPI(5),
      getFormattedDateForAPI(6),
    ];

    let c1: number = 0,
      d1: number = 0,
      c2: number = 0,
      d2: number = 0,
      c3: number = 0,
      d3: number = 0,
      c4: number = 0,
      d4: number = 0;

    this.covidApiService.getDailyAccordingDate(dates[1]).subscribe((dailys) => {
      dailys.forEach((daily) => {
        c1 += Number(daily.confirmed);
        d1 += Number(daily.deaths);
        console.log('C1: ' + c1);
      });
    });

    this.covidApiService.getDailyAccordingDate(dates[2]).subscribe((dailys) => {
      dailys.forEach((daily) => {
        c2 += Number(daily.confirmed);
        d2 += Number(daily.deaths);
        console.log('C2: ' + c2);
      });
    });

    this.covidApiService.getDailyAccordingDate(dates[3]).subscribe((dailys) => {
      dailys.forEach((daily) => {
        c3 += Number(daily.confirmed);
        d3 += Number(daily.deaths);
      });
    });

    this.covidApiService.getDailyAccordingDate(dates[4]).subscribe((dailys) => {
      dailys.forEach((daily) => {
        c4 += Number(daily.confirmed);
        d4 += Number(daily.deaths);
        console.log('C4: ' + c4);
      });
    });
    setTimeout(() => {
      this.globalLineChart = globalSvenDaysAvgLine(
        dates.slice(0, 4).reverse(),
        [
          this.globalConfirmedYesterday - c1,
          c1 - c2,
          c2 - c3,
          c3 - c4,
        ].reverse(),
        [this.globalDeathsYesterday - d1, d1 - d2, d2 - d3, d3 - d4].reverse()
      );
    }, 4000);
  }

  onCountryChange(): void {
    this.buttonLoading = true;
    this.fetchCountryData();
  }

  fetchCountryData(): void {
    this.covidApiService
      .getTotalByCountry(this.selectedCountry)
      .subscribe(({ confirmed, recovered, deaths, lastUpdate }) => {
        this.selectedCountryConfirmedVal = confirmed.value;
        this.selectedCountryRecoveredVal = recovered.value;
        this.selectedCountryDeathsVal = deaths.value;

        this.selectedCountryConfirmed = numberWithCommas(confirmed.value);
        this.selectedCountryRecovered = numberWithCommas(recovered.value);
        this.selectedCountryDeaths = numberWithCommas(deaths.value);
        this.selectedCountryLastUpdate = getFormattedDateForDisplay(lastUpdate);
        this.calculateNewOffset();
        this.countryDistChart = countryDistPie(
          this.selectedCountry,
          confirmed.value,
          deaths.value,
          recovered.value
        );
      });
  }

  calculateNewOffset(): void {
    this.covidApiService
      .getDailyAccordingDate(getFormattedDateForAPI(2))
      .subscribe(
        (dailys) => {
          dailys.forEach((daily) => {
            if (this.selectedCountry === daily.countryRegion) {
              // this.selectedCountryConfirmedYesterday = Number(daily.confirmed);
              // this.selectedCountryRecoveredYesterday = Number(daily.recovered);
              // this.selectedCountryDeathsYesterday = Number(daily.deaths);

              this.selectedCountryNewConfirmed = numberWithCommas(
                this.selectedCountryConfirmedVal - Number(daily.confirmed)
              );
              this.selectedCountryNewRecovered = numberWithCommas(
                this.selectedCountryRecoveredVal - Number(daily.recovered)
              );
              this.selectedCountryNewDeaths = numberWithCommas(
                this.selectedCountryDeathsVal - Number(daily.deaths)
              );

              return;
            }
          });
        },
        (err): void => console.error(err),
        (): void => {
          this.buttonLoading = false;
        }
      );
  }

  ngOnDestroy(): void {}
}

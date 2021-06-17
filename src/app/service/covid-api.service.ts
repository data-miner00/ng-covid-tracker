import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CovidApiService {
  private COVID_URLS: Object = {
    ROOT: 'https://covid19.mathdro.id/api',
    TOTAL_CONFIRMED: 'https://covid19.mathdro.id/api/confirmed',
    TOTAL_RECOVERED: 'https://covid19.mathdro.id/api/recovered',
    TOTAL_DEATHS: 'https://covid19.mathdro.id/api/deaths',
    DAILY_SUMMARY: 'https://covid19.mathdro.id/api/daily',
    DAILY_TIME_SERIES: (dateString: string) => {
      return `https://covid19.mathdro.id/api/daily/${dateString}`;
    },
    COUNTRIES: 'https://covid19.mathdro.id/api/countries',
    COUNTRY_DETAIL: (country: string) => {
      return `https://covid19.mathdro.id/api/countries/${country}`;
    },
  };

  constructor() {}
}

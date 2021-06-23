import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Confirmed from '../interfaces/Confirmed';
import DailyAccordingDate from '../interfaces/DailyAccordingDate';
import Countries from '../interfaces/Countries';
import TotalAccordingCountry from '../interfaces/TotalAccordingCountry';
import General from '../interfaces/General';

@Injectable({
  providedIn: 'root',
})
export class CovidApiService {
  // url endpoints
  private COVID_URLS = {
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

  constructor(private http: HttpClient) {}

  // Simple API calls
  getGeneralInfo(): Observable<General> {
    return this.http.get<General>(this.COVID_URLS.ROOT);
  }

  getConfirmed(): Observable<Confirmed[]> {
    return this.http.get<Confirmed[]>(this.COVID_URLS.TOTAL_CONFIRMED);
  }

  getDailyAccordingDate(date: string): Observable<DailyAccordingDate[]> {
    return this.http.get<DailyAccordingDate[]>(
      this.COVID_URLS.DAILY_TIME_SERIES(date)
    );
  }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(this.COVID_URLS.COUNTRIES);
  }

  getTotalByCountry(countryName: string): Observable<TotalAccordingCountry> {
    return this.http.get<TotalAccordingCountry>(
      this.COVID_URLS.COUNTRY_DETAIL(countryName)
    );
  }

  // Calculation
  supplyDataForHome() {
    this.getGeneralInfo().subscribe((info) => {});
  }
}

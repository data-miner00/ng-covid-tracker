import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Confirmed from '../interfaces/Confirmed';

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

  getConfirmed(): Observable<Confirmed[]> {
    return this.http.get<Confirmed[]>(this.COVID_URLS.TOTAL_CONFIRMED);
  }
}

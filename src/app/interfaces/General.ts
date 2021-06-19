import { ResultDetails } from './TotalAccordingCountry';

export default interface General {
  confirmed: ResultDetails;
  recovered: ResultDetails;
  deaths: ResultDetails;
  dailySummary: string;
  dailyTimeSeries: APIPattern;
  image: string;
  source: string;
  countries: string;
  countryDetail: APIPattern;
  lastUpdate: string;
}

export interface APIPattern {
  pattern: string;
  example: string;
}

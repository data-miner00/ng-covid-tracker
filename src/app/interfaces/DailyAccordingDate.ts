// Does not have null value, but have empty string ''

export default interface DailyAccordingDate {
  fips: string;
  admins2: string;
  provinceState: string;
  countryRegion: string;
  lastUpdate: string;
  lat: string;
  long: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: string;
  combinedKey: string;
  incidentRate: string;
  caseFatalityRatio: string;
}

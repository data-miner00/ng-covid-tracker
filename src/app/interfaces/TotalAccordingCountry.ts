export default interface TotalAccordingCountry {
  confirmed: ResultDetails;
  recovered: ResultDetails;
  deaths: ResultDetails;
  lastUpdate: string;
}

export interface ResultDetails {
  value: number;
  detail: string;
}

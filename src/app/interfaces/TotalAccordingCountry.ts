export default interface TotalAccordingCountry {
  confirmed: AccordingDetails;
  recovered: AccordingDetails;
  deaths: AccordingDetails;
  lastUpdate: string;
}

export interface AccordingDetails {
  value: number;
  detail: string;
}

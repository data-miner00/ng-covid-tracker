// confirmed, recovered and deaths of the api have same structure

export default interface Confirmed {
  provinceState?: string;
  countryRegion: string;
  lastUpdate: bigint;
  lat?: number;
  long?: number;
  confirmed: number;
  recovered?: number;
  deaths: number;
  active?: number;
  admin2?: string;
  fips?: number;
  combinedKey: string;
  incidentRate?: number;
  peopleTested?: number;
  peopleHospitalized?: number;
  uid: number;
  iso3?: string;
  iso2?: string;
}

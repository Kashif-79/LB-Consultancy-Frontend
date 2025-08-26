export type TCountry = {
  _id: string;
  name: string;
  code: string;
  continent: string;
  currency: string;
  language: string;
};
export type TUniversity = {
  _id: string;
  name: string;
  country: TCountry;
  website: string;
  ranking?: number;
  admissionOpen?: boolean;
  tuitionFees?: number;
  programs: ("UG" | "PG" | "PHD" | "Diploma")[];
};

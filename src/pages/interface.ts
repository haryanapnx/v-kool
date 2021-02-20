/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormTypes {
  [key: string]: any;
  name: string;
  nik: number;
  kkNumber: number;
  photoKtp: any;
  photoKK: any;
  age: number;
  gender: string;
  address: string;
  rt: string | number;
  rw: string | number;
  incomeBefore: string;
  incomeAfter: string;
  reason: string;
}

export interface DataTypes {
  form: FormTypes;
  isLoading: boolean;
  isOther: boolean;
  isCheck: string[];
}

export interface SidebarDatainterface {
  text: string;
  link: string;
}

export interface contactsDataInterface {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

export interface RootState {
  contacts: contactsDataInterface[];
}

export interface sideBarProps {
  toggle: boolean;
  changeToggleTrue: Function;
  changeTogglefalse: Function;
}

export interface topBarProps {
  toggle: boolean;
  changeToggleTrue: Function;
  changeTogglefalse: Function;
}

export interface lineProps {
  data: { [date: string]: number };
}

export interface mapCountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  deaths: number;
  recovered: number;
}

export interface MapProps {
  data: mapCountryData[];
}

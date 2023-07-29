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

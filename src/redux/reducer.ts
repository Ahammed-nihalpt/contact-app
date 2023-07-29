import { contactsDataInterface, RootState } from "../model";
import { Reducer } from "redux"; // Import the Reducer type from redux
const initialState: RootState = {
  contacts: [],
};
const reducer: Reducer<
  RootState,
  { type: string; data: contactsDataInterface; id: number }
> = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      if (action.data) {
        return { ...state, contacts: [...state.contacts, action.data] };
      }
      return state;

    case "delete":
      if (action.id) {
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.id
          ),
        };
      }
      return state;

    case "edit":
      if (action.id && action.data) {
        return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === action.id) {
              return { ...contact, ...action.data };
            }
            return contact;
          }),
        };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;

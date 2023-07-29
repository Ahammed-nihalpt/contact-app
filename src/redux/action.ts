import { contactsDataInterface } from "../model";

export const addContactAction = (data: contactsDataInterface) => {
  return {
    type: "add",
    data: data,
  };
};

export const deleteContactAction = (id: number) => {
  return {
    type: "delete",
    id: id,
  };
};

export const editContactAction = (id: number, data: contactsDataInterface) => {
  return {
    type: "edit",
    id: id,
    data: data,
  };
};

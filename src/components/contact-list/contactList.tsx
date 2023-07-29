import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsDataInterface } from "../../model";
import { editContactAction, deleteContactAction } from "../../redux/action";
import { selectContactsData } from "../../redux/selector";

function ContactList() {
  const contactsData: contactsDataInterface[] = useSelector(selectContactsData);

  const dispatch = useDispatch();
  const [editingStates, setEditingStates] = useState<boolean[]>(
    contactsData.map((value) => false)
  );

  const [formValues, setFormValues] =
    useState<contactsDataInterface[]>(contactsData);

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    const name: string = (event.target as HTMLInputElement).name;
    const value: string = (event.target as HTMLInputElement).value;

    setFormValues((prevFormValues) => {
      const updatedFormValues = [...prevFormValues];
      updatedFormValues[index] = { ...updatedFormValues[index], [name]: value };
      return updatedFormValues;
    });
  };

  const handleEditing = (index: number) => {
    setEditingStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index]; // Toggle the editing state for the specific contact
      return updatedStates;
    });
  };

  const handleEditSubmit = (index: number) => {
    dispatch(editContactAction(contactsData[index].id, formValues[index]));
    handleEditing(index);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContactAction(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center align-middle md:grid-cols-3 gap-4 w-full p-8">
      {contactsData.length > 0 &&
        contactsData.map((value, index) => (
          <div
            key={value.id}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer "
          >
            {!editingStates[index] && (
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {value.firstName} {value.lastName}
              </h2>
            )}
            {editingStates[index] && (
              <div className="flex">
                <input
                  className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  defaultValue={value.firstName}
                  onChange={(event) => handleChange(event, index)}
                />
                <input
                  className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  defaultValue={value.lastName}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
            )}
            {!editingStates[index] && (
              <p className="text-gray-700">{value.status}</p>
            )}
            {editingStates[index] && (
              <div className="mt-2">
                <select
                  name="status"
                  id=""
                  onChange={(event) => handleChange(event, index)}
                  defaultValue={value.status}
                  className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            )}
            <div className="flex gap-4 mt-3">
              {!editingStates[index] && (
                <button
                  className="bg-yellow-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
                  onClick={() => handleEditing(index)}
                >
                  Edit
                </button>
              )}
              {editingStates[index] && (
                <button
                  className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
                  onClick={() => handleEditSubmit(index)}
                >
                  Save
                </button>
              )}
              {!editingStates[index] && (
                <button
                  className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              )}
              {editingStates[index] && (
                <button
                  className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
                  onClick={() => handleEditing(index)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      {contactsData.length <= 0 && (
        <div>
          <h1 className="text-5xl font-bold">No contacts</h1>
        </div>
      )}
    </div>
  );
}

export default ContactList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContactAction } from "../../redux/action";
import { contactsDataInterface } from "../../model";
import { selectContactsData } from "../../redux/selector";

function CreactContact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactsData: contactsDataInterface[] = useSelector(selectContactsData);

  const [formValues, setFormValues] = useState<contactsDataInterface>({
    id: 0,
    firstName: "",
    lastName: "",
    status: "",
  });

  const handleChange = (event: React.SyntheticEvent) => {
    const name: string = (event.target as HTMLInputElement).name;
    const value: string = (event.target as HTMLInputElement).value;
    setFormValues({ ...formValues, [name]: value });
  };

  const HandleSubmit = () => {
    const nextId: number = contactsData.length + 1;
    formValues.id = nextId;
    dispatch(addContactAction(formValues));
    navigate("/home");
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center w-fit gap-12 p-5 h-96">
      <h1 className="flex justify-center text-2xl font-bold">Create Contact</h1>
      <div className="flex justify-center items-center gap-8 w-full">
        <h2> First name:</h2>
        <input
          className="h-10 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="first name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center items-center gap-8 w-full">
        <h2> Last name:</h2>
        <input
          className="h-10 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="last name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="">
          <h2 className="flex justify-center items-center w-full">Status:</h2>
          <div className="flex gap-11 w-96 justify-center">
            <div className="flex gap-5">
              <label htmlFor="">Active: </label>{" "}
              <input
                type="radio"
                name="status"
                id="status"
                onChange={handleChange}
                value="active"
              />
            </div>
            <div className="flex gap-5">
              <label htmlFor="">Inactive: </label>
              <input
                type="radio"
                name="status"
                id="status"
                onChange={handleChange}
                value="inactive"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            onClick={HandleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreactContact;

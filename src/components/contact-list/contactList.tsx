import React, { useState } from "react";

function ContactList() {
  const [editing, setEditing] = useState<boolean>(false);

  const handleEditing = () => {
    setEditing(!editing);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center align-middle md:grid-cols-3 gap-4 w-full p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer ">
        {!editing && (
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Nihal PT</h2>
        )}
        {editing && (
          <div className="flex">
            <input
              className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="first name"
              value="Nihal"
            />
            <input
              className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="last name"
              value={"PT"}
            />
          </div>
        )}
        {!editing && <p className="text-gray-700">status</p>}
        {editing && (
          <div className="mt-2">
            <select
              name=""
              id=""
              className="h-10 w-40 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        )}
        <div className="flex gap-4 mt-3">
          {!editing && (
            <button
              className="bg-yellow-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
              onClick={handleEditing}
            >
              Edit
            </button>
          )}
          {editing && (
            <button
              className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
              onClick={handleEditing}
            >
              Save
            </button>
          )}
          {!editing && (
            <button className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow">
              Delete
            </button>
          )}
          {editing && (
            <button
              className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded shadow"
              onClick={handleEditing}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactList;

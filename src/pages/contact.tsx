import React from "react";
import ContactList from "../components/contact-list/contactList";

const Contact: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center align-middle p-5 gap-20">
      <div className="flex justify-center align-middle">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow">
          Creat new contact
        </button>
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Contact;

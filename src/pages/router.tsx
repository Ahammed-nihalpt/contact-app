import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Contact from "./contact";
import CreateContactPage from "./createContact";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Contact />} />
        <Route path="/create" element={<CreateContactPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

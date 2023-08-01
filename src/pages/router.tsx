import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Contact from "./contact";
import CreateContactPage from "./createContact";
import MapAndChart from "./mapAndChart";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Contact />} />
        <Route path="/create" element={<CreateContactPage />} />
        <Route path="/chartsandmaps" element={<MapAndChart />} />
      </Route>
    </Routes>
  );
};

export default Router;

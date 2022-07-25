import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "components";

import * as Pages from "../pages";

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Pages.List />} />
      <Route path="/form" element={<Pages.Form />} />
      <Route path="/form/view/:cpf" element={<Pages.Form />} />
      <Route path="/form/edit/:cpf" element={<Pages.Form />} />
    </Routes>
  </Layout>
);

export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "components";

import * as Pages from "../pages";

const AuthRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Pages.Login />} />
    </Routes>
  </Layout>
);

export default AuthRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Category from "../components/Auth/Category";
import Username from "../components/Auth/Username";
import Intro from "../components/Auth/Intro";
import Loader from "../components/Auth/Loader";
import Email from "../components/Auth/Email";
import Main from "../components/Dashboard/Main";
import BadgeMain from "../components/Dashboard/BadgeMain";
import CreateBadge from "../components/Dashboard/CreateBadge";
import BadgePreview from "../components/Dashboard/BadgePreview";
import IssueBadge from "../components/Dashboard/IssueBadge";
import InsightsPage from "../components/pages/insights";
import PrivateRoute from "./PrivateRoute";
import ClaimBadge from "../components/ClaimBadge";
import LoginRoute from "./LoginRoute";
import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import IssuedBadgeDetail from "../components/pages/issued-badge-detail";
import Insights from "../components/pages/insights";
import DashboardPage from "../components/pages/Dashboard";

const Routing = () => (
  <Router>
    <Routes>
      <Route
        path=""
        element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        }
      >
        <Route path={""} element={<Intro />} />
        <Route path={"category"} element={<Category />} />
        <Route path={"username"} element={<Username />} />
        <Route path={"email"} element={<Email />} />
        <Route path={"welcome"} element={<Loader />} />
      </Route>
      <Route
        path=""
        element={
          <PrivateRoute>
            <DashboardWrapper />
          </PrivateRoute>
        }
      >
        <Route path={"dashboard"} element={<Main />}>
          {/* <Route path={"badge"} element={<BadgeMain />} /> */}
          <Route path="" element={<DashboardPage />} />
        </Route>
        <Route path={"create/badge"} element={<CreateBadge />} />
        <Route path={"badge/preview"} element={<BadgePreview />} />
        <Route path={"badge/issue"} element={<IssueBadge />} />
        <Route path={"insight"} element={<Insights />} />

        <Route path={"insights"} element={<InsightsPage />} />
        <Route path={"/badge/issued/:id"} element={<IssuedBadgeDetail />} />
        <Route path={"/badge/claimed/:id"} element={<IssuedBadgeDetail />} />
      </Route>
      <Route path="/claim/badge" element={<ClaimBadge />} />
    </Routes>
  </Router>
);

export default Routing;

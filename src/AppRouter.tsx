import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import ErrorBoundary from "src/pages/ErrorBoundary";
import { AppRoutes } from "src/types/enums";
import Reports from "src/pages/Dashboard/Reports";
import Stats from "src/pages/Dashboard/Stats";
import Groups from "src/pages/Dashboard/Groups";
import Payments from "src/pages/Dashboard/Payments";
import PrivacyPolicy from "src/pages/Legal/PrivacyPolicy";
import Home from "src/pages/Home";
import TermsAndConditions from "src/pages/Legal/TermsAndConditions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoutes.HOME} element={<Home />} errorElement={<ErrorBoundary />}>
      <Route path={AppRoutes.DASHBOARD} element={<Dashboard />} errorElement={<ErrorBoundary />}>
        <Route path={AppRoutes.REPORTS} element={<Reports />} />
        <Route path={AppRoutes.STATS} element={<Stats />} />
        <Route path={AppRoutes.GROUPS} element={<Groups />} />
        <Route path={AppRoutes.PAYMENTS} element={<Payments />} />
      </Route>
      <Route path={AppRoutes.PRIVACY_POLICY} element={<PrivacyPolicy />} />
      <Route path={AppRoutes.TERMS_AND_CONDITIONS} element={<TermsAndConditions />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

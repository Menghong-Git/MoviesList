// import AppLayout from "@/layout";
import { ROUTE_PATH } from "@/lib/route-path";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// layout
const AppLayout = lazy(() => import("../layout"));
// pages
const HomePage = lazy(() => import("../App"));
const Patients = lazy(() => import("../pages/patients"));
const Doctors = lazy(() => import("../pages/doctor"));

const AllRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrap */}
      <Route
        path={ROUTE_PATH.root}
        element={
          <Suspense fallback={<div>Layout Loading...</div>}>
            <AppLayout />
          </Suspense>
        }
      >
        <Route
          path={ROUTE_PATH.root}
          element={
            <Suspense fallback={<div>Layout Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.PatientPage.root}
          element={
            <Suspense fallback={<div>Layout Loading...</div>}>
              <Patients />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.Doctors.root}
          element={
            <Suspense fallback={<div>Layout Loading...</div>}>
              <Doctors />
            </Suspense>
          }
        />
      </Route>
      {/* End Layout */}
    </Routes>
  );
};

export default AllRoutes;

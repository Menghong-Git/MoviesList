// import AppLayout from "@/layout";
import Loader from "@/components/loader/Loader";
import { ROUTE_PATH } from "@/lib/route-path";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// layout
const AppLayout = lazy(() => import("../layout"));
// pages
const HomePage = lazy(() => import("../App"));
const Patients = lazy(() => import("../pages/patients"));
const Doctors = lazy(() => import("../pages/doctor"));
const Appointments = lazy(() => import("../pages/appointment"));

const AllRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrap */}
      <Route
        path={ROUTE_PATH.root}
        element={
          <Suspense fallback={<Loader/>}>
            <AppLayout />
          </Suspense>
        }
      >
        <Route
          path={ROUTE_PATH.root}
          element={
            <Suspense fallback={<Loader/>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.PatientPage.root}
          element={
            <Suspense fallback={<Loader/>}>
              <Patients />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.DoctorPage.root}
          element={
            <Suspense fallback={<Loader/>}>
              <Doctors />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.AppointmetPage.root}
          element={
            <Suspense fallback={<Loader/>}>
              <Appointments />
            </Suspense>
          }
        />
      </Route>
      {/* End Layout */}
    </Routes>
  );
};

export default AllRoutes;

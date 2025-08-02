// import AppLayout from "@/layout";
import Loader from "@/components/loader/Loader";
import SignUp from "@/components/Signup-logic";
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
const Logins = lazy(() => import("../pages/login/"))
const MovieDetail = lazy(()=> import("../pages/movies/detail")) 
const MoviePage = lazy(()=> import("../pages/movies")) 


const AllRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrap */}
      <Route
        path={ROUTE_PATH.root}
        element={
          <Suspense fallback={<Loader />}>
            <AppLayout />
          </Suspense>
        }
      >
        <Route
          path={ROUTE_PATH.root}
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.PatientPage.root}
          element={
            <Suspense fallback={<Loader />}>
              <Patients />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.DoctorPage.root}
          element={
            <Suspense fallback={<Loader />}>
              <Doctors />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.AppointmetPage.root}
          element={
            <Suspense fallback={<Loader />}>
              <Appointments />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.movies.root}
          element={
            <Suspense fallback={<div><Loader/></div>}>
              <MoviePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.movies.id}
          element={
            <Suspense fallback={<div><Loader/></div>}>
              <MovieDetail />
            </Suspense>
          }
        />


        
      </Route>

      <Route
          path={ROUTE_PATH.LoginPage.root}
          element={
            <Suspense fallback={<Loader />}>
              <Logins />
            </Suspense>
          }
        />
        <Route
          path={ROUTE_PATH.SignUpButton.root}
          element={
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          }
        />
      {/* End Layout */}
    </Routes>
  );
};

export default AllRoutes;

import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router";
import AllRoutes from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter basename="/MoviesList">
    <AllRoutes />
  </HashRouter>
);

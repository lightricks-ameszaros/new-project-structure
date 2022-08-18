import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ReactDOMClient from "react-dom/client";

import App from "./layouts/App";
import AppleOptimisation from "./pages/AppleOptimisation";
import FacebookOptimisation from "./pages/FacebookOptimisation";
import History from "./pages/History";
import Performance from "./pages/Performance";

import "antd/dist/antd.css";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path=":appId" element={<App />}>
          <Route
            index
            path="apple-optimisation"
            element={<AppleOptimisation />}
          />
          <Route
            path="facebook-optimisation"
            element={<FacebookOptimisation />}
          />
          <Route path="history" element={<History />} />
          <Route path="performance" element={<Performance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

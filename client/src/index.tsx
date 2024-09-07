import React from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.tsx";
import SplashPage from "./components/SplashPage.tsx";
import UserForm from "./components/UserForm.tsx";
import JobListing from "./components/JobListing.tsx"
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/splashpage" element={<SplashPage />} />
        <Route path="/employee" element={<UserForm formType="employee" />} />
        <Route path="/employer" element={<UserForm formType="employer" />} />
        <Route path="/jobs" element={<JobListing />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

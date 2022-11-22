import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProtectRouts from "../Components/ProtectRouts";
import DashboardPage from "../Pages/DashboardPage";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";

export const RoutesMain = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route element={<ProtectRouts />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

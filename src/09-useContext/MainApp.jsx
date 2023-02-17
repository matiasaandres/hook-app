import { Routes, Route, Navigate, Link } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element={<LoginPage/>} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};

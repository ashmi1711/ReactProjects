import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Doctors from "../Pages/Doctors";
import Departments from "../Pages/Departments";
import Application from "../Pages/Application";
import Enquiry from "../Pages/Enquiry";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/application" element={<Application />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default AppRoutes;
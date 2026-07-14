import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About Us</Link> |{" "}
      <Link to="/doctors">Doctors</Link> |{" "}
      <Link to="/departments">Departments</Link> |{" "}
      <Link to="/application">Application Form</Link> |{" "}
      <Link to="/enquiry">Enquiry Form</Link> |{" "}
      <Link to="/contact">Contact Us</Link> |{" "}
      <Link to="/faq">FAQ</Link> |{" "}
      <Link to="/privacy">Privacy Policy</Link> |{" "}
      <Link to="/terms">Terms & Conditions</Link>
    </nav>
  );
}

export default Navbar;
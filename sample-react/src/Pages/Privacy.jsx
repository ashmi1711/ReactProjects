import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import "../Assets/css/home-about.css";

function Privacy() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">
        <section className="card-section">
          <h2>Privacy Policy</h2>

          <p>
            PrimeCare Hospital is committed to protecting the privacy and
            personal information of every patient. This Privacy Policy explains
            how we collect, use, store, and protect your information.
          </p>
        </section>

        <section className="card-section">
          <h2>Information We Collect</h2>

          <ul>
            <li>Patient Name</li>
            <li>Date of Birth</li>
            <li>Gender</li>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Medical History</li>
            <li>Appointment Details</li>
            <li>Insurance Information</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>How We Use Your Information</h2>

          <ul>
            <li>Patient Registration</li>
            <li>Appointment Scheduling</li>
            <li>Medical Treatment</li>
            <li>Billing and Insurance Processing</li>
            <li>Emergency Contact</li>
            <li>Hospital Communication</li>
            <li>Service Improvement</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Data Protection</h2>

          <p>
            We maintain appropriate security measures to protect your personal
            information from unauthorized access, misuse, alteration, or
            disclosure.
          </p>
        </section>

        <section className="card-section">
          <h2>Information Sharing</h2>

          <p>
            Patient information is shared only with authorized healthcare
            professionals, insurance providers, or government authorities when
            legally required.
          </p>
        </section>

        <section className="card-section">
          <h2>Your Rights</h2>

          <ul>
            <li>Access your medical records.</li>
            <li>Request correction of personal information.</li>
            <li>Update contact details.</li>
            <li>Request clarification regarding stored information.</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Cookies</h2>

          <p>
            If this website is connected to online services in the future,
            cookies may be used to improve website functionality and user
            experience.
          </p>
        </section>

        <section className="card-section">
          <h2>Contact Regarding Privacy</h2>

          <p>
            Email:
            <a href="mailto:privacy@abchospital.com">
              {" "}
              privacy@abchospital.com
            </a>
          </p>

          <p>
            Phone:
            <a href="tel:+919876543210"> +91 98765 43210</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Privacy;
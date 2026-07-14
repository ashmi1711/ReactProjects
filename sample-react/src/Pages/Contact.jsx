import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import "../Assets/css/home-about.css";

function Contact() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">

        <section className="card-section">
          <h2>Hospital Contact Information</h2>

          <p>
            We are always ready to assist you with your healthcare needs.
            Feel free to contact us through the following details.
          </p>
        </section>

        <section className="card-section">
          <h2>Hospital Address</h2>

          <address>
            <strong>PrimeCare Hospital</strong>
            <br />
            123 Medical Road
            <br />
            Chennai - 600001
            <br />
            Tamil Nadu, India
          </address>
        </section>

        <section className="card-section">
          <h2>Phone Numbers</h2>

          <dl className="contact-list">
            <dt>Reception</dt>
            <dd>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </dd>

            <dt>Emergency</dt>
            <dd>
              <a href="tel:+919123456789">
                +91 91234 56789
              </a>
            </dd>

            <dt>Ambulance</dt>
            <dd>
              <a href="tel:+919000011111">
                +91 90000 11111
              </a>
            </dd>

            <dt>Appointment Desk</dt>
            <dd>
              <a href="tel:+919888877777">
                +91 98888 77777
              </a>
            </dd>
          </dl>
        </section>

        <section className="card-section">
          <h2>Email Addresses</h2>

          <dl className="contact-list">
            <dt>General Enquiry</dt>
            <dd>
              <a href="mailto:info@abchospital.com">
                info@abchospital.com
              </a>
            </dd>

            <dt>Appointments</dt>
            <dd>
              <a href="mailto:appointment@abchospital.com">
                appointment@abchospital.com
              </a>
            </dd>

            <dt>Support</dt>
            <dd>
              <a href="mailto:support@abchospital.com">
                support@abchospital.com
              </a>
            </dd>
          </dl>
        </section>

        <section className="card-section">
          <h2>Working Hours</h2>

          <ul>
            <li>Monday - Saturday : 8:00 AM - 9:00 PM</li>
            <li>Sunday : Emergency Services Only</li>
            <li>Emergency Department : Open 24 × 7</li>
            <li>Pharmacy : Open 24 × 7</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Emergency Services</h2>

          <p>
            Our emergency department is available 24 hours a day with
            experienced doctors, nurses, ICU facilities, and ambulance
            support.
          </p>
        </section>

        <section className="card-section">
          <h2>Departments Available</h2>

          <ul>
            <li>General Medicine</li>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Gynecology</li>
            <li>Dermatology</li>
            <li>ENT</li>
            <li>Radiology</li>
            <li>Laboratory</li>
            <li>Pharmacy</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Location</h2>

          <p>
            PrimeCare Hospital is located in the heart of Chennai with easy
            access by bus, train, taxi, and private vehicles.
          </p>

          <p>Google Maps location can be added here in the future.</p>
        </section>

        <section className="card-section">
          <h2>Follow Us</h2>

          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter (X)</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Quick Links</h2>

          <ul>
            <li>
              <Link to="/application">
                Book Appointment
              </Link>
            </li>

            <li>
              <Link to="/enquiry">
                Send Enquiry
              </Link>
            </li>

            <li>
              <Link to="/doctors">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/departments">
                Departments
              </Link>
            </li>

            <li>
              <Link to="/faq">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;
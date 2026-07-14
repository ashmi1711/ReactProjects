import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr />

      <footer className="container py-4">
        <div className="row">

          {/* Hospital Information */}
          <div className="col-md-3 mb-3">
            <h4>Hospital Information</h4>

            <address>
              <strong>PrimeCare Hospital</strong>
              <br />
              123 Medical Road
              <br />
              Madurai, Tamil Nadu
              <br />
              India
            </address>
          </div>

          {/* Contact Details */}
          <div className="col-md-3 mb-3">
            <h4>Contact Details</h4>

            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@abchospital.com">
                info@abchospital.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h4>Quick Links</h4>

            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/faq">FAQ</Link>
              </li>

              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>

              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-md-3 mb-3 d-flex align-items-end">
            <small>
              © 2026 PrimeCare Hospital.
              <br />
              All Rights Reserved.
            </small>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
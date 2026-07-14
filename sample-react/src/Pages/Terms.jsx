import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Assets/css/home-about.css";

function Terms() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">

        <section className="card-section">
          <h2>Terms and Conditions</h2>

          <p>
            Welcome to PrimeCare Hospital. By using our services, you agree to
            follow the terms and conditions described below.
          </p>
        </section>

        <section className="card-section">
          <h2>1. Appointments</h2>

          <ul>
            <li>Appointments are subject to doctor availability.</li>
            <li>Please arrive at least 15 minutes before your scheduled appointment.</li>
            <li>
              The hospital reserves the right to reschedule appointments if
              necessary.
            </li>
          </ul>
        </section>

        <section className="card-section">
          <h2>2. Patient Responsibilities</h2>

          <ul>
            <li>Provide accurate personal and medical information.</li>
            <li>
              Follow the advice and treatment instructions given by doctors.
            </li>
            <li>
              Treat hospital staff and other patients respectfully.
            </li>
          </ul>
        </section>

        <section className="card-section">
          <h2>3. Payments</h2>

          <ul>
            <li>
              All consultation and treatment charges must be paid before
              discharge unless otherwise agreed.
            </li>
            <li>
              Insurance claims are subject to the terms of the insurance
              provider.
            </li>
            <li>Receipts should be kept safely for future reference.</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>4. Privacy</h2>

          <p>
            Patient information is handled according to our Privacy Policy.
            Medical records are kept confidential and shared only when legally
            permitted or required.
          </p>
        </section>

        <section className="card-section">
          <h2>5. Visitor Guidelines</h2>

          <ul>
            <li>Visitors must follow hospital visiting hours.</li>
            <li>Maintain cleanliness and silence inside the hospital.</li>
            <li>Children should always be accompanied by an adult.</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>6. Emergency Services</h2>

          <p>
            Emergency services are available 24 hours a day. Critical patients
            will be given priority based on medical urgency.
          </p>
        </section>

        <section className="card-section">
          <h2>7. Website Usage</h2>

          <ul>
            <li>
              The information on this website is for general guidance.
            </li>
            <li>
              Do not misuse the website or submit false information.
            </li>
            <li>Content may be updated without prior notice.</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>8. Limitation of Liability</h2>

          <p>
            PrimeCare Hospital is not responsible for delays or interruptions
            caused by technical issues, natural disasters, or circumstances
            beyond our control.
          </p>
        </section>

        <section className="card-section">
          <h2>9. Changes to Terms</h2>

          <p>
            The hospital may revise these Terms and Conditions at any time.
            Continued use of our services indicates acceptance of the updated
            terms.
          </p>
        </section>

        <section className="card-section">
          <h2>10. Contact Information</h2>

          <p>
            <strong>PrimeCare Hospital</strong>
          </p>

          <p>
            Address: 123 Medical Road, Chennai, Tamil Nadu, India
          </p>

          <p>
            Phone:
            <a href="tel:+919876543210"> +91 98765 43210</a>
          </p>

          <p>
            Email:
            <a href="mailto:info@abchospital.com">
              {" "}
              info@abchospital.com
            </a>
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Terms;
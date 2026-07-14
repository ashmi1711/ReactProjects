import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import "../assets/css/home-about.css";

function Faq() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">
        <section className="card-section">
          <h2>Frequently Asked Questions</h2>

          <details>
            <summary>1. How can I book an appointment?</summary>
            <p>
              You can book an appointment by filling out the{" "}
              <Link to="/application">Application Form</Link> or by contacting
              our reception desk.
            </p>
          </details>

          <br />

          <details>
            <summary>2. What are the hospital working hours?</summary>
            <p>
              The hospital is open from Monday to Saturday, 8:00 AM to 9:00 PM.
              Emergency services are available 24×7.
            </p>
          </details>

          <br />

          <details>
            <summary>3. Is emergency service available all day?</summary>
            <p>
              Yes. Emergency services, ICU, ambulance, and trauma care are
              available 24 hours a day.
            </p>
          </details>

          <br />

          <details>
            <summary>4. Which departments are available?</summary>

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
          </details>

          <br />

          <details>
            <summary>5. What documents should I bring?</summary>

            <ul>
              <li>Government ID Proof</li>
              <li>Previous Medical Records</li>
              <li>Prescription (if available)</li>
              <li>Insurance Card (if applicable)</li>
            </ul>
          </details>

          <br />

          <details>
            <summary>6. Do you accept health insurance?</summary>

            <p>
              Yes. We accept most major health insurance providers. Please carry
              your insurance documents during registration.
            </p>
          </details>

          <br />

          <details>
            <summary>7. How do I contact the hospital?</summary>

            <p>
              Phone:{" "}
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>

              <br />
              <br />

              Email:{" "}
              <a href="mailto:info@abchospital.com">
                info@abchospital.com
              </a>
            </p>
          </details>

          <br />

          <details>
            <summary>8. Can I cancel my appointment?</summary>

            <p>
              Yes. Appointments can be cancelled or rescheduled by contacting
              the hospital before your appointment time.
            </p>
          </details>

          <br />

          <details>
            <summary>9. Is parking available?</summary>

            <p>
              Yes. Free parking is available for patients and visitors.
            </p>
          </details>

          <br />

          <details>
            <summary>10. How can I send an enquiry?</summary>

            <p>
              Please use our <Link to="/enquiry">Enquiry Form</Link> to send
              your questions.
            </p>
          </details>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Faq;
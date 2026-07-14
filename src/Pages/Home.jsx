import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../assets/css/home-about.css";

function Home() {
  return (
    <>
      <Header />

      <Navbar />

      <main className="site-wrap">

        <section className="hero">

          <div className="card-section intro">
            <h2>Welcome to PrimeCare Hospital</h2>

            <p className="lead">
              We provide high-quality healthcare services using
              modern technology and an experienced medical team
              committed to compassionate patient care.
            </p>

            <a href="/application" className="cta">
              Register as Patient
            </a>
          </div>

          <div className="card-section">
            <h3 className="section-title">
              At a glance
            </h3>

            <p className="muted">
              24×7 emergency | Experienced specialists |
              Modern facilities | Patient-centered care
            </p>
          </div>

        </section>

        <section
          id="vision-mission"
          className="card-section grid-2"
        >
          <article>
            <h2>Our Vision</h2>

            <p>
              To become one of the most trusted hospitals
              by delivering excellent healthcare services
              with <strong>compassion and innovation</strong>.
            </p>
          </article>

          <article>

            <h2>Our Mission</h2>

            <p>We are dedicated to:</p>

            <ul>
              <li>Providing affordable healthcare</li>
              <li>Ensuring patient safety</li>
              <li>Delivering quality medical treatment</li>
              <li>Promoting healthy living</li>
              <li>Using advanced medical technology</li>
            </ul>

          </article>
        </section>

        <section
          id="services"
          className="card-section"
        >
          <h2>Our Comprehensive Services</h2>

          <div className="feature-list">

            <div className="feature-card">
              <h3>Outpatient Services</h3>
              <p className="muted">
                Consultations, diagnostics, minor procedures.
              </p>
            </div>

            <div className="feature-card">
              <h3>Inpatient Care</h3>
              <p className="muted">
                Comfortable wards with attentive nursing care.
              </p>
            </div>

            <div className="feature-card">
              <h3>Emergency & Trauma</h3>
              <p className="muted">
                24×7 emergency department with critical care.
              </p>
            </div>

          </div>
        </section>

        <section
          id="why-choose-us"
          className="card-section"
        >
          <h2>Why Choose Our Hospital?</h2>

          <div className="grid-3">

            <div className="feature-card">
              <h3>Experienced Doctors</h3>
              <p className="muted">
                Board-certified specialists across departments.
              </p>
            </div>

            <div className="feature-card">
              <h3>Advanced Technology</h3>
              <p className="muted">
                Modern imaging and diagnostic labs.
              </p>
            </div>

            <div className="feature-card">
              <h3>Patient Safety</h3>
              <p className="muted">
                Strict hygiene and safety protocols.
              </p>
            </div>

          </div>
        </section>

        <section
          id="timings"
          className="card-section"
        >
          <h2>Hospital Operating Hours</h2>

          <dl>
            <dt>Monday to Saturday</dt>

            <dd>8:00 AM - 9:00 PM</dd>

            <dt>Sunday</dt>

            <dd>Emergency Services Only</dd>
          </dl>
        </section>

        <section
          id="emergency"
          className="card-section"
        >
          <h2>Emergency Contact Information</h2>

          <dl className="contact-list">

            <dt>Emergency Hotline</dt>

            <dd>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </dd>

            <dt>Ambulance Service</dt>

            <dd>
              <a href="tel:+919123456789">
                +91 91234 56789
              </a>
            </dd>

            <dt>General Enquiry</dt>

            <dd>
              <a href="mailto:info@abchospital.com">
                info@abchospital.com
              </a>
            </dd>

          </dl>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;
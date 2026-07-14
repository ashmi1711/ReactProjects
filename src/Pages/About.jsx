import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../assets/css/home-about.css";

function About() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">

        <section className="card-section">
          <h2>About PrimeCare Hospital</h2>

          <p>
            PrimeCare Hospital is a multi-specialty healthcare institution
            dedicated to providing quality medical care with compassion,
            innovation, and excellence. Since its establishment, the hospital
            has been serving thousands of patients with advanced treatments
            and experienced healthcare professionals.
          </p>

          <p>
            Our hospital combines modern technology with personalized patient
            care to ensure the best possible treatment and recovery.
          </p>
        </section>

        <section className="card-section">
          <h2>Our History</h2>

          <p>
            PrimeCare Hospital was established with the vision of making
            quality healthcare affordable and accessible to everyone.
            Over the years, the hospital has expanded its services by
            introducing advanced diagnostic facilities, specialized
            departments, and modern operation theatres.
          </p>
        </section>

        <section className="card-section">
          <h2>Our Vision</h2>

          <p>
            To become the most trusted healthcare institution by delivering
            world-class medical services while maintaining the highest
            standards of patient care and safety.
          </p>
        </section>

        <section className="card-section">
          <h2>Our Mission</h2>

          <ul>
            <li>Provide quality healthcare services.</li>
            <li>Ensure patient satisfaction.</li>
            <li>Promote preventive healthcare.</li>
            <li>Support continuous medical research.</li>
            <li>Maintain ethical medical practices.</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Core Values</h2>

          <ul>
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Respect</li>
            <li>Teamwork</li>
            <li>Innovation</li>
            <li>Patient Safety</li>
            <li>Quality Service</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Hospital Facilities</h2>

          <ul>
            <li>24×7 Emergency Services</li>
            <li>Advanced Operation Theatres</li>
            <li>Modern ICU</li>
            <li>Laboratory Services</li>
            <li>Digital X-Ray</li>
            <li>MRI &amp; CT Scan</li>
            <li>Blood Bank</li>
            <li>Pharmacy</li>
            <li>Ambulance Services</li>
            <li>Patient Counseling</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Why Patients Trust Us</h2>

          <ol>
            <li>Experienced Doctors</li>
            <li>Qualified Nursing Staff</li>
            <li>Modern Medical Equipment</li>
            <li>Affordable Treatment</li>
            <li>Clean and Safe Environment</li>
            <li>Patient-Centered Care</li>
          </ol>
        </section>

        <section className="card-section">
          <h2>Achievements</h2>

          <ul>
            <li>10+ Years of Healthcare Excellence</li>
            <li>50,000+ Happy Patients</li>
            <li>100+ Qualified Doctors</li>
            <li>25+ Medical Departments</li>
            <li>24×7 Emergency Care</li>
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;
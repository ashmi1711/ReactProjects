import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import "../Assets/css/home-about.css";

function Departments() {
  const departments = [
    {
      name: "General Medicine",
      description:
        "Provides diagnosis and treatment for common illnesses, infections, fever, diabetes, hypertension, and general health problems.",
    },
    {
      name: "Cardiology",
      description:
        "Specializes in heart-related diseases including ECG, Echo, angiography, and cardiac treatment.",
    },
    {
      name: "Neurology",
      description:
        "Treats disorders related to the brain, spinal cord, and nervous system, including stroke and epilepsy.",
    },
    {
      name: "Orthopedics",
      description:
        "Provides treatment for bone fractures, joint replacement, arthritis, sports injuries, and spine disorders.",
    },
    {
      name: "Pediatrics",
      description:
        "Offers healthcare services for infants, children, and adolescents, including vaccination and growth monitoring.",
    },
    {
      name: "Gynecology & Obstetrics",
      description:
        "Provides maternity care, pregnancy checkups, women's health services, and infertility treatment.",
    },
    {
      name: "Dermatology",
      description:
        "Treats skin, hair, and nail disorders such as acne, allergies, infections, eczema, and pigmentation.",
    },
    {
      name: "ENT",
      description:
        "Diagnoses and treats diseases related to the ear, nose, throat, sinus, and hearing problems.",
    },
    {
      name: "Radiology",
      description:
        "Provides diagnostic imaging services including X-Ray, CT Scan, MRI Scan, Ultrasound, and Mammography.",
    },
    {
      name: "Laboratory",
      description:
        "Performs blood tests, urine tests, pathology, microbiology, and other diagnostic investigations with accurate reports.",
    },
    {
      name: "Pharmacy",
      description:
        "Supplies genuine medicines prescribed by doctors and provides pharmaceutical guidance to patients.",
    },
    {
      name: "Emergency & Trauma Care",
      description:
        "Emergency services are available 24 hours a day with ambulance, ICU, trauma specialists, and critical care support.",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">

        <section className="card-section">
          <h2>Our Departments</h2>

          <p>
            PrimeCare Hospital offers a wide range of medical departments with
            experienced doctors, modern equipment, and patient-centered care.
          </p>
        </section>

        <section className="card-section">
          <div className="row">

            {departments.map((department, index) => (
              <div className="col-md-6 mb-4" key={index}>

                <div className="feature-card">
                  <h3>
                    {index + 1}. {department.name}
                  </h3>

                  <p>{department.description}</p>
                </div>

              </div>
            ))}

          </div>
        </section>

        <section className="card-section">
          <h2>Department Timings</h2>

          <ul>
            <li>Monday - Saturday</li>
            <li>Morning: 8:00 AM - 1:00 PM</li>
            <li>Afternoon: 2:00 PM - 7:00 PM</li>
            <li>Emergency Department: Open 24 × 7</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Facilities Available</h2>

          <ul>
            <li>Operation Theatre</li>
            <li>ICU</li>
            <li>NICU</li>
            <li>Blood Bank</li>
            <li>Ambulance Service</li>
            <li>Health Checkups</li>
            <li>Digital Laboratory</li>
            <li>Advanced Diagnostic Center</li>
            <li>24×7 Pharmacy</li>
            <li>Patient Counseling</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Need Medical Assistance?</h2>

          <p>
            Visit our <Link to="/application">Application Form</Link> to register
            as a patient or use the{" "}
            <Link to="/enquiry">Enquiry Form</Link> for any questions.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Departments;
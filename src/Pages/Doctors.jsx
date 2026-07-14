import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import "../assets/css/home-about.css";

function Doctors() {
  const doctors = [
    {
      name: "Dr. S. Harshini",
      specialization: "Cardiologist",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "15 Years",
      time: "9:00 AM - 1:00 PM",
    },
    {
      name: "Dr. R. Sajeetha",
      specialization: "Pediatrician",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "12 Years",
      time: "10:00 AM - 2:00 PM",
    },
    {
      name: "Dr. R. Ramya",
      specialization: "Orthopedic Surgeon",
      qualification: "MBBS, MS (Orthopedics)",
      experience: "18 Years",
      time: "11:00 AM - 4:00 PM",
    },
    {
      name: "Dr. V. Sameera",
      specialization: "Gynecologist",
      qualification: "MBBS, MD (OBG)",
      experience: "14 Years",
      time: "9:00 AM - 12:30 PM",
    },
    {
      name: "Dr. G. Gayathri",
      specialization: "Neurologist",
      qualification: "MBBS, MD, DM (Neurology)",
      experience: "16 Years",
      time: "2:00 PM - 6:00 PM",
    },
    {
      name: "Dr. K. Ajith Kumar",
      specialization: "General Physician",
      qualification: "MBBS, MD",
      experience: "10 Years",
      time: "8:00 AM - 12:00 PM",
    },
    {
      name: "Dr. M. Thasneem",
      specialization: "ENT Specialist",
      qualification: "MBBS, MS (ENT)",
      experience: "11 Years",
      time: "3:00 PM - 7:00 PM",
    },
    {
      name: "Dr. J. Rose",
      specialization: "Dermatologist",
      qualification: "MBBS, MD (Dermatology)",
      experience: "9 Years",
      time: "10:00 AM - 1:00 PM",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">

        <section className="card-section">
          <h2>Our Medical Team</h2>

          <p>
            Our doctors are highly qualified and experienced in providing
            quality healthcare services with compassion and dedication.
          </p>
        </section>

        <section className="card-section">
          <div className="row">

            {doctors.map((doctor, index) => (
              <div className="col-md-6 mb-4" key={index}>

                <div className="feature-card">

                  <h3>{doctor.name}</h3>

                  <p>
                    <strong>Specialization:</strong>{" "}
                    {doctor.specialization}
                  </p>

                  <p>
                    <strong>Qualification:</strong>{" "}
                    {doctor.qualification}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {doctor.experience}
                  </p>

                  <p>
                    <strong>Consultation Time:</strong>{" "}
                    {doctor.time}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </section>

        <section className="card-section">
          <h2>Doctor Availability</h2>

          <ul>
            <li>Monday - Saturday</li>
            <li>Morning Session: 8:00 AM - 1:00 PM</li>
            <li>Evening Session: 2:00 PM - 7:00 PM</li>
            <li>Emergency Doctors Available 24×7</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>Book an Appointment</h2>

          <p>
            To consult any doctor, please visit our{" "}
            <Link to="/application">
              Application Form
            </Link>{" "}
            or contact the hospital reception.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Doctors;
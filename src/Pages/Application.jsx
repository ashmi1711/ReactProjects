import { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../assets/css/home-about.css";

function Application() {
  const [formData, setFormData] = useState({
    fullname: "",
    guardian: "",
    dob: "",
    age: "",
    gender: "",
    bloodgroup: "",
    mobile: "",
    email: "",
    address: "",
    department: "General Medicine",
    doctor: "Dr. Rajesh Kumar",
    appointmentdate: "",
    appointmenttime: "",
    symptoms: "",
    emergency_name: "",
    emergency_relationship: "",
    emergency_contact: "",
    insurance_provider: "",
    policy_number: "",
    diseases: [],
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "diseases") {
      let updated = [...formData.diseases];

      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }

      setFormData({ ...formData, diseases: updated });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Application Submitted Successfully!");
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">
        <section className="card-section">
          <h2>Patient Registration & Appointment Form</h2>

          <form onSubmit={handleSubmit}>

            <fieldset>
              <legend>Personal Information</legend>

              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                className="form-control mb-3"
                value={formData.fullname}
                onChange={handleChange}
                required
              />

              <label>Father / Guardian Name</label>
              <input
                type="text"
                name="guardian"
                className="form-control mb-3"
                value={formData.guardian}
                onChange={handleChange}
              />

              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="form-control mb-3"
                value={formData.dob}
                onChange={handleChange}
              />

              <label>Age</label>
              <input
                type="number"
                name="age"
                className="form-control mb-3"
                value={formData.age}
                onChange={handleChange}
              />

              <label>Gender</label>

              <div className="mb-3">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />{" "}
                Male

                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="ms-3"
                  onChange={handleChange}
                />{" "}
                Female

                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="ms-3"
                  onChange={handleChange}
                />{" "}
                Other
              </div>

              <label>Blood Group</label>

              <select
                name="bloodgroup"
                className="form-select"
                value={formData.bloodgroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </fieldset>

            <br />

            <fieldset>

              <legend>Contact Information</legend>

              <label>Mobile Number</label>

              <input
                type="tel"
                name="mobile"
                className="form-control mb-3"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Address</label>

              <textarea
                name="address"
                rows="4"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <fieldset>

              <legend>Appointment Details</legend>

              <label>Department</label>

              <select
                name="department"
                className="form-select mb-3"
                value={formData.department}
                onChange={handleChange}
              >
                <option>General Medicine</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Gynecology</option>
                <option>Dermatology</option>
                <option>ENT</option>
                <option>Radiology</option>
              </select>

              <label>Doctor</label>

              <select
                name="doctor"
                className="form-select mb-3"
                value={formData.doctor}
                onChange={handleChange}
              >
                <option>Dr. Rajesh Kumar</option>
                <option>Dr. Priya Sharma</option>
                <option>Dr. Arun Kumar</option>
                <option>Dr. Meena Lakshmi</option>
                <option>Dr. Sanjay Patel</option>
                <option>Dr. Kavitha Reddy</option>
              </select>

              <label>Appointment Date</label>

              <input
                type="date"
                name="appointmentdate"
                className="form-control mb-3"
                value={formData.appointmentdate}
                onChange={handleChange}
              />

              <label>Preferred Time</label>

              <input
                type="time"
                name="appointmenttime"
                className="form-control"
                value={formData.appointmenttime}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <fieldset>

              <legend>Medical Information</legend>

              <label>Symptoms</label>

              <textarea
                name="symptoms"
                rows="4"
                className="form-control mb-3"
                value={formData.symptoms}
                onChange={handleChange}
              />

              <label>Existing Diseases</label>

              {[
                "Diabetes",
                "Blood Pressure",
                "Heart Disease",
                "Asthma",
                "None",
              ].map((disease) => (
                <div key={disease}>
                  <input
                    type="checkbox"
                    name="diseases"
                    value={disease}
                    onChange={handleChange}
                  />{" "}
                  {disease}
                </div>
              ))}
            </fieldset>

            <br />

            <fieldset>

              <legend>Emergency Contact</legend>

              <input
                type="text"
                name="emergency_name"
                placeholder="Emergency Contact Name"
                className="form-control mb-3"
                value={formData.emergency_name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="emergency_relationship"
                placeholder="Relationship"
                className="form-control mb-3"
                value={formData.emergency_relationship}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="emergency_contact"
                placeholder="Emergency Contact Number"
                className="form-control"
                value={formData.emergency_contact}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <fieldset>

              <legend>Insurance Details</legend>

              <input
                type="text"
                name="insurance_provider"
                placeholder="Insurance Provider"
                className="form-control mb-3"
                value={formData.insurance_provider}
                onChange={handleChange}
              />

              <input
                type="text"
                name="policy_number"
                placeholder="Policy Number"
                className="form-control"
                value={formData.policy_number}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <div className="mb-3">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                required
              />{" "}
              I declare that the information provided is correct.
            </div>

            <button className="btn btn-primary me-2" type="submit">
              Submit Application
            </button>

            <button
              className="btn btn-secondary"
              type="reset"
              onClick={() =>
                window.location.reload()
              }
            >
              Reset
            </button>

          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Application;
import { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Assets/css/home-about.css";

function Enquiry() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    subject: "",
    department: "General Medicine",
    message: "",
    contact: "",
    contactTime: [],
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "contactTime") {
      let updated = [...formData.contactTime];

      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }

      setFormData({ ...formData, contactTime: updated });
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

    alert("Enquiry Submitted Successfully!");
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="site-wrap">
        <section className="card-section">
          <h2>Patient Enquiry Form</h2>

          <p>
            Please fill in the following details. Our team will contact you as
            soon as possible.
          </p>

          <form onSubmit={handleSubmit}>

            <fieldset>
              <legend>Personal Details</legend>

              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                className="form-control mb-3"
                value={formData.fullname}
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

              <label>Mobile Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control mb-3"
                value={formData.city}
                onChange={handleChange}
              />

              <label>State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <fieldset>
              <legend>Enquiry Details</legend>

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control mb-3"
                value={formData.subject}
                onChange={handleChange}
              />

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
                <option>Laboratory</option>
              </select>

              <label>Enquiry Message</label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
              />
            </fieldset>

            <br />

            <fieldset>
              <legend>Preferred Contact Method</legend>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="contact"
                  value="Phone"
                  onChange={handleChange}
                />
                <label className="form-check-label">Phone</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="contact"
                  value="Email"
                  onChange={handleChange}
                />
                <label className="form-check-label">Email</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="contact"
                  value="SMS"
                  onChange={handleChange}
                />
                <label className="form-check-label">SMS</label>
              </div>
            </fieldset>

            <br />

            <fieldset>
              <legend>Preferred Contact Time</legend>

              {[
                "Morning (8 AM - 12 PM)",
                "Afternoon (12 PM - 4 PM)",
                "Evening (4 PM - 8 PM)",
              ].map((time) => (
                <div className="form-check" key={time}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="contactTime"
                    value={time}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{time}</label>
                </div>
              ))}
            </fieldset>

            <br />

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">
                I confirm that the above information is correct.
              </label>
            </div>

            <button type="submit" className="btn btn-primary me-2">
              Submit Enquiry
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                setFormData({
                  fullname: "",
                  email: "",
                  phone: "",
                  city: "",
                  state: "",
                  subject: "",
                  department: "General Medicine",
                  message: "",
                  contact: "",
                  contactTime: [],
                  declaration: false,
                })
              }
            >
              Clear Form
            </button>

          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Enquiry;
import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url =
      "https://script.google.com/macros/s/AKfycbyJLmew2fh0UjGmBGKnDlFoI-0FYiePKZE6OcoosPlElMrTREJlkxHdj_AGZPnWWcNx/exec"; // Replace with your actual script URL

    const body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body,
      });

      const result = await response.json();
      alert(result.message || "Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <hr className="divider" />

     

      <hr className="divider" />

      <div className="google-form">
        <h2 className="google-form-heading">
          Fill Out the Form Below for Any Information
        </h2>

        {/* Custom Form */}
        <form className="studentForm"
          onSubmit={handleSubmit}
         
        >
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
      
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
      
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
      
          />

          <label>Branch:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
      
          >
            <option value="">Select Branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science">Electrical</option>
            <option value="Engineering">Civil</option>
            <option value="Other">Other</option>
          </select>

          <label>How Can Help You
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
      
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <hr className="divider" />
      <div className="address-section">
        <h2 className="address-heading">Our Address</h2>
        <p className="address-info">
          Maulana Azad National Urdu University - Manuu Polytechnic Darbhanga -
          846002 <br />
          For any information, contact our team members: Sameer Khan
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326247.0164544597!2d85.9379339!3d26.0832365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc7524b7a6395%3A0x45c2b613d6725ed6!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1709289680012"
          width="100%"
          height="300"
          className="map-frame"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

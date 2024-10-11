import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_765xxjj',
        'template_3xxaf1g',
        {
          from_name: form.name,
          to_name: 'Akhil Kumar',
          from_email: form.email,
          to_email: 'akhil.se2024@gmail.com',
          message: form.message,
        },
        'PePP4SCsFf0J93hwK',
      )
      .then(
        () => {
            alert("Your Mail Send Successfully !");
          setLoading(false);
          setTimeout(() => {
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
        },
      );
  };
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {window.innerWidth <= 768 ? (
          ""
        ) : (
          <img
            src="/assets/terminal.png"
            alt="terminal background"
            className="absolute min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text">Lets Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3 ">
              <span className="field-label">Full Name</span>
              <input
                placeholder="Ex : Akhil Kumar"
                type="text"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <label className="space-y-3 ">
              <span className="field-label">Email</span>
              <input
                placeholder="Ex : porfolio@gmail.com"
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
              />
            </label>
            <label className="space-y-3 ">
              <span className="field-label">Your Message</span>
              <textarea
                placeholder="hi, i wanna give u a job..."
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="field-input"
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

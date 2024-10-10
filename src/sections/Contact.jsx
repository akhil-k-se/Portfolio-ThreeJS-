import React, { useRef, useState } from "react";

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name:"",
        email:"",
        message:""
    })
    const handleChange =()=>{}
    const handleSubmit = ()=>{}
  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Lets Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
          <label className="space-y-3 ">
            <span className="field-label">
                Full Name
            </span>
            <input placeholder="Ex : Akhil Kumar" type="text" name="name" value={form.name} onChange={handleChange} className="field-input"/>
          </label>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

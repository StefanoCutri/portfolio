import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "../hooks/useForm";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";

const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const [values, handleInputChange, resetForm] = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l93nyxm",
        "template_f7t4bw8",
        form.current,
        "kg3iXeVEPLg6L0gl6",
      )
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "dark",
          });
          resetForm?.();
        },
        (error) => {
          toast.error("Something went wrong. Try again later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <>
      {/* Fixed left socials (desktop only) */}
      <div className="fixed-socials">
        <a
          href="https://github.com/stefanocutri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/stefano-cutri-601b4b224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </div>

      {/* Contact section */}
      <section id="contact">
        <p className="contact-kicker reveal">What's Next?</p>
        <h2 className="contact-heading reveal">Get In Touch</h2>
        <p className="contact-sub reveal">
          I'm currently open to new positions. Whether you have a question, a
          project in mind, or just want to say hi — my inbox is open.
        </p>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
          <div className="form-group">
            <label className="form-label" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              className="form-input"
              type="text"
              name="user_name"
              placeholder="Your name"
              value={values.user_name}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              className="form-input"
              type="email"
              name="user_email"
              placeholder="your@email.com"
              value={values.user_email}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project..."
              value={values.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Social links row (mobile fallback) */}
        <div className="social-links-row reveal">
          <a
            href="https://github.com/stefanocutri"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stefano-cutri-601b4b224/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};

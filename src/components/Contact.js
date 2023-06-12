import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";
import { useForm } from "../hooks/useForm";

export const Contact = () => {
  const [values, handleInputChange] = useForm({
    user_name: "",
    user_email: "",
    message: "",
  });
  // const [values, setValues] = useState({
  //   user_name: "",
  //   user_email: "",
  //   message: "",
  // });

  // const handleInputChange = ({ target }) => {
  //   console.log(values);
  //   setValues({
  //     ...values,
  //     [target.name]: target.value,
  //   });
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email and notify
    console.log("sent email!");
    emailjs
      .sendForm(
        "service_l93nyxm",
        "template_f7t4bw8",
        form.current,
        "kg3iXeVEPLg6L0gl6"
      )
      .then(
        (result) => {
          toast.success("Email sent!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error(error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <div className="info-container relative" id="contact">
      <div className="flex flex-row items-center justify-center mb-3 pt-[14%] contact-info">
        <h2 className="font-bold text-2xl">Get in touch</h2>
      </div>
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="text-[#8892b0] px-5 text-center contact-text">
          I'm currently open to new positions, so if you are interested in
          contact me do not hesitate to send me a message!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <input
            required
            onChange={handleInputChange}
            value={values.name}
            type="text"
            placeholder="Name"
            name="user_name"
          />
        </div>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <input
            required
            onChange={handleInputChange}
            value={values.email}
            type="email"
            placeholder="Email"
            name="user_email"
          />
        </div>
        <div
          className="flex flex-col justify-start
         items-center p-2"
        >
          <textarea
            required
            onChange={handleInputChange}
            value={values.message}
            placeholder="Your Message"
            name="message"
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-evenly mt-3">
          <a href="mailto:stefanocutristecco@gmail.com">
            <button className="button type3">Let's talk!</button>
          </a>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className="flex flex-col items-start justify-end h-[10%] social-links">
        <div className="flex flex-row justify-evenly pl-3 pb-3 socials-container">
          <a href="https://github.com/stefanocutri" className="pr-3">
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="social-link"
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/stefano-cutri-601b4b224/">
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="social-link"
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";
import image from "./image.jpg";

//Contact should be a popup page whenever the button is clicked
//Implement Capcha and make leaving their email address optional
//Let the visitor know what form solution I am using so they are informed

function Contact() {
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const form = useRef();
  const recaptchaRef = React.createRef();

  const verifyCallback = () => {
    document.getElementById("submit").disabled = false;
  };

  const handleSent = () => {
    setSent(true);
    recaptchaRef.current.reset();
    document.getElementById("submit").disabled = true;
  };

  const handleChange = () => {
    setSent(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b370ovf",
        "template_dx2ijvw",
        form.current,
        "user_DpCspvgn1zwRMFUwB3sER"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    handleSent();
  };
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.wrapper}>
        <div className='hide-for-mobile'>
          <Image src={image} alt='' />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`${styles.form} container`}>
          <label className={styles.label} htmlFor='user_name'>
            Name
          </label>
          <input
            className={styles.input}
            type='text'
            name='user_name'
            title='Name'
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor='user_email'>
            Email
          </label>
          <input
            className={styles.input}
            type='email'
            name='user_email'
            title='Email'
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor='subject'>
            Subject
          </label>
          <input
            className={styles.input}
            type='text'
            name='subject'
            title='Subject'
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor='message'>
            Message
          </label>
          <textarea
            className={styles.text_area}
            name='message'
            title='Message'
            onChange={handleChange}
            required
          />
          <span className={styles.confirmation}>
            {sent ? "Thanks for the message!" : ""}
          </span>
          <br />
          <ReCAPTCHA
            sitekey='6LdAgZUcAAAAALaLmlq3ISoSOLIlP6U1GKqSDYEj'
            ref={recaptchaRef}
            onChange={verifyCallback}
            theme='dark'
          />
          <input
            type='submit'
            value='Send'
            className={`${styles.button} btn`}
            id='submit'
            disabled
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;

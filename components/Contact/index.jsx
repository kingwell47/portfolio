import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

//Contact should be a popup page whenever the button is clicked
//Implement Capcha and make leaving their email address optional
//Let the visitor know what form solution I am using so they are informed

function Contact() {
  const form = useRef();

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
  };
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
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
        />
        <label className={styles.label} htmlFor='user_email'>
          Email
        </label>
        <input
          className={styles.input}
          type='email'
          name='user_email'
          title='Email'
        />
        <label className={styles.label} htmlFor='message'>
          Message
        </label>
        <textarea className={styles.text_area} name='message' title='Message' />
        <input type='submit' value='Send' className={`${styles.button} btn`} />
      </form>
    </section>
  );
}

export default Contact;

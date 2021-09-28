//Contact form alternative link instead of a pop-up
//Should have the same functionality and will serve as a backup in-case popup form is too hard to implement

import Head from "next/head";
import Contact from "../components/Contact";

function contact() {
  return (
    <>
      <Head>
        <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer></script>
      </Head>
      <Contact />
    </>
  );
}

export default contact;

//Contact form alternative link instead of a pop-up
//Should have the same functionality and will serve as a backup in-case popup form is too hard to implement
import Head from "next/head";
import Contact from "../components/Contact";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Joel P. Doctor - Online Portfolio</title>
      </Head>
      <Contact />
    </>
  );
}

export default contact;

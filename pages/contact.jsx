//Contact form alternative link instead of a pop-up
//Should have the same functionality and will serve as a backup in-case popup form is too hard to implement

import Contact from "../components/Contact";

function contact() {
  return (
    <>
      <Contact />
      <script
        src='https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit'
        async
        defer></script>
    </>
  );
}

export default contact;

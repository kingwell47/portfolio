import Image from "next/image";

//Clicking on one of the hero index icons should link to the portfolio page and filter for what the user clicked

function Hero() {
  return (
    <section>
      {/* <Image src='/' alt='Hero Image' /> */}
      <p>I am</p>
      <h1>Joel P. Doctor</h1>
      <p>
        Web Development <br />
        Project Management <br />
        Customer Support <br />
        Graphic Design
      </p>
      <button>Contact Me</button>
    </section>
  );
}

export default Hero;

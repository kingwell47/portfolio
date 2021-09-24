import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Resume from "../components/Resume";
import Works from "../components/Works";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joel P. Doctor - Online Portfolio</title>
        <meta
          name='description'
          content='Online portfolio website of Joel P. Doctor, Web Developer and Program Manager'
        />
        <link rel='icon' href='/logo.png' />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <Works />
        <Resume />
        <About />
      </main>
      <Footer />
    </div>
  );
}

import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Works />
        <Resume />
        <About />
      </Layout>
    </>
  );
}

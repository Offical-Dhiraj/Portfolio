import Hero from "../seactions/Hero";
import About from "../seactions/About";
import TechStack from "../seactions/TechStack";
import FeaturedProject from "../seactions/FeaturedProject";
import Projects from "../seactions/Projects";
// import Github from "../seactions/Github";
import Journey from "../seactions/Journey";
import Resume from "../seactions/Resume";
import Contact from "../seactions/Contact";

const Home = () => {
  return (
    <>
      <Hero />

      <About />

      <TechStack />

      <FeaturedProject />

      <Projects />

      {/* <Github /> */}

      <Journey />

      <Resume />

      <Contact />
    </>
  );
};

export default Home;
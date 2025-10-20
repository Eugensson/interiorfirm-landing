import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { BackToTopBtn } from "@/components/back-to-top-btn";
import { ServicesTertiary } from "@/components/services-tertiary";
import { ServicesSecondary } from "@/components/services-secondary";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <ServicesSecondary />
      <ServicesTertiary />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default Home;

import Header from "@/components/header/Header";
import Portfolio from "@/components/portfolio/Portfolio";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Portfolio />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

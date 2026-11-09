import Header from "@/components/header/Header";
import Work from "@/components/work/Work";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Stack from "@/components/stack/Stack";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Work />
        <About />
        <Experience />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

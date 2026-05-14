import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedArticles from "@/components/FeaturedArticles";
import Instagram from "@/components/Instagram";
import Recommendations from "@/components/Recommendations";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedArticles />
        <Instagram />
        <Recommendations />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

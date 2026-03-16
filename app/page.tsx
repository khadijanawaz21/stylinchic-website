import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ProblemsAndSolutions from "@/components/ProblemsAndSolutions";
import Reviews from "@/components/Reviews";
import MeetExpert from "@/components/MeetExpert";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <WhyChooseUs />
        <Process />
        <ProblemsAndSolutions />
        <Reviews />
        <MeetExpert />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

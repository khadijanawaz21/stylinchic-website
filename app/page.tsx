import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import MeetExpert from "@/components/MeetExpert";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main className="pb-14 md:pb-0">
        <Hero />
        <BeforeAfter />
        <Services />
        <Process />
        <Reviews />
        <MeetExpert />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

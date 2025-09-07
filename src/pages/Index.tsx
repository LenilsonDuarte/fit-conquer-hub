import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TournamentCarousel from "@/components/TournamentCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TournamentCarousel />
      <GalleryCarousel />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import LogoAni from "./components/LogoAni";
import ProjectSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-800">
     <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        <LogoAni/>
        <ProjectSection/>
        <EmailSection/>
        
      </div>
      <Footer/>
    </main>
  );
}

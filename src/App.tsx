import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Internship from "./pages/Internship";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SemiPermanentMakeup from "./pages/CourseDetails/Semi-PermanentMakeup";
import HydraFacial from "./pages/CourseDetails/Hydrafacial";
import Injectables from "./pages/CourseDetails/Injectables";
import CertifiCourseAdvSemiPermanentMakeup from "./pages/CourseDetails/Certifi-course-Semi_perma_makeup";
import CertifiCourseSemiMakeup from "./pages/CourseDetails/Certifi_Course_Semi-Permanent-Makeup";
import CertifiLaser from "./pages/CourseDetails/CertifiLaser";
import ChemicalPeel from "./pages/CourseDetails/ChemicalPeel";
import MediFacial from "./pages/CourseDetails/MediFacial";

import HairTransplant from "./pages/CourseDetails/HairTransplant";
import ClinicalCosmetology from "./pages/CourseDetails/ClinicalCosmetologys";
import ClinicalTrichologys from "./pages/CourseDetails/ClinicalTrichology";
import DipFacialInj from "./pages/CourseDetails/DiplomaFacialInjectables";
import FaceInjection from "./pages/CourseDetails/FaceInjection";
import FacialAesthetic from "./pages/CourseDetails/FacialAesthetics";
import FellowCosmetology from "./pages/CourseDetails/FellowCosmetology";
import SkinTechnicians from "./pages/CourseDetails/SkinTechnician";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/Edumed-AnnaNagar">
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-[120px]">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/internship" element={<Internship />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/volunteering" element={<Volunteering />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/semi-permanentmakeup" element={<SemiPermanentMakeup />} />
                <Route path="/hydra-facial" element={<HydraFacial />} />
                <Route path="/injectables" element={<Injectables />} />
                <Route path="/adv-semipermanent-makeup" element={<CertifiCourseAdvSemiPermanentMakeup />} />
                <Route path="/semi-makeup" element={<CertifiCourseSemiMakeup />} />
                <Route path="/laser" element={<CertifiLaser />} />
                <Route path="/chemicalpeel" element={<ChemicalPeel />} />
                <Route path="/medifacial" element={<MediFacial />} />

                <Route path="/ClinicalCosmetology" element={<ClinicalCosmetology />} />
                  <Route path="/ClinicalTrichologys" element={<ClinicalTrichologys />} />
                  <Route path="/DiplomaFacialInjection" element={<DipFacialInj />} />
                  <Route path="/FaceInjection" element={<FaceInjection />} />
                  <Route path="/FacialAesthetic" element={<FacialAesthetic />} />
                  <Route path="/FellowCosmetology" element={<FellowCosmetology />} />
                  <Route path="/SkinTechnicians" element={<SkinTechnicians />} />
                 <Route path="/HairTransplant" element={<HairTransplant />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Floating WhatsApp */}
            <a
              href="https://wa.me/9199648 10000"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
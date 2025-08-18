import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Internship from "./pages/Internship";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-[120px]">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/internship" element={<Internship />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/volunteering" element={<Volunteering />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

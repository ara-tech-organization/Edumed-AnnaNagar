import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";
import CourseCard from "@/components/ui/course-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Users,
  BookOpen,
  Star,
  GraduationCap,
  Briefcase,
  Scale,
  Rocket
} from "lucide-react";
import logo1 from "@/assets/logo1.webp"
import logo2 from "@/assets/logo2.webp"
import logo3 from "@/assets/logo3.webp"
import logo4 from "@/assets/logo4.webp"
import logo5 from "@/assets/logo5.webp"

// Import images
import { motion } from "framer-motion";
import heroImage from "@/assets/Courses.png";
import medicalPattern from "@/assets/medical-pattern.jpg";
import HairFollicleIcon from "@/assets/blood-donation-svgrepo-com.svg";
import medicalpills from "@/assets/pills-pill-svgrepo-com.svg";
import Pills from "@/assets/skin-hair-follicle-dermis-svgrepo-com.svg";
import underlineSvg from "@/assets/dual-underline.svg"
import Facialinjectables from "@/assets/Facial-Aesthetics.png";
import ClinicalCosmetology from "@/assets/Clinical-Cosmetology.png";
import DiplomaClinicalCosmetology from "@/assets/Diploma-Clinical-Cosmetology.png";
import FacialAesthetics from "@/assets/Facial-Aesthetics.png";
import Makeup from "@/assets/Makeup.png";

import AdvancedMakeup from "@/assets/Advanced-Makeup.png";
import CertificateInjectables from "@/assets/Certificate-Injectables.png";
import MediFacial from "@/assets/Medi-Facial.png";
import ChemicalPeel from "@/assets/Chemical-Peel.png";
import Lasers from "@/assets/Lasers.png";
import bannerImage from "@/assets/edumed-laon-BPmkpsdI.webp"
import bgImage from "@/assets/hero-medical.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";
import FormModal from "./FormModal";

const Index = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);
  const [swiperRef1, setSwiperRef1] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logos = [logo1, logo2, logo3, logo4, logo5];


  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: `Requirements vary by program but generally include a high school diploma or equivalent, completion of prerequisite courses, and passing entrance exams.`,
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer various financial aid options including federal aid, scholarships, and payment plans. Our financial aid office can help you explore all available options.",
    },
    {
      question: "How long are the programs?",
      answer: "Program lengths vary from 8 months to 24 months depending on the specific healthcare career track you choose.",
    },
    {
      question: "Are classes available in the evening?",
      answer: "Yes, we offer flexible scheduling including day, evening, and weekend options to accommodate working professionals.",
    },
    {
      question: "What is the job placement rate?",
      answer: "Our graduates have a 92% job placement rate within 6 months of graduation, with many hired directly by their internship sites.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Meera",
      role: "Medical Student",
      image: "",
      rating: 5,
      content:
        "Dr. EduMed transformed my career. The hands-on training and expert faculty gave me the confidence to start my own practice in aesthetics.",
      location: "Chennai",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Medical Student",
      image: "",
      rating: 5,
      content:
        "Outstanding faculty and state-of-the-art facilities. The clinical exposure here is unmatched, and the learning environment is truly exceptional.",
      location: "Johns Hopkins University",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Emergency Medicine",
      image: "",
      rating: 5,
      content:
        "Dr. Edumed's training program prepared me thoroughly for real-world medical challenges. The skills I learned here are invaluable.",
      location: "Boston General Hospital",
    },
  ];

  const featuredCourses = [
    {
      id: 1,
      image: Facialinjectables,
      title: "Master in Facial Injectables",
      description:
        "This postgraduate program trains medical professionals in Botox, fillers, and threads, blending theory with hands-on training.",
      tag: "Postgraduate",
    },
    {
      id: 2,
      image: DiplomaClinicalCosmetology,
      title: "PG Diploma in Clinical Cosmetology",
      description:
        "Advanced cosmetic treatment training for skin, hair, and laser with the latest equipment and techniques.",
      tag: "Diploma",
    },
    {
      id: 3,
      image: ClinicalCosmetology,
      title: "Fellowship in Clinical Cosmetology",
      description:
        "Focused on advanced skincare, anti-aging, and non-surgical techniques with practical learning.",
      tag: "Fellowship",
    },
    {
      id: 4,
      image: FacialAesthetics,
      title: "Fellowship in Facial Aesthetics",
      description:
        "Hair & skin science, cosmetic procedures, and ethics in aesthetic practice for professionals.",
      tag: "Fellowship",
    },
    {
      id: 5,
      image: Makeup,
      title: "Workshop in Semi-Permanent Makeup (SPMU)",
      description:
        "Covers microblading, powder brows, lip blush, eyeliner enhancement, and aftercare.",
      tag: "Workshop",
    },
  ];

  const certifiedCourses = [
    {
      id: 1,
      image: MediFacial,
      title: "Certificate Course in Medi Facial",
      description:
        "Covers advanced facial treatments targeting skin concerns like acne, pigmentation, and dullness. Focuses on rejuvenation using non-invasive techniques with an emphasis on patient assessment and treatment customization.",
      tag: "Postgraduate",
    },
    {
      id: 2,
      image: ChemicalPeel,
      title: "Certificate Course in Chemical Peel",
      description:
        "Focused on chemical exfoliation and skin rejuvenation techniques. Teaches appropriate peel selection, application, safety, and combination treatments for various skin conditions.",
      tag: "Diploma",
    },
    {
      id: 3,
      image: Lasers,
      title: "Certificate Course in Lasersy",
      description:
        "A deep dive into laser technology in medical aesthetics. Learn laser physics, patient assessment, and perform treatments like hair removal, pigmentation correction, and scar revision safely.",
      tag: "Fellowship",
    },
    {
      id: 4,
      image: Makeup,
      title: "Certificate Course in Semi-permanent Make Up",
      description:
        "Trains practitioners in cosmetic tattooing including microblading, lip blush, eyeliner, and scalp micropigmentation. Includes safety, pigment theory, and client customization.",
      tag: "Fellowship",
    },
    {
      id: 5,
      image: AdvancedMakeup,
      title: "Certificate Course in Advanced Semi-Permanent Makeup",
      description:
        "An advanced version of the SPMU course, covering detailed cosmetic tattooing with expert-level techniques and tools for enhanced facial aesthetics.",
      tag: "Workshop",
    },
    {
      id: 6,
      image: CertificateInjectables,
      title: "Certificate Course in Injectables",
      description:
        "Specialized training in skin rejuvenation and injectable procedures such as botulinum toxin and dermal fillers. Combines facial anatomy with hands-on skills in contouring and anti-aging.",
      tag: "Workshop",
    },
  ];


  const stats = [
    { number: 2450, suffix: "+", label: "Students Trained", icon: Users },
    { number: 200, suffix: "+", label: "Expert Faculty Members", icon: Award },
    { number: 90, suffix: "+", label: "Specialized Courses", icon: BookOpen },
    { number: 45, suffix: "%", label: "Average Career Growth in Alumni", icon: Star },
  ];

  const specialties = [
    {
      icon: GraduationCap,
      title: "In-Depth Expert Training",
      description:
        "Learn from highly qualified professionals with decades of hands-on experience.",
    },
    {
      icon: Award,
      title: "Accredited Certification",
      description:
        "Government and internationally recognized certificates for your professional credibility.",
    },
    {
      icon: Briefcase,
      title: "Guaranteed Placement",
      description:
        "Placement assistance with a refund policy for complete peace of mind.",
    },
    {
      icon: Scale,
      title: "Medico-Legal & Vendor Support",
      description:
        "Guidance on legal compliance and connections to trusted medical vendors.",
    },
    {
      icon: Rocket,
      title: "Business Launch Assistance",
      description:
        "End-to-end support to help you establish and grow your own medical practice.",
    },
  ];

  return (
    <div className="overflow-hidden">
       {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Dr. EduMed – Anna Nagar | Medical & Aesthetic Training Institute</title>
        <meta
          name="description"
          content="Join Dr. EduMed Anna Nagar for world-class medical & aesthetic career training. Hands-on practice, expert faculty, and globally recognized certifications."
        />
        <meta
          name="keywords"
          content="Dr EduMed Anna Nagar, medical training Chennai, aesthetic courses, cosmetology diploma, facial injectables, clinical cosmetology, healthcare certifications"
        />
        <meta name="author" content="Dr. EduMed Institute" />

        {/* ✅ Open Graph / Facebook */}
        <meta property="og:title" content="Dr. EduMed – Anna Nagar | Medical & Aesthetic Training Institute" />
        <meta
          property="og:description"
          content="Dreaming of a successful career in Aesthetics & Medical Sciences? Dr. EduMed Anna Nagar offers advanced training, hands-on practice & global certifications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.jpg" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. EduMed – Anna Nagar | Medical & Aesthetic Training Institute" />
        <meta
          name="twitter:description"
          content="Advance your career with Dr. EduMed Anna Nagar’s medical & aesthetic training programs."
        />
        <meta name="twitter:image" content="https://yourdomain.com/preview-image.jpg" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(1, 58, 114, 0.59), rgba(0, 64, 128, 0.77)),
      url(${bgImage})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="flex justify-center items-center text-center">
          <div className="lg:w-full z-10 space-y-6 max-w-4xl">
            <h1
              className="text-2xl lg:text-5xl font-bold leading-tight text-white max-w-7xl mx-auto"

            >
              Welcome to Dr. EduMed – Anna Nagar
            </h1>

            <h4
              className="text-xl lg:text-4xl font-bold leading-tight text-white max-w-5xl mx-auto"

            >
              Empowering Your Future in Medical & Aesthetic Careers
            </h4>

            <p className="text-lg opacity-90 text-white">
              Dreaming of a successful career in Aesthetics and Medical Sciences? Dr. EduMed Anna Nagar offers world-class training, hands-on practice, and internationally recognized certifications to help you achieve your professional goals.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => navigate("/courses")}
                className="group px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 
      hover:bg-primary hover:text-white"
              >
                Enroll Now
                <FaArrowRight className="text-primary text-lg transition-all duration-300 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* SVG WAVE AT BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[100px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#ffffff" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${medicalPattern})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Preview Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Image */}
          <div data-aos="fade-right" className="relative order-1">
            <img
              src={heroImage}
              alt="DrEduMed Anna Nagar Chennai"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left" className="order-2">
            {/* Heading with underline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-center">
              About Dr. EduMed Anna Nagar
              <img
                src={underlineSvg}
                alt="underline"
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-6 w-48 md:w-64 z-0"
              />
            </h2>

            {/* Paragraphs */}
            <p className="text-lg text-gray-600 mb-6 mt-4">
              At Dr. EduMed, we’re more than just a training institute — we’re a community of medical and aesthetic experts shaping the future of healthcare professionals.
              Our programs combine theory with advanced hands-on training, ensuring you graduate with the skills and confidence to thrive in the fast-growing aesthetics and wellness industry.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With affiliations to globally recognized bodies, we provide education that is credible, future-focused, and industry ready.
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary font-semibold rounded-full px-4 py-1 transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
              Why Choose Dr. Edumed?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Dr. Edumed?</span>
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              We combine expertise, global recognition, and career-focused support
              to help you excel in the medical field.
            </p>
          </div>

          {/* Vertical List */}
          <div className="space-y-10 max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />

            {specialties.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon bubble */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                {/* Text content */}
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
              Featured Courses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Most Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Featured Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Explore our most in-demand courses designed by top medical professionals to advance your healthcare career.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="custom-hover"
                onClick={() => swiperRef1?.slidePrev()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="custom-hover"
                onClick={() => swiperRef1?.slideNext()}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="lg:w-1/2 lg:pl-8 w-full" data-aos="fade-left">
            <Swiper
              onSwiper={setSwiperRef1}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.05} // Mobile default
              breakpoints={{
                640: { slidesPerView: 1.2 },   // Small tablets
                768: { slidesPerView: 1.4 },   // Tablets
                1024: { slidesPerView: 1.6 },  // Desktops
                1440: { slidesPerView: 1.8 },  // Large desktops
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 1.5,
                scale: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="w-full"
            >
              {featuredCourses.map((course) => (
                <SwiperSlide key={course.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] h-[460px] sm:h-[470px] md:h-[490px]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover"
                    />
                    <div className="p-5">
                      <Badge className="mb-3 bg-primary/90 text-white">{course.tag}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                      {/* Learn More Button */}
                      <Link to="/courses">
                        <Button className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md hover:opacity-90">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* Certified Courses Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CAROUSEL */}
          <div className="lg:w-1/2 lg:pr-8 w-full order-2 lg:order-1" data-aos="fade-right">
            <Swiper
              onSwiper={setSwiperRef}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.05}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 1.4 },
                1024: { slidesPerView: 1.6 },
                1440: { slidesPerView: 1.8 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 1.5,
                scale: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="w-full"
            >
              {certifiedCourses.map((course) => (
                <SwiperSlide key={course.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] h-[500px] sm:h-[520px] md:h-[530px]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover rounded-2xl"
                    />
                    <div className="p-5">
                      <Badge className="mb-3 bg-primary/90 text-white">{course.tag}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                      {/* Learn More Button */}
                      <Link to="/courses">
                        <Button className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md hover:opacity-90">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2" data-aos="fade-left">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
              Certification Courses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Most Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Certification Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Explore our most in-demand courses designed by top medical professionals to advance your healthcare career.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="custom-hover"
                onClick={() => swiperRef?.slidePrev()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="custom-hover"
                onClick={() => swiperRef?.slideNext()}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* {Logo Section} */}
      <section className="relative py-16 overflow-hidden bg-[#f4fafa]">
        {/* Animated Gradient Corners */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#04bfbf] via-[#056a7a] to-transparent animate-gradient rounded-br-full opacity-40 blur-2xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#056a7a] via-[#04bfbf] to-transparent animate-gradient rounded-bl-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#056a7a] via-[#04bfbf] to-transparent animate-gradient rounded-tr-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#04bfbf] via-[#056a7a] to-transparent animate-gradient rounded-tl-full opacity-40 blur-2xl"></div>

        {/* Heading */}
        <div className="relative text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#032c40]">
            Affiliation & Accreditation
          </h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#056a7a] to-[#04bfbf] mx-auto rounded-full"></div>
        </div>

        {/* Logos */}
        <div className="relative container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 group border border-[#047f8a]"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-24 w-auto object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12"> */}

            {/* Left half - Image */}
            {/* <div className="w-full lg:w-1/2 h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Happy Medical Students"
                className="object-cover w-full h-full"
              />
            </div> */}

            {/* Right half - Carousel */}
            {/* <div className="w-full lg:w-1/2">
              <Badge className="mb-6 bg-primary/10 text-primary font-semibold uppercase rounded-md py-1 px-3 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                Student Testimonials
              </Badge>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                What Our Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Say About Us</span>
              </h2>
              <TestimonialCarousel testimonials={testimonials} />
            </div>

          </div>
        </div>
      </section> */}

      <section
        className="max-w-7xl mx-auto p-6 lg:p-12
    rounded-3xl
    bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] mb-8 mt-12"
      >
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h2 className="text-4xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Frequently Asked Questions</h2>
          <div className="flex flex-col lg:flex-row gap-10 relative">

            {/* Left: Questions */}
            <ul className="w-full lg:w-1/2 border border-gray-200 rounded-md bg-white shadow-md z-20">
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center justify-between cursor-pointer px-6 py-5 border-b last:border-b-0
              ${activeIndex === index ? "bg-[#e6f7f9]" : "hover:bg-[#f0f9fb]"}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`block w-4 h-4 rounded-full
                ${activeIndex === index ? "bg-[#6ee7b7]" : "bg-[#a8d5db]"}`}
                    ></span>
                    <p className={`text-base font-medium ${activeIndex === index ? "text-[#056a7a]" : "text-gray-900"}`}>
                      {faq.question}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#04bfbf]`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>

            {/* Right: Answer with offset */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div
                className="relative rounded-xl p-10 text-gray-800 
            bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]
            shadow-lg
            transform lg:-translate-x-12"
              >
                <h3 className="font-semibold text-xl mb-5 text-white drop-shadow-lg">
                  {faqs[activeIndex].question}
                </h3>
                <p className="leading-relaxed whitespace-pre-line text-white/90 drop-shadow-md">
                  {faqs[activeIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-8 py-8">
        {/* Banner Image */}
        <img
          src={bannerImage}
          alt="Loan Assistance Banner"
          className="w-full h-auto object-cover rounded-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />

        {/* Form Modal */}
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>


      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#04bfbf] opacity-20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a0e7e9] opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              🎓 Step into the world of<span className="text-[#fff]"> Aesthetics with confidence</span> Today!
              <span className="block"></span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Enroll at Dr. EduMed Anna Nagar today – Your career in medical aesthetics starts here!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-3 bg-white text-[#056a7a] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-white/90 transition-all">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

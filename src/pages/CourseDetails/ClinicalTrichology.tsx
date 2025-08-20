// src/pages/CourseDetails/FaceInjection.tsx
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle,
  BookOpen,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import Underline from "/src/assets/line.png";
import { AnimatePresence, motion } from "framer-motion";
// import Facialinjectables from "@/assets/Facial-injectables.png";
import React from "react";
import ClinicalTrichology from "@/assets/Clinical-Trichology.png";


interface FAQItem {
  question: string;
  answer: string;
}

interface Course {
  title: string;
  duration: string;
  schedule: string;
  eligibility: string;
  longDescription: string;
  image: string;
  curriculum: string[];
  features: string[];
  faq: FAQItem[];
}

const ClinicalTrichologys: React.FC = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // Hardcoded course data
  const course: Course = {
    title: "Fellowship in Clinical Trichology",
    duration: "6 Months",
    schedule: "Online - Live Sessions & Hands-on",
    eligibility:
      "MBBS, MD, MDS, MDS Maxillofacial Surgeons, MD DVL, MS, MCh, MDS (Oral Maxillofacial Surgeon)",
    longDescription:
      "Fellowship in Clinical Trichology is a specialized training program for medical professionals aiming to build advanced skills in diagnosing and treating hair and scalp conditions. This program covers trichological science, restoration techniques, and alternative treatments like artificial prosthesis and scalp micropigmentation. It equips students with a holistic understanding of hair biology and offers in-depth clinical exposure to support both independent and institutional practice.",
    image: ClinicalTrichology,
    curriculum: [
        "Module 1: Trichology",
        "Module 2: Hair Loss Pattern",
        "Module 3: Factors Affecting Hair Fall",
      ],
    features: [
        "Comprehensive Course Framework",
        "Hands-On Practical Training",
        "Expert-Led Sessions",
        "Specialized Internships in Medical Aesthetics",
        "Certification & Career Advancement",
        "Post Career Support",
      ],
    faq: [
        {
          question: "What is a fellowship in clinical trichology?",
          answer:
            "Fellowship in clinical trichology is a specialized training program that provides advanced knowledge and diagnostic skills in managing hair and scalp conditions.",
        },
        {
          question: "Who is eligible for a fellowship in Clinical Trichology?",
          answer: "MBBS, BDS, MDS, BHMS, BAMS, BUMS, BNYS",
        },
        {
          question: "What is the duration of the course?",
          answer:
            "It is a detailed course with 6 months of theoretical knowledge and 3–5 days of practical hands-on training.",
        },
        {
          question:
            "Career opportunities after completing clinical trichology?",
          answer:
            "• Opening a private practice focused on hair and scalp conditions.\n• Working in hair restoration clinics.\n• Taking on medical advisory roles in cosmetic or pharmaceutical companies.\n• Serving as a medical director in trichology clinics.",
        },
        {
          question: "Are Fellowships in clinical trichology Accredited?",
          answer: "Yes, it is accredited.",
        },
      ],
  };

  const toggleFAQ = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/courses")}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Text Content */}
            <div data-aos="fade-right" className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Image with Gradient Blob */}
            <div
              className="relative w-full max-w-lg mx-auto"
              data-aos="fade-left"
            >
              {/* Gradient Blob */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-200 via-emerald-100 to-transparent blur-3xl opacity-70 animate-pulse" />
              <img
                src={course.image}
                alt={course.title}
                className="relative z-10 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Info Row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Training Mode */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Training Mode</h3>
              </div>
              <p className="text-gray-600">{course.duration}</p>
            </div>

            {/* Duration */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">{course.schedule}</p>
            </div>

            {/* Eligibility */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Eligible For</h3>
              </div>
              <p className="text-gray-600">{course.eligibility}</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg">
            <div>
              <h3 className="text-2xl font-bold">Ready to Start Learning?</h3>
              <p className="text-white/80">
                Secure your spot today and get access to premium resources.
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all"
              onClick={() => navigate("/contact")}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      {/* <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-center">
              <h2 className="font-manrope text-3xl lg:text-3xl text-primary">
                Key Highlights
              </h2>
              <img
                src={Underline}
                alt="Decorative Line"
                className="mt-4 mb-3 mx-auto w-[150px] h-[10px] lg:w-[290px] lg:h-[10px]"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card" data-aos="zoom-in">
              <CardContent className="p-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-3" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <section className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div
            className="text-center max-w-3xl mx-auto mb-20"
            data-aos="fade-up"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Course Journey
            </h2>
            <p className="text-lg text-gray-600">
              Step-by-step roadmap to master your skills.
            </p>
          </div>

          {/* Centered Timeline */}
          <div className="relative flex flex-col lg:flex-row justify-center lg:gap-10">
            {/* Vertical Timeline */}
            <div className="relative w-full lg:w-2/3 max-w-2xl">
              <div className="relative space-y-4">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-indigo-400 to-green-400 rounded-full"></div>

                {course.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center gap-6 group justify-center"
                    data-aos="fade-up"
                  >
                    {/* Circle Node */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-green-500 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <BookOpen className="h-6 w-6 text-white" />
                      <span className="absolute -left-1 -top-1 w-14 h-14 rounded-full bg-indigo-300/20 animate-pulse"></span>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 rounded-3xl shadow-md flex-1 max-w-md hover:shadow-xl transition-all duration-500">
                      <p className="text-gray-800 font-medium text-lg text-center">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Features */}
            <div className="w-full lg:w-1/3 mt-12 lg:mt-0 relative">
              <div className="sticky top-24 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Why This Course?
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Perfect for learners who want to:
                </p>
                <div className="flex flex-col gap-3">
                  {course.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="relative py-28 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Have Questions? We’ve Got Answers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn everything about our course with clear, concise answers
              designed for easy reading.
            </p>
          </div>

          <div className="lg:flex lg:items-start lg:gap-16 relative">
            {/* Left Side Image */}
            <div className="hidden lg:flex lg:w-1/3 justify-center items-start relative">
              {/* Enhanced blush behind image */}
              <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-teal-200 to-purple-100 rounded-full opacity-60 blur-3xl animate-pulse-slow pointer-events-none"></div>

              <img
                src="/src/assets/FAQs-amico.png" // replace with your image path
                alt="FAQ Illustration"
                className="w-full max-w-lg rounded-3xl object-cover relative z-10"
                data-aos="fade-right"
              />
            </div>

            {/* FAQ List */}
            <div className="lg:w-2/3 space-y-6">
              {course.faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-md cursor-pointer overflow-hidden border border-gray-100"
                  onClick={() => toggleFAQ(index)}
                  layout
                >
                  {/* Question */}
                  <div className="flex justify-between items-center px-6 py-5 hover:bg-gray-50 transition-all">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional background shapes */}
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 gradient-hero">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h2 className="font-manrope text-3xl lg:text-3xl text-white">
              Ready to Start Your Journey?
            </h2>

          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful graduates who have launched their
            healthcare careers with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="xl" variant="metallic">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ClinicalTrichologys;

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Calendar,
  Globe,
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-medical.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["99648 10000", "+1 (555) 123-4568 (Emergency)"],
      available: "24/7 Support Available",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["chennai@dredumed.comdredumed.com", "admissions@dredumed.com"],
      available: "Response within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical Center Drive", "Healthcare District, NY 10001"],
      available: "Visitor hours: 8 AM - 6 PM",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
      ],
      available: "Closed on Sundays",
    },
  ];

  const departments = [
    {
      icon: Users,
      name: "Admissions Office",
      email: "admissions@dredumed.com",
      phone: "99648 10000",
      description: "Information about programs, applications, and enrollment",
    },
    {
      icon: Calendar,
      name: "Student Services",
      email: "students@dredumed.com",
      phone: "+1 (555) 123-4568",
      description: "Support for current students and academic assistance",
    },
    {
      icon: Globe,
      name: "International Programs",
      email: "international@dredumed.com",
      phone: "+1 (555) 123-4569",
      description: "Global opportunities and international student support",
    },
    {
      icon: MessageSquare,
      name: "General Inquiries",
      email: "chennai@dredumed.comdredumed.com",
      phone: "99648 10000",
      description: "General questions and information requests",
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Admission requirements vary by program. Generally, we require a relevant undergraduate degree, minimum GPA, letters of recommendation, and completion of prerequisite courses.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer various financial aid options including scholarships, grants, and payment plans. Contact our financial aid office for personalized assistance.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Absolutely! We welcome international students and provide comprehensive support including visa assistance and orientation programs.",
    },
    {
      question: "What is the duration of programs?",
      answer:
        "Program duration varies from 6 weeks for specialized courses to 24 months for comprehensive programs. Each program page contains specific duration information.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0); // 0 = first FAQ open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle, but only one open at a time
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up" data-aos-delay="100">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              Contact Us
            </Badge>
          </div>

          <h1
            className="text-hero font-bold mb-6 leading-tight max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in Touch with
            <span className="block text-white">
              Dr. Edumed Academy
            </span>
          </h1>

          <p
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We're here to help you begin your medical journey. Reach out to us
            for information about our programs, admissions, or any questions you
            may have.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Gentle noise texture */}
        <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-5 mix-blend-overlay"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Vibrant glass form */}
          <div className="relative bg-gradient-to-br from-emerald-300/20 via-indigo-300/20 to-pink-300/20 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all">
            <span className="inline-block px-4 py-1 rounded-full  bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-sm mb-6 tracking-wide font-semibold">
              Let’s Talk
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Start your next chapter
            </h1>
            <p className="text-gray-700 mb-10 max-w-md">
              Drop us a message and we’ll respond with thoughtful ideas and
              fresh perspectives.
            </p>

            <form className="space-y-5">
              {["Your Name", "Email Address"].map((placeholder, i) => (
                <input
                  key={i}
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
                  placeholder={placeholder}
                  type={placeholder.includes("Email") ? "email" : "text"}
                />
              ))}
              <textarea
                rows={4}
                className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
                placeholder="Your Message"
              ></textarea>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md font-semibold shadow-md hover:scale-[1.02] transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Vibrant Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: Mail, title: "Email Us", details: "hello@yourbrand.com" },
              { icon: Phone, title: "Call Us", details: "+91 98765 43210" },
              {
                icon: MapPin,
                title: "Visit Us",
                details: "42 Dream Street, WonderCity",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-5 p-6 bg-gradient-to-r from-emerald-300/20 to-indigo-300/20 rounded-2xl border border-white/40 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] rounded-xl flex items-center justify-center text-gray-900 group-hover:rotate-3 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 bg-gradient-to-br from-white via-white to-emerald-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-sm font-semibold tracking-wide mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Common Questions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">
              {" "}
              & Answers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to the most common queries about our programs and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white/70 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group p-6 transition-all duration-300 ${
                openIndex === index
                  ? "bg-gradient-to-r from-emerald-50 to-indigo-50"
                  : ""
              }`}
              data-aos=""
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full font-semibold text-gray-900 text-lg focus:outline-none"
              >
                {faq.question}
                <span
                  className={`ml-4 transition-transform ${
                    openIndex === index ? "rotate-45 text-emerald-400" : "text-gray-400"
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Support Call-to-Action */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-4">
            Still have questions that we didn’t cover?
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md font-semibold shadow-md hover:scale-[1.02] transition-transform">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>

      {/* Map & Location */}
      {/* <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <Badge className="mb-6 bg-primary/10 text-primary">
                Visit Our Campus
              </Badge>
              <h2 className="text-xl-heading mb-6">
                Located in the Heart of the
                <span className="text-primary"> Medical District</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art campus is conveniently located in the
                healthcare district, providing easy access to major medical
                centers and research facilities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Main Campus</p>
                    <p className="text-muted-foreground">
                      123 Medical Center Drive
                      <br />
                      Healthcare District, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Campus Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 10:00 PM
                      <br />
                      Saturday - Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-primary text-white hover:opacity-90">
                Schedule Campus Tour
              </Button>
            </div>

            <div data-aos="fade-left" className="relative">

              <div className="w-full h-80 bg-gradient-soft rounded-2xl flex items-center justify-center shadow-elegant">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-muted-foreground">
                    Campus map and directions would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Emergency Contact */}
      {/* <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-white/90 mb-4">
              For urgent medical or safety concerns on campus:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +1 (555) 911-HELP
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Campus Security: +1 (555) 123-SAFE
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

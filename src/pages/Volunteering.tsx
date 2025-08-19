import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Globe,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Award,
  Clock,
  BookOpen
} from 'lucide-react';

import {
  Droplets, Sparkles, FlaskConical, SunMedium, Wand2, Activity, Syringe,
  Zap, LineChart, ScissorsSquare, Scissors, Beaker, Eraser, ZapOff,
  Smile, Palette, Maximize
} from "lucide-react";

// Import images
import heroImage from '@/assets/hero-medical.jpg';
import educationBg from '@/assets/education-bg.jpg';
import volunteerModel from "@/assets/volunteer 1.jpeg"
import formBg from "@/assets/formbg.jpg"

const Volunteering = () => {
  const services = [
    { icon: Droplets, title: "Lip Fillers", desc: "Enhance lip volume and definition" },
    { icon: FlaskConical, title: "PRP for Face", desc: "Platelet-rich plasma facial treatments" },
    { icon: SunMedium, title: "Chemical Peels", desc: "Skin resurfacing and renewal" },
    { icon: Sparkles, title: "Skin Rejuvenation", desc: "Advanced anti-aging treatments" },
    { icon: Wand2, title: "Microblading", desc: "Semi-permanent eyebrow enhancement" },
    { icon: Activity, title: "Mesotherapy for Face & Hair", desc: "Face and hair rejuvenation therapy" },
    { icon: Syringe, title: "Dermal Fillers", desc: "Volume restoration and contouring" },
    { icon: Zap, title: "Skin Lasers", desc: "Advanced laser skin treatments" },
    { icon: LineChart, title: "Body Contouring & Tightening", desc: "Body sculpting and skin tightening" },
    { icon: ScissorsSquare, title: "Face Lift – Threads", desc: "Non-surgical thread lift procedures" },
    { icon: Scissors, title: "Hair Transplant", desc: "Hair restoration and transplantation" },
    { icon: Beaker, title: "PRP for Hair", desc: "Platelet-rich plasma hair treatments" },
    { icon: Eraser, title: "Tattoo/Mole Removal", desc: "Safe removal of tattoos and moles" },
    { icon: ZapOff, title: "Laser Therapy for Hair", desc: "Laser hair removal treatments" },
    { icon: Smile, title: "Botulinum Toxin", desc: "Wrinkle reduction and prevention" },
    { icon: Palette, title: "Micropigmentation", desc: "Cosmetic tattooing procedures" },
    { icon: Maximize, title: "Skin Tightening", desc: "Non-invasive skin firming treatments" },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Professional Experience",
      description: "Gain hands-on experience with cutting-edge aesthetic procedures under expert supervision."
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Help advance medical training while contributing to the healthcare community."
    },
    {
      icon: Users,
      title: "Free Treatments",
      description: "Receive professional aesthetic treatments at no cost while supporting education."
    },
    {
      icon: Award,
      title: "Safe Environment",
      description: "All procedures performed by certified professionals in a controlled clinical setting."
    }
  ];

  // const testimonials = [
  //   {
  //     name: "Dr. Sarah Martinez",
  //     role: "Emergency Medicine Physician",
  //     program: "Global Health Missions",
  //     quote: "Volunteering with Dr. Edumed opened my eyes to the power of medicine to transform communities. The experience has made me a better physician and person.",
  //     location: "Guatemala Mission 2023"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Medical Student",
  //     program: "Community Health Outreach",
  //     quote: "The community outreach program allowed me to apply my medical knowledge while serving those who need it most. It's been incredibly rewarding.",
  //     location: "Local Community Program"
  //   }
  // ];

  const impactStats = [
    { number: "50,000+", label: "Lives Touched" },
    { number: "25", label: "Countries Served" },
    { number: "500+", label: "Active Volunteers" },
    { number: "15", label: "Years of Service" }
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Choose Your Program",
      description: "Select the volunteer program that matches your skills and availability"
    },
    {
      step: "02",
      title: "Submit Application",
      description: "Complete our application form with your background and preferences"
    },
    {
      step: "03",
      title: "Interview & Training",
      description: "Participate in interview process and complete required training modules"
    },
    {
      step: "04",
      title: "Start Volunteering",
      description: "Begin your volunteer journey and make a meaningful impact"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Volunteer Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-teal-900/60 to-black/80"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 container mx-auto px-6 flex justify-center">
          <div className="max-w-3xl text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20">

            {/* ✅ Centered Volunteer Badge */}
            <div className="flex justify-center">
              <Badge className="bg-white/20 text-white px-6 py-2 rounded-full text-lg flex items-center gap-2">
                <Heart className="h-4 w-4" /> Volunteer Programs
              </Badge>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Join Our
              <span className="block text-transparent text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Volunteer Program</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Help advance medical education while receiving professional aesthetic treatments
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("volunteer-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md font-semibold px-8 py-4 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-24 overflow-hidden bg-white bg-[radial-gradient(circle,#f3f4f6_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Decorative gradient shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-primary/20 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow-reverse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Content */}
            <div data-aos="fade-right" className="max-w-xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-100 text-primary font-semibold text-sm tracking-wide mb-6">
                Volunteer Model Program
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Aesthetic Excellence</span> First-Hand
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At the heart of our approach lies a commitment to hands-on experience and continuous learning.
                Our Volunteer Model Program gives you a unique opportunity to witness and experience advanced
                aesthetic treatments performed by certified practitioners—under the close supervision of expert mentors.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <p className="text-gray-700">Gain real-time exposure to cutting-edge aesthetic procedures.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <p className="text-gray-700">Learn in a safe, professional, and innovation-focused environment.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <p className="text-gray-700">Help practitioners refine their skills while contributing to quality care.</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    const element = document.getElementById("volunteer-form");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Become a Volunteer
                </button>

              </div>
            </div>

            {/* Right Column - Image Card */}
            <div data-aos="fade-left" className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition duration-500">
                <img
                  src={volunteerModel}
                  alt="Volunteer Model Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold text-gray-800 text-sm">Trusted by 1,000+ Volunteers</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
    @keyframes spin-slow {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
    }
    @keyframes spin-slow-reverse {
      0% { transform: rotate(360deg);}
      100% { transform: rotate(0deg);}
    }
    .animate-spin-slow { animation: spin-slow 80s linear infinite; }
    .animate-spin-slow-reverse { animation: spin-slow-reverse 80s linear infinite; }
  `}</style>
      </section>


      {/* Volunteer Programs */}
      <section className="relative py-20 bg-white bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]">

        {/* Decorative gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] bg-gradient-to-tl from-primary/10 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow-reverse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            Our <span className="text-primary">Available Services</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of medical and aesthetic services to meet your needs with precision and care.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/50 shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-emerald-300/20 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes spin-slow-reverse {
            0% { transform: rotate(360deg);}
            100% { transform: rotate(0deg);}
          }
          .animate-spin-slow { animation: spin-slow 80s linear infinite; }
          .animate-spin-slow-reverse { animation: spin-slow-reverse 80s linear infinite; }
        `}
        </style>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">

          {/* Left Side: Gradient intro panel */}
          <div className="relative flex flex-col justify-center items-center text-center p-12 bg-gradient-to-tr from-[#1e3a8a] via-[#047857] to-[#0f766e] text-white">
            {/* Optional animated pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:20px_20px]"></div>

            <div className="relative z-10 max-w-lg">
              <Badge className="mb-4 bg-white/20 text-white border border-white/30">
                Volunteer Benefits
              </Badge>
              <h2 className="text-4xl font-extrabold mb-4">
                Why Volunteer <span className="text-emerald-200">With Us</span>
              </h2>
              <p className="text-lg text-white/90">
                Volunteering with Dr. Edumed offers more than just the satisfaction of helping others.
                It's a transformative experience that enriches your professional and personal life.
              </p>
            </div>
          </div>

          {/* Right Side: Benefits list */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center mr-4 shadow-md">
                      <benefit.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      {/* <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary">Volunteer Stories</Badge>
            <h2 className="text-xl-heading mb-6">
              Hear from Our
              <span className="text-primary"> Volunteers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how volunteering has transformed the lives and careers of our dedicated volunteers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 border-card-border"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.program}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      <section className="relative py-20 bg-gradient-to-br from-primary/90 via-primary/80 to-emerald-700 text-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Application Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Simple Steps to Start <span className="text-emerald-200">Volunteering</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Getting started as a volunteer is easy. Follow these simple steps to begin your service journey.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Circle */}
                <div className="w-16 h-16 bg-gradient-to-tr from-white to-white/70 text-primary font-bold rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {step.step}
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                {/* Description */}
                <p className="text-white/80 text-sm">{step.description}</p>

                {/* Decorative number in background */}
                <span className="absolute text-white/10 text-9xl font-bold top-2 right-4 select-none">
                  {step.step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-gray-100 flex items-center justify-center p-6" id='volunteer-form'>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={formBg}
            alt="Volunteer Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        {/* Expanded Form */}
        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-[1fr_2fr] rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-lg">

          {/* Left Content */}
          <div className="hidden lg:flex flex-col justify-center items-center p-10 bg-white/10 text-white">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full mb-4 text-sm shadow-md">
              Safe & Professional
            </span>
            <h2 className="text-4xl font-bold text-center mb-6">Join as a Volunteer</h2>
            <p className="text-white/80 text-lg text-center max-w-md">
              Make a difference by lending your time and skills. Fill in the form and start your journey.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-xl p-10 lg:p-14">
            {/* Step Indicator */}
            {/* <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold 
              ${step === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}>
                    {step}
                  </div>
                  {step < 3 && <div className="w-12 h-1 bg-gray-300"></div>}
                </div>
              ))}
            </div> */}

            <h3 className="text-3xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Application Form</h3>
            <p className="text-gray-500 mb-8">Start your volunteer journey today</p>

            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50" />

              <div className="grid grid-cols-2 gap-6">
                <input type="number" placeholder="Age" className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50" />
                <input type="tel" placeholder="Contact Number" className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50" />
              </div>

              {/* Gender */}
              <select className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>

              {/* Service of Interest */}
              <select className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50">
                <option>Select Service of Interest</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              {/* Medical History Heading */}
              <h4 className="text-lg font-semibold mt-4">Medical History</h4>

              {/* Surgery History */}
              <select className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50">
                <option>Have you undergone surgeries before?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {/* Allergy History */}
              <select className="w-full border rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/50">
                <option>Do you have any allergies?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${educationBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h2 className="text-xl-heading mb-6">
              Ready to Make a
              <span className="block">Difference?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of dedicated healthcare volunteers and help us transform lives
              while advancing your own medical journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                Contact Volunteer Coordinator
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Volunteering;
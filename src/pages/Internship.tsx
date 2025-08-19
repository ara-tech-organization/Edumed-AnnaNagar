import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "/src/assets/Doctors-bro.png";
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Heart,
  Brain,
  Building,
  Award,
  GraduationCap,
  Star,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faCertificate,
  faBriefcase,
  faGavel,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
// Import images
import heroImage from "@/assets/hero-medical.jpg";
import educationBg from "@/assets/education-bg.jpg";
// import hero from "@/assets/"

const Internship = () => {
  const programs = [
    {
      title: "General Medicine Internship",
      duration: "12 months",
      specialties: ["Internal Medicine", "Emergency Care", "Family Practice"],
      positions: 25,
      startDate: "July 2024",
      location: "Main Medical Center",
      featured: true,
    },
    {
      title: "Surgical Internship",
      duration: "12 months",
      specialties: ["General Surgery", "Orthopedics", "Neurosurgery"],
      positions: 15,
      startDate: "July 2024",
      location: "Surgical Center",
    },
    {
      title: "Pediatric Medicine",
      duration: "12 months",
      specialties: ["Pediatrics", "NICU", "Pediatric Emergency"],
      positions: 12,
      startDate: "July 2024",
      location: "Children's Hospital",
    },
    {
      title: "Emergency Medicine",
      duration: "12 months",
      specialties: ["ER Medicine", "Trauma Care", "Critical Care"],
      positions: 18,
      startDate: "July 2024",
      location: "Emergency Department",
    },
  ];

  const requirements = [
    "Medical degree from accredited institution",
    "USMLE Step 1 and Step 2 completion",
    "Strong academic performance (GPA 3.5+)",
    "Clinical experience letters",
    "Personal statement and CV",
    "Three professional references",
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Expert Mentorship",
      description:
        "Work directly with board-certified physicians and specialists",
    },
    {
      icon: Building,
      title: "State-of-Art Facilities",
      description: "Access to cutting-edge medical technology and equipment",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learn alongside diverse, talented medical professionals",
    },
    {
      icon: Star,
      title: "Career Advancement",
      description: "98% of our interns secure residency positions",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      year: "2023 Graduate",
      quote:
        "The internship program at Dr. Edumed gave me the confidence and skills needed to excel in my residency. The mentorship was exceptional.",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine",
      year: "2023 Graduate",
      quote:
        "Hands-down the best clinical training I could have asked for. The exposure to complex cases prepared me for real-world medicine.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Dark overlay with diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            {/* Badge */}
            <Badge className="mb-6 bg-white/15 text-white border border-white/20 text-sm tracking-wide px-5 py-2 backdrop-blur-md">
              Medical Internship Program
            </Badge>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Launch Your Medical Career with
              <span className="block bg-gradient-to-r from-blue-300 via-green-200 to-teal-300 bg-clip-text text-transparent animate-gradient-slow">
                Premier Clinical Training
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-gray-200/90 leading-relaxed mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Gain hands-on experience, expert mentorship, and direct access to
              cutting-edge medical facilities — all in one transformative
              program designed to set you apart in the healthcare industry.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("internshipForm");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold text-lg px-8 shadow-lg shadow-blue-500/30"
              >
                Apply for Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Title + Description */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] bg-clip-text">
              Unlock Your Career with Dr. EduMed
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Dr. EduMed, we are dedicated to empowering our students with
              the expertise needed to thrive in the competitive aesthetic
              industry. Upon successful completion of the course, students gain
              exclusive access to a diverse selection of national and
              international internship opportunities, designed to provide
              hands-on experience and direct exposure to the latest industry
              advancements. These internships offer students the chance to work
              alongside industry experts, gaining valuable insights into
              cutting-edge trends, innovations, and techniques.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: faUserTie, title: "In-Depth Expert Training" },
              {
                icon: faCertificate,
                title: "Government and International Accredited Certificate",
              },
              {
                icon: faBriefcase,
                title: "Guaranteed Placement with Refund Policy",
              },
              {
                icon: faGavel,
                title: "Medico-Legal Expert and Vendor Assistance",
              },
              { icon: faComments, title: "Business Launch Support" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-tr from-blue-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mx-auto">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="!h-8 !w-8 text-white block"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mt-4">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary hover:text-white hover:border-primary cursor-pointer">
              Program Benefits
            </Badge>
            <h2 className="text-xl-heading mb-6 font-bold">
              Why Choose Our
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">
                Internship Program
              </span>
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our internship program offers unparalleled advantages to
              jump-start your medical career with comprehensive training and
              professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3 text-gray-900 group-hover:text-teal-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      {/* <section className="section-padding bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <Badge className="mb-6 bg-primary/10 text-primary">
                Application Requirements
              </Badge>
              <h2 className="text-xl-heading mb-6">
                Ready to Apply?
                <span className="text-primary"> Here's What You Need</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We maintain high standards to ensure our internship program
                attracts the most dedicated and qualified medical graduates.
              </p>
              <div className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-primary text-white hover:opacity-90">
                Start Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div data-aos="fade-left" className="relative">
              <img
                src={educationBg}
                alt="Application Process"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Application Deadline</div>
                    <div className="text-sm text-muted-foreground">
                      March 31, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-br from-blue-50 via-green-50 to-teal-50" id="internshipForm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-white/70 rounded-2xl shadow-lg p-8 md:p-12 backdrop-blur-sm">
            {/* Left Side Illustration */}
            <div className="flex justify-center" data-aos="fade-right">
              <img src={Image} alt="Doctors" />
            </div>

            {/* Right Side Form */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">
                Join Us as an Intern!
              </h2>
              <p className="text-gray-600 mb-6">
                Complete this form and we'll respond as required
              </p>

              <form className="grid gap-4">
                {/* Candidate Name + Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none"
                />

                {/* Course */}
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none">
                  <option>Select Course</option>
                  <option>Course A</option>
                  <option>Course B</option>
                </select>

                {/* Batch Start Date */}
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none">
                  <option>Select Batch</option>
                  <option>Batch 1</option>
                  <option>Batch 2</option>
                </select>

                {/* Certificate Received */}
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none">
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                {/* Internship Type */}
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none">
                  <option>Select Internship</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                </select>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-tr from-[#4A90E2] via-[#A8E6CF] to-[#3BB8A9] text-primary font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary">
              Success Stories
            </Badge>
            <h2 className="text-xl-heading mb-6">
              Hear from Our
              <span className="text-primary"> Alumni</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our graduates go on to have successful careers in medicine, making
              a difference in healthcare institutions worldwide.
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
                      <p className="text-sm text-muted-foreground">
                        {testimonial.specialty}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.year}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      {/* <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Application Process
            </Badge>
            <h2 className="text-xl-heading mb-6">Simple 4-Step Application</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our streamlined application process makes it easy to apply for our
              internship program.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                desc: "Complete online application with required documents",
              },
              {
                step: "02",
                title: "Document Review",
                desc: "Our admissions team reviews your credentials",
              },
              {
                step: "03",
                title: "Interview Process",
                desc: "Virtual or in-person interview with faculty",
              },
              {
                step: "04",
                title: "Final Decision",
                desc: "Receive acceptance notification and begin program",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/80 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h2 className="text-xl-heading mb-6">
              Ready to Begin Your
              <span className="block">Medical Journey?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward a rewarding medical career with our
              comprehensive internship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Internship;

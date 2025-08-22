import React from "react";
import { useState } from "react";
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
import heroImage from "@/assets/Internship.jpg";
import { Helmet } from "react-helmet-async";
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
        "Learn directly from board-certified specialists.",
    },
    {
      icon: Building,
      title: "State-of-Art Facilities",
      description: "Train with advanced medical technologies.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work alongside peers and professionals from diverse fields.",
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

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    mobile: "",
    Course: "",
    BatchStartDate: "",
    CertificateReceived: "",
    InternshipType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting data:", formData); // ✅ log form values

    try {
      const res = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/chennaiDredumedJoinUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("API Response:", data);

      if (!data.error) {
        alert("✅ " + data.message);
        // reset form
        setFormData({
          Name: "",
          email: "",
          mobile: "",
          Course: "",
          BatchStartDate: "",
          CertificateReceived: "",
          InternshipType: "",
        });
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="overflow-hidden">

      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Medical Internship Program – Dr. EduMed Academy Anna Nagar</title>
        <meta
          name="description"
          content="Join Dr. EduMed’s world-class Medical Internship Program in Anna Nagar. Gain hands-on experience in General Medicine, Surgery, Pediatrics, and Emergency Medicine with expert mentorship and global exposure."
        />
        <meta
          name="keywords"
          content="medical internship Anna Nagar, Dr EduMed internship, clinical internship Chennai, general medicine internship, surgical internship, pediatrics internship, emergency medicine internship, residency preparation, medical training Chennai"
        />
        <meta name="author" content="Dr. EduMed Institute" />

        {/* ✅ Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Medical Internship Program – Dr. EduMed Academy"
        />
        <meta
          property="og:description"
          content="Kickstart your medical career with Dr. EduMed’s clinical internships. Real-world training, mentorship, and 98% residency placement success."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/internship"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview-image-internship.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medical Internship Program – Dr. EduMed Academy"
        />
        <meta
          name="twitter:description"
          content="Gain hands-on training in General Medicine, Surgery, Pediatrics, and Emergency Medicine at Dr. EduMed Anna Nagar."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview-image-internship.jpg"
        />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://yourdomain.com/internship" />
      </Helmet>

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
              Kickstart Your Medical Career with
              <span className="block bg-gradient-to-r from-blue-300 via-green-200 to-teal-300 bg-clip-text text-transparent animate-gradient-slow">
                World-Class Clinical Internships
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-gray-200/90 leading-relaxed mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Gain real-world exposure, guided mentorship, and access to advanced medical facilities — all in one program designed to elevate your career in the healthcare and aesthetics industry.
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
                Apply Now for Internship
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
              Our internships offer unmatched benefits to help you stand out:
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
                Fill out the form to begin your journey with Dr. EduMed
              </p>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                {/* Candidate Name + Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Contact Number</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                    required
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Course</label>
                  <select
                    name="Course"
                    value={formData.Course}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                    required
                  >
                    <option value="">Select Course</option>
                    <option>Master in Facial Injectables</option>
                    <option>PG Diploma in Clinical Cosmetology</option>
                    <option>Fellowship in Facial Aesthetics</option>
                    <option>Workshop in Semi-Permanent Makeup (SPMU)</option>
                    <option>Master in Hair Transplant</option>
                    <option>PG Diploma in Facial Injectables</option>
                    <option>Fellowship in Clinical Cosmetology</option>
                    <option>Fellowship in Clinical Trichology</option>
                  </select>
                </div>

                {/* Batch Start Date */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Batch Start Date</label>
                  <select
                    name="BatchStartDate"
                    value={formData.BatchStartDate}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                    required
                  >
                    <option value="">Select Batch</option>
                    <option>Batch 1</option>
                    <option>Batch 2</option>
                    <option>Batch 3</option>
                  </select>
                </div>

                {/* Certificate Received */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Certificate Received</label>
                  <select
                    name="CertificateReceived"
                    value={formData.CertificateReceived}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                    required
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {/* Internship Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Internship Type</label>
                  <select
                    name="InternshipType"
                    value={formData.InternshipType}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-400 outline-none w-full"
                    required
                  >
                    <option value="">Select Internship Type</option>
                    <option>National</option>
                    <option>International</option>
                  </select>
                </div>

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

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Award,
  Users,
  BookOpen,
  Globe,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Heart,
  Brain,
  Shield,
  Target,
  Rocket
} from 'lucide-react';

// Import images
import heroImage from '@/assets/hero-medical.jpg';
import educationBg from '@/assets/education-bg.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "In-Depth Expert Training",
      description: "Comprehensive, hands-on training led by industry experts."
    },
    {
      icon: Award,
      title: "Govt. & International Accredited Certificate",
      description: "Recognized certifications to enhance your professional credibility."
    },
    {
      icon: Shield,
      title: "Guaranteed Placement & Refund Policy",
      description: "Confidence in your career with assured placement and refund options."
    },
    {
      icon: Target,
      title: "Medico-Legal Expert & Vendor Assist",
      description: "Guidance on legal matters and vendor partnerships to support your journey."
    },
    {
      icon: Rocket,
      title: "Business Launch Support",
      description: "Help to successfully start, scale, and sustain your aesthetic practice."
    },
    {
      icon: Globe,
      title: "Lifelong Alumni Access",
      description: "Stay connected, upskill and grow through our lifetime alumni support."
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15,000+", label: "Graduates Worldwide" },
    { number: "500+", label: "Expert Faculty" },
    { number: "98%", label: "Employment Rate" }
  ];

  const leadership = [
    {
      name: "Dr. Michael Anderson",
      position: "Dean & Chief Medical Officer",
      specialization: "Cardiothoracic Surgery",
      experience: "30+ years",
      achievements: "Published 200+ research papers"
    },
    {
      name: "Dr. Sarah Chen",
      position: "Director of Medical Education",
      specialization: "Internal Medicine",
      experience: "25+ years",
      achievements: "Curriculum innovation award recipient"
    },
    {
      name: "Dr. James Rodriguez",
      position: "Research Director",
      specialization: "Emergency Medicine",
      experience: "20+ years",
      achievements: "Leading emergency care protocols"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Diagonal gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/80 to-transparent"
          style={{
            clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
          }}
        ></div>

        {/* Floating glow shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/20 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-xl text-white" data-aos="fade-right">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 cursor-pointer">
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Two decades of{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                excellence
              </span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Shaping the future of healthcare one student at a time.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("aboutSection");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md shadow-lg hover:opacity-90 transition"
            >
              Learn More
            </button>

          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden bg-white bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]" id='aboutSection'>
        {/* Decorative Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] bg-gradient-to-tl from-primary/10 to-emerald-200/20 rounded-full blur-3xl animate-spin-slow-reverse"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
            Begin Your Journey
          </Badge>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Begin Your Journey to Excellence in <span className="text-primary">Aesthetic Medicine</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald-500 rounded-full mx-auto mb-8"></div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              "Dr. EduMed Medical & Aesthetic Training Academy stands as a leading institution committed to providing top-tier education and hands-on training in the field of medical aesthetics.",
              "Our comprehensive programs cover a wide range of treatments such as Botox, dermal fillers, laser therapies, and skin rejuvenation techniques.",
              "Guided by a team of seasoned medical experts specializing in aesthetics, we prepare licensed medical practitioners to excel in this rapidly growing industry.",
              "With the increasing demand for qualified aesthetic doctors, our advanced training ensures you are fully equipped to meet the needs of today’s beauty and wellness market.",
              "Unlike typical educational institutions, Dr. EduMed offers exclusive, scientifically-driven courses designed specifically for medical professionals who aim to advance their skills and achieve success in aesthetic medicine."
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>


          <div className="mt-8">
            <Link to="/courses">
              <Button className="bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] text-white shadow-md px-8 py-4 rounded-full shadow-lg hover:scale-105 transition">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>

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

      {/* Core Values Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
        {/* Decorative corner gradients */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 cursor-pointer">Our Core Values</Badge>
            <h2 className="text-4xl font-extrabold mb-6 text-white">
              Values That Guide
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]"> Our Mission</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              These fundamental principles shape every aspect of our medical education
              and guide our students toward becoming exemplary healthcare professionals.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Floating Icon */}
                <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>

                {/* Card Content */}
                <h3 className="mt-10 font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                  {value.title}
                </h3>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Decorative corner gradients */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-emerald-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white hover:border-primary cursor-pointer">Who We Are</Badge>
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving excellence in education and healthcare through unwavering dedication to our values.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div
              className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center">
                {/* 🎯 Target Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver high-quality, internationally benchmarked medical and aesthetic training through cutting-edge programs focused on an expert-led, practical approach. Our mission is to cultivate a community of ethically sound, competent, and confident professionals equipped with the skills to excel in their fields.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="bg-white border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-left"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-tr from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488] flex items-center justify-center">
                {/* 👁 Eye Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to be a globally recognized center of excellence in medical and aesthetic education. We strive to drive innovation, uphold professionalism, and foster transformative learning that empowers the next generation of skilled and ethical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* < section className="section-padding bg-white" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary">Leadership Team</Badge>
            <h2 className="text-xl-heading mb-6">
              Meet Our
              <span className="text-primary"> Medical Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our distinguished faculty brings decades of clinical experience and academic excellence
              to guide the next generation of healthcare professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-card-border overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                      <Stethoscope className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {leader.position}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {leader.specialization}
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Experience:</span> {leader.experience}</p>
                    <p><span className="font-medium">Achievement:</span> {leader.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section > */}

      {/* History Section */}
      {/* < section className="section-padding bg-gradient-soft" >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="relative">
              <img
                src={heroImage}
                alt="Dr. Edumed History"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Since 1999</div>
                    <div className="text-sm text-muted-foreground">Trusted Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <Badge className="mb-6 bg-primary/10 text-primary">Our History</Badge>
              <h2 className="text-xl-heading mb-6">
                A Legacy of
                <span className="text-primary"> Medical Excellence</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">1999: Foundation</h3>
                  <p className="text-muted-foreground">
                    Dr. Edumed Medical Academy was founded with a vision to revolutionize medical education
                    through innovative teaching methodologies and hands-on clinical training.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">2005: International Recognition</h3>
                  <p className="text-muted-foreground">
                    Received international accreditation and began partnerships with leading medical
                    institutions worldwide.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">2015: Research Excellence</h3>
                  <p className="text-muted-foreground">
                    Established state-of-the-art research facilities and became a leading center
                    for medical research and innovation.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">2024: Future Ready</h3>
                  <p className="text-muted-foreground">
                    Pioneering digital health education and telemedicine training programs for
                    the next generation of healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section > */}

      {/* CTA Section */}
      < section className="relative py-20 overflow-hidden" >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h2 className="text-xl-heading mb-6">
              Enroll in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#6ee7b7] to-[#0d9488]">Career-Focused Training</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Launch your aesthetic career with hands-on, real-world internships designed to prepare you for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-[#056a7a] hover:bg-white/90 font-semibold text-lg px-8">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                Contact Admissions
              </Button> */}
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default About;
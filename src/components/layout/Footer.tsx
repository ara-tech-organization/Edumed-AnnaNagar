import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe, Youtube, MapPin, Phone, Mail } from "lucide-react";
import footerLogo from "@/assets/footerlogo.webp"; // Your uploaded footer logo

const Footer = () => {
  return (
    <footer className="bg-[#053641] text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div className="space-y-6">
          <Link to="/"><img
            src={footerLogo}
            alt="Dr. EduMed"
            className="w-40 h-auto"
          /></Link>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/dr.edumedannanagar" className="hover:text-[#04bfbf] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#04bfbf] transition-colors">
              <Globe className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/dr.edumedchennai/" className="hover:text-[#04bfbf] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#04bfbf] transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-white">Our Courses</Link></li>
            <li><Link to="/internship" className="hover:text-white">Internship Program</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Master in Facial Injectables
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Diploma in Aesthetic Skin Technician
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Fellowship in Facial Aesthetics
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Certificate Course in Chemical Peel
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-white/80">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>
                New No.1, old No. C-52, Muvas Arcade, 2nd Floor 2nd Avenue, 1st Main Rd,<br /> C Block, Annanagar East,<br /> Chennai, Tamil Nadu 600030
                
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>99648 10000</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <span>chennai@dredumed.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center text-white/70 text-sm py-4">
        © 2025 MedEdu Institute. All rights reserved. Website created by{" "}
        <a href="https://discovertechnologies.co/" className="hover:text-[#04bfbf]">
          ARA Discover Technologies
        </a>{" "}
        – A unit of ARA Discoveries Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;

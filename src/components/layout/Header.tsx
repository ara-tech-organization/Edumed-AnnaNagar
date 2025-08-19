import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"; // 👈 added ChevronDown
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";
import EnrollModal from "../EnrollModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // 👈 new state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses", hasDropdown: true }, // 👈 dropdown here
    { name: "Internship", href: "/internship" },
    { name: "Volunteering", href: "/volunteering" },
    { name: "Contact", href: "/contact" },
  ];

  // Inside Header.jsx

  const courseDropdown = [
    { name: "All Programs", id: "all" },
    { name: "Master Courses", id: "master" },
    { name: "PG Diploma", id: "pg" },
    { name: "Fellowship Courses", id: "fellowship" },
    { name: "Certification Courses", id: "certificate" },
    { name: "Live Workshop", id: "workshop" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-white"
      )}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>99648 10000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>chennai@dredumed.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Excellence in Medical Education</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Dr. Edumed Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className={cn(
                      "relative flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium",
                      location.pathname.startsWith("/courses") && "text-primary"
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isCoursesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {isCoursesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                      {courseDropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={`/courses?category=${sub.id}`}   // 👈 use query param
                          onClick={() => setIsCoursesOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}

                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative text-foreground hover:text-primary transition-colors font-medium",
                    location.pathname === item.href && "text-primary",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                    location.pathname === item.href && "after:w-full"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button className="hidden lg:inline-flex bg-gradient-primary hover:opacity-90 text-white font-semibold px-5"
              onClick={() => setShowModal(true)}>
              Get Started
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      className="flex items-center justify-between text-foreground hover:text-primary font-medium py-2"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isCoursesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {isCoursesOpen && (
                      <div className="pl-4 flex flex-col space-y-2">
                        {courseDropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={`/courses?category=${sub.id}`}   // 👈 use query param
                            onClick={() => setIsCoursesOpen(false)}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}

                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-foreground hover:text-primary transition-colors font-medium py-2",
                      location.pathname === item.href && "text-primary font-semibold"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button className="mt-4 bg-gradient-primary text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowModal(true);
                }}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
      <EnrollModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;

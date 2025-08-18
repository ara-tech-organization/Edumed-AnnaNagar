import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: "Courses", href: "/courses" },
    { name: "Internship", href: "/internship" },
    { name: "Volunteering", href: "/volunteering" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@dredumed.com</span>
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
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
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
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Show button only on lg and above */}
            <Button className="hidden lg:inline-flex bg-gradient-primary hover:opacity-90 text-white font-semibold px-5">
              Get Started
            </Button>

            {/* Show hamburger only below lg */}
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
              {navigation.map((item) => (
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
              ))}
              <Button className="mt-4 bg-gradient-primary text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

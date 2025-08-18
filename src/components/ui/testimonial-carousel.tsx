import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  location: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Testimonial Card */}
      <Card className="relative overflow-hidden bg-gradient-soft border-card-border shadow-card transition-all duration-500">
        <CardContent className="p-8">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 opacity-20">
            <Quote className="h-12 w-12 text-primary" />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < currentTestimonial.rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
            "{currentTestimonial.content}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
              {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-foreground">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.role}
              </div>
              <div className="text-xs text-muted-foreground">
                {currentTestimonial.location}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full w-10 h-10 p-0 border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="rounded-full w-10 h-10 p-0 border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      {autoPlay && (
        <div className="w-full bg-muted rounded-full h-1 mt-4 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % interval) / interval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
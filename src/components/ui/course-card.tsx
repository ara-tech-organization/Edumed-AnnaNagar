import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Calendar,
  ArrowRight,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice?: number;
  instructor: string;
  category: string;
  startDate: string;
  featured?: boolean;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  image,
  duration,
  students,
  rating,
  level,
  price,
  originalPrice,
  instructor,
  category,
  startDate,
  featured = false,
  className
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden bg-card border-card-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1",
        featured && "ring-2 ring-primary/20 shadow-card-hover",
        className
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-accent text-white font-semibold">
            <Award className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant="destructive" className="font-semibold">
            {discount}% OFF
          </Badge>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            View Details
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Category & Level */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Badge 
            variant="outline"
            className={cn(
              "text-xs",
              level === 'Beginner' && "border-green-200 text-green-700",
              level === 'Intermediate' && "border-yellow-200 text-yellow-700",
              level === 'Advanced' && "border-red-200 text-red-700"
            )}
          >
            {level}
          </Badge>
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Instructor */}
        <p className="text-sm text-foreground mb-4 font-medium">
          By {instructor}
        </p>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{students} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{startDate}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Enroll Button */}
        <Button 
          size="sm" 
          className="bg-gradient-primary text-white hover:opacity-90 font-semibold"
        >
          <BookOpen className="h-4 w-4 mr-1" />
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
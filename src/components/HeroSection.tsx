
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navbar from "./Navbar";

const featuredMovies = [
  {
    id: 1,
    title: "John Wick: Chapter 4",
    overview: "With the price on his head ever increasing, John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
    backdrop: "https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    rating: 8.2,
  },
  {
    id: 2,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    rating: 8.5,
  },
  {
    id: 3,
    title: "Barbie",
    overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    backdrop: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 7.5,
  },
];

const HeroSection = () => {
  const [currentMovie, setCurrentMovie] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const movie = featuredMovies[currentMovie];
  
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={movie.backdrop} 
          alt={movie.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <Navbar isTransparent={true} />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center">
        <div className="max-w-xl text-white pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {movie.title}
          </h1>
          
          <div className="flex items-center gap-6 my-4">
            <div className="flex items-center gap-2">
              <img src="/imdb-logo.svg" alt="IMDB" className="h-5" />
              <span>{movie.rating.toFixed(1)}/10</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">★</span>
              <span>{(movie.rating * 10).toFixed(1)}%</span>
            </div>
          </div>
          
          <p className="text-lg my-6">{movie.overview}</p>
          
          <Button className="bg-moviebox-primary hover:bg-moviebox-primary/90 text-white px-6 py-6 rounded-md font-medium flex items-center gap-2">
            <Play size={20} />
            WATCH TRAILER
          </Button>
          
          {/* Indicators */}
          <div className="flex gap-2 mt-8">
            {featuredMovies.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentMovie(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentMovie ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Switch to movie ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

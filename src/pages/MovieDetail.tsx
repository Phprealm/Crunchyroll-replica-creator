
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Play, List, Ticket, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const movies = [
  {
    id: "1",
    title: "Stranger Things",
    overview: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KJHaLgDdbvc9vJgSy2X7jYT.jpg",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    year: "2016",
    runtime: "50m",
    genre: ["Mystery", "Sci-Fi", "Drama"],
    rating: 8.6,
    director: "The Duffer Brothers",
    writers: ["Matt Duffer", "Ross Duffer"],
    stars: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
  },
  {
    id: "2",
    title: "Dune",
    overview: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    backdrop: "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    year: "2021",
    runtime: "155m",
    genre: ["Adventure", "Science Fiction", "Drama"],
    rating: 8.1,
    director: "Denis Villeneuve",
    writers: ["Jon Spaihts", "Denis Villeneuve", "Eric Roth"],
    stars: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  },
];

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    // Simulate API fetch
    const foundMovie = movies.find(m => m.id === id);
    if (foundMovie) {
      setMovie(foundMovie);
    }
  }, [id]);
  
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src={movie.backdrop} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <Button className="rounded-full w-20 h-20 flex items-center justify-center bg-white/30 backdrop-blur-sm hover:bg-white/50">
            <Play fill="white" size={36} className="text-white ml-1" />
          </Button>
          <p className="absolute bottom-4 text-white/70 text-sm">Watch Trailer</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <h1 className="text-2xl md:text-3xl font-bold w-full mb-2" data-testid="movie-title">
                {movie.title}
              </h1>
              
              <span data-testid="movie-release-date">{movie.year}</span>
              <span>•</span>
              <span>PG-13</span>
              <span>•</span>
              <span data-testid="movie-runtime">{movie.runtime}</span>
              
              {movie.genre.map((genre, index) => (
                <span 
                  key={index}
                  className="border border-moviebox-primary text-moviebox-primary rounded-full px-3 py-1 text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="text-lg mb-8" data-testid="movie-overview">
              {movie.overview}
            </p>
            
            <div className="mb-6">
              <p className="mb-2">
                Director: <span className="text-moviebox-primary">{movie.director}</span>
              </p>
              <p className="mb-2">
                Writers: <span className="text-moviebox-primary">{movie.writers.join(", ")}</span>
              </p>
              <p className="mb-2">
                Stars: <span className="text-moviebox-primary">{movie.stars.join(", ")}</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-stretch border border-gray-700 rounded-lg overflow-hidden">
              <Button className="bg-moviebox-primary hover:bg-moviebox-primary/90 text-white rounded-none py-4 px-6 flex-grow md:flex-grow-0">
                Top rated movie #{Math.floor(Math.random() * 250) + 1}
              </Button>
              <div className="flex items-center justify-between flex-grow px-4 py-3">
                <span>Awards & Nominations</span>
                <ChevronDown className="text-moviebox-primary" size={20} />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <div className="flex items-center gap-4 justify-end">
              <Star fill="gold" className="text-yellow-500" />
              <span className="font-semibold">
                {movie.rating.toFixed(1)}<span className="text-gray-400 font-normal">/10</span>
              </span>
            </div>
            
            <Button className="w-full bg-moviebox-primary hover:bg-moviebox-primary/90 text-white py-4 flex items-center justify-center gap-2">
              <Ticket size={18} /> See Showtimes
            </Button>
            
            <Button className="w-full bg-moviebox-primary/10 hover:bg-moviebox-primary/20 text-moviebox-primary py-4 border border-moviebox-primary flex items-center justify-center gap-2">
              <List size={18} /> More watch options
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MovieDetail;

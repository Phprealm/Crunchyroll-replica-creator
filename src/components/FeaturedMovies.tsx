
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    year: "2016",
    country: "USA",
    rating: 8.6,
  },
  {
    id: 2,
    title: "Dune",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    year: "2021",
    country: "USA",
    rating: 8.1,
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    year: "2021",
    country: "USA",
    rating: 8.3,
  },
  {
    id: 4,
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    year: "2022",
    country: "USA",
    rating: 7.8,
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    year: "2022",
    country: "USA",
    rating: 8.4,
  },
  {
    id: 6,
    title: "Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    year: "2022",
    country: "USA",
    rating: 8.4,
  },
  {
    id: 7,
    title: "The Northman",
    poster: "https://image.tmdb.org/t/p/w500/8p9zXB7M78nZpm215zHfqpknMeM.jpg",
    year: "2022",
    country: "USA",
    rating: 7.2,
  },
  {
    id: 8,
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    year: "2022",
    country: "USA",
    rating: 7.3,
  },
  {
    id: 9,
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    year: "2022",
    country: "USA",
    rating: 7.7,
  },
  {
    id: 10,
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCIwwDtEZgTmQXocc19Y.jpg",
    year: "2023",
    country: "USA",
    rating: 8.5,
  },
];

const FeaturedMovies = () => {
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  
  return (
    <section className="py-14 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Movies</h2>
          <Button variant="link" className="text-moviebox-primary flex items-center">
            See more <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedMovies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              year={movie.year}
              country={movie.country}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;

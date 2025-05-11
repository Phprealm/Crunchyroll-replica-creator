
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  rating: number;
}

const MovieCard = ({ id, title, poster, year, country, rating }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="movie-card" data-testid="movie-card">
      <div className="relative">
        <Link to={`/movie/${id}`}>
          <img 
            src={poster} 
            alt={title} 
            className="w-full rounded-lg"
            data-testid="movie-poster"
          />
        </Link>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={16} 
            fill={isFavorite ? "#BE123C" : "none"} 
            color={isFavorite ? "#BE123C" : "white"}
          />
        </button>
        <div className="movie-card-badge">
          {rating.toFixed(1)}
        </div>
      </div>
      
      <div className="mt-3 px-1">
        <p className="text-moviebox-gray text-sm" data-testid="movie-release-date">
          {country}, {year}
        </p>
        <h3 className="font-semibold text-lg mt-1.5" data-testid="movie-title">
          <Link to={`/movie/${id}`} className="hover:text-moviebox-primary">
            {title}
          </Link>
        </h3>
        
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center gap-2">
            <img src="/imdb-logo.svg" alt="IMDB" className="h-4" />
            <span className="text-sm">{(rating * 10).toFixed(1)}/100</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-500 text-xs">★</span>
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;


import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface AnimeGridCardProps {
  id: string;
  title: string;
  image: string;
  description?: string;
  type?: string;
  episodeCount?: number;
  rating?: string;
}

const AnimeGridCard = ({ 
  id, 
  title, 
  image, 
  description, 
  type = "ANIME", 
  episodeCount,
  rating 
}: AnimeGridCardProps) => {
  return (
    <Card className="overflow-hidden border-muted hover:border-crunchyroll-orange transition-colors duration-200 h-full">
      <div className="relative">
        <Link to={`/anime/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
          {type && (
            <Badge className="absolute top-2 right-2 bg-crunchyroll-orange text-white">
              {type}
            </Badge>
          )}
          {episodeCount !== undefined && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {episodeCount} EP{episodeCount !== 1 ? 'S' : ''}
            </div>
          )}
        </Link>
      </div>
      <CardContent className="p-3">
        <Link to={`/anime/${id}`} className="hover:text-crunchyroll-orange">
          <h3 className="font-semibold line-clamp-1">{title}</h3>
        </Link>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        )}
        {rating && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-crunchyroll-orange text-xs">★</span>
            <span className="text-xs">{rating}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimeGridCard;


import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  type?: string;
  description?: string;
  rating?: string;
}

const AnimeCard = ({ id, title, image, type = "ANIME", description, rating }: AnimeCardProps) => {
  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Link to={`/movie/${id}`} className="block anime-card">
          <div className="relative">
            <img 
              src={image} 
              alt={title} 
              className="anime-card-image"
              loading="lazy"
            />
            {type && <div className="anime-card-badge">{type}</div>}
            <div className="anime-card-overlay">
              <div className="absolute bottom-0 p-3 w-full">
                <h3 className="text-white text-sm font-medium line-clamp-2">{title}</h3>
              </div>
            </div>
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 cr-glass">
        <div className="space-y-3">
          <h4 className="font-semibold text-base">{title}</h4>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-3">
              {description}
            </p>
          )}
          {rating && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-crunchyroll-orange font-semibold">★</span>
              <span>{rating}</span>
            </div>
          )}
          <div className="flex gap-2">
            <Button size="sm" className="flex items-center gap-1 bg-crunchyroll-orange hover:bg-orange-600">
              <Play className="h-3 w-3" />
              Watch
            </Button>
            <Button size="sm" variant="outline">+ List</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AnimeCard;

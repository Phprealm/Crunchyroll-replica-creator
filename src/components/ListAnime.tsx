
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Plus, LayoutList, LayoutGrid } from "lucide-react";

interface AnimeListItemProps {
  id: string;
  title: string;
  image: string;
  description: string;
  episodes: number;
  type: string;
  rating: string;
}

const AnimeListItem = ({ id, title, image, description, episodes, type, rating }: AnimeListItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-secondary rounded-lg overflow-hidden hover:bg-secondary/80 transition-colors">
      <div className="relative w-full md:w-48 h-40 md:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <Badge className="absolute top-2 right-2 bg-crunchyroll-orange">{type}</Badge>
      </div>
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <div className="flex items-center text-xs">
            <span className="text-crunchyroll-orange mr-1">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{description}</p>
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {episodes} {episodes === 1 ? 'Episode' : 'Episodes'}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" />
              My List
            </Button>
            <Button size="sm" className="bg-crunchyroll-orange hover:bg-orange-600">
              <Play className="h-3 w-3 mr-1" />
              Watch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListAnime = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  
  const animeData = [
    {
      id: "1",
      title: "Demon Slayer: Kimetsu no Yaiba",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d3fc5f0b47f99a5afaeee3d271374664.jpeg",
      description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.",
      episodes: 26,
      type: "SERIES",
      rating: "4.8"
    },
    {
      id: "2",
      title: "My Hero Academia",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpeg",
      description: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers.",
      episodes: 113,
      type: "SERIES",
      rating: "4.7"
    },
    {
      id: "3",
      title: "JUJUTSU KAISEN",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c43d213f505fe143fc24e3678f7a988d.jpeg",
      description: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life.",
      episodes: 24,
      type: "SERIES",
      rating: "4.9"
    },
    {
      id: "4",
      title: "One Piece",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5bfa33c43bfd50b9842a8e76d11d3d35.jpeg",
      description: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates.",
      episodes: 1064,
      type: "SERIES",
      rating: "4.9"
    },
    {
      id: "5",
      title: "Attack on Titan: THE FINAL SEASON",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/336742e141cea009f592844291c2f766.jpeg",
      description: "Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans.",
      episodes: 16,
      type: "SERIES",
      rating: "4.8"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="cr-container">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Popular Anime</h2>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-crunchyroll-orange' : ''}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-crunchyroll-orange' : ''}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="space-y-4">
            {animeData.map((anime) => (
              <AnimeListItem
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                description={anime.description}
                episodes={anime.episodes}
                type={anime.type}
                rating={anime.rating}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {animeData.map((anime) => (
              <Link to={`/anime/${anime.id}`} key={anime.id} className="anime-card">
                <div className="relative">
                  <img 
                    src={anime.image} 
                    alt={anime.title} 
                    className="anime-card-image"
                    loading="lazy"
                  />
                  {anime.type && <div className="anime-card-badge">{anime.type}</div>}
                  <div className="anime-card-overlay">
                    <div className="absolute bottom-0 p-3 w-full">
                      <h3 className="text-white text-sm font-medium line-clamp-2">{anime.title}</h3>
                      <div className="flex items-center text-xs mt-1">
                        <span className="text-crunchyroll-orange mr-1">★</span>
                        <span className="text-white">{anime.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListAnime;

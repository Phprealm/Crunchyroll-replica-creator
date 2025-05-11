
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedAnime = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const animeData = [
    {
      id: "1",
      title: "Demon Slayer: Kimetsu no Yaiba",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d3fc5f0b47f99a5afaeee3d271374664.jpeg",
      description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon.",
      rating: "4.8"
    },
    {
      id: "2",
      title: "My Hero Academia",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpeg",
      description: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers.",
      rating: "4.7"
    },
    {
      id: "3",
      title: "JUJUTSU KAISEN",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c43d213f505fe143fc24e3678f7a988d.jpeg",
      description: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life.",
      rating: "4.9"
    },
    {
      id: "4",
      title: "One Piece",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5bfa33c43bfd50b9842a8e76d11d3d35.jpeg",
      description: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates.",
      rating: "4.9"
    },
    {
      id: "5",
      title: "Attack on Titan",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/336742e141cea009f592844291c2f766.jpeg",
      description: "Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress.",
      rating: "4.8"
    },
    {
      id: "6",
      title: "SPY x FAMILY",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpeg",
      description: "Everyone has a secret identity. A master spy. An assassin. A telepath. When these three are forced to work together, they must overcome their differences for the sake of the mission.",
      rating: "4.7"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="cr-container">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Featured Anime</h2>
            <div className="flex gap-4">
              <button
                className={`text-sm font-medium ${
                  activeTab === "popular"
                    ? "text-crunchyroll-orange border-b-2 border-crunchyroll-orange"
                    : "text-muted-foreground hover:text-white"
                }`}
                onClick={() => setActiveTab("popular")}
              >
                Popular
              </button>
              <button
                className={`text-sm font-medium ${
                  activeTab === "new"
                    ? "text-crunchyroll-orange border-b-2 border-crunchyroll-orange"
                    : "text-muted-foreground hover:text-white"
                }`}
                onClick={() => setActiveTab("new")}
              >
                New
              </button>
              <button
                className={`text-sm font-medium ${
                  activeTab === "updated"
                    ? "text-crunchyroll-orange border-b-2 border-crunchyroll-orange"
                    : "text-muted-foreground hover:text-white"
                }`}
                onClick={() => setActiveTab("updated")}
              >
                Updated
              </button>
            </div>
          </div>
          <a href="#" className="text-sm text-crunchyroll-orange font-medium">View All</a>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {animeData.map((anime) => (
              <CarouselItem key={anime.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <AnimeCard
                  id={anime.id}
                  title={anime.title}
                  image={anime.image}
                  description={anime.description}
                  rating={anime.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedAnime;

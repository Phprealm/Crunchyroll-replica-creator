
import AnimeGridCard from "./AnimeGridCard";

const RelatedAnimeGrid = () => {
  const relatedAnime = [
    {
      id: "101",
      title: "Demon Slayer: Entertainment District Arc",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9bec151c905ea7c18d7386d2dea48839.jpeg",
      description: "Tanjiro and his friends join the Sound Hashira Tengen Uzui on a mission in the Entertainment District.",
      type: "SERIES",
      episodeCount: 11,
      rating: "4.9"
    },
    {
      id: "102",
      title: "Demon Slayer: Mugen Train Arc",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/db83788ec02602a735ab48d87170de82.jpeg",
      description: "Tanjiro and the gang board the Mugen Train to assist the Flame Hashira Kyojuro Rengoku.",
      type: "SERIES",
      episodeCount: 7,
      rating: "4.8"
    },
    {
      id: "103",
      title: "Demon Slayer: Swordsmith Village Arc",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fa194839042b02151f1d47612a01802d.jpeg",
      description: "Tanjiro visits the Swordsmith Village to get his sword repaired.",
      type: "SERIES",
      episodeCount: 11,
      rating: "4.7"
    },
    {
      id: "104",
      title: "Demon Slayer: The Movie - Mugen Train",
      image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a529ba9339c0d214a9539b80e653b570.jpeg",
      description: "Tanjiro and his comrades embark on a new mission aboard the Mugen Train.",
      type: "MOVIE",
      episodeCount: 1,
      rating: "4.9"
    }
  ];

  return (
    <div className="py-8 bg-background">
      <div className="cr-container">
        <h2 className="text-xl font-bold mb-4">Related Anime</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedAnime.map((anime) => (
            <AnimeGridCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              description={anime.description}
              type={anime.type}
              episodeCount={anime.episodeCount}
              rating={anime.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedAnimeGrid;


import { useParams } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Share, Heart, MessageCircle, List, Plus, ThumbsUp, ThumbsDown } from "lucide-react";
import CrunchyNavbar from "@/components/CrunchyNavbar";
import CrunchyFooter from "@/components/CrunchyFooter";
import AnimeGridCard from "@/components/AnimeGridCard";

// Mock data for anime details
const animeDatabase = {
  "1": {
    id: "1",
    title: "Fire Force",
    japaneseTitle: "炎炎ノ消防隊",
    description: "Tokyo is burning, and citizens are mysteriously suffering from spontaneous human combustion all throughout the city! Responsible for snuffing out this inferno is the Fire Force, and Shinra is ready to join their fight.",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/30b93a5017b45698a2bdc941b48621d3.jpe",
    banner: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8b9ca6b946cd80a5ee14c079bc3c8b7a.jpe",
    type: "SERIES",
    rating: "96% Liked",
    releaseYear: "2019",
    studio: "David Production",
    episodes: 24,
    season: "Season 1",
    totalSeasons: 2,
    genres: ["Action", "Fantasy", "Supernatural"],
    maturityRating: "TV-14",
    audioLanguages: ["Japanese", "English", "Spanish", "Portuguese"],
    subtitleLanguages: ["English", "Spanish", "Portuguese", "Arabic"],
    popularity: "Top trending #3",
    status: "Completed",
  },
  "2": {
    id: "2",
    title: "My Hero Academia",
    japaneseTitle: "僕のヒーローアカデミア",
    description: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers.",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpeg",
    banner: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d1f7e93d06f4f84548371a5ecbf72b4a.jpeg",
    type: "SERIES",
    rating: "92% Liked",
    releaseYear: "2016",
    studio: "Bones",
    episodes: 113,
    season: "Season 7",
    totalSeasons: 7,
    genres: ["Action", "Superhero", "School", "Shounen"],
    maturityRating: "TV-14",
    audioLanguages: ["Japanese", "English", "Spanish", "Portuguese"],
    subtitleLanguages: ["English", "Spanish", "Portuguese", "Arabic", "French", "Italian", "German"],
    popularity: "Top trending #2",
    status: "Ongoing",
  }
};

// Mock data for related/seasonal anime
const relatedAnime = [
  {
    id: "101",
    title: "Fire Force Season 2",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e75a282b39b9d7731e8b8c3e060e6d06.jpe",
    type: "SERIES",
    episodeCount: 24,
    rating: "4.8"
  },
  {
    id: "102",
    title: "Soul Eater",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/39321b33c6f0c68ccb578719f9cee829.jpe",
    type: "SERIES",
    episodeCount: 51,
    rating: "4.7"
  },
  {
    id: "103",
    title: "Blue Exorcist",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b82b1adc2c50e9925992e45c1317f8c1.jpe",
    type: "SERIES",
    episodeCount: 25,
    rating: "4.6"
  },
  {
    id: "104",
    title: "JoJo's Bizarre Adventure",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/af5f2304138a2ebe9caf4adb7103066c.jpe",
    type: "SERIES",
    episodeCount: 39,
    rating: "4.9"
  }
];

// Mock episode data
const episodeData = [
  {
    id: "ep1",
    number: 1,
    title: "Shinra Kusakabe Joins the Force",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f922471f2ab21276d4c7c27c141fdfca.jpe",
    duration: "23 min",
    description: "Shinra Kusakabe joins Special Fire Force Company 8 as a new recruit. However, he carries some baggage as people call him the 'devil's footprints.'",
    premium: false
  },
  {
    id: "ep2",
    number: 2,
    title: "The Heart of a Fire Soldier",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8e746575642f194b5ac88ae6a0f87c81.jpe",
    duration: "23 min",
    description: "On his first official mission, Shinra encounters an Infernal at a factory and learns the true meaning of being a fire soldier.",
    premium: false
  },
  {
    id: "ep3",
    number: 3,
    title: "The Rookie Fire Soldier Games",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f2442891e9f355fa55c451cbc36412b3.jpe",
    duration: "23 min",
    description: "Shinra participates in the Rookie Fire Soldier Games, where he gets to show off his abilities to the other companies.",
    premium: true
  },
  {
    id: "ep4",
    number: 4,
    title: "The Hero and the Princess",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ca165ad604e30b0287e088d0dc225bd0.jpe",
    duration: "23 min",
    description: "During a mission, Company 8 encounters a strange phenomenon regarding an Infernal, leading them to suspect the Holy Sol Temple.",
    premium: true
  }
];

const AnimeDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find anime by id or use a default
  const anime = animeDatabase[id] || animeDatabase["1"];
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CrunchyNavbar />
      
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={anime.banner} 
          alt={anime.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8">
            <div className="cr-container">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
                <div className="md:w-1/4 lg:w-1/6 aspect-[3/4] rounded-md overflow-hidden shadow-lg">
                  <img 
                    src={anime.image} 
                    alt={anime.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    {anime.title}
                  </h1>
                  <p className="text-sm text-gray-400 mb-2">{anime.japaneseTitle}</p>
                  <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="text-crunchyroll-orange font-bold">{anime.rating}</span>
                    <span>•</span>
                    <span>{anime.releaseYear}</span>
                    <span>•</span>
                    <span>{anime.maturityRating}</span>
                    <span>•</span>
                    <span>{anime.season}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {anime.genres.map((genre, index) => (
                      <span 
                        key={index}
                        className="bg-secondary text-xs px-2 py-1 rounded"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button className="bg-crunchyroll-orange hover:bg-orange-600">
                      <Play className="h-4 w-4 mr-1" />
                      Start Watching
                    </Button>
                    <Button variant="outline" size="icon">
                      <Plus />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Tabs */}
      <div className="cr-container py-4">
        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="mb-6 bg-secondary/60">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="seasons">Seasons</TabsTrigger>
            <TabsTrigger value="more">More Like This</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-4">About {anime.title}</h2>
                <p className="text-lg mb-6">
                  {anime.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1">
                    <h3 className="text-md font-bold mb-2">Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Studio:</span>
                        <span>{anime.studio}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Released:</span>
                        <span>{anime.releaseYear}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Status:</span>
                        <span>{anime.status}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Episodes:</span>
                        <span>{anime.episodes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-md font-bold mb-2">Languages</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Audio:</span>
                        <span>{anime.audioLanguages.join(', ')}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-24 text-muted-foreground">Subtitles:</span>
                        <span>{anime.subtitleLanguages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Featured Episodes</h3>
                    <Button variant="link" className="text-crunchyroll-orange">
                      View All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {episodeData.slice(0, 2).map((episode) => (
                      <div key={episode.id} className="bg-secondary rounded-md overflow-hidden hover:bg-muted transition-colors">
                        <div className="relative">
                          <img 
                            src={episode.image} 
                            alt={episode.title} 
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Button className="rounded-full w-12 h-12 bg-crunchyroll-orange hover:bg-orange-600">
                              <Play className="h-5 w-5" />
                            </Button>
                          </div>
                          {episode.premium && (
                            <div className="absolute top-2 right-2 bg-crunchyroll-orange text-white text-xs px-2 py-1 rounded">
                              PREMIUM
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <h4 className="font-semibold">{`Episode ${episode.number}: ${episode.title}`}</h4>
                          <div className="flex justify-between items-center text-xs text-muted-foreground mt-1">
                            <span>{episode.duration}</span>
                            <div className="flex gap-3">
                              <button className="flex items-center hover:text-crunchyroll-orange">
                                <ThumbsUp className="w-3 h-3 mr-1" />
                                <span>123</span>
                              </button>
                              <button className="flex items-center hover:text-crunchyroll-orange">
                                <ThumbsDown className="w-3 h-3 mr-1" />
                                <span>4</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Community</h2>
                <div className="bg-secondary rounded-md p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Fan Reviews</h3>
                    <Button variant="link" className="text-crunchyroll-orange text-sm">
                      See all
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-bold">AB</span>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">AnimeBuff</span>
                          <div className="flex">
                            <span className="text-crunchyroll-orange text-xs">★★★★★</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">
                          Fire Force has some of the best animation I've ever seen! The fire effects are stunning.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-bold">SF</span>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">ShinraFan</span>
                          <div className="flex">
                            <span className="text-crunchyroll-orange text-xs">★★★★☆</span>
                          </div>
                        </div>
                        <p className="text-sm mt-1">
                          Great story and characters. The fight scenes are incredible and the plot keeps getting better.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Write a Review
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">More Like This</h3>
                    <Button variant="link" className="text-crunchyroll-orange text-sm">
                      See all
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {relatedAnime.slice(0, 2).map((anime) => (
                      <div key={anime.id} className="flex gap-3">
                        <img 
                          src={anime.image} 
                          alt={anime.title} 
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-sm line-clamp-1">{anime.title}</h4>
                          <div className="flex items-center text-xs mt-1">
                            <span className="text-crunchyroll-orange mr-1">★</span>
                            <span>{anime.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="episodes">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Episodes</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Season 1
                  </Button>
                  <Button variant="outline" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {episodeData.map((episode) => (
                  <div key={episode.id} className="flex flex-col sm:flex-row gap-4 bg-secondary rounded-md overflow-hidden hover:bg-muted transition-colors">
                    <div className="relative sm:w-48 h-40 sm:h-auto">
                      <img 
                        src={episode.image} 
                        alt={episode.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button className="rounded-full w-12 h-12 bg-crunchyroll-orange hover:bg-orange-600">
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                      {episode.premium && (
                        <div className="absolute top-2 right-2 bg-crunchyroll-orange text-white text-xs px-2 py-1 rounded">
                          PREMIUM
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {episode.duration}
                      </div>
                    </div>
                    <div className="flex flex-col p-4 flex-grow">
                      <h3 className="font-semibold">{`Episode ${episode.number}: ${episode.title}`}</h3>
                      <p className="text-sm text-muted-foreground my-2 line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center gap-3 text-xs">
                          <button className="flex items-center hover:text-crunchyroll-orange">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            <span>123</span>
                          </button>
                          <button className="flex items-center hover:text-crunchyroll-orange">
                            <ThumbsDown className="w-3 h-3 mr-1" />
                            <span>4</span>
                          </button>
                          <button className="flex items-center hover:text-crunchyroll-orange">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            <span>18</span>
                          </button>
                        </div>
                        <Button size="sm" variant="outline">
                          <Plus className="h-3 w-3 mr-1" />
                          My List
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="seasons">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">All Seasons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-secondary rounded-md overflow-hidden hover:bg-muted transition-colors">
                  <div className="relative">
                    <img 
                      src={anime.image} 
                      alt={`${anime.title} Season 1`} 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button className="rounded-full w-12 h-12 bg-crunchyroll-orange hover:bg-orange-600">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold">{anime.title} - Season 1</h3>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span>{anime.episodes} Episodes</span>
                      <span>{anime.releaseYear}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary rounded-md overflow-hidden hover:bg-muted transition-colors">
                  <div className="relative">
                    <img 
                      src={relatedAnime[0].image} 
                      alt={`${anime.title} Season 2`} 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button className="rounded-full w-12 h-12 bg-crunchyroll-orange hover:bg-orange-600">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold">{anime.title} - Season 2</h3>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span>24 Episodes</span>
                      <span>2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="more">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">More Like {anime.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {relatedAnime.map((anime) => (
                  <AnimeGridCard
                    key={anime.id}
                    id={anime.id}
                    title={anime.title}
                    image={anime.image}
                    type={anime.type}
                    episodeCount={anime.episodeCount}
                    rating={anime.rating}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <CrunchyFooter />
    </div>
  );
};

export default AnimeDetail;

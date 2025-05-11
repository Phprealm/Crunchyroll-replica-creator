
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const CrunchyHero = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d3fc5f0b47f99a5afaeee3d271374664.jpeg"
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="cr-container relative z-10 flex h-full">
        <div className="flex flex-col justify-center max-w-xl">
          <div className="mb-4">
            <span className="bg-crunchyroll-orange text-white text-xs uppercase px-2 py-1 rounded">New Episode</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Demon Slayer: Kimetsu no Yaiba</h1>
          <p className="text-base md:text-lg mb-4 text-gray-200 line-clamp-3">
            It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, 
            finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, 
            the sole survivor, has been transformed into a demon herself.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-secondary px-2 py-1 rounded text-xs">Action</span>
            <span className="bg-secondary px-2 py-1 rounded text-xs">Adventure</span>
            <span className="bg-secondary px-2 py-1 rounded text-xs">Fantasy</span>
            <span className="bg-secondary px-2 py-1 rounded text-xs">Supernatural</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button className="flex items-center gap-2 bg-crunchyroll-orange hover:bg-orange-600">
              <Play className="h-4 w-4" />
              Watch Now
            </Button>
            <Button variant="outline">Add to Watchlist</Button>
            <Link to="/movie/123" className="text-sm text-gray-300 hover:text-white flex items-center underline mt-2">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrunchyHero;

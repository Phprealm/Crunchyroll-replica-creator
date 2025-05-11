
import CrunchyNavbar from "@/components/CrunchyNavbar";
import CrunchySidebar from "@/components/CrunchySidebar";
import CrunchyHero from "@/components/CrunchyHero";
import FeaturedAnime from "@/components/FeaturedAnime";
import ListAnime from "@/components/ListAnime";
import RelatedAnimeGrid from "@/components/RelatedAnimeGrid";
import CrunchyFooter from "@/components/CrunchyFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CrunchyNavbar />
      <CrunchySidebar />
      <main className="flex-grow pl-16 md:pl-60 transition-all duration-300">
        <CrunchyHero />
        <FeaturedAnime />
        <ListAnime />
        <RelatedAnimeGrid />
      </main>
      <CrunchyFooter />
    </div>
  );
};

export default Index;

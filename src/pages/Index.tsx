
import CrunchyNavbar from "@/components/CrunchyNavbar";
import CrunchyHero from "@/components/CrunchyHero";
import FeaturedAnime from "@/components/FeaturedAnime";
import ListAnime from "@/components/ListAnime";
import RelatedAnimeGrid from "@/components/RelatedAnimeGrid";
import CrunchyFooter from "@/components/CrunchyFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CrunchyNavbar />
      <main className="flex-grow">
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

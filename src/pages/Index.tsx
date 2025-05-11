
import CrunchyNavbar from "@/components/CrunchyNavbar";
import CrunchyHero from "@/components/CrunchyHero";
import FeaturedAnime from "@/components/FeaturedAnime";
import CrunchyFooter from "@/components/CrunchyFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CrunchyNavbar />
      <main className="flex-grow">
        <CrunchyHero />
        <FeaturedAnime />
        {/* We can add more sections here later */}
      </main>
      <CrunchyFooter />
    </div>
  );
};

export default Index;

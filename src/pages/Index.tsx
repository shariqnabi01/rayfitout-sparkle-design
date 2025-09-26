import AluminumHeader from "@/components/AluminumHeader";
import AluminumHero from "@/components/AluminumHero";
import AluminumFeatures from "@/components/AluminumFeatures";
import AluminumSolutions from "@/components/AluminumSolutions";
import AluminumFooter from "@/components/AluminumFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AluminumHeader />
      <main>
        <AluminumHero />
        <AluminumFeatures />
        <AluminumSolutions />
      </main>
      <AluminumFooter />
    </div>
  );
};

export default Index;

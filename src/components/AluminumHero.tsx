import heroImage from "@/assets/aluminum-hero.jpg";
import { Button } from "@/components/ui/button";

const AluminumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium aluminum window systems showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.3em] text-accent mb-4 uppercase">
              RAYS OF LIGHT
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            ALUMINUM SYSTEMS
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As sunlight reveals the finest details in nature, our craftsmanship reflects the cohesive beauty of the often overlooked, minuscule details.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-luxury text-base px-12 py-4 font-medium uppercase tracking-wider"
            >
              EXPLORE SYSTEMS
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent/10 hover:border-accent text-base px-12 py-4 font-medium uppercase tracking-wider"
            >
              VIEW PROJECTS
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AluminumHero;
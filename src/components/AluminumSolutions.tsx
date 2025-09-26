import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import customImage from "@/assets/custom-image.jpg";
import waterImage from "@/assets/water.png"
import interiorImage from "@/assets/interiorImage.jpg";
import typographyImage from "@/assets/topograpicImage.png";


const AluminumSolutions = () => {
  const solutions = [
    {
      title: "Window Systems",
      description: "High-performance aluminum windows designed for optimal thermal efficiency and aesthetic appeal.",
      features: ["Triple glazing options", "Slim sightlines", "Advanced security systems", "Multiple opening configurations"],
    },
    {
      title: "Curtain Wall Systems", 
      description: "Structural glazing solutions that create seamless building envelopes with exceptional performance.",
      features: ["Structural glazing", "Weather sealing", "Thermal break technology", "Custom configurations"],
    },
    {
      title: "Door Systems",
      description: "Sophisticated aluminum door solutions combining security, durability, and design excellence.",
      features: ["Multi-point locking", "Acoustic insulation", "Accessibility compliance", "Automated options"],
    },
    {
      title: "Facade Solutions",
      description: "Complete building envelope systems that deliver energy efficiency and architectural distinction.",
      features: ["Rainscreen cladding", "Ventilated facades", "Integrated shading", "Maintenance access"],
    },
  ];

  return (
    <section className="py-24 bg-background">
            <style>{`
  .custom-image {
  display: block;
  width: 1455px;
  height: 793px;
  margin: 0 auto; /* centers horizontally */



}

`}</style>

<img 
  src={customImage}
  alt="Custom Image" 
  className="custom-image"
/>
<div className="mt-12 mx-auto w-[1455px] grid grid-cols-2 gap-3">
  {[0, 1, 2, 3].map((i) => (
    <div key={i} className="overflow-hidden w-full" style={{ aspectRatio: '1455 / 793' }}>
      <img
        src={waterImage}
        alt={`Part ${i + 1}`}
        className="w-full h-full object-cover mt-8"
        style={{
          objectPosition: `${(i % 2) * 50}% ${Math.floor(i / 2) * 50}%`,
        }}
      />
    </div>
  ))}
</div>

 <section className="mt-12 mx-auto w-[1372px] flex flex-col gap-6">
  {/* Heading */}
  <h2 className="text-2xl font-medium uppercase tracking-normal text-foreground ml-[113px]">
    Other Services
  </h2>

  {/* Images Row */}
  <div className="flex justify-between px-[113px] gap-[23px] mt-6">
    <div className="flex flex-col items-center">
      <img
        src={interiorImage}
        alt="Interior Fit Out"
        className="w-[429px] h-[429px] object-cover rounded-lg"
      />
      <span className="mt-2 text-sm font-medium text-muted-foreground">
        Interior Fit Out
      </span>
    </div>

    <div className="flex flex-col items-center">
      <img
        src={typographyImage}
        alt="Typography"
        className="w-[429px] h-[429px] object-cover rounded-lg"
      />
      <span className="mt-2 text-sm font-medium text-muted-foreground">
        Typography
      </span>
    </div>

    <div className="flex flex-col items-center">
      <img
        src={typographyImage}
        alt="Other Service"
        className="w-[429px] h-[429px] object-cover rounded-lg"
      />
      <span className="mt-2 text-sm font-medium text-muted-foreground">
        Other Service
      </span>
    </div>
  </div>
</section>


<div className="container mt-8 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete System Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, our aluminum systems are engineered to exceed expectations in performance, durability, and aesthetic excellence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={solution.title} className="shadow-gentle hover:shadow-luxury transition-luxury group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-smooth">
                    {solution.title}
                  </h3>
                  <div className="w-8 h-8 bg-aluminum-light rounded-full flex items-center justify-center group-hover:bg-accent transition-smooth">
                    <span className="text-sm font-bold text-aluminum-dark group-hover:text-accent-foreground">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-accent rounded-2xl p-12 shadow-luxury">
          <h3 className="text-3xl font-bold mb-4 text-accent-foreground">
            Ready to Transform Your Project?
          </h3>
          <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our experts help you select the perfect aluminum system solution for your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gentle">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>

          

  );
};

export default AluminumSolutions;
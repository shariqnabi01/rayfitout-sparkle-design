import detailImage from "@/assets/aluminum-detail.jpg";
import facadeImage from "@/assets/aluminum-facade.jpg";
import { Card, CardContent } from "@/components/ui/card";

const AluminumFeatures = () => {
  const features = [
    {
      title: "Precision Engineering",
      description: "Every component is crafted with meticulous attention to detail, ensuring perfect fit and long-lasting performance.",
      image: detailImage,
    },
    {
      title: "Architectural Excellence", 
      description: "Our aluminum systems seamlessly integrate with any architectural vision, from minimalist modern to classic luxury.",
      image: facadeImage,
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Crafted for Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As sunlight reveals the finest details in nature, our craftsmanship reflects the cohesive beauty of the often overlooked, minuscule details.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {features.map((feature, index) => (
            <div key={feature.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg shadow-aluminum mb-8">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-luxury"
                />
                <div className="absolute inset-0 bg-aluminum-dark/20"></div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-0' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Thermal Performance", value: "U-value from 0.8 W/m²K" },
              { label: "Wind Resistance", value: "Up to 2000 Pa" },
              { label: "Water Tightness", value: "Class E1200" },
              { label: "Air Permeability", value: "Class AE4" },
            ].map((spec, index) => (
              <Card key={spec.label} className="shadow-gentle hover:shadow-aluminum transition-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{spec.label}</h4>
                  <p className="text-sm text-muted-foreground">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluminumFeatures;
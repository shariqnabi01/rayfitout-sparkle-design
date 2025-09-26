import detailImage from "@/assets/aluminum-detail.jpg";
import facadeImage from "@/assets/aluminum-facade.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { url } from "inspector";

const AluminumFeatures = () => {
  const features = [
    {
      title: "Doors",
      description: "Every component is crafted with meticulous attention to detail, ensuring perfect fit and long-lasting performance.",
      image: detailImage,
    },
    {
      title: "Window", 
      description: "Our aluminum systems seamlessly integrate with any architectural vision, from minimalist modern to classic luxury.",
      image: facadeImage,
    },
     {
      title: "Partition", 
      description: "Our aluminum systems seamlessly integrate with any architectural vision, from minimalist modern to classic luxury.",
      image: "data:image/webp;base64,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",
    },
  ];

 

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-left text-3xl md:text-4xl font-bold mb-6 text-foreground">
            OUR ALUMINUM SYSTEM
          </h2>
          <p className="text-left text-xl text-muted-foreground max-w-3xl leading-relaxed">
  Expert craftmanship in aluminum systems, offering fit your unique space.
</p>

        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
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
          <h3 className="text-left text-3xl font-bold mb-12 text-foreground">
    ABOUT OUR PRODUCT AND SERVICE
  </h3> 
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      label: "COMPLIMENTARY INSTALLATION",
      value: "lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit amet",
    },
    {
      label: "MADE TO MEASURE ARCHITECTURE",
      value: "lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit amet",
    },
    {
      label: "PATENTED DESIGNS",
      value: "lorem ipsum dolor sit amet orem ipsum dolor sit ametorem ipsum dolor sit amet",
    },
  ].map((spec, index) => (
    <div
      key={spec.label}
      className=" hover:shadow-aluminum transition-luxury"
    >
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-accent mb-2">{index + 1}</div>
        <h4 className="font-semibold mb-2 text-foreground">{spec.label}</h4>
        <p className="text-sm text-muted-foreground">{spec.value}</p>
      </CardContent>
    </div>
  ))}
</div>

        </div>
      </div>

    </section>
  );
};

export default AluminumFeatures;
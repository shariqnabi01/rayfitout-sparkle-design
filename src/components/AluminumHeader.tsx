import { Button } from "@/components/ui/button";

const AluminumHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">Rayfitout</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">PRODUCTS</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">PROJECTS</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">SERVICES</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">ABOUT</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">CONTACT</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">NEWS</a>
          </nav>

          <Button variant="outline" className="border-border hover:bg-accent/20 hover:text-accent">
            GET QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AluminumHeader;
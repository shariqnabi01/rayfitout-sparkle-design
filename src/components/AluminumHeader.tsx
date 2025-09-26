import { Button } from "@/components/ui/button";

const AluminumHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">Rayfitout</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Products</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Projects</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Services</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">News</a>
          </nav>

          <Button variant="outline" className="border-aluminum-medium hover:bg-aluminum-light">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AluminumHeader;
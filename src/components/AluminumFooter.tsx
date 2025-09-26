const AluminumFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Rayfitout</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Precision-engineered aluminum systems that define modern luxury. 
              Crafting exceptional solutions for residential and commercial projects.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth cursor-pointer">
                <span className="text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth cursor-pointer">
                <span className="text-sm">ig</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Window Systems</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Curtain Walls</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Door Systems</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Facade Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Custom Engineering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Dubai Design District</li>
              <li>Dubai, UAE</li>
              <li className="pt-2">
                <a href="tel:+971-4-xxx-xxxx" className="hover:text-accent transition-smooth">
                  +971 4 XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:info@rayfitout.com" className="hover:text-accent transition-smooth">
                  info@rayfitout.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Rayfitout. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-smooth">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AluminumFooter;
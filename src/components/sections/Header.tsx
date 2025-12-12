import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Atom className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold text-foreground leading-tight">
              Network Global
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Carbon Dating
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#applications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Applications
          </a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Security
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <Button variant="gold" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;

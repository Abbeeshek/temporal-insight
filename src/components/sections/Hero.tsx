import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lab.jpg";
import { ArrowRight, Shield, Atom } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsla(43, 70%, 47%, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsla(43, 70%, 47%, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Atom className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-wide">
            Scientific Validation • Material Age Detection • Authenticity Certification
          </span>
          <Shield className="w-4 h-4 text-primary" />
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-up animation-delay-100 font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]">
          <span className="text-foreground">Precision Age Analysis</span>
          <br />
          <span className="text-gold-gradient">for the Modern World</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Delivering authentic carbon dating solutions for archaeology, industry, 
          research, and asset verification with scientific-grade methodology.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Request Analysis
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Explore Services
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up animation-delay-400 mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm">Global Recognition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-sm">Blockchain Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

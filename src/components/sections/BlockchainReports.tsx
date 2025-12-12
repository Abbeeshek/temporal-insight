import { Button } from "@/components/ui/button";
import { FileCheck, Link2, Shield, Globe } from "lucide-react";

const BlockchainReports = () => {
  return (
    <section className="py-24 px-6 bg-surface-dark relative overflow-hidden">
      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(hsla(43, 70%, 47%, 0.8) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-glow-pulse" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-primary/30 bg-card/30 backdrop-blur-sm" />
              
              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 flex items-center justify-center">
                <div className="text-center">
                  <FileCheck className="w-16 h-16 text-primary mx-auto mb-3" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Digital Certificate
                  </span>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-12 right-8 w-12 h-12 rounded-lg bg-card border border-primary/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute bottom-16 left-4 w-12 h-12 rounded-lg bg-card border border-primary/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-1/2 right-0 w-12 h-12 rounded-lg bg-card border border-primary/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Globe className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Secure Documentation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Digital Reports With
              <br />
              <span className="text-gold-gradient">Blockchain Security</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We link carbon dating results to secure digital certificates, ensuring 
              transparency, authenticity, and global traceability. Every analysis is 
              permanently recorded and verifiable.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Tamper-proof records",
                "Instant verification",
                "Global accessibility",
                "Permanent storage",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="goldOutline" size="lg">
              Learn More About Security
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainReports;

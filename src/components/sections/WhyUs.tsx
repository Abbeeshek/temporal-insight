import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Trusted scientific process",
  "Precision equipment",
  "Fast turnaround",
  "Global recognition",
  "Transparent, tamper-proof documentation",
];

const WhyUs = () => {
  return (
    <section className="py-24 px-6 bg-surface-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Why Network Global
              <br />
              <span className="text-gold-gradient">Carbon Dating?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine cutting-edge technology with rigorous scientific methodology 
              to deliver results you can trust. Our commitment to precision and 
              transparency sets us apart in the industry.
            </p>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="flex items-center gap-4 p-5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

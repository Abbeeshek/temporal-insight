import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-primary/30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-primary/30" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
          <Target className="w-8 h-8 text-primary" />
        </div>

        {/* Label */}
        <span className="text-primary text-sm font-medium tracking-widest uppercase mb-6 block">
          Our Mission
        </span>

        {/* Quote */}
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic mb-8">
          "To bring scientific accuracy to industries that demand trust, 
          transparency, and proof—powered by{" "}
          <span className="text-gold-gradient not-italic font-semibold">
            Network Global's
          </span>{" "}
          advanced ecosystem."
        </blockquote>

        {/* Decorative divider */}
        <div className="divider-gold w-48 mx-auto" />
      </div>
    </section>
  );
};

export default Mission;

import { Atom, Factory, BadgeCheck, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Atom,
    title: "Carbon-14 Dating Services",
    features: [
      "Accurate age calculation",
      "Laboratory-tested results",
      "Scientific-grade methodology",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Material Age Analysis",
    features: [
      "Metals, wood, fossils, artifacts",
      "Research-friendly reports",
      "Cross-industry compatibility",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Authenticity & Certification",
    features: [
      "Genuine verification certificates",
      "For private collectors, museums, and corporates",
      "Global acceptance",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <div className="w-20 h-px bg-primary/50 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-premium rounded-lg p-8 animate-fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

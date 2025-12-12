import { 
  Landmark, 
  Building2, 
  Clock, 
  Globe2, 
  Factory, 
  FlaskConical 
} from "lucide-react";

const applications = [
  {
    icon: Landmark,
    title: "Archaeology & History",
    description: "Research and dating of historical discoveries",
  },
  {
    icon: Building2,
    title: "Museum Artifacts",
    description: "Verification for collections and exhibitions",
  },
  {
    icon: Clock,
    title: "Antique Verification",
    description: "Age authentication for valuable antiques",
  },
  {
    icon: Globe2,
    title: "Environmental Studies",
    description: "Geological and environmental research",
  },
  {
    icon: Factory,
    title: "Industrial Validation",
    description: "Raw material age verification",
  },
  {
    icon: FlaskConical,
    title: "Scientific Research",
    description: "Academic and institutional studies",
  },
];

const Applications = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Use Cases
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Applications
          </h2>
          <div className="w-20 h-px bg-primary/50 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our carbon dating services support a wide range of industries and research fields
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className="group relative p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-400 hover:border-primary/40 hover:bg-card/60 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors">
                <app.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {app.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {app.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;

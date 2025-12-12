import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Applications from "@/components/sections/Applications";
import BlockchainReports from "@/components/sections/BlockchainReports";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <section id="services">
            <Services />
          </section>
          <WhyUs />
          <section id="applications">
            <Applications />
          </section>
          <section id="security">
            <BlockchainReports />
          </section>
          <Mission />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

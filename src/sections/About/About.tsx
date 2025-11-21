

import AboutFeatures from "./AboutFeatures";
import AboutStats from "./AboutStats";
import AboutVideo from "./AboutVideo";

import AboutHeader from "./AboutHeader";

export default function AboutSection() {
  
  return (
    <section className="md:py-12 py-20 text-gray-100" id="about">
      <div className="container2">
        <AboutHeader />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutFeatures />
          <AboutStats />
        </div>
      </div>

      <AboutVideo />

      
    </section>
  );
}

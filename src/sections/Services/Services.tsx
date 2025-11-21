
import ServiceHeader from "./ServiceHeader";
import ServicesCardList from "./ServicesCardList";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 mt-10">
      <div className="container2">
        <ServiceHeader/>
        <ServicesCardList/>
      </div>

      
    </section>
  );
}

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSlider from "./TestimonialsSlider";
import Customers from "./Customers";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 text-gray-100">
      <div className="container2">
        <TestimonialsHeader />
        <TestimonialsSlider />
        <Customers />
      </div>
    </section>
  );
}

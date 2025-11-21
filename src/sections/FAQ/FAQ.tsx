import { useState } from "react";
import FAQHeader from "./FAQHeader";
import FAQItem from "./FAQItem";
import faqs from "./faqData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-12 md:py-20">
      <div className="container2">
        <FAQHeader />
        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} activeIndex={activeIndex}
          setActiveIndex={setActiveIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

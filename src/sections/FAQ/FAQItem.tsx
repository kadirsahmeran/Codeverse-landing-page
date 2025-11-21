import { ChevronDown } from "lucide-react";
import { type FAQ } from "./faqData";

type FAQItemProps = {
  faq: FAQ;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function FAQItem({
  faq,
  index,
  activeIndex,
  setActiveIndex,
}: FAQItemProps) {
  const toggleFAQ = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div data-aos="fade-up">
      <div className="card-base overflow-hidden hover:border-cyan-600 shadow-2xl shadow-cyan-900/10">
        <button
          onClick={toggleFAQ}
          className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
        >
          <span className="font-semibold text-lg text-gray-100">
            {faq.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
              activeIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            activeIndex === index
              ? "max-h-[500px] opacity-100 p-5 pt-0"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          <div className="text-gray-400 text-sm leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

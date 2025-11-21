
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div data-aos="fade-up" className="h-full">
      <div className="card-base group h-full flex flex-col p-10 shadow-md shadow-cyan-900/30 hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-900/90">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
          {description}
        </p>
        <button className="flex items-center gap-2 text-cyan-300 font-medium cursor-pointer mt-auto">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

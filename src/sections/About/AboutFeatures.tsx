import { Rocket, Users, ShieldCheck, Globe } from "lucide-react";

export default function AboutFeatures() {
  return (
    <div data-aos="fade-right">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight text-gray-200">
        Empowering Your Vision Through Technology
      </h2>

      <p className="text-gray-400 mb-8 text-lg leading-relaxed border-l-4 border-cyan-600 pl-4">
        At <span className="text-cyan-400 font-semibold">CodeVerse</span>,
        we transform ideas into digital experiences. From web and mobile apps
        to complex enterprise systems, we focus on scalability, performance, and
        user experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Feature
          icon={<Rocket className="w-6 h-6 text-cyan-400" />}
          title="First on Field"
          text="We act fast to deliver innovative solutions before anyone else."
        />
        <Feature
          icon={<Users className="w-6 h-6 text-cyan-400" />}
          title="Easy to Reach"
          text="Our team is always available and easy to contact for your needs."
        />
        <Feature
          icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />}
          title="24/7 Support"
          text="Round-the-clock assistance ensures your business never stops."
        />
        <Feature
          icon={<Globe className="w-6 h-6 text-cyan-400" />}
          title="Worldwide Services"
          text="Our solutions reach clients and partners across the globe."
        />
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <h4 className="font-semibold text-gray-200">{title}</h4>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}

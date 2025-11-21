import { Briefcase, Users, Award, Rocket } from "lucide-react";
import CountUp from "react-countup";
const stats = [
    { icon: <Briefcase />, value: 120, label: "Completed Project" },
    { icon: <Users />, value: 85, label: "Happy Customers" },
    { icon: <Award />, value: 28, label: "Years of Experience" },
    { icon: <Rocket />, value: 15, label: "Global Partner" },
  ];
export default function AboutStats() {
  return (
    <div
      data-aos="fade-left"
      className="card-base card-shadow-2xl relative grid sm:grid-cols-2 gap-6 p-10"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center text-center p-6 border border-gray-800 rounded-2xl hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/60"
        >
          <div className="text-cyan-400 mb-3">{stat.icon}</div>
          <h4 className="text-3xl font-bold text-white mb-1">
            <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />+
          </h4>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

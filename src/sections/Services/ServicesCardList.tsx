import {Cloud, Code2, Cpu, Network, ShieldCheck, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
    {
      icon: <Code2 className="w-10 h-10 text-cyan-400" />,
      title: "Web Development",
      description:
        "We build modern, fast, and responsive web applications tailored to your business goals using the latest web technologies.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-cyan-400" />,
      title: "Mobile App Development",
      description:
        "Our team delivers high-performance iOS and Android applications that provide seamless user experiences and scalability.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
      title: "Cyber Security",
      description:
        "We protect your digital assets with advanced cybersecurity strategies, penetration testing, and ongoing threat monitoring.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "Automation Systems",
      description:
        "We develop smart automation solutions to streamline your workflows, minimize errors, and improve business efficiency.",
    },
    {
      icon: <Network className="w-10 h-10 text-cyan-400" />,
      title: "IT Infrastructure",
      description:
        "Our IT experts design, deploy, and maintain secure and reliable network infrastructures for your growing business needs.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-cyan-400" />,
      title: "Cloud Solutions",
      description:
        "We help you migrate, optimize, and scale your cloud systems, ensuring performance, security, and long-term sustainability.",
    },
  ];

export default function ServicesCardList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 items-stretch">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}
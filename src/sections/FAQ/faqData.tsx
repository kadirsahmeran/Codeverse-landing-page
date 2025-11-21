import  { type ReactNode } from "react";

export type FAQ = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "What services does CodeVerse offer?",
    answer: (
      <div>
        <p className="mb-2">
          We provide end-to-end digital solutions designed to meet your business goals. 
          Our team specializes in developing modern, scalable, and secure systems that drive growth.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Custom web and mobile app development</li>
          <li>Cloud migration and infrastructure setup</li>
          <li>Cybersecurity and system hardening</li>
          <li>UI/UX design and digital branding</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How long does it take to complete a project?",
    answer: (
      <div>
        <p className="mb-2">
          The timeline varies based on the project’s scope, complexity, and requirements. 
          However, we follow a structured workflow to ensure timely delivery:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-400">
          <li>Planning & Requirement Analysis (1–2 weeks)</li>
          <li>Design & Development (3–6 weeks)</li>
          <li>Testing & Quality Assurance (1 week)</li>
          <li>Deployment & Client Review (1 week)</li>
        </ol>
        <p className="mt-2">
          We also provide regular progress updates and milestone reviews throughout the process.
        </p>
      </div>
    ),
  },
  {
    question: "Do you provide post-launch support?",
    answer: (
      <div>
        <p className="mb-2">
          Absolutely. Launching your product is just the beginning. We provide continuous maintenance and
          support services to ensure your system remains optimized and secure.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Regular security and performance updates</li>
          <li>Bug fixes and feature enhancements</li>
          <li>Server monitoring and uptime management</li>
          <li>Dedicated support channel for premium clients</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I request custom software development?",
    answer: (
      <div>
        <p className="mb-2">
          Yes, our core expertise lies in developing fully customized solutions built around your business needs. 
          We collaborate closely with you to ensure every feature aligns with your goals.
        </p>
        <p>
          Whether it’s a small business tool, an enterprise-level platform, or a mobile application, 
          our agile development process allows flexibility, scalability, and fast iterations.
        </p>
      </div>
    ),
  },
  {
    question: "Is CodeVerse suitable for startups and small businesses?",
    answer: (
      <div>
        <p className="mb-2">
          Definitely! We understand the challenges startups and SMEs face when entering the digital space. 
          That’s why we provide tailored packages that are both cost-effective and growth-oriented.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>Affordable MVP (Minimum Viable Product) development</li>
          <li>Business consultation and scalability planning</li>
          <li>Flexible payment structures for growing teams</li>
          <li>Full-stack technical support and mentorship</li>
        </ul>
      </div>
    ),
  },
];

export default faqs;

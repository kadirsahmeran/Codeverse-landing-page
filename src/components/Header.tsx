import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

type LogoMode = "desktop" | "mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // 🔹 Scroll durumunu ve aktif sekmeyi takip et
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + window.innerHeight / 2;
      let foundActive = false;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(link.href);
            foundActive = true;
          }
        }
      });

      if (!foundActive) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleClickLogo(mode: LogoMode) {
    if (mode === "mobile") {
      setIsOpen(false);
    }
    window.history.replaceState({}, "", "/");
    window.scrollTo(0, 0);
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950 shadow-2xl border-b border-b-gray-900/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container2 flex justify-between items-center py-8 md:py-10 transition-all duration-300">
        <h1
          className="text-2xl sm:text-[28px] font-semibold cursor-pointer"
          onClick={() => handleClickLogo("desktop")}
        >
          <span className="text-white">Code</span>
          <span className="text-cyan-400">Verse</span>
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-400">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className={`transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>
              <span
                className={`absolute left-0 -bottom-1.5 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  activeSection === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-cyan-400 hover:opacity-80 transition-opacity text-2xl sm:text-[28px]"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full md:hidden z-50 
          bg-gray-950 transform transition-transform duration-300 ease-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-8 border-b border-gray-800">
          <h1
            className="text-2xl sm:text-[28px] font-semibold cursor-pointer"
            onClick={() => handleClickLogo("mobile")}
          >
            <span className="text-white">Code</span>
            <span className="text-cyan-400">Verse</span>
          </h1>
          <button
            className="text-cyan-400 hover:text-white transition-colors text-2xl sm:text-[28px]"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                onClick={() => setIsOpen(false)}
                href={link.href}
                className={`block w-full text-left text-xl font-medium py-4 px-4 rounded-lg transition-all duration-200 
                ${
                  activeSection === link.href
                    ? "text-cyan-400 bg-gray-900 border-l-4 border-cyan-400"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="text-gray-300 py-10">
      <div className="container2 flex flex-col md:flex-row justify-between items-center gap-4">
        
        
        <div className="flex gap-4">
          <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
        </div>

        
        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} CodeVerse. All rights reserved. 
          <span className="block md:inline text-gray-600 text-xs md:mt-0 mt-2">
            Designed by <span className="text-cyan-400 font-medium">Kadir Şahmeran</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

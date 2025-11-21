import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 text-gray-100">
      <div className="container2">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div
            data-aos="fade-left"
            className="card-base card-shadow-2xl space-y-8 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <ContactInfoCard icon={<MapPin className="w-6 h-6 text-cyan-400" />} title="Office Location" text="123 Innovation Street, CyberPark, İstanbul, Türkiye" />
            <ContactInfoCard icon={<Phone className="w-6 h-6 text-cyan-400" />} title="Phone Number" text="+90 (552) 450 0114" />
            <ContactInfoCard icon={<Mail className="w-6 h-6 text-cyan-400" />} title="Email Address" text="contact@codeverse.io" />
            <ContactInfoCard icon={<Clock className="w-6 h-6 text-cyan-400" />} title="Working Hours" text="Mon – Fri: 09:00 - 18:00\nSat – Sun: Closed" />
          </div>
        </div>
      </div>
    </section>
  );
}

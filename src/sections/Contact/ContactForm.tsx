import Button from "../../components/Button";
import ContactInput from "./ContactInput";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form data-aos="fade-right" className="card-base card-shadow-2xl p-8">
      <div className="grid sm:grid-cols-2 gap-x-6">
        <ContactInput label="Full Name" id="name" placeholder="John Doe" />
        <ContactInput label="Phone" id="phone" placeholder="+90 552 450 0114" />
      </div>

      <ContactInput
        label="Email"
        id="email"
        placeholder="you@example.com"
        type="email"
      />

      <ContactInput
        label="Message"
        id="message"
        placeholder="Write your message..."
        textarea
        rows={5}
      />

      <Button type="submit">
        <Send className="w-5 h-5" />
        Send Message
      </Button>
    </form>
  );
}

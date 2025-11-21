type ContactInfoCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function ContactInfoCard({ icon, title, text }: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-cyan-500/10 p-3 rounded-xl">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-200">{title}</h4>
        <p className="text-gray-400 text-sm whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

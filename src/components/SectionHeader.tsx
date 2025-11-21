type SectionHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-6 md:mb-16">
      <h3
        data-aos="fade-up"
        className="text-cyan-400 font-semibold text-xl mb-4"
      >
        {title}
      </h3>
      <p
        data-aos="fade-up"
        className="text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto font-semibold text-gray-100 mb-4"
      >
        {subtitle}
      </p>
      {description && (
        <p data-aos="fade-up" className="text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

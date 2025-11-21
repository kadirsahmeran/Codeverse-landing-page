type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, role, text, image }: Testimonial) {
  return (
    <div className="card-base shadow-md p-8 flex flex-col justify-between items-center text-center h-[350px] hover:border-cyan-500">
      <img
        
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full border-2 border-cyan-500 object-cover mb-4"
        loading="lazy"
      />
      <p className="text-gray-300 italic mb-4 line-clamp-4">“{text}”</p>
      <div>
        <h4 className="font-semibold text-lg text-white">{name}</h4>
        <span className="text-cyan-400 text-sm">{role}</span>
      </div>
    </div>
  );
}

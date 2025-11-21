import VideoTrigger from "../../components/VideoTrigger";


export default function AboutVideo() {
  
  return (
    <div
      className="relative mt-10 md:mt-20 py-20 flex items-center justify-center text-center bg-fixed bg-cover bg-center rounded-2xl overflow-hidden"
      style={{ backgroundImage: "url('/heroBg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gray-950 opacity-80"></div>

      <div data-aos="fade-up" className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h3 className="text-cyan-400 uppercase tracking-widest text-sm md:text-base font-semibold mb-3">
          Discover Our Process
        </h3>

        <h2 className="text-gray-100 text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
          Every Line of Code Shapes a Future — Watch How We Do It
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Our approach blends creativity, innovation, and technology.  
          From ideation to deployment, we ensure each project is a masterpiece  
          that empowers businesses and delights users worldwide.
        </p>

        <VideoTrigger videoSrc="/heroVideo.mp4" iconSize={80} label="" />

        
      </div>
      
    </div>
  );
}

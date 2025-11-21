import Button from "../../components/Button";
import VideoTrigger from "../../components/VideoTrigger";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-white py-40"
      style={{
        backgroundImage: `url(/heroBg2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-950 opacity-80"></div>

      <div className="container2 relative z-10 flex justify-between items-center w-full">
        <div className="pr-8">
          <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-12 sm:leading-16 md:leading-20 mb-6">
            Build Future Software{" "}
            <span className="text-cyan-400">Solutions Today</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            We accelerate your digital transformation with innovative
            technologies and offer scalable and reliable software services.
          </p>
          <div className="flex sm:flex-row flex-col  items-start sm:items-center space-x-0 sm:space-x-6 sm:space-y-0 space-y-6">
            <Button href="#contact">Get an Offer Now</Button>
            <VideoTrigger
              videoSrc="/heroVideo2.mp4"
              label="Watch Intro"
              iconSize={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

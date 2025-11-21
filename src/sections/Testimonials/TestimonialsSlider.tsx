import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";



const testimonials = [
  {
    name: "James Wilson",
    role: "Marketing Director",
    image: "/profile2.jpg",
    text: "CodeVerse turned our ideas into real, functional solutions. Their creativity and professionalism made the process effortless.",
  },
  {
    name: "Michael Smith",
    role: "Startup Founder",
    image: "/profile1.jpg",
    text: "They built our app on time and on budget. I was amazed by their technical skill and communication throughout the project.",
  },
  {
    name: "Archie Brown",
    role: "Project Manager",
    image: "/profile7.jpg",
    text: "Their developers are not only talented but also proactive. Every milestone was completed with precision and care.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Owner",
    image: "/profile4.jpg",
    text: "Working with CodeVerse was one of the smoothest collaborations we’ve ever had. Top-tier work ethic and output.",
  },
  {
    name: "Steven Caulker",
    role: "UX Designer",
    image: "/profile3.jpg",
    text: "They don’t just deliver software — they deliver value. Every decision was backed by a clear understanding of our goals.",
  },
  {
    name: "David Miller",
    role: "CEO",
    image: "/profile8.jpg",
    text: "From kickoff to launch, their dedication and technical knowledge exceeded expectations. Highly recommended.",
  },
  {
    name: "Chris Taylor",
    role: "Operations Lead",
    image: "/profile9.jpg",
    text: "They worked like an in-house team. Communication was instant, and results were outstanding.",
  },
  {
    name: "Robert King",
    role: "IT Consultant",
    image: "/profile1.jpg",
    text: "I’ve worked with several dev agencies, but CodeVerse stands out for their precision, speed, and design quality.",
  },
  {
    name: "Emma Williams",
    role: "Creative Director",
    image: "/profile5.jpg",
    text: "Their technical expertise and design sense go hand in hand — a rare find in software development.",
  },
];

export default function TestimonialsSlider() {
  return (
    <div data-aos="fade-up" className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={false}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

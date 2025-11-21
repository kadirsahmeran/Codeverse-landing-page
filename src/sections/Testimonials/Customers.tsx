import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface CustomerLogo {
  id: number;
  name: string;
  logoUrl: string;
}

const customerLogos: CustomerLogo[] = [
  {
    id: 1,
    name: "TechNova Solutions",
    logoUrl:
      "https://www.technova.com.tr/wp-content/themes/technova_theme/assets/img/logo.svg",
  },
  {
    id: 2,
    name: "Innovate AI",
    logoUrl:
      "https://innovate-ai.com.au/wp-content/uploads/2024/04/InnovateAI-Logo.png",
  },
  {
    id: 3,
    name: "Global Finance",
    logoUrl: "https://s44650.pcdn.co/wp-content/uploads/2023/04/gmf-logo.svg",
  },
  {
    id: 4,
    name: "DataStream Analytics",
    logoUrl: "https://www.eui.eu/web-production/code/assets/img/logo-eui.svg",
  },
  {
    id: 5,
    name: "Rakuten Viber",
    logoUrl: "https://www.viber.com/app/themes/viber/assets/images/logov2.svg",
  },
  {
    id: 6,
    name: "Nexus Mobility",
    logoUrl: "https://www.zedge.net/_next/static/media/logo.fed2a94d.png",
  },
  {
    id: 7,
    name: "MediaMarkt",
    logoUrl:
      "https://cms-images.mmst.eu/wgppmdcw3act/2cI20s4cNIDHaGy8pOljBt/0f5a7977bbbc08d7796c218ac93d85ff/MM_logo_white.svg?q=80",
  },
  {
    id: 8,
    name: "Euro News",
    logoUrl:
      "https://static.euronews.com/website/images/logos/logo-euronews-stacked-72x72-neon-blue.svg",
  },
];

export default function Customers() {
  return (
    <section id="customers" className="mt-16">
      <div>
        <div data-aos="fade-up" className="text-center mb-4">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-100">
            More than 80 Global Companies Trust Us
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 50 },
              1024: { slidesPerView: 5, spaceBetween: 60 },
              1280: { slidesPerView: 6, spaceBetween: 80 },
            }}
            className="w-full h-full"
          >
            {customerLogos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                className="flex items-center justify-center"
              >
                <div className="flex items-center justify-center h-20 ">
                  <img
                    src={logo.logoUrl}
                    alt={`${logo.name} Logo`}
                    className="max-h-full max-w-full object-contain duration-500"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

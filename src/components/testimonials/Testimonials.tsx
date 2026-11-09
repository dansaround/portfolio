"use client";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    name: "Mónica Marin",
    review:
      "Increíble trabajar contigo, eres una persona muy profesional y con mucha experiencia. Me encantó tu trabajo y tu forma de trabajar.",
  },
  {
    name: "Justin Barrero",
    review:
      "Muchas gracias por tu trabajo, me encantó tu forma de trabajar y tu profesionalidad. Sin duda volveré a trabajar contigo.",
  },
  {
    name: "Ronald Prato",
    review:
      "Hey! para el poco tiempo que llevas en esto, eres una persona muy aplicada y has ganado experiencia en muy poco tiempo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <p className="section-kicker">What clients say</p>
      <h2>Testimonials</h2>

      <Swiper
        className="mx-auto w-[90%] sm:w-[70%] pb-16"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {data.map(({ name, review }, index) => (
          <SwiperSlide
            key={index}
            className="bg-bg-variant text-center p-8 rounded-[2rem] select-none"
          >
            <div
              aria-hidden="true"
              className="w-16 aspect-square rounded-full mx-auto mb-4 border-[0.4rem] border-primary/40
                         grid place-items-center bg-bg text-primary font-semibold"
            >
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <h3 className="text-[1rem]">{name}</h3>
            <small lang="es" className="text-white/75 font-light block w-4/5 mx-auto mt-3">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

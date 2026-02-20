"use client";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "https://picsum.photos/190",
    name: "Mónica Marin",
    review:
      "Increíble trabajar contigo, eres una persona muy profesional y con mucha experiencia. Me encantó tu trabajo y tu forma de trabajar.",
  },
  {
    avatar: "https://picsum.photos/210",
    name: "Justin Barrero",
    review:
      "Muchas gracias por tu trabajo, me encantó tu forma de trabajar y tu profesionalidad. Sin duda volveré a trabajar contigo.",
  },
  {
    avatar: "https://picsum.photos/200",
    name: "Ronald Prato",
    review:
      "Hey! para el poco tiempo que llevas en esto, eres una persona muy aplicada y has ganado experiencia en muy poco tiempo",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
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
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide
            key={index}
            className="bg-bg-variant text-center p-8 rounded-[2rem] select-none"
          >
            <div className="w-16 aspect-square overflow-hidden rounded-full mx-auto mb-4 border-[0.4rem] border-primary/40">
              <img src={avatar} alt={`${name} avatar`} />
            </div>
            <h5>{name}</h5>
            <small className="text-white/60 font-light block w-4/5 mx-auto mt-3">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

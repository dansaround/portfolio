import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

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
    <section id="testmonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
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
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "https://picsum.photos/200",
    name: "Mónica Marin",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nostrum sequ impedit perferendis ipsam maiores deleniti obcaecati eligendi.",
  },
  {
    avatar: "https://picsum.photos/200",
    name: "Lorena Cerezo",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nostrum sequ impedit perferendis ipsam maiores deleniti obcaecati eligendi.",
  },
  {
    avatar: "https://picsum.photos/200",
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nostrum sequ impedit perferendis ipsam maiores deleniti obcaecati eligendi.",
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
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
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

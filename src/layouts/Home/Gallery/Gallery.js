import React, { memo } from "react";
import "./Gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import Title from "components/Title/Title";
import { IKImage } from "imagekitio-react";
SwiperCore.use([EffectCoverflow, Pagination]);

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-botom"></div>
      <div className="container-wrapper gallery py-100px">
        <Title
          title="Gallery"
          className="text-center  fs-46px weight-7 uppercase mb-60px"
        />

        <div className="gallery-content">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={100}
            speed={100}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="gallery-img-1_s0u8Jx5dR.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg1} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="gallery-img-2_xO_bVzpBL.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg2} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="gallery-img-3_uHa2RrSfe.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="gallery-img-4_bwL9hHWOEmn.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg4} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="gallery-img-5_nt0Fte19H.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Randomized7_xSFGqBzuYKb.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Randomized5_d46hfOQky.png"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default memo(Gallery);

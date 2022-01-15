import React, { memo } from "react";
import "./Aliens.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import Title from "components/Title/Title";
import { IKImage } from "imagekitio-react";
SwiperCore.use([EffectCoverflow, Navigation]);

function Aliens() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="py-100px ">
      <div className="container-wrapper">
        <Title
          title="The Chosen Ones"
          className={"text-center  fs-46px weight-7 uppercase mb-40px"}
        />

        <div className="alien-slider">
          <button className="alien-slider-arrow left" ref={navigationPrevRef}>
            <AiFillCaretLeft />
          </button>
          <button className="alien-slider-arrow right" ref={navigationNextRef}>
            <AiFillCaretRight />
          </button>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            loop={true}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            className="alienSwiper"
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="JokerGold_zJBhSGSabsB.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg1} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="HarryGold_z3BREk4he.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg2} alt="img" /> */}
            </SwiperSlide>

            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Alnaut_iz9RHfLdTsLm.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Blur7_kMPzUjBAFiY.jpg"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Blur6_SyjlgIuY6.jpg"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Blur5_jWm5SlNL0.jpg"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Blur4_ghT_sgczLIE.jpg"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Blur3_S7Zo33cHJ.jpg"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Gladiator_t35QIQ5pA.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default memo(Aliens);

import React, { Suspense, useRef, useState, useEffect, memo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "./ImageFadeMaterial";
import { TextureLoader, MathUtils } from "three";
import {presets, queueWrite} from 'glitched-writer';

import "./hero.styles.scss";

import { BsDiscord } from "react-icons/bs";
const IKImage = React.lazy(() =>
  import("imagekitio-react").then((module) => ({ default: module.IKImage }))
);
const TriShapeButton = React.lazy(() =>
  import("components/Buttons/TriShapeButton/TriShapeButton")
);

function FadingImage() {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useLoader(TextureLoader, [
    "https://ik.imagekit.io/6pl7k4a01ha/WithoutHealthBar_Iku7c27JCL.png?updatedAt=1639157956179",
    "https://ik.imagekit.io/6pl7k4a01ha/WithoutPaused_RQEnQSSRH.png?updatedAt=1639157956283",
    "https://ik.imagekit.io/6pl7k4a01ha/water-img_oYGDv1Jx1.jpg?updatedAt=1639157953051",
  ]);
  const [hovered, setHover] = useState(false);

  useFrame(
    () =>
      (ref.current.dispFactor = MathUtils.lerp(
        ref.current.dispFactor,
        !!hovered,
        0.1
      ))
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 40) {
        setHover(true);
      } else if (
        window.innerHeight + window.pageYOffset ===
        window.innerHeight
      ) {
        setHover(false);
      }
    };

    document.addEventListener("mouseup", handleScroll);
    document.addEventListener("mousedown", handleScroll);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseup", handleScroll);
      document.removeEventListener("mousedown", handleScroll);
    };
  });

  return (
    <mesh>
      <planeGeometry args={[1700, 1000]} />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
      />
    </mesh>
  );
}

function HeroFadeImg() {
  let parallax_element = useRef(null);

  useEffect(() => {
    function parallax(event) {
      this.querySelectorAll(".layer").forEach((shift) => {
        const position = shift.getAttribute("data-depth");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", parallax);
    
    // code to run glicted writer
    const phrases = [
      "Welcome",
      "to",
      "Alnsphere",
    ];
    
    queueWrite(
      phrases,
      ".glitched_text",
      {
        ...presets.neo,
        letterize: false
      },
      1000,
      true
    );

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  });

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 40) {
        if (parallax_element.current) {
          parallax_element.current.style.display = "none";
        }
        // typewriterRef.current.style.display = "block";
      } else if (
        window.innerHeight + window.pageYOffset ===
        window.innerHeight
      ) {
        if (parallax_element.current) {
          parallax_element.current.style.display = "block";
        }
        // typewriterRef.current.style.display = "none";
      }
    };

    document.addEventListener("mouseup", handleScroll);
    document.addEventListener("mousedown", handleScroll);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseup", handleScroll);
      document.removeEventListener("mousedown", handleScroll);
    };
  });

  return (
    <section className="hero">
      <div className="Hero-btn">
        <a href="https://discord.com/invite/YgeEwVa6Yn" target="_blank" rel="noreferrer">
          <TriShapeButton
            title="Join Discord"
            icon={
              <span className="white icon-button" style={{ fontSize: "18px" }}>
                <BsDiscord />
              </span>
            }
          />
        </a>
      </div>
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 182],
            fov: 140,
            aspect: 1600 / 900,
            near: 0.1,
          }}
        >
          <Suspense fallback={null}>
            <FadingImage />
          </Suspense>
        </Canvas>
      </div>

      <div className="parallax-holder" ref={parallax_element}>
        <div className="parallax-scene" id="parallax_scene">
          <div data-depth="5" className="layer shot-character">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="evil-eyes__LH1citv3.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img style={{ opacity: 0.7 }} src={evilEyes} alt="" /> */}
          </div>
          <div data-depth="2" className="layer base-character">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="main-character_4vSxVz8BL12.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img src={mainCharacter} alt="" /> */}
          </div>
          <div data-depth="5" className="layer dragon-image">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="dragon_TY8RUEHdd.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img height={820} src={dragon} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="mobile-parallax-holder">
        {/* <div class="night">
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
        </div> */}

        <div className="glitch_image">
          <h1 id = 'glitch_text' className="glitched_text">Alnsphere</h1>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroFadeImg);

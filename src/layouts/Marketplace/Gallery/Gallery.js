import React, { useState } from "react";
import styles from "./Gallery.module.css";

import back from "assets/images/back.png";
import background from "assets/images/background.png";
import clothes from "assets/images/clothes.png";
import eyes from "assets/images/eyes.png";
import Fur from "assets/images/Fur.png";
import Hat from "assets/images/Hat.png";
import mouth from "assets/images/mouth.png";
import baseCharacter from "assets/images/baseCharacter.png";
import UrlImageDownloader from "react-url-image-downloader";
import crossIcon from "assets/images/cross-icon.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Accordion from "./Accordion";
import Ear from "assets/images/ETH_earring.png";

function Gallery() {
  const [image, setImage] = useState(baseCharacter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideBarRef = OutsideClickDetector(() => {
    setIsSidebarOpen(false);
  });

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <div className={styles.gallery_left}>
          <div className="MARKETPLACE_CONTENT">
            <img src={image} className={styles.galleryImg} alt="" />

            <div className={styles.downloadImage}>
              <UrlImageDownloader imageUrl={image} />

              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                Filters
              </button>
            </div>
          </div>
        </div>
        <div
          ref={sideBarRef}
          className={`${styles.gallery_right} ${
            isSidebarOpen ? styles.open : ""
          }`}
        >
          <img
            src={crossIcon}
            className={`${styles.crossIcon} invert`}
            alt=""
            onClick={() => setIsSidebarOpen(false)}
          />

          <h1 className="fs-28px white weight-6 mb-20px">Gallery</h1>
          <div className={`${styles.galleryAccordions} mb-30px`}>
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[
                { title: "Purple Galaxy", content: { img: background } },
              ]}
              title="Background"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[
                { title: "Green Sportswear", content: { img: clothes } },
              ]}
              title="Clothes"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[
                { title: "Holographic Glasses", content: { img: eyes } },
              ]}
              title="Eyes"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[{ title: "Fur Wrap", content: { img: Fur } }]}
              title="Fur"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[{ title: "Soldier Hat", content: { img: Hat } }]}
              title="Hat"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[{ title: "Green Slaiva", content: { img: mouth } }]}
              title="Mouth"
            />
            <Accordion
              setImage={setImage}
              image={image}
              bodyContent={[{ title: "ETH Earring", content: { img: Ear } }]}
              title="Ear"
            />
          </div>

          <div className={styles.gallery_right_btns}>
            <button
              className="fs-16px weight-5 uppercase text-center"
              onClick={() => setImage(baseCharacter)}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

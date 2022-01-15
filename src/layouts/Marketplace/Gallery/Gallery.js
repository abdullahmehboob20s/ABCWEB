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
import { BiChevronDown } from "react-icons/bi";

const Button = ({
  setImage,
  image,
  title,
  setImagesetName,
  isResetBtn = false,
}) => {
  return (
    <button
      className={`fs-16px weight-6 uppercase pointer ${
        isResetBtn ? styles.resetBtn : ""
      } ${setImagesetName === image ? styles.active : ""} `}
      onClick={() => setImage(setImagesetName)}
    >
      {title}
    </button>
  );
};

const Accordion = ({ title, bodyContent, setImage, image }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelectedInsideParent, setIsSelectedInsideParent] =
    React.useState(false);
  const bodyRef = React.useRef(null);
  const componentRef = React.useRef();

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      bodyRef.current.style.height = 0;
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (!ref.contains(e.target)) {
          // put your action here
          bodyRef.current.style.height = 0;
          setIsOpen(false);
        }
      }
    }
  }, []);

  return (
    <div
      className={`${styles.accordion} ${isOpen ? styles.open : ""} ${
        isSelectedInsideParent ? styles.active : ""
      }`}
      ref={componentRef}
    >
      <button
        onClick={handler}
        className={`${styles.accordion_btn}  pointer fs-18px white weight-5`}
      >
        {title}
        <span className="white">
          <BiChevronDown size={30} />
        </span>
      </button>
      <main ref={bodyRef}>
        <div className={styles.accordionBody}>
          {bodyContent &&
            bodyContent.map((data, index) => (
              <button
                key={index}
                className={`fs-16px white weight-4 ${
                  data.content.img === image ? styles.active : ""
                } `}
                onClick={() => {
                  // setIsSelectedInsideParent(

                  //   );
                  setImage(data.content.img);
                }}
              >
                {data.title}
              </button>
            ))}
        </div>
      </main>
    </div>
  );
};

function Gallery() {
  const [image, setImage] = useState(baseCharacter);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <div className={styles.gallery_left}>
          <div className="MARKETPLACE_CONTENT">
            <img src={image} className={styles.galleryImg} alt="" />

            <div className={styles.downloadImage}>
              <UrlImageDownloader imageUrl={image} />
            </div>

            {/* <div className={styles.galleryBtns}>
              <Button
                image={image}
                setImage={setImage}
                title="back"
                setImagesetName={back}
              />
              <Button
                image={image}
                setImage={setImage}
                title="background"
                setImagesetName={background}
              />
              <Button
                image={image}
                setImage={setImage}
                title="clothes"
                setImagesetName={clothes}
              />
              <Button
                image={image}
                setImage={setImage}
                title="eyes"
                setImagesetName={eyes}
              />
              <Button
                image={image}
                setImage={setImage}
                title="Fur"
                setImagesetName={Fur}
              />
              <Button
                image={image}
                setImage={setImage}
                title="Hat"
                setImagesetName={Hat}
              />
              <Button
                image={image}
                setImage={setImage}
                title="mouth"
                setImagesetName={mouth}
              />
              <Button
                image={image}
                setImage={setImage}
                title="reset"
                setImagesetName={baseCharacter}
                isResetBtn={true}
              />
            </div> */}
          </div>
        </div>
        <div className={styles.gallery_right}>
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

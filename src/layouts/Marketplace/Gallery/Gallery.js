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

function Gallery() {
  const [image, setImage] = useState(baseCharacter);

  return (
    <div className={styles.galleryWrapper}>
      <img src={image} className={styles.galleryImg} alt="" />

      <div className={styles.galleryBtns}>
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
      </div>
    </div>
  );
}

export default Gallery;

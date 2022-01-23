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

import base_character from "assets/images/gallery-assets-2/base-character.png";

// BACKGROUNDS
import base_background from "assets/images/gallery-assets-2/backgrounds/Basic/base-background.png";
// BASIC
import base_background_1 from "assets/images/gallery-assets-2/backgrounds/Basic/1.png";
import base_background_2 from "assets/images/gallery-assets-2/backgrounds/Basic/2.png";
import base_background_3 from "assets/images/gallery-assets-2/backgrounds/Basic/3.png";
import base_background_4 from "assets/images/gallery-assets-2/backgrounds/Basic/4.png";
import base_background_5 from "assets/images/gallery-assets-2/backgrounds/Basic/5.png";
import base_background_6 from "assets/images/gallery-assets-2/backgrounds/Basic/6.png";
import base_background_7 from "assets/images/gallery-assets-2/backgrounds/Basic/7.png";
import base_background_8 from "assets/images/gallery-assets-2/backgrounds/Basic/8.png";
import base_background_9 from "assets/images/gallery-assets-2/backgrounds/Basic/9.png";
import base_background_10 from "assets/images/gallery-assets-2/backgrounds/Basic/10.png";
import base_background_11 from "assets/images/gallery-assets-2/backgrounds/Basic/11.png";
import base_background_12 from "assets/images/gallery-assets-2/backgrounds/Basic/12.png";
import base_background_13 from "assets/images/gallery-assets-2/backgrounds/Basic/13.png";
import base_background_14 from "assets/images/gallery-assets-2/backgrounds/Basic/14.png";
import base_background_15 from "assets/images/gallery-assets-2/backgrounds/Basic/15.png";

// BACK ITEMS
import bow from "assets/images/gallery-assets-2/Back-Items/bow.png";
import bowgoden_rocket_launcher from "assets/images/gallery-assets-2/Back-Items/goden_rocket_launcher.png";
import Golden_longsword from "assets/images/gallery-assets-2/Back-Items/Golden_longsword.png";
import laser_sword from "assets/images/gallery-assets-2/Back-Items/laser_sword.png";
import longsword from "assets/images/gallery-assets-2/Back-Items/longsword.png";
import pickaxe from "assets/images/gallery-assets-2/Back-Items/pickaxe.png";
import red_wings from "assets/images/gallery-assets-2/Back-Items/red_wings.png";
import soldier_rocket_launcher from "assets/images/gallery-assets-2/Back-Items/soldier_rocket_launcher.png";
import two_swords from "assets/images/gallery-assets-2/Back-Items/two_swords.png";
import wings from "assets/images/gallery-assets-2/Back-Items/wings.png";

// CLOTHES
import akatsukirobe from "assets/images/gallery-assets-2/Items-Clothes/akatsuki-robe.png";
import assasinscreedroguejacket from "assets/images/gallery-assets-2/Items-Clothes/assasins-creed-rogue-jacket.png";
import basketballshirtwithboldgoldchain from "assets/images/gallery-assets-2/Items-Clothes/basketball-shirt-with-bold-gold-chain.png";
import bathrobeblackgoldwithpattern from "assets/images/gallery-assets-2/Items-Clothes/bathrobe-black-gold-with-pattern.png";
import blackgeneraluniformwithbadges from "assets/images/gallery-assets-2/Items-Clothes/black-general-uniform-with-badges.png";
import boyscoutwithbadges from "assets/images/gallery-assets-2/Items-Clothes/boy-scout-with-badges.png";
import Chainmail from "assets/images/gallery-assets-2/Items-Clothes/Chainmail.png";
import ChampionshipbeltwithALN from "assets/images/gallery-assets-2/Items-Clothes/Championship-belt-with-ALN.png";
import diamondarmor from "assets/images/gallery-assets-2/Items-Clothes/diamond-armor.png";
import fakeAlncostume from "assets/images/gallery-assets-2/Items-Clothes/fake-Aln-costume.png";
import gentlemansuittie from "assets/images/gallery-assets-2/Items-Clothes/gentleman-suit-&-tie.png";
import goldenbomberjacket from "assets/images/gallery-assets-2/Items-Clothes/golden-bomber-jacket.png";
import hawaiishirtwithholes from "assets/images/gallery-assets-2/Items-Clothes/hawaii-shirt-with-holes.png";
import greenarmyjacketwithpatches from "assets/images/gallery-assets-2/Items-Clothes/green-army-jacket-with-patches.png";
import hoodiewithjacket from "assets/images/gallery-assets-2/Items-Clothes/hoodie-with-jacket.png";
import JesterOutfit from "assets/images/gallery-assets-2/Items-Clothes/Jester-Outfit.png";
import KimonowithJapanesepatternonit from "assets/images/gallery-assets-2/Items-Clothes/Kimono-with-Japanese-pattern-on-it.png";
import leatherjacketbiker from "assets/images/gallery-assets-2/Items-Clothes/leather-jacket-biker.png";
import purplesilkshirt from "assets/images/gallery-assets-2/Items-Clothes/purple-silk-shirt.png";
import rainbowbasicshirt from "assets/images/gallery-assets-2/Items-Clothes/rainbow-basic-shirt.png";
import snakeskinleatherjacket from "assets/images/gallery-assets-2/Items-Clothes/snake-skin-leather-jacket.png";
import SonGokuOutfit from "assets/images/gallery-assets-2/Items-Clothes/Son-Goku-Outfit.png";
import squidgamesportjacket from "assets/images/gallery-assets-2/Items-Clothes/squid-game-sport-jacket.png";
import tacticalvestwithsmartphoneinthebag from "assets/images/gallery-assets-2/Items-Clothes/tactical-vest-with-smartphone-in-the-bag.png";
import Taekwondo from "assets/images/gallery-assets-2/Items-Clothes/Taekwondo.png";
import tanktopwithAlienheadchain from "assets/images/gallery-assets-2/Items-Clothes/tanktop-with-Alien-head-chain.png";
import tshirtbasic from "assets/images/gallery-assets-2/Items-Clothes/tshirt-basic.png";
import turtleneckpullover from "assets/images/gallery-assets-2/Items-Clothes/turtleneck-pullover.png";
import vegetaoutfit from "assets/images/gallery-assets-2/Items-Clothes/vegeta-outfit.png";
import whiteleatherjacket from "assets/images/gallery-assets-2/Items-Clothes/white-leather-jacket.png";

// EARS
import cottonSwab from "assets/images/gallery-assets-2/Items-Ears/cotton-swab.png";
import earPlug from "assets/images/gallery-assets-2/Items-Ears/ear-plug.png";
import EthereumSymbol from "assets/images/gallery-assets-2/Items-Ears/Ethereum-Symbol.png";
import goldHoop from "assets/images/gallery-assets-2/Items-Ears/gold-hoop.png";
import goldEarrings from "assets/images/gallery-assets-2/Items-Ears/pierced-multiple-gold-earrings.png";
import shinyDiamond from "assets/images/gallery-assets-2/Items-Ears/shiny-diamond.png";
import zombieEars from "assets/images/gallery-assets-2/Items-Ears/zombie-ears.png";

// HEAD
import head1 from "assets/images/gallery-assets-2/Items-Head/1.png";
import head2 from "assets/images/gallery-assets-2/Items-Head/2.png";
import head3 from "assets/images/gallery-assets-2/Items-Head/3.png";
import head4 from "assets/images/gallery-assets-2/Items-Head/4.png";

// EYES
import default_eyes from "assets/images/gallery-assets-2/Items-Eyes/default-eyes.png";
import eye1 from "assets/images/gallery-assets-2/Items-Eyes/1.png";
import eye2 from "assets/images/gallery-assets-2/Items-Eyes/2.png";
import eye3 from "assets/images/gallery-assets-2/Items-Eyes/3.png";
import eye4 from "assets/images/gallery-assets-2/Items-Eyes/4.png";
import eye5 from "assets/images/gallery-assets-2/Items-Eyes/5.png";
import eye6 from "assets/images/gallery-assets-2/Items-Eyes/6.png";
import eye7 from "assets/images/gallery-assets-2/Items-Eyes/7.png";
import eye8 from "assets/images/gallery-assets-2/Items-Eyes/8.png";
import eye9 from "assets/images/gallery-assets-2/Items-Eyes/9.png";
import eye10 from "assets/images/gallery-assets-2/Items-Eyes/10.png";

// MOUHT
import defaultMouth from "assets/images/gallery-assets-2/Items-Mouth/default-mouth.png";
import mouth1 from "assets/images/gallery-assets-2/Items-Mouth/1.png";
import mouth2 from "assets/images/gallery-assets-2/Items-Mouth/2.png";
import mouth3 from "assets/images/gallery-assets-2/Items-Mouth/3.png";
import mouth4 from "assets/images/gallery-assets-2/Items-Mouth/4.png";
import mouth5 from "assets/images/gallery-assets-2/Items-Mouth/5.png";
import mouth6 from "assets/images/gallery-assets-2/Items-Mouth/6.png";
import mouth7 from "assets/images/gallery-assets-2/Items-Mouth/7.png";
import mouth8 from "assets/images/gallery-assets-2/Items-Mouth/8.png";
import mouth9 from "assets/images/gallery-assets-2/Items-Mouth/9.png";
import mouth10 from "assets/images/gallery-assets-2/Items-Mouth/10.png";

// FUR
import default_fur from "assets/images/gallery-assets-2/Fur-Item/default-fur.png";
import fur1 from "assets/images/gallery-assets-2/Fur-Item/1.png";
import fur2 from "assets/images/gallery-assets-2/Fur-Item/2.png";
import fur3 from "assets/images/gallery-assets-2/Fur-Item/3.png";

// NOSE
import nose from "assets/images/gallery-assets-2/nose.png";

function Gallery() {
  const [image, setImage] = useState(baseCharacter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [items, setItems] = useState({
    background: base_background,
    backItem: "",
    furItem: default_fur,
    clothe: "",
    ears: "",
    eyes: "",
    head: "",
    mouth: defaultMouth,
    nose: nose,
  });

  const sideBarRef = OutsideClickDetector(() => {
    setIsSidebarOpen(false);
  });

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <div className={styles.gallery_left}>
          <div className="MARKETPLACE_CONTENT">
            <div className={styles.galleryImg}>
              {items.furItem && (
                <img
                  src={items.furItem}
                  className={styles.base_character}
                  alt=""
                />
              )}

              <img
                src={items.background}
                className={styles.backgrounds}
                alt=""
              />

              {items.nose && (
                <img src={items.nose} className={styles.nose} alt="" />
              )}
              {items.backItem && (
                <img src={items.backItem} className={styles.backItems} alt="" />
              )}
              {items.clothe && (
                <img src={items.clothe} className={styles.clothe} alt="" />
              )}
              {items.ears && (
                <img src={items.ears} className={styles.ears} alt="" />
              )}
              {items.head && (
                <img src={items.head} className={styles.head} alt="" />
              )}
              {items.eyes && (
                <img src={items.eyes} className={styles.eyes} alt="" />
              )}
              {items.mouth && (
                <img src={items.mouth} className={styles.mouth} alt="" />
              )}

              {/* <img
                src={Bandanawhite}
                className={styles.galleryImg_main_asset}
                alt=""
              /> */}
            </div>

            <div className={styles.downloadImage}>
              {/* <UrlImageDownloader imageUrl={image} /> */}
              <a href={image} download={true}>
                Download
              </a>
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
              type={items.background}
              onClick={(data) => {
                setItems({
                  ...items,
                  background: data.content.img,
                });
              }}
              bodyContent={[
                { title: "gradient 1", content: { img: base_background_1 } },
                { title: "gradient 2", content: { img: base_background_2 } },
                { title: "gradient 3", content: { img: base_background_3 } },
                { title: "gradient 4", content: { img: base_background_4 } },
                { title: "gradient 5", content: { img: base_background_5 } },
                { title: "gradient 6", content: { img: base_background_6 } },
                { title: "gradient 7", content: { img: base_background_7 } },
                { title: "gradient 8", content: { img: base_background_8 } },
                { title: "gradient 9", content: { img: base_background_9 } },
                { title: "gradient 10", content: { img: base_background_10 } },
                { title: "gradient 11", content: { img: base_background_11 } },
                { title: "gradient 12", content: { img: base_background_12 } },
                { title: "gradient 13", content: { img: base_background_13 } },
                { title: "gradient 14", content: { img: base_background_14 } },
                { title: "gradient 15", content: { img: base_background_15 } },
              ]}
              title="Background"
            />
            <Accordion
              title="Back Items"
              type={items.backItem}
              bodyContent={[
                { title: "bow", content: { img: bow } },
                {
                  title: "bowgoden_rocket_launcher",
                  content: { img: bowgoden_rocket_launcher },
                },
                {
                  title: "Golden_longsword",
                  content: { img: Golden_longsword },
                },
                { title: "laser_sword", content: { img: laser_sword } },
                { title: "longsword", content: { img: longsword } },
                { title: "pickaxe", content: { img: pickaxe } },
                { title: "red_wings", content: { img: red_wings } },
                {
                  title: "soldier_rocket_launcher",
                  content: { img: soldier_rocket_launcher },
                },
                { title: "two_swords", content: { img: two_swords } },
                { title: "wings", content: { img: wings } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  backItem: data.content.img,
                });
              }}
            />
            <Accordion
              title="Clothes"
              type={items.clothe}
              bodyContent={[
                { title: "1", content: { img: akatsukirobe } },
                { title: "2", content: { img: assasinscreedroguejacket } },
                {
                  title: "3",
                  content: { img: basketballshirtwithboldgoldchain },
                },
                {
                  title: "4",
                  content: { img: basketballshirtwithboldgoldchain },
                },
                { title: "5", content: { img: blackgeneraluniformwithbadges } },
                { title: "6", content: { img: boyscoutwithbadges } },
                { title: "7", content: { img: Chainmail } },
                { title: "8", content: { img: ChampionshipbeltwithALN } },
                { title: "9", content: { img: diamondarmor } },
                { title: "10", content: { img: fakeAlncostume } },
                { title: "11", content: { img: gentlemansuittie } },
                { title: "12", content: { img: goldenbomberjacket } },
                { title: "13", content: { img: hawaiishirtwithholes } },
                { title: "14", content: { img: greenarmyjacketwithpatches } },
                { title: "15", content: { img: hoodiewithjacket } },
                { title: "16", content: { img: JesterOutfit } },
                {
                  title: "17",
                  content: { img: KimonowithJapanesepatternonit },
                },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  clothe: data.content.img,
                });
              }}
            />
            <Accordion
              title="Ears"
              type={items.ears}
              bodyContent={[
                { title: "1", content: { img: cottonSwab } },
                { title: "1", content: { img: earPlug } },
                { title: "1", content: { img: EthereumSymbol } },
                { title: "1", content: { img: goldHoop } },
                { title: "1", content: { img: goldEarrings } },
                { title: "1", content: { img: shinyDiamond } },
                { title: "1", content: { img: zombieEars } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  ears: data.content.img,
                });
              }}
            />
            <Accordion
              title="Head Items"
              type={items.head}
              bodyContent={[
                { title: "1", content: { img: head1 } },
                { title: "1", content: { img: head2 } },
                { title: "1", content: { img: head3 } },
                { title: "1", content: { img: head4 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  head: data.content.img,
                });
              }}
            />
            <Accordion
              title="Eyes"
              type={items.eyes}
              bodyContent={[
                { title: "1", content: { img: eye1 } },
                { title: "2", content: { img: eye2 } },
                { title: "3", content: { img: eye3 } },
                { title: "4", content: { img: eye4 } },
                { title: "5", content: { img: eye5 } },
                { title: "6", content: { img: eye6 } },
                { title: "7", content: { img: eye7 } },
                { title: "8", content: { img: eye8 } },
                { title: "9", content: { img: eye9 } },
                { title: "10", content: { img: eye10 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  eyes: data.content.img,
                });
              }}
            />
            <Accordion
              title="Mouths"
              type={items.mouth}
              bodyContent={[
                { title: "1", content: { img: mouth1 } },
                { title: "2", content: { img: mouth2 } },
                { title: "3", content: { img: mouth3 } },
                { title: "4", content: { img: mouth4 } },
                { title: "5", content: { img: mouth5 } },
                { title: "6", content: { img: mouth6 } },
                { title: "7", content: { img: mouth7 } },
                { title: "8", content: { img: mouth8 } },
                { title: "9", content: { img: mouth9 } },
                { title: "10", content: { img: mouth10 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  mouth: data.content.img,
                });
              }}
            />
            <Accordion
              title="Fur"
              type={items.furItem}
              bodyContent={[
                { title: "1", content: { img: fur1 } },
                { title: "2", content: { img: fur2 } },
                { title: "3", content: { img: fur3 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  furItem: data.content.img,
                });
              }}
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

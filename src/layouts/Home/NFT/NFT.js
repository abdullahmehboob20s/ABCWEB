import React, { memo } from "react";
import "./NFT.css";
import { BsDiscord } from "react-icons/bs";
import { IKImage } from "imagekitio-react";
const TriShapeButton = React.lazy(() =>
  import("components/Buttons/TriShapeButton/TriShapeButton")
);

function NFT() {
  return (
    <div className="nft-wrapper ">
      <div className="container-wrapper  nft">
        <div className="nft-left">
          <p className="fs-46px white weight-6 mb-30px">JOIN THE SPHEROXY</p>
          <p className="white fs-18px lh-30px weight-5 mb-40px">
            Stay up to date by joining our Discord. <br /> Follow us on Twitter
            and don’t miss any announcements.
          </p>

          <a href="https://discord.com/invite/YgeEwVa6Yn" target="_blank" rel="noreferrer">
            <TriShapeButton
              title="Join Discord"
              icon={
                <span
                  className="white icon-button"
                  style={{ fontSize: "18px" }}
                >
                  <BsDiscord />
                </span>
              }
            />
          </a>
        </div>
        <div className="nft-right">
          {/* <img src={nftImg} alt="" /> */}
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
            path="AlnGifcc_WMs0RIwgs.gif"
            loading="lazy"
            lqip={{ active: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(NFT);

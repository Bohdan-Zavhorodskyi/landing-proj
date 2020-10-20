import React from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

const Slider = ({ images }) => {
  return (
    <div className="slide-container">
      <Fade>
        {images.map((item, i) => (
          <div className="each-slide" key={i}>
            <div className="image-container">
              <img src={item} />
            </div>
            <span>Slide {i + 1}</span>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;

import React from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import useStyles from "./styles";

const Slider = ({ images }) => {
  const classes = useStyles();

  return (
    <div className="slide-container">
      <Fade>
        {images.map((item, i) => (
          <div className={classes.eachFade} key={i}>
            <div className="image-container">
              <img src={item} alt="item" />
            </div>
            <span>Slide {i + 1}</span>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;

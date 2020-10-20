import React from "react";
import Slider from "../Slider";
import useStyles from "./styles";

const OurProduct = () => {
  const classes = useStyles();
  const images = ["images/image.jpg", "images/image1.jpg", "images/image2.jpg"];

  return (
    <div className={classes.root}>
      <Slider images={images} />
    </div>
  );
};

export default OurProduct;

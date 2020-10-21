import React from "react";
import useStyles from "./styles";

const AboutUs = () => {
  const classes = useStyles();
  console.log('hi there');
  return <div className={classes.root}>About Us block</div>;
};

export default AboutUs;

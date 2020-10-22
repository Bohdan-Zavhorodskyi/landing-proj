import React from "react";
import { Trans } from "react-i18next";

import useStyles from "./styles";

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Trans i18nKey="portfolio.welcome">
        Тут буде портфоліо
      </Trans>
    </div>
  );
};

export default Portfolio;

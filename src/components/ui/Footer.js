import React from "react";
import { makeStyles } from "tss-react/mui";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles()((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1300,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  );
}

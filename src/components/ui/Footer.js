import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import footerAdornment from "../../assets/Footer Adornment.svg";
import Grid from "@mui/material/Grid";

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
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/services" className={classes.link}>
              Services
            </Grid>
            <Grid item component={Link} to="/customs" className={classes.link}>
              Custom Software Development
            </Grid>

            <Grid item component={Link} to="/mobile" className={classes.link}>
              Mob App Development
            </Grid>

            <Grid item component={Link} to="/website" className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              The Revolution
            </Grid>
            <Grid item component={Link} to="/vision" className={classes.link}>
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              to="/tehnology"
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid item component={Link} to="/process" className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/aboutus" className={classes.link}>
              About us
            </Grid>
            <Grid item component={Link} to="/aboutus" className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to="/aboutus" className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/contactus"
              className={classes.link}
            >
              Contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  );
}

import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import animationData from "../animations/landinganimation/data";

const useStyle = makeStyles()((theme) => ({
  animation: {
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "50em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    maxHeight: "auto",
    [theme.breakpoints.down("md")]: { marginTop: "3em" },
    [theme.breakpoints.down("sm")]: { marginTop: "2em" },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  },
}));

export default function LandingPage() {
  const { classes } = useStyle();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <Grid container direction={"column"} className={classes.mainContainer}>
        <Grid item>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

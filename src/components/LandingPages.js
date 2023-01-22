import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import animationData from "../animations/landinganimation/data";

const useStyle = makeStyles()((theme) => ({
  animation: {
    maxWidth: "35em",
    minWidth: "30em",
    marginTop: "2em",
    marginLeft: "10%",
  },
}));

export default function LandingPage() {
  const classes = useStyle();

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
      <Grid container direction={"column"}>
        <Grid item>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology <br />
                to the Midwest
              </Typography>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Learn More</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item>
              <Lottie
                className={classes.animation}
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

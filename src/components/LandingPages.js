import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

import animationData from "../animations/landinganimation/data";

const useStyle = makeStyles()((theme) => ({}));

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
          <Grid container direction="row">
            <Grid item>
              <div>
                Bringing West Coast Technology <br />
                to the Midwest
              </div>
              <Grid container>
                <Grid item>
                  <Button variant="contained">Free Estimate</Button>
                </Grid>
              </Grid>
              {/* <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> */}
            </Grid>
            <Grid item>
              <div>Dejan Vukoicic</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

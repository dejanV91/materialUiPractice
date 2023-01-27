import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyle = makeStyles()((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: { marginBottom: "2em" },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));

export default function CallToAction() {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2">
              Take advatage of the 21th Century.
            </Typography>
            <Grid container item>
              <Button variant="outlined" className={classes.learnButton}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.background}></div>
    </Grid>
  );
}

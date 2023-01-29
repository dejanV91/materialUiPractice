import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import backgroundCall from "../../assets/background.jpg";
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
    backgroundImage: `url(${backgroundCall})`,
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function CallToAction() {
  const { classes } = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={matchesMD ? "center" : "space-between"}
      className={classes.background}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : "5em",
          textAlign: matchesMD ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advatage of the 21th Century.
            </Typography>
            <Grid
              container
              justifyContent={matchesMD ? "center" : undefined}
              item
            >
              <Button variant="outlined" className={classes.learnButton}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

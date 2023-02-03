import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hidden from "@mui/material/Hidden";

import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json";

const useStyles = makeStyles()((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customs"
              onClick={() => {
                props.setSelectedIndex(1);
              }}
            >
              <img src={backArrow} alt="back to custom development page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Mobile App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              quos vitae perspiciatis!
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              error fugiat laboriosam repellat aut totam est quis ipsam suscipit
              provident mollitia animi, dicta minus culpa, odio rerum eveniet
              excepturi at hic modi ea natus itaque. Dolorum distinctio porro
              quisquam dolor, obcaecati tenetur sequi illum corporis molestias
              temporibus eius est numquam!
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem, ipsum.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/websites"
              onClick={() => {
                props.setSelectedIndex(3);
              }}
            >
              <img
                src={forwardArrow}
                alt="Forward to Websites Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus perspiciatis at repellat debitis! Repellat id
              explicabo ex illo, qui ab.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              quibusdam voluptatibus quaerat quasi reiciendis sunt laboriosam
              impedit non aliquid dolorum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} isStopped={true}></Lottie>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              provident officia distinctio! Omnis maiores dicta suscipit nihil
              reprehenderit?
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              facere animi saepe amet iste at recusandae.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

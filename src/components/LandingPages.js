import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CallToAction from "./ui/CallToAction";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
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
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: { marginBottom: "2em" },
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
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("md")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[8],
    borderRadius: 15,
    padding: "10rem",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingRight: 0,
      paddingLeft: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const { classes } = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

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
          {/*----Hero Block ----*/}
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
                    component={Link}
                    to="/estimate"
                    className={classes.estimateButton}
                    variant="contained"
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
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
        <Grid item>
          {/*----Custom Software   Block ----*/}
          <Grid
            container
            justifyContent={matchesSM ? "center" : undefined}
            direction="row"
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Monay
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button
                component={Link}
                to="/customs"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={customSoftwareIcon}
                alt="Custom Software icon"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----Mobile Block ----*/}
          <Grid
            container
            justifyContent={matchesSM ? "center" : "flex-end"}
            direction="row"
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Mobile Apps</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standaone app{" "}
                {matchesSM ? null : <br />} with either mobile platform.
              </Typography>
              <Button
                component={Link}
                to="/mobile"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                className={classes.icon}
                src={mobileAppsIcon}
                alt="Mobile phone icon"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*----Websites Block ----*/}
          <Grid
            container
            justifyContent={matchesSM ? "center" : undefined}
            direction="row"
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Websites Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={websitesIcon}
                alt="website icon"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            style={{ height: "100em", marginTop: "12em" }}
            alignItems="center"
            justifyContent="center"
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      component={Link}
                      to="/revolution"
                      className={classes.learnButtonHero}
                      variant="outlined"
                      onClick={() => {
                        props.setValue(2);
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground}></div>
          </Grid>
        </Grid>
        <Grid item>
          {/*-------- information Block  --------*/}
          <Grid
            container
            style={{ height: "80em", width: "100%" }}
            alignItems="center"
            direction="row"
          >
            <Grid
              item
              container
              style={{
                position: "absolute",
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
              spacing={matchesSM ? 10 : 0}
            >
              <Grid
                sm
                item
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/aboutus"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnButton}
                      onClick={() => {
                        props.setValue(4);
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                sm
                item
                style={{
                  marginRight: matchesXS ? 0 : matchesXS ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say hello!</Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contactus"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnButton}
                      onClick={() => {
                        props.setValue(3);
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackground}></div>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------Call To Action block ----- */}
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

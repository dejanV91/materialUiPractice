import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hidden from "@mui/material/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles()((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
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
              to="/services"
              onClick={() => {
                props.setSelectedIndex(0);
              }}
            >
              <img src={backArrow} alt="back to services page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quam ab natus. Officiis culpa magni voluptatibus amet, neque
              doloremque.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              suscipit odio nulla, beatae, quibusdam officia eius qui dolores
              labore mollitia iusto, ad distinctio. Repellat quos fuga, cumque
              ab blanditiis doloremque expedita obcaecati optio. Soluta, libero
              voluptatibus quisquam, corrupti nulla adipisci sit facilis
              laudantium quidem temporibus voluptate consequuntur in voluptatum!
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at
              reprehenderit est cupiditate laboriosam sunt? Quia fugiat
              exercitationem amet vel voluptates qui rem placeat praesentium
              quos quas sapiente cumque consequuntur provident maxime, error
              iste eos quidem ipsa in, incidunt eveniet?
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
              consectetur consequatur!
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobile"
              onClick={() => {
                props.setSelectedIndex(2);
              }}
            >
              <img
                src={forwardArrow}
                alt="Forward to Mobile Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "10em", marginBottom: "15em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesMD ? "7em" : 0,
            marginBottom: matchesMD ? "7em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-around"
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "10em" : 0 }}
          lg
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, obcaecati, consequatur voluptates, tempora cum
                reprehenderit fugit quasi a quam iste quo nam autem illo sed
                nesciunt eos animi hic quod!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                aspernatur debitis eos in voluptas provident qui aut. Nostrum,
                laudantium!
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            ></Lottie>
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} lg>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            ></Lottie>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                perspiciatis sequi? Ipsa id perspiciatis, numquam expedita ipsam
                et dolor officiis unde?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "17em", marginBottom: "17em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item style={{ maxWidth: "40em" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Couse Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              voluptates nisi ducimus aut magni obcaecati consequuntur
              recusandae quaerat, eaque aspernatur ullam vitae optio nemo culpa?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-around"
        style={{ marginBottm: "10em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "10em" : 0 }}
          lg
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                consequatur quidem voluptas perferendis eaque totam repudiandae
                dolores culpa!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem totam voluptates possimus quo aspernatur dolores.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            ></Lottie>
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} lg>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            ></Lottie>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci, amet.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                eius eveniet ab.
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                similique dicta quia voluptate ullam tempore in ducimus
                repudiandae reiciendis assumenda fugit suscipit modi, beatae
                error possimus neque nihil!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

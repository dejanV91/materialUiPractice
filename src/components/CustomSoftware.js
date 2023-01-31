import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles()((theme) => ({}));

export default function CustomSoftware() {
  const { classes } = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        <Grid item>
          <IconButton>
            <img src={backArrow} alt="back to services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quam ab natus. Officiis culpa magni voluptatibus amet, neque
              doloremque.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              suscipit odio nulla, beatae, quibusdam officia eius qui dolores
              labore mollitia iusto, ad distinctio. Repellat quos fuga, cumque
              ab blanditiis doloremque expedita obcaecati optio. Soluta, libero
              voluptatibus quisquam, corrupti nulla adipisci sit facilis
              laudantium quidem temporibus voluptate consequuntur in voluptatum!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at
              reprehenderit est cupiditate laboriosam sunt? Quia fugiat
              exercitationem amet vel voluptates qui rem placeat praesentium
              quos quas sapiente cumque consequuntur provident maxime, error
              iste eos quidem ipsa in, incidunt eveniet?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
              consectetur consequatur!
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <img
                src={forwardArrow}
                alt="Forward to Mobile Development page"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

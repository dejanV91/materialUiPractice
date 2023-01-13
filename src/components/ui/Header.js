import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontFamily: "Pacifico",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabs = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="company logo" />
            <Tabs
              value={value}
              onChange={handleTabs}
              className={classes.tabContainer}
              indicatorColor="secondary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              ></Tab>
              <Tab
                className={classes.tab}
                label="Services"
                component={Link}
                to="/services"
              ></Tab>
              <Tab
                className={classes.tab}
                label="The Revolution"
                component={Link}
                to="/revolution"
              ></Tab>
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/aboutus"
              ></Tab>
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contactus"
              ></Tab>
            </Tabs>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

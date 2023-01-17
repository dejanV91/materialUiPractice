import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, useScrollTrigger } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";

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

const useStyles = makeStyles()((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("lg")]: { marginBottom: "2em" },
    [theme.breakpoints.down("xs")]: { marginBottom: "1.5em" },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("lg")]: { height: "7em" },
    [theme.breakpoints.down("xs")]: { height: "5.5em" },
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto",
    color: "#ffffff",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "15px",
    color: "#ffffff",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    fontFamily: "Pacifico",
  },
  menu: {
    color: "#ffffff",
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawIcon: {
    height: "50px",
    width: "50px",
  },
}));

export default function Header() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/aboutus" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contactus" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customs":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobile":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/aboutus":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contactus":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate": {
        if (value !== 5) {
          setValue(5);
        }
        break;
      }

      default:
        break;
    }
  }, [value]);

  const handleTabs = (e, newValue) => {
    setValue(newValue);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setSelectedIndex(i);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Customs software", link: "/customs" },
    { name: "Mobile apps", link: "/mobile" },
    { name: "Websites", link: "/websites" },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleTabs}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/"></Tab>
        <Tab
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onMouseEnter={handleClick}
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
      <Button className={classes.button} variant="contained" color="secondary">
        Free Estimate
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            component={Link}
            to={option.link}
            key={i}
            classes={{ root: classes.menuItem }}
            onClick={(e) => handleMenuItemClick(e, i)}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        Example
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

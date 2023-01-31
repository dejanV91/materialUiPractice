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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    color: "#ffffff",
  },
  menu: {
    marginTop: "20px",
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "#ffffff",
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
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  move: {
    zIndex: 2000,
    top: -70,
  },
}));

export default function Header(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (props.value !== 0) {
          props.setValue(0);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(0);
        }
        break;
      case "/customs":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case "/mobile":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
        break;
      case "/aboutus":
        if (props.value !== 3) {
          props.setValue(3);
        }
        break;
      case "/contactus":
        if (props.value !== 4) {
          props.setValue(4);
        }
        break;
      case "/estimate": {
        if (props.value !== 5) {
          props.setValue(5);
        }
        break;
      }

      default:
        break;
    }
  }, [props.value, props]);

  const handleTabs = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    props.setSelectedIndex(i);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Customs Software Development", link: "/customs" },
    { name: "Mobile Apps Development", link: "/mobile" },
    { name: "Websites Development", link: "/websites" },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleTabs}
        textColor="inherit"
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
      <Button
        component={Link}
        to="/estimate"
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        className={classes.move}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            component={Link}
            to={option.link}
            key={i}
            classes={{ root: classes.menuItem }}
            onClick={(e) => handleMenuItemClick(e, i)}
            selected={i === props.selectedIndex && props.value === 1}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={props.value === 0}
          >
            <ListItemText
              className={
                props.value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={props.value === 1}
          >
            <ListItemText
              className={
                props.value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={props.value === 2}
          >
            <ListItemText
              className={
                props.value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(3);
            }}
            divider
            button
            component={Link}
            to="/aboutus"
            selected={props.value === 3}
          >
            <ListItemText
              className={
                props.value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contactus"
            selected={props.value === 4}
          >
            <ListItemText
              className={
                props.value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            className={classes.drawerItemEstimate}
            component={Link}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText
              className={
                props.value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
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
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
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

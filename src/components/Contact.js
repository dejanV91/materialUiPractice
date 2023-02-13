import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles()((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
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
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: { marginBottom: "2em" },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
    marginBottom: "2em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function Contact(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setOpen(true);
    axios
      .get(
        "https://us-central1-material---ui-9e20e.cloudfunctions.net/sendMail"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={3}
      >
        <Grid item alignItems="center" style={{ marginBottom: "2em" }}>
          <Grid container direction="column">
            <Grid item style={{ marginTop: matchesLG ? "5em" : undefined }}>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting{" "}
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="tel:5555555555"
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:dejan91@gmial.com"
                  >
                    dejan91@gmial.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item>
                <TextField
                  label="Name"
                  id="name"
                  variant="standard"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  variant="standard"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  variant="standard"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                value={message}
                className={classes.message}
                id="message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></TextField>
            </Grid>
            <Button
              variant="contained"
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                phone.length === 0 ||
                email.length === 0
              }
              className={classes.sendButton}
              onClick={onConfirm}
            >
              Send Message{" "}
              <img
                src={airplane}
                style={{ marginLeft: "1em" }}
                alt="paper airplane"
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography textAlign="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container>
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "20em" }}
              >
                <Grid item>
                  <TextField
                    label="Name"
                    id="name"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    id="email"
                    variant="standard"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth
                    value={email}
                    onChange={onChange}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Phone"
                    id="phone"
                    variant="standard"
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth
                    value={phone}
                    onChange={onChange}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid item style={{ maxWidth: "20em" }}>
                <TextField
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  multiline
                  rows={10}
                  value={message}
                  className={classes.message}
                  id="message"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container alignItems="center">
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  style={{ marginLeft: "1em" }}
                  alt="paper airplane"
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        className={classes.background}
        alignItems="center"
        lg={9}
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : undefined}
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
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(2);
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

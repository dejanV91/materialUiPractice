import { createTheme } from "@mui/material";

const green = "#12ab45";
const orange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      arcGreen: green,
      arcOrange: orange,
    },
    primary: {
      main: green,
    },
    secondary: {
      main: orange,
    },
  },
});

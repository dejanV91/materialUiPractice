import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/services" element={<div>Services</div>}></Route>
          <Route
            path="/revolution"
            component={() => <div>The Revolution</div>}
          ></Route>
          <Route path="/aboutus" element={<div>About Us</div>}></Route>
          <Route path="/contactus" element={<div>Contact Us</div>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

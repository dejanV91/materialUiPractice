import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path="/"
            element={<div style={{ height: "2000px" }}>Home</div>}
          ></Route>
          <Route path="/services" element={<div>Services</div>}></Route>
          <Route path="/revolution" element={<div>The Revolution</div>}></Route>
          <Route path="/aboutus" element={<div>About Us</div>}></Route>
          <Route path="/contactus" element={<div>Contact Us</div>}></Route>
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

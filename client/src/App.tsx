import Box from "@mui/material/Box";
import { Hero } from "./components/hero/Hero";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { IMUJourney } from "./components/IMUJourney/IMUJourney";
import { WhyIMU } from "./components/whyIMU/WhyIMU";
import { WhatIsIMU } from "./components/whatIsIMU/WhatIsIMU";
import { IMUInPratice } from "./components/IMUInPratice/IMUInPratice";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f2f2f4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Box id="hero" sx={{ scrollMarginTop: "80px" }}><Hero /></Box>
        <Box id="approach" sx={{ scrollMarginTop: "80px" }}><WhyIMU /></Box>
        <Box id="concept" sx={{ scrollMarginTop: "80px" }}><WhatIsIMU /></Box>
        <Box id="way-of-life" sx={{ scrollMarginTop: "80px" }}><IMUJourney /></Box>
        <Box id="service-delivery" sx={{ scrollMarginTop: "80px" }}><IMUInPratice /></Box>
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: "80px" }}><Footer /></Box>
    </Box>
  );
}

export default App;

import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Hero } from "../components/landingPage/Hero";
import { PassengerToDriver } from "../components/landingPage/PassengerToDriver";
import { MassesPath } from "../components/landingPage/MassesPath";
import { WhyIMU } from "../components/landingPage/WhyIMU";
// import { WhatIsIMU } from "../components/landingPage/WhatIsIMU";
// import { IMUInPratice } from "../components/landingPage/IMUInPratice";
import { IMUJourney } from "../components/landingPage/IMUJourney";

type LandingLocationState = {
  scrollTo?: string;
} | null;

export function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as LandingLocationState;
    const scrollTo = state?.scrollTo;

    if (!scrollTo) {
      return;
    }

    const target = document.getElementById(scrollTo);
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    }

    navigate("/", { replace: true, state: null });
  }, [location.state, navigate]);

  return (
    <Box component="div" sx={{ flex: 1, bgcolor: "#f2f2f4" }}>
      <Box id="hero" sx={{ scrollMarginTop: "80px" }}>
        <Hero />
      </Box>
      <Box id="passenger-to-driver" sx={{ scrollMarginTop: "80px" }}>
        <PassengerToDriver />
      </Box>
      <Box id="masses-path" sx={{ scrollMarginTop: "80px" }}>
        <MassesPath />
      </Box>
      <Box id="approach" sx={{ scrollMarginTop: "80px" }}>
        <WhyIMU />
      </Box>
      {/* <Box id="concept" sx={{ scrollMarginTop: "80px" }}>
        <WhatIsIMU />
      </Box> */}
      <Box id="journey" sx={{ scrollMarginTop: "80px" }}>
        <IMUJourney />
      </Box>
      {/* <Box id="service-delivery" sx={{ scrollMarginTop: "80px" }}>
        <IMUInPratice />
      </Box> */}
    </Box>
  );
}

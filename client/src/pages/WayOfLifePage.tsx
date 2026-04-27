import Box from "@mui/material/Box";
import { Hero } from "../components/wayOfLife/Hero";
import { IMUChakra } from "../components/wayOfLife/IMUChakra";
import { HappyI } from "../components/wayOfLife/HappyI";
import { RitualsAndHabits } from "../components/wayOfLife/RitualsAndHabits";

export function WayOfLifePage() {
  return (
    <Box component="div" id="way-of-life" sx={{ flex: 1, bgcolor: "#ffffff" }}>
      <Box sx={{ scrollMarginTop: "80px" }}>
        <Hero />
      </Box>
      <Box id="imu-chakra" sx={{ scrollMarginTop: "80px" }}>
        <IMUChakra />
      </Box>
      <Box id="happy-i" sx={{ scrollMarginTop: "80px" }}>
        <HappyI />
      </Box>
      <Box id="rituals-and-habits" sx={{ scrollMarginTop: "80px" }}>
        <RitualsAndHabits />
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import { IMUChakra } from "./IMUChakra";
import { HappyI } from "./HappyI";
import { RitualsAndHabits } from "./RitualsAndHabits";

export function WayOfLifePage() {
  return (
    <Box component="main" sx={{ backgroundColor: "#ffffff" }}>
      <Hero />
      <IMUChakra />
      <HappyI />
      <RitualsAndHabits />
    </Box>
  );
}

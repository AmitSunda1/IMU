import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { FadeInView } from "../ui/FadeInView";
import { IMUButton } from "../ui/IMUButton";
import { BlueShadow } from "../ui/BlueShadow";
import { GreenShadow } from "../ui/GreenShadow";

export function Hero() {
  return (
    <Box
      component="section"
      id="way-of-life-hero"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
        // minHeight: { xs: "520px", md: "640px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 4 },
        py: { xs: 12, md: 16 },
        maxHeight: { xs: "fit-content", md: "380px" },
        mt: { xs: 3, md: 10 },
      }}
    >
      <GreenShadow
        left={{ xs: "-22vw", md: "-50%" } as never}
        bottom={{ xs: "-8vw", md: "-50%" } as never}
        sx={{
          width: { xs: "112vw", md: "1338px" },
          height: { xs: "260px", md: "312px" },
          transform: { xs: "translateY(40px)", md: "none" },
        }}
      />
      <BlueShadow
        right={{ xs: "-22vw", md: "-50%" } as never}
        top={{ xs: "-5vw", md: "-50%" } as never}
        sx={{
          width: { xs: "112vw", md: "1434px" },
          height: { xs: "210px", md: "248px" },
        }}
      />

      <FadeInView direction="up" delay={0.05}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "520px",
            textAlign: "center",
            mx: "auto",
            pt: { xs: 2, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: { xs: "32px", md: "48px" },
              lineHeight: 1,
              fontWeight: 700,
              color: "#2C3338",
              mb: 0.5,
            }}
          >
            Way of Life
          </Typography>

          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: "29px",
              color: "#596065",
              maxWidth: "340px",
              mx: "auto",

            }}
          >
            Harmony is not a destination, but the rhythm with which we move
            through the world. Discover the philosophy of curated living.
          </Typography>

          <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center" }}>
            <IMUButton
              tone="primaryGreen"
              sx={{
                minWidth: "fit-content",
                height: "32px",
                px: 2.2,
                fontSize: "14px",
                letterSpacing: "1.6px",
              }}
            >
              <Box
                component="span"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}
              >
                EXPLORE
                {/* <ChevronRightRounded sx={{ fontSize: 18 }} /> */}
              </Box>
            </IMUButton>
          </Box>
        </Box>
      </FadeInView>
    </Box>
  );
}

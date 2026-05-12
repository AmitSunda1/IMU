import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FadeInView } from "../../components/ui/FadeInView";
import JournyImg from "../../assets/images/Journey.webp";

export function IMUJourney() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: "min(100%, 1200px)", mx: "auto" }}>
        {/* Title */}
        <FadeInView direction="up">
          <Typography
            component="h2"
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontWeight: 700,
              fontSize: { xs: "36px", sm: "42px", md: "48px" },
              lineHeight: 1.1,
              textAlign: "center",
              color: "#3A4251",
              letterSpacing: "0.01em",
              mb: { xs: 5, md: 7 },
            }}
          >
            IMU Way Journey
          </Typography>
        </FadeInView>

        {/* Journey Sketch Image */}
        <FadeInView direction="up" delay={0.1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 8, md: 12 },
            }}
          >
            <Box
              component="img"
              src={JournyImg}
              alt="IMU Way Journey Classroom Session"
              sx={{
                width: "100%",
                maxWidth: { xs: "90%", sm: "480px", md: "540px" },
                height: "auto",
                objectFit: "contain",
                display: "block",
                // Subtle lift effect to enhance the premium feel
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            />
          </Box>
        </FadeInView>

        {/* Quote Card */}
        <FadeInView direction="up" delay={0.2}>
          <Box
            sx={{
              backgroundColor: "#FCD39C", // Premium soft apricot/orange matching reference
              borderRadius: "14px",
              px: { xs: 3, sm: 5, md: 8 },
              py: { xs: 4, md: 5 },
              maxWidth: "880px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0px 12px 36px rgba(252, 211, 156, 0.25)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 16px 42px rgba(252, 211, 156, 0.35)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                lineHeight: 1.6,
                color: "#2D3748",
                fontStyle: "italic",
                letterSpacing: "0.01em",
              }}
            >
              "We didn't build IMU to fix a business problem. We built it because the people doing the
              hardest work deserved something real to believe in."
            </Typography>

            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontWeight: 700,
                fontSize: { xs: "16px", sm: "18px", md: "19px" },
                lineHeight: 1.5,
                color: "#1E2330",
                letterSpacing: "0.01em",
                mt: 0.5,
              }}
            >
              ~ Sumit Jain, Founder, IMU Way
            </Typography>
          </Box>
        </FadeInView>
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FadeInView } from "../ui/FadeInView";
import BottomBorder from "../../assets/images/PassengerBorder.png"

export function PassengerToDriver() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 30 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "min(94%, 1240px)",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, lg: 4 },
        }}
      >
        {/* ── Left Arch Card ───────────────────────────────────────────── */}
        <Box
          sx={{
            order: { xs: 2, lg: 1 },
            width: { xs: "100%", sm: "400px", lg: "360px" },
            minHeight: { xs: "320px", md: "360px" },
            backgroundColor: "#EBF2FF",
            borderRadius: "180px 180px 88px 88px",
            px: { xs: 4, md: 5 },
            py: { xs: 6, md: 7 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // boxShadow: "0px 10px 30px rgba(35, 64, 131, 0.03)",
          }}
        >
          <FadeInView direction="up" delay={0.1}>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#6a6a6a",
              }}
            >
              This is not a work philosophy. It is a<br />
              human one. It applies when you are<br />
              dealing with a difficult client, a<br />
              struggling child, a breaking<br />
              relationship, or a moment of self-<br />
              doubt.
            </Typography>
          </FadeInView>
        </Box>

        {/* ── Center Heading & Badge ───────────────────────────────────── */}
        <Box
          sx={{
            order: { xs: 1, lg: 2 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 2, lg: 0 },
            maxWidth: "480px",
          }}
        >
          <FadeInView direction="up">
            {/* Title block */}
            <Box sx={{ mb: 4 }}>
              <Typography
                component="div"
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  fontWeight: 600,
                  color: "#1E2330",
                  lineHeight: 1.2,
                }}
              >
                IMU is the journey from
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontSize: { xs: "36px", sm: "42px", md: "40px" },
                  fontWeight: 700,
                  color: "#234083",
                  lineHeight: 1.1,
                  my: 0.8,
                }}
              >
                Passenger to Driver
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontSize: { xs: "24px", sm: "28px", md: "30px" },
                  fontWeight: 600,
                  color: "#1E2330",
                  lineHeight: 1.2,
                }}
              >
                in your own life.
              </Typography>
            </Box>

            {/* Overlapping double pill chips */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 1,
              }}
            >
              {/* Top chip */}
              <Box
                sx={{
                  width: { xs: "290px", sm: "340px", md: "380px" },
                  boxSizing: "border-box",
                  backgroundColor: "#FFF3E6",
                  borderRadius: "999px",
                  px: 2,
                  pt: 2,
                  pb: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.primary,
                    fontSize: { xs: "18px", md: "14px" },
                    fontWeight: 600,
                    color: "#6A6A6A",
                    whiteSpace: "nowrap",
                  }}
                >
                  In spirit IMU stands for
                </Typography>
              </Box>

              {/* Bottom identical-width chip overlapping the top one */}
              <Box
                sx={{
                  width: { xs: "290px", sm: "340px", md: "380px" },
                  boxSizing: "border-box",
                  backgroundColor: "#FFF3E6",
                  borderRadius: "999px",
                  px: 2,
                  pt: 2.5,
                  pb: 2,
                  mt: -.5,
                //   display: "flex",
                  justifyContent: "center",
                  alignItems: "top",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: { xs: "36px", md: "40px" },
                    fontWeight: 400,
                    color: "#FF9000",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    mt: -4,
                    pb:2
                  }}
                >
                  “I AM YOU”
                </Typography>
              </Box>
            </Box>
          </FadeInView>
        </Box>

        {/* ── Right Arch Card ──────────────────────────────────────────── */}
        <Box
          sx={{
            order: { xs: 3, lg: 3 },
            width: { xs: "100%", sm: "400px", lg: "360px" },
            minHeight: { xs: "320px", md: "360px" },
            backgroundColor: "#EBF2FF",
            borderRadius: "180px 180px 88px 88px",
            px: { xs: 4, md: 5 },
            py: { xs: 6, md: 7 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // boxShadow: "0px 10px 30px rgba(35, 64, 131, 0.03)",
          }}
        >
          <FadeInView direction="up" delay={0.2}>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#6a6a6a",
              }}
            >
              When you understand that the person<br />
              in front of you is, in some way, you<br />
              everything changes.
            </Typography>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#6a6a6a",
                mt: 2.5,
              }}
            >
              The way you listen. The way you serve.<br />
              The way you live.
            </Typography>
          </FadeInView>
        </Box>
      </Box>

      <Box>
        <img style={{height:"20px", marginBottom:"-220px"}} src={BottomBorder} alt="" />
      </Box>
    </Box>
  );
}

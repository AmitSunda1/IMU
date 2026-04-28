import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { FadeInView } from "../ui/FadeInView";
import { IMUButton } from "../ui/IMUButton";

function WavyUnderline({ color }: { color: string }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 120 12"
      sx={{ width: "112px", height: "12px", display: "block", mx: "auto" }}
    >
      <path
        d="M0 6 C 6 0, 12 12, 18 6 S 30 0, 36 6 S 48 12, 54 6 S 66 0, 72 6 S 84 12, 90 6 S 102 0, 108 6 S 114 12, 120 6"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Box>
  );
}

export function HappyI() {
  return (
    <Box
      component="section"
      id="happy-i"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        pt: { xs: 4, md: 5 },
        pb: { xs: 10, md: 13 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "500px", md: "590px" },
          backgroundColor: "#DCE5F9",
          borderBottomLeftRadius: "50% 62%",
          borderBottomRightRadius: "50% 62%",
        }}
      />

      <Box
        sx={{
          width: "min(94%, 1240px)",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeInView direction="up">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.primary,
                fontSize: { xs: "34px", md: "40px" },
                fontWeight: 700,
                color: "#1E2330",
                lineHeight: 1,
                mb: 0.5,
                mt: { xs: 0, md: 6 },
              }}
            >
              Happy I
            </Typography>
            <WavyUnderline color="#234083" />
          </Box>
        </FadeInView>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "start",
          }}
        >
          <FadeInView direction="up" delay={0.08}>
            <Box sx={{ pt: { xs: 1, md: 2 } }}>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontStyle: "italic",
                  color: "#7D7D7D",
                  fontSize: { xs: "13px", md: "14px" },
                  mb: 1,
                }}
              >
                The IMU starting point
              </Typography>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontSize: { xs: "40px", md: "52px" },
                  lineHeight: 1.06,
                  color: "#1E2330",
                  maxWidth: { xs: "100%", md: "580px" },
                }}
              >
                Being happy is a choice
                <br />
                you make for yourself.
              </Typography>
            </Box>
          </FadeInView>

          <FadeInView direction="up" delay={0.12}>
            <Box sx={{ pt: { xs: 0, md: 5 } }}>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.7,
                  color: "#1E2330",
                  maxWidth: "560px",
                }}
              >
                To be unhappy, we always have reasons. To be happy, we just need
                to decide. Happy I is not about ignoring hard days - it is about
                choosing to stay anchored, in any situation, in any state of
                mind.
              </Typography>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.7,
                  color: "#1E2330",
                  mt: 3,
                }}
              >
                And it never comes at someone else&apos;s cost.
              </Typography>
            </Box>
          </FadeInView>
        </Box>

        <FadeInView direction="up" delay={0.15}>
          <Box sx={{ position: "relative", mt: { xs: 5, md: 20 } }}>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "min(100%, 540px)",
                mx: "auto",
                maxWidth: { xs: "100%", md: "540px" },
                backgroundColor: "rgba(255,255,255,0.72)",
                borderRadius: "18px",
                overflow: "hidden",
                px: { xs: 3, md: 5 },
                py: { xs: 3, md: 4.25 },
                textAlign: "center",
                boxShadow: "0px 10px 30px rgba(30,35,48,0.05)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: { xs: "-22px", md: "-36px" },
                  right: { xs: "-22px", md: "-50px" },
                  width: "192px",
                  height: "192px",
                  borderRadius: "9999px",
                  background: "#E3ECFF7D",
                  opacity: 1,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: { xs: "-22px", md: "-50px" },
                  bottom: { xs: "-22px", md: "-36px" },
                  width: "192px",
                  height: "192px",
                  borderRadius: "9999px",
                  background: "#E3ECFF7D",
                  opacity: 1,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  zIndex: 0,
                  // mt: { xs: 0, md: -17 },
                }}
              />

              <Typography
                sx={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: 1.5,
                  color: "#2B2B2B",
                  // mt: 0,
                }}
              >
                To be unhappy, we always find a reason.
                <br />
                To be happy, we need only make a choice.
              </Typography>
            </Box>
          </Box>
        </FadeInView>

        <FadeInView direction="up" delay={0.2}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2.5 }}>
            <IMUButton
              tone="primaryGreen"
              sx={{ height: "36px", px: 2.7, fontSize: "12px" }}
            >
              <Box
                component="span"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}
              >
                DISCOVER WHAT THIS CONCEPT IS
                <ChevronRightRounded sx={{ fontSize: 18 }} />
              </Box>
            </IMUButton>
          </Box>
        </FadeInView>
      </Box>
    </Box>
  );
}

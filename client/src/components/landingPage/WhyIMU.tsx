import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import HappyIImg from "../../assets/images/HappyI.png";
import HappyUImg from "../../assets/images/HappyU.png";
import { IMUButton } from "../ui/IMUButton";
import { FadeInView } from "../ui/FadeInView";

export function WhyIMU() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 16 },
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>
        <FadeInView direction="up">
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "text.primary",
              mb: { xs: 6, md: 12 },
              // my: 10,
            }}
          >
            Why IMU Way?
          </Typography>
        </FadeInView>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
            justifyItems: "center",
            mb: { xs: 7, md: 8 },
            maxWidth:"1080px",
            mx:"auto"
          }}
        >
          <FadeInView direction="up" delay={0.1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box
                component="img"
                src={HappyIImg}
                alt="happy i"
                sx={{
                  width: { xs: "100%", md: "400px" },
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: "0%",
                  display: "flex",
                  textAlign: "left",
                  color: "text.secondary",
                  mt: { xs: 2, md: 3 },
                }}
              >
                You can give only what you have.
              </Typography>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                So it&apos;s starting point is to be
                <Box component="span" sx={{ fontWeight: 700 }}>
                  {" "}
                  happy I.
                </Box>
              </Typography>
            </Box>
          </FadeInView>

          <FadeInView direction="up" delay={0.2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                component="img"
                src={HappyUImg}
                alt="happy u"
                sx={{
                  width: { xs: "100%", md: "400px" },
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "text.secondary",
                  mt: { xs: 2, md: 3 },
                }}
              >
                Once I am Happy then only
              </Typography>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontWeight: 400,
                  fontSize: "20px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                I can share with others -
                <Box component="span" sx={{ fontWeight: 700 }}>
                  {" "}
                  Happy U
                </Box>
              </Typography>
            </Box>
          </FadeInView>
        </Box>

        <Divider sx={{ borderColor: "#d4d4d4", mb: 4, maxWidth:"900px", mx:'auto' }} />

        <FadeInView direction="up" delay={0.1}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#434343",
              mb: 4,
            }}
          >
            Because the happiness of &ldquo;I&rdquo; becomes complete when the
            &ldquo;YOU&rdquo; is happy.
          </Typography>
        </FadeInView>

        <FadeInView direction="up" delay={0.2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IMUButton
            text="EXPLORE IMU WAY APPROACH"
            tone="primaryBlue"
            bgColor="#234083"
            borderColor="#234083"
            sx={{
              borderStyle: "solid",
              borderWidth: "0px",
              borderRadius: "999px",
              // px: "32px",
              // py: "12px",
              minWidth: "fit-content",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              height:"48px",
              width:"408px",
              fontSize:"16px"
            }}
          >
            <Box component="span">EXPLORE IMU WAY APPROACH</Box>
            <ChevronRightRounded sx={{ fontSize: 24 }} />
          </IMUButton>
        </Box>
        </FadeInView>
      </Box>
    </Box>
  );
}

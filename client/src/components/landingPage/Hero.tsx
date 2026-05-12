import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
import heroImg from "../../assets/images/heroImg.webp";
import { IMUButton } from "../ui/IMUButton";
import { FadeInView } from "../ui/FadeInView";
import LogoImg from "../../assets/logo/IMU-Logo.webp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const words = ["MITRA", "BEDU", "DOST", "BUDDY", "YAARA"] as const;

const transitionDurationMs = 560;
const transitionStepMs = 2200;

export function Hero() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const loop = window.setInterval(() => {
      setIsAnimating(true);
    }, transitionStepMs);

    return () => window.clearInterval(loop);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCenterIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, transitionDurationMs);

    return () => window.clearTimeout(timer);
  }, [isAnimating]);

  const stackWords = useMemo(() => {
    const top = words[(centerIndex - 1 + words.length) % words.length];
    const center = words[centerIndex];
    const bottom = words[(centerIndex + 1) % words.length];
    const upcoming = words[(centerIndex + 2) % words.length];

    return [top, center, bottom, upcoming];
  }, [centerIndex]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "52% 48%" },
        alignItems: "center",
        minHeight: { xs: "620px", lg: "840px" },
        overflow: "hidden",
        backgroundColor: "#ffffff",
        zIndex: 0,
        position: "relative",
      }}
    >
      {/* Right side circular background image */}
      <Box
        component="img"
        src={heroImg}
        alt="Hero Background"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "100%", lg: "76%" },
          height: "100%",
          objectFit: "cover",
          objectPosition: "left center",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Left Column: Stacked Words */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "flex-start" },
          pl: { xs: 0, lg: 10 },
          mt: { xs: 4, lg: -10 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: { xs: 1.5, md: 2.5 },
          }}
        >
          {/* "Hi" Text */}
          <Box
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "46px", sm: "58px", md: "72px" },
              fontWeight: 700,
              color: "#3B5998",
              lineHeight: "100%",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Hi
          </Box>

          {/* Stacked Words Container */}
          <Box
            sx={{
              height: { xs: "202px", sm: "250px", md: "292px" },
              width: { xs: "250px", sm: "300px", md: "360px" },
              maxWidth: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "17px",
                transform: isAnimating
                  ? {
                      xs: "translateY(-73px)",
                      sm: "translateY(-89px)",
                      md: "translateY(-103px)",
                    }
                  : "translateY(0px)",
                transition: isAnimating
                  ? `transform ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
                  : "none",
              }}
            >
              {stackWords.map((word, idx) => {
                const isCenterNow = idx === 1;
                const willBeCenterAfterMove = idx === 2;
                const isCenterStyle = isAnimating
                  ? willBeCenterAfterMove
                  : isCenterNow;

                return (
                  <Box
                    key={`${word}-${idx}`}
                    sx={{
                      width: "fit-content",
                      height: { xs: "56px", sm: "72px", md: "86px" },
                      px: { xs: "24px", sm: "28px", md: "32px" },
                      borderRadius: "999px",
                      background: isCenterStyle ? "#5074B6" : "#F4F7FF",
                      color: isCenterStyle ? "#ffffff" : "#C1C1C4",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isCenterStyle ? "scale(1)" : "scale(0.72)",
                      transformOrigin: "left center",
                      fontFamily: (theme) =>
                        theme.imu.typography.fontFamilies.secondary,
                      fontSize: { xs: "46px", sm: "58px", md: "72px" },
                      fontWeight: 700,
                      lineHeight: "100%",
                      whiteSpace: "nowrap",
                      transition: isAnimating
                        ? `all ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
                        : "none",
                    }}
                  >
                    {word}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Column: Welcome Content */}
      <FadeInView direction="up" delay={0.2} style={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: { xs: 3, sm: 6, lg: 4 },
            pb: { xs: 6, lg: 0 },
            gap: 2,
            mt: { xs: 4, lg: 45 },
            ml: { xs: 0, lg: 8 },
            maxWidth: "600px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#1E2330",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.primary,
                fontSize: { xs: "40px", sm: "56px", md: "64px", lg: "72px" },
                lineHeight: "100%",
                fontWeight: 400,
              }}
            >
              Welcome to
            </Typography>
            <Box
              component="img"
              src={LogoImg}
              alt="IMU Logo"
              sx={{
                height: { xs: "40px", sm: "56px", md: "64px", lg: "72px" },
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#6a6a6a",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "540px",
            }}
          >
            A Culture That Builds Happy Individuals and Strong Organizations
          </Typography>

          <IMUButton
            text="EXPLORE THE IMU WAY"
            tone="primaryGreen"
            bgColor="#56A748"
            borderColor="#56A748"
            textColor="#FFFFFF"
            endIcon={<ChevronRightIcon />}
            sx={{
              mt: 2,
              px: 3.5,
              py: 1.5,
              borderRadius: "999px",
              borderStyle: "solid",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#41843c",
                borderColor: "#41843c",
              },
            }}
          />
        </Box>
      </FadeInView>
    </Box>
  );
}

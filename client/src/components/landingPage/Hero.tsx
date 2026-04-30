import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
import heroImg from "../../assets/images/heroImg.png";
import { IMUButton } from "../ui/IMUButton";
import helloImg from "../../assets/images/hi.webp";
import { FadeInView } from "../ui/FadeInView";
import LogoImg from "../../assets/logo/IMU-Logo.webp"

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
        gridTemplateColumns: { xs: "1fr", lg: "58% 42%" },
        minHeight: { xs: "620px", lg: "810px" },
        overflow: "hidden",
        backgroundColor: "#ffffff",
        // mt: { xs: 3, md: 5, lg: -7 },
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "420px", md: "560px", lg: "720px" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={heroImg}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left top",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: { xs: 1.4, md: 2.3 },
            pl: { xs: 3, sm: 6, lg: 8 },
            mt: { xs: 2, md: 3, lg: 0 },
          }}
        >
          <Box
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "46px", sm: "58px", md: "72px" },
              fontWeight: 700,
              color: "#1E2330",
              lineHeight: "100%",
              letterSpacing: "0%",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Box component="span" sx={{ mr: 1.5, display: "inline-flex" }}>
              <Box
                component="img"
                src={helloImg}
                alt="Hello"
                sx={{
                  width: { xs: "52px", sm: "62px", md: "72px" },
                  height: { xs: "52px", sm: "62px", md: "72px" },
                  objectFit: "contain",
                  ml: "20px"
                }}
              />
            </Box>
            Hi
          </Box>

          <Box
            sx={{
              height: "292px",
              width: "fit-content",
              maxWidth: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "17px",
                transform: isAnimating
                  ? "translateY(-103px)"
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
                      height: "86px",
                      px: "32px",
                      borderRadius: "999px",
                      // border: "2px solid #FFFFFF",
                      // background: "#FFF7F1",
                      opacity: isCenterStyle ? 1 : 0.5,
                      backdropFilter: isCenterStyle ? "none" : "blur(1px)",
                      WebkitBackdropFilter: isCenterStyle
                        ? "none"
                        : "blur(1px)",
                      display: "inline-flex",
                      alignItems: "center",
                      color: isCenterStyle ? "#1f2536" : "#7c797d",
                      fontFamily: (theme) =>
                        theme.imu.typography.fontFamilies.secondary,
                      fontSize: { xs: "46px", sm: "58px", md: "72px" },
                      fontWeight: 700,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      whiteSpace: "nowrap",
                      textDecoration: isCenterStyle ? "underline" : "none",
                      textDecorationThickness: "4px",
                      textUnderlineOffset: "10px",
                      transition: isAnimating
                        ? `opacity ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1), color ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1), backdrop-filter ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-backdrop-filter ${transitionDurationMs}ms cubic-bezier(0.25, 0.8, 0.25, 1)`
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

      <FadeInView direction="up" delay={0.2} style={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: { xs: 3, sm: 6, lg: 5 },
            pb: { xs: 5, lg: 0 },
            gap: 2,
            mt: { xs: 3, md: 5, lg: 12 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 1 , }}>

            <Typography
              sx={{
                color: "text.primary",
                fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
                fontSize: "72px",
                lineHeight: "100%",
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              Welcome to
            </Typography>
            <Box
              component="img"
              src={LogoImg}
              alt="IMU Logo"
              sx={{
                width: { xs: "52px", sm: "62px", md: "78px" },
                height: { xs: "52px", sm: "62px", md: "78px" },
                objectFit: "contain",
                ml: "10px"
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "text.secondary",
              fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              maxWidth: "760px",
            }}
          >
            A Culture That Builds Happy Individuals and Strong Organizations
          </Typography>

          <IMUButton
            text="EXPLORE"
            tone="primaryGreen"
            sx={{
              mt: 1,
              minWidth: { xs: "220px", sm: "250px", md: "240px" },
              height: "40px",
              fontSize: "16px"
            }}
          />
        </Box>
      </FadeInView>
    </Box>
  );
}

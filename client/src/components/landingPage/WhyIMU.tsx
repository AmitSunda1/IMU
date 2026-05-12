import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import HappyIImg from "../../assets/images/HappyI.png";
import HappyUImg from "../../assets/images/HappyU.png";
import { IMUButton } from "../ui/IMUButton";
import { FadeInView } from "../ui/FadeInView";

export function WhyIMU() {
  const containerRef = useRef<HTMLDivElement>(null);

  // State-driven visibility — initial false guarantees opacity:0 at first paint
  const [showArrow, setShowArrow] = useState(false);
  const [showHappyU, setShowHappyU] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Trigger each element once scroll crosses its threshold (one-way, no reverse)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.12) setShowArrow(true);
    if (v > 0.30) setShowHappyU(true);
    if (v > 0.50) setShowButton(true);
  });

  const fadeIn = { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] };

  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        width: "100%",
        backgroundColor: "#EBF5F1",
        height: "220vh",
        position: "relative",
      }}
    >
      {/* ── Sticky pinned frame ─────────────────────────── */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          py: 4,
        }}
      >
        <Box sx={{ width: "min(92%, 1160px)", mx: "auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: 6, md: 6, lg: 10 },
              alignItems: "center",
            }}
          >
            {/* ── Left: Typography ────────────────────────── */}
            <FadeInView direction="right">
              <Box sx={{ maxWidth: { xs: "100%", md: "520px" } }}>
                <Typography
                  sx={{
                    fontFamily: (t) => t.imu.typography.fontFamilies.secondary,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#757575",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    mb: 2,
                  }}
                >
                  THE CONNECTION
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    fontFamily: (t) => t.imu.typography.fontFamilies.primary,
                    fontSize: { xs: "36px", sm: "44px", md: "52px" },
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "#1E2330",
                    mb: 3.5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  You can&apos;t pour
                  <br />
                  from an empty cup.
                  <br />
                  <Box component="span" sx={{ color: "#234083" }}>
                    Fill yours first.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: (t) => t.imu.typography.fontFamilies.secondary,
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: "130%",
                    color: "#555555",
                  }}
                >
                  Wanting to be happy first isn&apos;t selfish — it&apos;s the
                  only way giving actually works. When you&apos;re running on
                  empty, everything you give comes with a hidden cost. Fill up.
                  Then give. That&apos;s the sequence.
                </Typography>
              </Box>
            </FadeInView>

            {/* ── Right: Sequential fade diagram ──────────── */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                px: { xs: 1, sm: 4, md: 2 },
                gap: 2,
              }}
            >
              {/* Happy I — always visible */}
              <Box sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src={HappyIImg}
                  alt="Happy I"
                  sx={{
                    width: { xs: "140px", md: "160px" },
                    height: "auto",
                    objectFit: "contain",
                    mb: 1.5,
                    display: "block",
                    mx: "auto",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: (t) => t.imu.typography.fontFamilies.secondary,
                    fontSize: "16px",
                    color: "#757575",
                    lineHeight: 1.5,
                  }}
                >
                  You can give only what you have.
                  <br />
                  So it&apos;s starting point is to be{" "}
                  <Box component="span" sx={{ fontWeight: 700, color: "#434343" }}>
                    happy I.
                  </Box>
                </Typography>
              </Box>

              {/* Arrow — fade in step 1 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showArrow ? 1 : 0 }}
                transition={fadeIn}
              >
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none">
                  <path
                    d="M8 0V30M8 30L2 24M8 30L14 24"
                    stroke="#234083"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Happy U — fade in step 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showHappyU ? 1 : 0 }}
                transition={fadeIn}
                style={{ width: "100%" }}
              >
                <Box sx={{ width: "100%" }}>
                  <Box
                    component="img"
                    src={HappyUImg}
                    alt="Happy U"
                    sx={{
                      width: { xs: "140px", md: "160px" },
                      height: "auto",
                      objectFit: "contain",
                      mb: 1.5,
                      display: "block",
                      mx: "auto",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: (t) =>
                        t.imu.typography.fontFamilies.secondary,
                      fontSize: "16px",
                      color: "#757575",
                      lineHeight: 1.5,
                    }}
                  >
                    Once I am Happy then only
                    <br />
                    I can share with others &ndash;{" "}
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#434343" }}
                    >
                      Happy U
                    </Box>
                  </Typography>
                </Box>
              </motion.div>

              {/* CTA Button — fade in step 3 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showButton ? 1 : 0 }}
                transition={fadeIn}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "100%", maxWidth: "390px", mt: 1 }}>
                  <IMUButton
                    bgColor="#56A748"
                    textColor="#ffffff"
                    borderColor="#56A748"
                    sx={{
                      width: "100%",
                      height: "52px",
                      borderRadius: "999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      fontFamily: (t) => t.imu.typography.fontFamilies.primary,
                      fontSize: "18px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      boxShadow: "0px 4px 12px rgba(86, 167, 72, 0.2)",
                      "&:hover": {
                        backgroundColor: "#4c943f",
                        borderColor: "#4c943f",
                      },
                    }}
                  >
                    <Box component="span">START MY HAPPY I JOURNEY</Box>
                    <ChevronRightRounded sx={{ fontSize: 22 }} />
                  </IMUButton>
                  <Typography
                    sx={{
                      fontFamily: (t) =>
                        t.imu.typography.fontFamilies.secondary,
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#2E333E",
                      mt: 1.5,
                    }}
                  >
                    Takes less than a minute to begin
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

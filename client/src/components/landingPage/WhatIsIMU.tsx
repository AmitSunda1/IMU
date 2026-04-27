import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import WhatIsIMUImg from "../../assets/images/WhatIsIMU.png";
import { WhatIsIMUCard } from "./WhatIsIMUCard";
import careLogo from "../../assets/images/Care.png";
import fairLogo from "../../assets/images/Fair.png";
import dareLogo from "../../assets/images/Dare.png";

// ─── Arc Geometry ──────────────────────────────────────────────────────────────
//
// The WhatIsIMU.png image has concentric arcs all sharing one center point:
// the BOTTOM-LEFT corner of the panel.
//
// Math convention: 0° = East (right), 90° = North (up), CCW positive.
//   left   = RADIUS_X × cos(θ)
//   bottom = RADIUS_Y × sin(θ)
//
// WHY "animate a single angle" instead of animating left+bottom directly:
//   Animating left and bottom as independent CSS properties causes them to
//   interpolate in a STRAIGHT LINE (chord), cutting through the interior of the
//   arc. Animating a single angle value and re-computing (left, bottom) at
//   every frame via useTransform guarantees the icon follows the EXACT curve.
//
// Tuning guide:
//   ORBIT_RADIUS_X_VH — horizontal extent; reduce if bottom-entry icon is too far right
//   ORBIT_RADIUS_Y_VH — vertical extent;   reduce if top-left-exit icon is too high
//   ACTIVE_ANGLE_DEG  — angle where the active icon sits; increase to move it up the arc
//   ANGLE_STEP_DEG    — angular gap between consecutive icon slots

const ORBIT_RADIUS_X_VH = 69;
const ORBIT_RADIUS_Y_VH = 72;
const ACTIVE_ANGLE_DEG = 20;
const ANGLE_STEP_DEG = 40;

// ─── Step Data ─────────────────────────────────────────────────────────────────
interface StepData {
  id: number;
  title?: string;
  topText?: string;
  description?: string;
  subDescription?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  toneColor?: string;
  isBigTitleBox?: boolean;
  cta?: string;
  variant?: "light" | "dark";
  bgColor?: string;
}

const stepsData: StepData[] = [
  {
    id: 0,
    title: "What is IMU?",
    description:
      "“IMU is a way of life, driven by core human values of Care, Fair and Dare in our emotions, actions, decision and in making choices for being happy, both I and U” – That is It",
  },
  {
    id: 1,
    icon: (
      <img
        src={careLogo}
        alt="Care"
        style={{ width: "64px", height: "40px" }}
      />
    ),
    title: "Care",
    subtitle: "The Heart of Service, Compassion, & Resilience",
    description:
      "You know that friend who actually listens when something goes wrong? Not just nods, but really listens? That is what Care looks like at IMU. It is not about fixing fast. It is about making the person in front of you feel like their problem is your problem too. That is the whole thing.",
    toneColor: "#5074B6",
  },
  {
    id: 2,
    icon: (
      <img
        src={fairLogo}
        alt="Fair"
        style={{ width: "48px", height: "40px" }}
      />
    ),
    title: "Fair",
    subtitle: "The Foundation of Trust, Credibility, & Transparency",
    description:
      "Imagine telling a friend the full truth, even when it is not comfortable. No sugar coating, no hidden agenda, no different story for different people. That is Fair. And at IMU, that is not something we remind ourselves to do. It is just how things work here. What you see is what you get.",
    toneColor: "#648F6C",
  },
  {
    id: 3,
    icon: (
      <img
        src={dareLogo}
        alt="Dare"
        style={{ width: "40px", height: "40px" }}
      />
    ),
    title: "Dare",
    subtitle: "The Spirit of Growth, Courage, & Prosperity",
    description:
      "Remember the friend who always pushed you to just go for it? Apply for the role. Ask the question. Try the thing. That is Dare. It is not about being fearless. It is about doing it even when you are a little scared. That is where growth actually lives.",
    toneColor: "#bd5201",
  },
  {
    id: 4,
    topText: "At its core, IMU means:",
    title: '"I AM YOU!"',
    isBigTitleBox: true,
    description:
      "It reminds us that the way we treat others reflects who we are within.",
    subDescription:
      "IMU is not about rules. It is about awareness, responsibility, and conscious living.",
    cta: "KNOW IMU WAY OF LIFE",
    toneColor: "#EADDC1", // subtle warm tone for the box
  },
  {
    id: 5,
    subDescription:
      "IMU stands for Install, Maintain, Upgrade.\n It is a method designed to build strong values that guide our thoughts, emotions, decisions, and actions.",
    bgColor: "#FEF8E5",
  },
];

// ─── OrbitIcon ─────────────────────────────────────────────────────────────────
// A single icon that travels along the arc.
//
// The key technique:
//   1. angle is a MotionValue (framer-motion spring) that animates between angle values.
//   2. left and bottom are derived from angle via useTransform — recomputed EVERY FRAME.
//   3. Because both come from the same angle at every frame, the position always lies
//      exactly on the ellipse path — no chord-cutting shortcut during transitions.

interface OrbitIconProps {
  targetAngle: number;
  isActive: boolean;
  icon?: React.ReactNode;
  toneColor?: string;
}

function OrbitIcon({ targetAngle, isActive, icon, toneColor }: OrbitIconProps) {
  // Single animating angle value (spring physics)
  const angle = useMotionValue(targetAngle);

  // When targetAngle changes (scroll triggers new activeStep), spring toward new angle
  useEffect(() => {
    const controls = animate(angle, targetAngle, {
      type: "spring",
      stiffness: 90,
      damping: 22,
      restDelta: 0.01,
    });
    return () => controls.stop();
  }, [targetAngle, angle]);

  // Recompute arc position at EVERY FRAME from the currently animating angle.
  // This guarantees the icon follows the curved arc — not a straight line chord.
  const left = useTransform(angle, (a) => {
    const rad = (a * Math.PI) / 180;
    return `${(Math.cos(rad) * ORBIT_RADIUS_X_VH).toFixed(3)}vh`;
  });

  const bottom = useTransform(angle, (a) => {
    const rad = (a * Math.PI) / 180;
    return `${(Math.sin(rad) * ORBIT_RADIUS_Y_VH).toFixed(3)}vh`;
  });

  return (
    /*
     * Outer: zero-size anchor that moves along the arc.
     * Its (left, bottom) are driven by the spring-animated angle MotionValues.
     * When the angle springs from A → B, left and bottom update every frame
     * so the anchor traces the exact arc path.
     */
    <motion.div
      style={{
        position: "absolute",
        left,
        bottom,
        width: 0,
        height: 0,
        zIndex: isActive ? 3 : 2,
      }}
    >
      {/*
       * Inner: the visible circle, centered on the anchor point.
       * left: 0, bottom: 0 → places its corner at the anchor.
       * transform: translate(-50%, 50%) → centers it on the anchor:
       *   -50% x → moves left by half width  (center aligns with anchor x)
       *   +50% y → moves down by half height (center aligns with anchor y,
       *             because 'bottom' anchors the bottom edge, not the top)
       */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: isActive ? 58 : 42,
          height: isActive ? 58 : 42,
          transform: "translate(-50%, 50%)",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isActive
            ? "0px 10px 28px rgba(0,0,0,0.18)"
            : "0px 2px 8px rgba(0,0,0,0.07)",
          opacity: isActive ? 1 : 0.5,
          color: toneColor ?? "#717171",
          transition:
            "width 0.35s ease, height 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        {icon ?? (
          <div
            style={{
              width: isActive ? 16 : 10,
              height: isActive ? 16 : 10,
              borderRadius: "50%",
              backgroundColor: toneColor ?? "#9e9e9e",
              transition: "width 0.35s ease, height 0.35s ease",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

// ─── WhatIsIMU ─────────────────────────────────────────────────────────────────
export function WhatIsIMU() {
  const [activeStep, setActiveStep] = useState(0);

  const handleVisible = useCallback((id: number) => {
    setActiveStep(id);
  }, []);

  return (
    <Box component="section" sx={{ width: "100%", backgroundColor: "#f5f8fc" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          width: "100%",
        }}
      >
        {/* ── Left: Sticky panel ─────────────────────────────────────── */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Static concentric rings image — flush to bottom-left, no margin */}
          <Box
            component="img"
            src={WhatIsIMUImg}
            alt=""
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "100%",
              width: "auto",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Orbiting icons — each one springs along the arc via angle animation */}
          {stepsData
            .filter((s) => s.id !== 0) // What is IMU text section doesn't need an orbiting icon
            .map((step, _index) => {
              // Note: We use the original step.id for targetAngle calculation
              // to maintain the correct spacing relative to other items
              const targetAngle =
                ACTIVE_ANGLE_DEG + (activeStep - step.id) * ANGLE_STEP_DEG;

              return (
                <OrbitIcon
                  key={`orbit-${step.id}`}
                  targetAngle={targetAngle}
                  isActive={activeStep === step.id}
                  icon={step.icon}
                  toneColor={step.toneColor}
                />
              );
            })}
        </Box>

        {/* ── Right: Scrolling content cards ─────────────────────────── */}
        <Box
          sx={{
            py: { xs: 8, md: "15vh" },
            px: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "20vh",
          }}
        >
          {/* STICKY HEADER FOR STEP 0 */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              pointerEvents: "none",
              mb: "-20vh", // offset so it doesn't push down the first spacer box
              // Create a solid mask all the way to the top of the viewport
              mx: { xs: -3, md: -6 },
              px: { xs: 3, md: 6 },
              pt: "140px", // Visual placement of the text
              pb: 6,
              background:
                "linear-gradient(to bottom, #f5f8fc 85%, rgba(245,248,252,0) 100%)",
            }}
          >
            <Box
              sx={{
                maxWidth: "720px",
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "#1E2330",
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "40px" },
                  mb: 2,
                }}
              >
                {stepsData[0].title}
              </Typography>

              <Typography
                sx={{
                  color: "text.primary",
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontSize: "18px",
                  lineHeight: 1.6,
                }}
              >
                {stepsData[0].description}
              </Typography>
            </Box>
          </Box>

          {stepsData.map((step) => (
            <WhatIsIMUCard
              key={`card-${step.id}`}
              id={step.id}
              onVisible={handleVisible}
              isActive={activeStep === step.id}
              toneColor={step.toneColor}
              isTransparentSpacer={step.id === 0}
              variant={step.variant}
              bgColor={step.bgColor}
            >
              {step.id !== 0 && (
                <>
                  {step.topText && (
                    <Typography
                      sx={{
                        color: "#6A6A6A",
                        fontFamily: (theme) =>
                          theme.imu.typography.fontFamilies.secondary,
                        fontSize: "14px",
                      }}
                    >
                      {step.topText}
                    </Typography>
                  )}
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0 }}
                  >
                    {step.title && (
                      <>
                        {step.isBigTitleBox ? (
                          <Box
                            sx={{
                              width: "100%",
                              height: "180px",
                              borderRadius: "100px",
                              border: "1px solid #1E2330",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background:
                                "linear-gradient(135deg, #FFF6E5 0%, #FFFFFF 50%, #FFF6E5 100%)",
                              boxShadow: "0px 4px 20px rgba(0,0,0,0.03)",
                              my: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#1E2330",
                                fontFamily: (theme) =>
                                  theme.imu.typography.fontFamilies.primary,
                                fontWeight: 700,
                                fontSize: { xs: "40px", md: "52px" },
                                textAlign: "center",
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            {step.icon && (
                              <Box
                                sx={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  backgroundColor: "#dce5f9",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: step.toneColor ?? "inherit",
                                }}
                              >
                                {step.icon}
                              </Box>
                            )}
                            <Typography
                              sx={{
                                color: step.toneColor ?? "text.primary",
                                fontFamily: (theme) =>
                                  theme.imu.typography.fontFamilies.primary,
                                fontWeight: 700,
                                whiteSpace: "pre-wrap",
                                fontSize: { xs: "28px", md: "32px" },
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Box>
                        )}
                      </>
                    )}

                    {step.subtitle && (
                      <Typography
                        sx={{
                          color:
                            step.variant === "dark"
                              ? "rgba(255,255,255,0.7)"
                              : "text.secondary",
                          fontFamily: (theme) =>
                            theme.imu.typography.fontFamilies.primary,
                          fontSize: "24px",
                          fontWeight: 400,
                        }}
                      >
                        {step.subtitle}
                      </Typography>
                    )}

                    {step.description && (
                      <Typography
                        sx={{
                          color:
                            step.variant === "dark"
                              ? "#ffffff"
                              : "text.primary",
                          fontFamily: (theme) =>
                            theme.imu.typography.fontFamilies.secondary,
                          fontSize: "16px",
                        }}
                      >
                        {step.description}
                      </Typography>
                    )}

                    {step.subDescription && (
                      <Typography
                        sx={{
                          color:
                            step.variant === "dark"
                              ? "rgba(255,255,255,0.7)"
                              : "text.secondary",
                          fontFamily: (theme) =>
                            theme.imu.typography.fontFamilies.secondary,
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        {step.id === 4 ? (
                          <>
                            <Box
                              component="span"
                              sx={{
                                fontStyle: "italic",
                                fontWeight: 700,
                                color: "text.primary",
                              }}
                            >
                              IMU is not about rules.
                            </Box>
                            {
                              " It is about awareness, responsibility, and conscious living."
                            }
                          </>
                        ) : (
                          step.subDescription
                        )}
                      </Typography>
                    )}

                    {step.cta && (
                      <Box sx={{ mt: 2 }}>
                        <Box
                          component="button"
                          sx={{
                            backgroundColor: "#1E2330",
                            color: "#fff",
                            borderRadius: "99px",
                            px: 3,
                            py: 1.2,
                            fontSize: "13px",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            border: "none",
                            cursor: "pointer",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "#2a3142",
                              transform: "translateY(-1px)",
                            },
                          }}
                        >
                          {step.cta}
                          <Box component="span" sx={{ fontSize: "16px" }}>
                            {" "}
                            ›
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </>
              )}
            </WhatIsIMUCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

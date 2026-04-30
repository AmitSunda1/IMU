import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import WhatIsIMUImg from "../../assets/images/WhatIsIMU.png";
import { WhatIsIMUCard } from "./WhatIsIMUCard";
import careLogo from "../../assets/images/Care.png";
import fairLogo from "../../assets/images/Fair.png";
import dareLogo from "../../assets/images/Dare.png";

// ─── Arc Geometry ──────────────────────────────────────────────────────────────
// Tuned radii to match the background image arcs. 
// If icons are sitting outside the dashed line, decrease these values.
const ORBIT_RADIUS_X_VH = 66;
const ORBIT_RADIUS_Y_VH = 68;

// ─── Step Data ─────────────────────────────────────────────────────────────────
interface StepData {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  toneColor?: string;
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
];

// ─── OrbitIcon ─────────────────────────────────────────────────────────────────
interface OrbitIconProps {
  restingAngle: number;
  isActive: boolean;
  icon?: React.ReactNode;
  toneColor?: string;
}

function OrbitIcon({ restingAngle, isActive, icon, toneColor }: OrbitIconProps) {
  const rad = (restingAngle * Math.PI) / 180;
  const left = `${(Math.cos(rad) * ORBIT_RADIUS_X_VH).toFixed(3)}vh`;
  const bottom = `${(Math.sin(rad) * ORBIT_RADIUS_Y_VH).toFixed(3)}vh`;

  return (
    <Box
      sx={{
        position: "absolute",
        left,
        bottom,
        width: 0,
        height: 0,
        zIndex: isActive ? 3 : 2,
      }}
    >
      <Box
        component={motion.div}
        animate={{
          scale: isActive ? 1.35 : 1,
          opacity: isActive ? 1 : 0.65,
          // border: isActive ? `2px solid ${toneColor}` : "1px solid rgba(0,0,0,0.05)",
          boxShadow: isActive
            ? "0px 12px 32px rgba(0,0,0,0.22)"
            : "0px 4px 12px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: 48,
          height: 48,
          transform: "translate(-50%, 50%)",
          borderRadius: "50%",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: toneColor ?? "#717171",
        }}
      >
        {icon ?? (
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: toneColor ?? "#9e9e9e",
            }}
          />
        )}
      </Box>
    </Box>
  );
}

const ICON_POSITIONS = {
  1: 75,  // Care
  2: 50,  // Fair
  3: 25,  // Dare
};

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

          {stepsData.filter(s => s.id !== 0).map((step) => {
            const restingAngle = ICON_POSITIONS[step.id as keyof typeof ICON_POSITIONS];
            return (
              <OrbitIcon
                key={`orbit-${step.id}`}
                restingAngle={restingAngle}
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
            py: { xs: 8, md: "20vh" },
            px: { xs: 3, md: 6 },
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "25vh",
          }}
        >
          {/* STICKY HEADER FOR STEP 0 - Always visible */}
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              pointerEvents: "none",
              mb: "-20vh",
              mx: { xs: -3, md: -6 },
              px: { xs: 3, md: 6 },
              pt: "140px",
              pb: 6,
              background:
                "linear-gradient(to bottom, #f5f8fc 85%, rgba(245,248,252,0) 100%)",
            }}
          >
            <Box sx={{ maxWidth: "720px", mx: "auto" }}>
              <Typography
                sx={{
                  color: "#1E2330",
                  fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
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
                  fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
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
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
                        fontWeight: 700,
                        fontSize: { xs: "28px", md: "32px" },
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>

                  {step.subtitle && (
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
                        fontSize: "24px",
                        fontWeight: 400,
                        mt: 1,
                      }}
                    >
                      {step.subtitle}
                    </Typography>
                  )}

                  {step.description && (
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
                        fontSize: "16px",
                        mt: 2,
                      }}
                    >
                      {step.description}
                    </Typography>
                  )}
                </Box>
              )}
            </WhatIsIMUCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

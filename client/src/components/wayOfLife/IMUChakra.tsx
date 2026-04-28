import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type ChakraCard = {
  title: string;
  description: string;
};

type ChakraSection = {
  title: string;
  tone: string;
  cards: ChakraCard[];
};

type ChakraOrbitPoint = {
  finalAngle: number;
  middleAngle: number;
  startAngle: number;
  stemHeight: string;
};

const toRadians = (angle: number) => (angle * Math.PI) / 180;

const chakraOrbitPoints: ChakraOrbitPoint[] = [
  {
    startAngle: 2,
    middleAngle: 82,
    finalAngle: 132,
    stemHeight: "200px",
  },
  {
    startAngle: 6,
    middleAngle: 48,
    finalAngle: 90,
    stemHeight: "200px",
  },
  {
    startAngle: 10,
    middleAngle: 18,
    finalAngle: 48,
    stemHeight: "200px",
  },
];

const chakraSections: ChakraSection[] = [
  {
    title: "Install",
    tone: "#EAEEFA",
    cards: [
      {
        title: "Learning",
        description:
          "Staying open, curious, and grounded in a beginner's mindset.",
      },
      {
        title: "Values & Beliefs",
        description:
          "Guided by care, fairness, and the courage to do what's right.",
      },
      {
        title: "Thoughts & Emotions",
        description: "Experience Happy I Moment of Magic",
      },
    ],
  },
  {
    title: "Maintain",
    tone: "#EFFAF5",
    cards: [
      {
        title: "Behaviour & Attitude",
        description:
          "Pleasant, playful, disciplined, and always learning while serving with clarity.",
      },
      {
        title: "Action",
        description: "Act, react, and respond with clarity in every situation.",
      },
      {
        title: "Process",
        description:
          "Consistent actions done with intent to meet real needs and clear goals.",
      },
    ],
  },
  {
    title: "Upgrade",
    tone: "#FAEAEA",
    cards: [
      {
        title: "Culture",
        description: "The way we behave, live, and work every single day.",
      },
      {
        title: "Value Creation for Customer",
        description: "Creating real value both emotional and economic.",
      },
      {
        title: "Results",
        description:
          'Outcomes that reflect growth, goals, and "Happy I, Happy U".',
      },
    ],
  },
];

function WavyUnderline({ color, width }: { color: string; width: string }) {
  const numericWidth = Number.parseFloat(width);
  const waveWidth = Number.isFinite(numericWidth) ? numericWidth : 120;
  const segmentCount = Math.max(1, Math.ceil(waveWidth / 120));
  const wavePath = Array.from({ length: segmentCount })
    .map((_, index) => {
      const offset = index * 120;
      return `M${offset} 6 C ${offset + 6} 0, ${offset + 12} 12, ${offset + 18} 6 S ${offset + 30} 0, ${offset + 36} 6 S ${offset + 48} 12, ${offset + 54} 6 S ${offset + 66} 0, ${offset + 72} 6 S ${offset + 84} 12, ${offset + 90} 6 S ${offset + 102} 0, ${offset + 108} 6 S ${offset + 114} 12, ${offset + 120} 6`;
    })
    .join(" ");

  return (
    <Box
      component="svg"
      viewBox={`0 0 ${Math.max(120, waveWidth)} 12`}
      sx={{ width, height: "12px", display: "block", mx: "auto" }}
    >
      <path
        d={wavePath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Box>
  );
}

function ChakraColumn({ tone, cards }: { tone: string; cards: ChakraCard[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              backgroundColor: tone,
              borderRadius: "6px",
              p: 1.8,
              border: "1px solid rgba(30,35,48,0.05)",
              minHeight: { xs: "106px", md: "96px" },
              width: "320px",
            }}
          >
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.primary,
                fontSize: { xs: "14px", md: "20px" },
                fontWeight: 700,
                color: "#1E2330",
                lineHeight: 1.2,
                mb: 0.6,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: { xs: "12px", md: "18px" },
                lineHeight: 1.55,
                color: "#6A6A6A",
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ChakraOrbitChip({
  section,
  index,
  scrollYProgress,
  chipOpacity,
  chipScale,
  stemOpacity,
  stemScale,
}: {
  section: ChakraSection;
  index: number;
  scrollYProgress: MotionValue<number>;
  chipOpacity: MotionValue<number>;
  chipScale: MotionValue<number>;
  stemOpacity: MotionValue<number>;
  stemScale: MotionValue<number>;
}) {
  const orbitPoint = chakraOrbitPoints[index];
  const angle = useTransform(
    scrollYProgress,
    [0.02, 0.22, 0.42],
    [orbitPoint.startAngle, orbitPoint.middleAngle, orbitPoint.finalAngle],
  );
  const left = useTransform(angle, (currentAngle) => {
    const radius = 500;
    return `calc(50% + ${(Math.cos(toRadians(currentAngle)) * radius).toFixed(
      3,
    )}px)`;
  });
  const top = useTransform(angle, (currentAngle) => {
    const radius = 500;
    return `calc(var(--chakra-circle-center-y) + ${(
      Math.sin(toRadians(currentAngle)) * radius
    ).toFixed(3)}px)`;
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        left,
        top,
        width: 0,
        height: 0,
        zIndex: 2,
      }}
    >
      <motion.div
        style={{
          opacity: chipOpacity,
          scale: chipScale,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            height: "58px",
            justifyContent: "center",
            px: 2,
            py: 0.75,
            borderRadius: "10px",
            border: "1px solid rgba(30,35,48,0.08)",
            backgroundColor: section.tone,
            color: "#1E2330",
            fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
            fontSize: { xs: "20px", md: "32px" },
            lineHeight: 1,
            minWidth: { xs: "auto", md: "120px" },
            whiteSpace: "nowrap",
            transform: "translate(-50%, -50%)",
          }}
        >
          {section.title}
        </Box>
      </motion.div>

      {/* <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "29px",
          transform: "translateX(-50%)",
        }}
      > */}
      <motion.div
        style={{
          opacity: stemOpacity,
          scaleY: stemScale,
          transformOrigin: "top center",
          position: "absolute",
          left: 0,
          top: "29px",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            width: "2px",
            height: orbitPoint.stemHeight,
            backgroundColor: "rgba(30,35,48,0.18)",
          }}
        />
      </motion.div>
      {/* </Box> */}
    </motion.div>
  );
}

export function IMUChakra() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const chipOpacity = useTransform(scrollYProgress, [0.01, 0.06], [0, 1]);
  const chipScale = useTransform(scrollYProgress, [0.01, 0.42], [0.86, 1]);
  const stemOpacity = useTransform(scrollYProgress, [0.28, 0.32], [0, 1]);
  const stemScale = useTransform(scrollYProgress, [0.28, 0.36], [0, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.2, 0.32], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.3, 0.44], [14, 0]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="imu-chakra"
      sx={{
        position: "relative",
        overflow: "visible",
        backgroundColor: "#ffffff",
        minHeight: { xs: "calc(180vh + 200px)", md: "calc(170vh + 200px)" },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "calc(100vh + 300px)",
          boxSizing: "border-box",
          overflow: "hidden",
          pt: { xs: 5, md: 4 },
          pb: { xs: 3, md: 3 },
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: { xs: "430px", md: "500px" },
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: { xs: "-180px", md: "-205px" },
              transform: "translateX(-50%)",
              width: { xs: "980px", md: "982px" },
              height: { xs: "980px", md: "984px" },
              marginTop: { xs: "-490px", md: "-300px" },
              borderRadius: "50%",
              border: "3px dashed #648F6C",
              pointerEvents: "none",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            "--chakra-circle-center-y": { xs: "-180px", md: "-13px" },
          }}
        >
          {chakraSections.map((section, index) => (
            <ChakraOrbitChip
              key={section.title}
              section={section}
              index={index}
              scrollYProgress={scrollYProgress}
              chipOpacity={chipOpacity}
              chipScale={chipScale}
              stemOpacity={stemOpacity}
              stemScale={stemScale}
            />
          ))}
        </Box>

        <Box
          sx={{
            width: "min(94%, 1240px)",
            mx: "auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          <Box sx={{ textAlign: "center", mt: { xs: 1, md: 10 }, mb: -20 }}>
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.primary,
                fontSize: { xs: "34px", md: "40px" },
                lineHeight: 1,
                fontWeight: 700,
                color: "#1E2330",
              }}
            >
              The IMU Chakra
            </Typography>
            <WavyUnderline width="260px" color="#BD5201" />
          </Box>

          <Box
            sx={{
              position: "relative",
              height: { xs: "245px", md: "365px" },
              mb: { xs: 0, md: 0 },
            }}
          />

          <Box
            component={motion.div}
            style={{ opacity: cardOpacity, y: cardY }}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              rowGap: { xs: 4, md: 2 },
              columnGap: { xs: 3, md: 1 },
              alignItems: "start",
              justifyItems: "center",
              width: { xs: "100%", md: "min(86%, 1080px)" },
              mx: "auto",
              mt: { xs: -1, md: 15 },
              pb: { xs: 8, md: 20 },
              position: "relative",
              zIndex: 4,
            }}
          >
            {chakraSections.map((section, index) => (
              <Box
                key={section.title}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "#ffffff",
                  pt: { xs: 3, md: 0 },
                  mt: index === 1 ? { xs: "32px", md: "84px" } : "0px",
                }}
              >
                <ChakraColumn tone={section.tone} cards={section.cards} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

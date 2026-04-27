import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FadeInView } from "../ui/FadeInView";

type ChakraCard = {
  title: string;
  description: string;
};

const chakraSections: Array<{
  title: string;
  tone: string;
  cards: ChakraCard[];
}> = [
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

export function IMUChakra() {
  return (
    <Box
      component="section"
      id="imu-chakra"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        pt: { xs: 7, md: 10 },
        pb: { xs: 8, md: 12 },
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
          width: "min(94%, 1240px)",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeInView direction="up">
          <Box sx={{ textAlign: "center", mt: { xs: -8, md: 10 } }}>
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
        </FadeInView>

        <Box
          sx={{
            position: "relative",
            height: { xs: "250px", md: "275px" },
            mb: { xs: 2, md: 3 },
          }}
        >
          {chakraSections.map((section, index) => {
            const chipStyles =
              index === 1
                ? {
                    left: "50%",
                    top: { xs: "136px", md: "238px" },
                    transform: "translateX(-50%)",
                  }
                : index === 0
                  ? {
                      left: { xs: "13%", md: "20%" },
                      top: { xs: "70px", md: "62px" },
                      transform: "translateX(-50%)",
                    }
                  : {
                      left: { xs: "87%", md: "80%" },
                      top: { xs: "70px", md: "62px" },
                      transform: "translateX(-50%)",
                    };

            const stemStyles =
              index === 1
                ? {
                    left: "50%",
                    top: { xs: "168px", md: "272px" },
                    height: { xs: "24px", md: "122px" },
                    transform: "translateX(-50%)",
                  }
                : {
                    left:
                      index === 0
                        ? { xs: "13%", md: "20%" }
                        : { xs: "87%", md: "80%" },
                    top: { xs: "102px", md: "94px" },
                    height: { xs: "112px", md: "245px" },
                    transform: "translateX(-50%)",
                  };

            return (
              <Box key={section.title}>
                <Box
                  sx={{
                    position: "absolute",
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
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.primary,
                    fontSize: { xs: "20px", md: "32px" },
                    lineHeight: 1,
                    minWidth: { xs: "auto", md: "120px" },
                    zIndex: 2,
                    ...chipStyles,
                  }}
                >
                  {section.title}
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    width: "2px",
                    backgroundColor: "rgba(30,35,48,0.18)",
                    zIndex: 1,
                    ...stemStyles,
                  }}
                />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            rowGap: { xs: 4, md: 2 },
            columnGap: { xs: 3, md: 0.5 },
            alignItems: "start",
            justifyItems: "center",
            width: { xs: "100%", md: "min(86%, 1080px)" },
            mx: "auto",
            mt: { xs: -1, md: 8 },
            // mt:{index === 1 ? -1 : -2, md: 8}, // Adjust top margin for middle column
          }}
        >
          {chakraSections.map((section, index) => (
            <FadeInView
              key={section.title}
              direction="up"
              delay={0.08 + index * 0.06}
              style={{ marginTop: index === 1 ? "56px" : "0px" }}
            >
              <ChakraColumn tone={section.tone} cards={section.cards} />
            </FadeInView>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

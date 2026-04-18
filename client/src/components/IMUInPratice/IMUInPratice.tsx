import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { primaryColors, secondaryColors } from "../../theme/theme";
import { FadeInView } from "../ui/FadeInView";

// ─── Card Data ─────────────────────────────────────────────────────────────────

const cards = [
  {
    id: "service-delivery",
    tag: "Service Delivery",
    titleColor: primaryColors.primary,          // blue
    blobColor: "#9AB4FF",                        // blue blob per spec
    buttonBg: primaryColors.primaryDark,
    title: "When Your Team Feels It, Your Clients See It",
    body: "Most service problems are not technical. They are cultural. IMU Way of Service Delivery helps businesses build a team that shows up with Care, works with Fairness, and grows with Courage. Not because they are told to. Because they actually believe it.",
    cta: "SEE HOW IT WORKS",
  },
  {
    id: "imu-way-of-life",
    tag: "IMU Way of Life",
    titleColor: secondaryColors.secondary,       // green
    blobColor: "#A1F78D",                        // green blob per spec
    buttonBg: "#2d4a31",
    title: "Values Are Useless Until They Become Habits",
    body: "The IMU Chakra is a step by step process that takes your values off the wall and puts them into daily behaviour. From how you greet a client to how you handle a complaint, every action gets rooted in something real. This is where culture actually gets built.",
    cta: "EXPLORE IMU WAY OF LIFE",
  },
];

// ─── IMUInPratice ──────────────────────────────────────────────────────────────

export function IMUInPratice() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 10, md: 14 },
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>

        {/* ── Section heading ──────────────────────────────────────────── */}
        <FadeInView direction="up">
          <Box sx={{ textAlign: "center", mb: { xs: 7, md: 10 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
                fontWeight: 700,
                fontSize: { xs: "36px", md: "48px" },
                lineHeight: 1.1,
                color: "#1E2330",
                mb: 2,
              }}
            >
              IMU in Practice
            </Typography>
            <Typography
              sx={{
                fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
                fontSize: { xs: "15px", md: "17px" },
                color: "#717171",
                lineHeight: 1.6,
              }}
            >
              This is What Living the IMU Way Looks Like
            </Typography>
          </Box>
        </FadeInView>

        {/* ── Two cards ────────────────────────────────────────────────── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {cards.map((card, index) => (
            <FadeInView key={card.id} direction="up" delay={0.1 + index * 0.1}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  p: { xs: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  // The card itself has a flat white/near-white bg;
                  // the blob inside creates the colored wash.
                  backgroundColor: "#fdfdfd",
                  border: "1px solid rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
              {/*
               * Background blur blob — per spec:
               *   background: {blobColor}
               *   backdrop-filter: blur(64px)  ← applied via filter on a pseudo-layer
               *   border-radius: 9999px
               *   opacity: 0.2
               *
               * We use a large pill element positioned behind the content.
               * CSS `filter: blur(64px)` on this element creates the soft wash effect.
               */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  // Anchor to the bottom-left corner.
                  // Negative values push the circle's edge slightly outside
                  // the card so the blur wash starts right at the corner.
                  bottom: "-90%",
                  left: "-10%",
                  // ~65% of card width → a medium-sized soft circle that
                  // covers the bottom-left quadrant and fades toward top-right.
                  width: "85%",
                  aspectRatio: "1 / 1",
                  borderRadius: "9999px",
                  background: card.blobColor,
                  filter: "blur(64px)",
                  opacity: 0.2,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Card content sits above the blob */}
              <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

                {/* Tag badge */}
                <Box sx={{ display: "inline-flex" }}>
                  <Box
                    sx={{
                      px: 2,
                      py: 0.6,
                      borderRadius: "9999px",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      display: "inline-block",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: (theme) =>
                          theme.imu.typography.fontFamilies.secondary,
                        fontSize: "12px",
                        color: "#434343",
                        fontWeight: 500,
                      }}
                    >
                      {card.tag}
                    </Typography>
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.primary,
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "28px" },
                    lineHeight: 1.25,
                    color: card.titleColor,
                  }}
                >
                  {card.title}
                </Typography>

                {/* Body */}
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: { xs: "14px", md: "15px" },
                    color: "#434343",
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  {card.body}
                </Typography>

                {/* CTA button */}
                <Box>
                  <Box
                    component="button"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      px: 3.5,
                      py: 1.6,
                      borderRadius: "9999px",
                      backgroundColor: card.buttonBg,
                      color: "#ffffff",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: (theme) =>
                        theme.imu.typography.fontFamilies.secondary,
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                      "&:hover": {
                        opacity: 0.88,
                        transform: "translateY(-1px)",
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {card.cta}
                  </Box>
                </Box>
              </Box>
            </Box>
            </FadeInView>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

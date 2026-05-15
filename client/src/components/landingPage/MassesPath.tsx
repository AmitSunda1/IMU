import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FadeInView } from "../ui/FadeInView";

// ─── Data Definitions ──────────────────────────────────────────────────────────

interface MassesPathLeftItem {
  title: string;
  description?: string;
  isEndState?: boolean;
  minHeight: string;
}

const leftItemsData: MassesPathLeftItem[] = [
  {
    title: "Chase External Rewards",
    description:
      "Chase the next big thing: Grades. Followers. Validation. You keep moving the goalpost — and happiness stays one step ahead of you.",
    minHeight: "116px",
  },
  {
    title: "React to the Situation",
    description:
      "Your mood is in someone else's hands. One comment ruins your day. One bad result wrecks your week. You're reacting — not living.",
    minHeight: "116px",
  },
  {
    title: "Transactional Giving",
    description:
      "Help only when it's easy. You show up for others when it costs you nothing. Real giving only happens once you feel sorted — which never quite arrives.",
    minHeight: "172px",
  },
  {
    title: "HAPPINESS AS A DESTINATION",
    isEndState: true,
    minHeight: "143px",
  },
];

interface MassesPathRightItem {
  stepNumber: number;
  title: string;
  description: string;
  isRealization?: boolean;
  hasGreenBadge?: boolean;
  hasNextLine?: boolean;
  minHeight: string;
}

const rightItemsData: MassesPathRightItem[] = [
  {
    stepNumber: 1,
    title: "Install, Maintain, Upgrade the right Values.",
    description:
      "Care. Fair. Dare. The lens through which you see every interaction.",
    hasNextLine: true,
    minHeight: "116px",
  },
  {
    stepNumber: 2,
    title: 'Find the right "HAPPY I"',
    description:
      "Inner alignment is what creates Happy I. When you're aligned inside, the world outside loses its grip on you.",
    hasNextLine: true,
    minHeight: "116px",
  },
  {
    stepNumber: 3,
    title: 'Give the right "HAPPY U"',
    description:
      "You show up — fully, genuinely — not because you have to, but because you're full enough to give.",
    hasGreenBadge: true,
    hasNextLine: true,
    minHeight: "172px",
  },
  {
    stepNumber: 4,
    title: "HAPPINESS AS A JOURNEY",
    description:
      "Not a reward. Not a finish line. It's how you move through life — every ordinary day, every hard moment, every choice you make.",
    isRealization: true,
    hasNextLine: false,
    minHeight: "143px",
  },
];

// ─── Reusable Card Components ──────────────────────────────────────────────────

function MassesPathLeftCard({ item }: { item: MassesPathLeftItem }) {
  return (
    <Box
      sx={{
        backgroundColor: "#F4F4F4",
        borderRadius: "24px",
        p: { xs: 3.5, md: 4 },
        minHeight: { xs: "auto", md: item.minHeight },
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1.5px solid #EBEBEB",
      }}
    >
      {item.isEndState ? (
        <>
          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "14px",
              color: "#888888",
              mb: 0.5,
            }}
          >
            The End state
          </Typography>
          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "18px",
              fontWeight: 700,
              color: "#434343",
              letterSpacing: "0.02em",
            }}
          >
            HAPPINESS AS A{" "}
            <Box
              component="span"
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
              }}
            >
              DESTINATION
            </Box>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "18px",
              fontWeight: 700,
              color: "#434343",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>
          {item.description && (
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "15px",
                color: "#6A6A6A",
                lineHeight: 1.5,
              }}
            >
              {item.description}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}

/**
 * RoadConnector — large D-ring road arc matching the reference design.
 *
 * Geometry  : outer R = 70px, inner R = 52px (18px thick ring), total arc = 140 × 70px
 * Position  : centered on the gap midpoint; overlaps ~46px into each adjacent card
 * Opacity   : 0.56
 * Dashes    : 3px solid #FDFDFF along center arc (R = 61)
 *
 * ViewBox "0 0 70 140"
 *   Left arc  center (70, 70): outer pts (70,0)&(70,140); inner pts (70,18)&(70,122)
 *   Right arc center (0,  70): outer pts (0, 0)&(0, 140); inner pts (0, 18)&(0, 122)
 */
function RoadConnector({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  const leftPath = "M 70 0  A 70 70 0 0 0 70 140 L 70 122 A 52 52 0 0 1 70 18 L 70 0  Z";
  const rightPath = "M 0  0  A 70 70 0 0 1 0  140 L 0  122 A 52 52 0 0 0 0  18 L 0  0  Z";

  // Dashes along center arc R=61
  const leftDash = "M 70 9  A 61 61 0 0 0 70 131";
  const rightDash = "M 0  9  A 61 61 0 0 1 0  131";

  return (
    <Box
      sx={{
        position: "absolute",
        // Position so arc center lands in the gap midpoint (gap ≈ 48px at md).
        // top = 100% - (70 - 24) = calc(100% - 46px) puts center at 100% + 24px = gap/2
        top: "calc(100% - 46px)",
        height: "140px",
        width: "70px",
        zIndex: 10,
        pointerEvents: "none",
        display: { xs: "none", md: "block" },
        ...(isLeft ? { left: "-57px" } : { right: "-70px" }),
      }}
    >
      <svg
        viewBox="0 0 50 50"
        width="40"
        height="80"
        style={{ overflow: "visible", opacity: 0.56, display: "block" }}
      >
        {/* Road band */}
        <path d={isLeft ? leftPath : rightPath} fill="#C8E8C4" />
        {/* Road markings — 3px solid #FDFDFF */}
        <path
          d={isLeft ? leftDash : rightDash}
          fill="none"
          stroke="#FDFDFF"
          strokeWidth="3"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}

function MassesPathRightCard({ item }: { item: MassesPathRightItem }) {
  return (
    <Box
      sx={{
        position: "relative",
        background: "radial-gradient(11.93% 79.74% at 95.16% 81.03%, #AAE19D 0%, #F1FDEE 100%)",
        borderRadius: "24px",
        p: { xs: 3.5, md: 4 },
        minHeight: { xs: "auto", md: item.minHeight },
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "visible",
        border: "1.5px solid #C8E8C4",
      }}
    >
      {/* Step Circle */}
      <Box
        sx={{
          position: "absolute",
          top: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          color: "#3A7D44",
          fontWeight: 700,
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "2px solid #C8E8C4",
          boxShadow: "0px 3px 8px rgba(56, 140, 68, 0.18)",
          zIndex: 2,
          fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
        }}
      >
        {item.stepNumber}
      </Box>

      {/* Road Connector Arc */}
      {item.hasNextLine && (
        <RoadConnector side={item.stepNumber % 2 !== 0 ? "left" : "right"} />
      )}

      {item.isRealization && (
        <Typography
          sx={{
            fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
            fontSize: "14px",
            color: "#555555",
            mb: 0.5,
          }}
        >
          The Realization
        </Typography>
      )}

      <Typography
        sx={{
          fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
          fontSize: "18px",
          fontWeight: 700,
          color: "#1E2330",
          mb: 1,
          letterSpacing: item.isRealization ? "0.02em" : "normal",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
          fontSize: "15px",
          color: "#434343",
          lineHeight: 1.5,
        }}
      >
        {item.description}
      </Typography>

      {/* Green Badge Button */}
      {item.hasGreenBadge && (
        <Box
          sx={{
            mt: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              backgroundColor: "#4CA152",
              color: "#ffffff",
              borderRadius: "999px",
              px: 2.5,
              py: 0.8,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              boxShadow: "0px 2px 8px rgba(76, 161, 82, 0.25)",
            }}
          >
            THE ART OF{" "}
            <Box
              component="span"
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                textDecorationThickness: "1.5px",
              }}
            >
              GIVING
            </Box>{" "}
            - &ldquo;SERVICE&rdquo; &rsaquo;
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function MassesPath() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 16 },
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>
        {/* ── Section Title ────────────────────────────────────────────── */}
        <FadeInView direction="up">
          <Typography
            component="h2"
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: { xs: "32px", sm: "40px", md: "52px" },
              fontWeight: 700,
              textAlign: "center",
              color: "#1E2330",
              mb: { xs: 8, md: 12 },
              lineHeight: 1.2,
            }}
          >
            The masses path.{" "}
            <Box component="span" sx={{ color: "#FF9000" }}>
              And a different one.
            </Box>
          </Typography>
        </FadeInView>

        {/* ── Rows Layout Container ────────────────────────────────────── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* ── Column Headers Row ─────────────────────────────────────── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "40% 60%" },
              gap: { xs: 4, md: 6, lg: 8 },
              mb: { xs: 0, md: -2 },
            }}
          >
            {/* Left Column Header */}
            <FadeInView direction="up" delay={0.1}>
              <Box sx={{ px: 1 }}>
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#0E0F13",
                    textTransform: "uppercase",
                    letterSpacing: "2%",
                  }}
                >
                  THE MASSES PATH
                </Typography>
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: "16px",
                    color: "#757575",
                  }}
                >
                  Feeling Happy
                </Typography>
              </Box>
            </FadeInView>

            {/* Right Column Header */}
            <FadeInView direction="up" delay={0.2}>
              <Box sx={{ px: 1 }}>
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#56A748",
                    textTransform: "uppercase",
                    letterSpacing: "2%",
                  }}
                >
                  THE IMU WAY
                </Typography>
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: "16px",
                    color: "#757575",
                  }}
                >
                  Being Happy
                </Typography>
              </Box>
            </FadeInView>
          </Box>

          {/* ── Dynamic Matching Height Rows ───────────────────────────── */}
          {leftItemsData.map((leftItem, index) => {
            const rightItem = rightItemsData[index];
            return (
              <Box
                key={`path-row-${index}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "40% 60%" },
                  gap: { xs: 4, md: 6, lg: 8 },
                  alignItems: "stretch",
                }}
              >
                <FadeInView
                  direction="up"
                  delay={0.2 + index * 0.1}
                  style={{ height: "100%" }}
                >
                  <MassesPathLeftCard item={leftItem} />
                </FadeInView>

                <FadeInView
                  direction="up"
                  delay={0.3 + index * 0.1}
                  style={{ height: "100%" }}
                >
                  <MassesPathRightCard item={rightItem} />
                </FadeInView>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import { FadeInView } from "../ui/FadeInView";

type CardProps = {
  title: string;
  eyebrow: string;
  body: string;
  cta: string;
  lift?: boolean;
};

function DomeCard({ title, eyebrow, body, cta, lift = false }: CardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        mt: lift ? { xs: 2, md: 5 } : 0,
        width: "100%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#FCFFFE",
          borderTopLeftRadius: "519px",
          borderTopRightRadius: "519px",
          borderBottomLeftRadius: "184px",
          borderBottomRightRadius: "184px",
          px: { xs: 3, md: 4.5 },
          pt: { xs: 7, md: 8.5 },
          pb: { xs: 4, md: 4.5 },
        //   minHeight: { xs: "314px", md: "330px" },
          boxShadow: "0px 8px 30px rgba(31, 58, 69, 0.03)",
          overflow: "hidden",
          maxHeight: "303px",
          maxWidth:"505px",
          mx: "auto",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: "-108px", md: "-114.8px" },
            left: { xs: "18px", md: "40px" },
            width: { xs: "100%", md: "471px" },
            maxWidth: "471px",
            height: "192px",
            borderRadius: "9999px",
            background: "#EFFAF5",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: -10,
          }}
        />
        <Box sx={{ textAlign: "center", maxWidth: "470px", mx: "auto" }}>
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: { xs: "24px", md: "30px" },
              lineHeight: 1.05,
              color: "#1E2330",
              mb: 0.25,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "12px",
              letterSpacing: "0.16em",
              color: "#6A6A6A",
              mb: 2.4,
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            sx={{
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: "26px",
              color: "#5B6153",
              textAlign: "left",
              fontWeight:400,
            }}
          >
            {body}
          </Typography>

          <Box sx={{ mt: 3.5, display: "flex", justifyContent: "center" }}>
            <Typography
              component="button"
              sx={{
                border: 0,
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: "#6B9A73",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                textTransform: "uppercase",
              }}
            >
              {cta}
              <ChevronRightRounded sx={{ fontSize: 18 }} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function RitualsAndHabits() {
  return (
    <Box
      component="section"
      id="rituals-and-habits"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 4 },
            mb: { xs: -5, md: -8 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <FadeInView direction="up">
            <DomeCard
              title="Habits"
              eyebrow="ACTIVE PRACTICE"
              body="The structural scaffolding of the day. From cognitive offloading to sensory grounding, explore the atomic units of progress."
              cta="EXPLORE ARCHIVE"
              lift={false}
            />
          </FadeInView>
          <FadeInView direction="up" delay={0.08}>
            <DomeCard
              title="Rituals"
              eyebrow="EMOTIONAL CORE"
              body="Beyond utility - these are the moments of sacred pause. Curated transitions between focused work and profound rest."
              cta="VIEW CATALOGUE"
              lift
            />
          </FadeInView>
        </Box>

        <FadeInView direction="up" delay={0.1}>
          <Box
            sx={{
              backgroundColor: "#415D47",
              color: "#ffffff",
              borderRadius: "22px",
              pt: { xs: 9, md: 11 },
              pb: { xs: 5, md: 6 },
              px: { xs: 3, md: 5 },
              minHeight: { xs: "340px", md: "390px" },
            }}
          >
            <Box sx={{ maxWidth: "760px" }}>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontStyle: "italic",
                  fontSize: { xs: "32px", md: "38px" },
                  lineHeight: 1.1,
                  mb: 1.5,
                  color: "#F5F2EA",
                }}
              >
                The Living Philosophy
              </Typography>
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.86)",
                  maxWidth: "760px",
                }}
              >
                We believe that intellectual rigor requires an equally rigorous
                commitment to life&apos;s beauty. The Living Archive serves as a
                digital atelier - a place where the IMU way is not just taught,
                but archived through continuous action.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography
                  component="button"
                  sx={{
                    border: 0,
                    background: "transparent",
                    padding: 0,
                    cursor: "pointer",
                    color: "#F3EBD7",
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.6,
                    textTransform: "uppercase",
                  }}
                >
                  Explore
                  <ChevronRightRounded sx={{ fontSize: 18 }} />
                </Typography>
              </Box>
            </Box>
          </Box>
        </FadeInView>
      </Box>
    </Box>
  );
}

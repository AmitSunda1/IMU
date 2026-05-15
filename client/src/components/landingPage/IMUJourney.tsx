import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FadeInView } from "../../components/ui/FadeInView";
import JourneyImg from "../../assets/images/Journey.webp";

interface JourneyStepProps {
  title: string;
  heading: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

function JourneyStep({ title, heading, description, image, isReversed }: JourneyStepProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 8, lg: 12 },
        alignItems: "center",
        mb: { xs: 10, md: 16 },
        direction: isReversed ? "rtl" : "ltr", // Reverses the grid layout on desktop
      }}
    >
      {/* Content */}
      <Box sx={{ direction: "ltr", textAlign: "left" }}>
        <FadeInView direction={isReversed ? "left" : "right"}>
          <Typography
            sx={{
              fontFamily: (t) => t.imu.typography.fontFamilies.secondary,
              fontSize: "14px",
              fontWeight: 600,
              color: "#757575",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="h3"
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              lineHeight: 1.2,
              color: "#1E2330",
              mb: 3,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.6,
              color: "#555555",
            }}
          >
            {description}
          </Typography>
        </FadeInView>
      </Box>

      {/* Image */}
      <Box sx={{ direction: "ltr" }}>
        <FadeInView direction={isReversed ? "right" : "left"} delay={0.1}>
          <Box
            component="img"
            src={image}
            alt={heading}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              display: "block",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.06)",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </FadeInView>
      </Box>
    </Box>
  );
}

export function IMUJourney() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: "min(92%, 1160px)", mx: "auto" }}>
        {/* Main Title */}
        <FadeInView direction="up">
          <Typography
            component="h2"
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontWeight: 700,
              fontSize: { xs: "36px", sm: "44px", md: "52px" },
              lineHeight: 1.1,
              textAlign: "center",
              color: "#1E2330",
              mb: { xs: 8, md: 12 },
            }}
          >
            The IMU Way Journey
          </Typography>
        </FadeInView>

        {/* Steps */}
        <Box sx={{ mb: 10 }}>
          <JourneyStep
            title="Step 01 — Discovery"
            heading="It starts with the inner compass."
            description="The IMU Way begins with a deep dive into self-awareness. By understanding your own needs, triggers, and values, you build the foundation for a life that isn't just busy, but meaningful."
            image={JourneyImg}
          />

          <JourneyStep
            title="Step 02 — Connection"
            heading="Building bridges, not boundaries."
            description="Once you are filled, your capacity to connect expands. We teach how to listen with intent and speak with truth, turning every interaction into an opportunity for mutual growth."
            image={JourneyImg}
            isReversed
          />

          <JourneyStep
            title="Step 03 — Impact"
            heading="Your happiness is the catalyst."
            description="When you are 'Happy I', you naturally create 'Happy U'. This ripple effect transforms teams, families, and communities, proving that personal well-being is the ultimate fuel for collective success."
            image={JourneyImg}
          />
        </Box>

        {/* Quote Card */}
        <FadeInView direction="up">
          <Box
            sx={{
              backgroundColor: "#FCD39C",
              borderRadius: "24px",
              px: { xs: 4, sm: 6, md: 10 },
              py: { xs: 6, md: 8 },
              maxWidth: "960px",
              mx: "auto",
              textAlign: "center",
              boxShadow: "0px 16px 48px rgba(252, 211, 156, 0.3)",
            }}
          >
            <Typography
              sx={{
                fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                lineHeight: 1.6,
                color: "#2D3748",
                fontStyle: "italic",
                mb: 4,
              }}
            >
              "We didn't build IMU to fix a business problem. We built it because the people doing the
              hardest work deserved something real to believe in."
            </Typography>

            <Typography
              sx={{
                fontFamily: (theme) => theme.imu.typography.fontFamilies.secondary,
                fontWeight: 700,
                fontSize: { xs: "16px", md: "18px" },
                color: "#1E2330",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              ~ Sumit Jain, Founder, IMU Way
            </Typography>
          </Box>
        </FadeInView>
      </Box>
    </Box>
  );
}

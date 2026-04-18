import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo/IMU-Logo.webp";
// import { IMUButton } from "../ui/IMUButton";

const exploreLinks = [
  "HOME",
  "APPROACH",
  "WAY OF LIFE",
  "SERVICE DELIVERY",
  "CONTACT US",
] as const;

const legalLinks = [
  "ABOUT SUMIT",
  "TERMS OF SERVICE",
  "PRIVACY POLICY",
] as const;

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#F8FAFF", pt: { xs: 5, md: 7 }, pb: { xs: 6, md: 8 } }}
    >
      {/* <Box sx={{ width: "min(96%, 1840px)", mx: "auto", mb: { xs: 5, md: 8 } }}>
        <IMUButton
          text="CONTACT US"
          tone="primaryBlue"
          sx={{ minWidth: "clamp(240px, 20vw, 470px)" }}
        />
      </Box> */}

      <Box
        sx={{
          width: "min(96%, 1840px)",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.25fr 1fr 1fr 1.05fr" },
          gap: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box component="section" aria-label="Brand intro">
          <Box
            component="img"
            src={logo}
            alt="IMU Way"
            sx={{
              width: "clamp(64px, 7vw, 88px)",
              height: "auto",
              objectFit: "contain",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              color: "#23252d",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "14px",
              lineHeight: 1.5,
              letterSpacing: "0.1px",
            }}
          >
            We help you pause, understand yourself,
            <br />
            and grow into a better way of living.
          </Typography>
        </Box>

        <Box
          component="section"
          aria-label="Explore links"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography
            sx={{
              mb: 1.5,
              color: "#7b7b7f",
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.8px",
            }}
          >
            EXPLORE
          </Typography>
          {exploreLinks.map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{
                color: "#6f7074",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              {item}
            </Link>
          ))}
        </Box>

        <Box
          component="section"
          aria-label="Legal links"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {legalLinks.map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{
                color: "#6f7074",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              {item}
            </Link>
          ))}
        </Box>

        <Box component="section" aria-label="Contact details">
          <Typography
            sx={{
              color: "#7b7b7f",
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: "18px",
              fontWeight: 700,
              mb: 1,
            }}
          >
            Address
          </Typography>
          <Typography
            sx={{
              color: "#6f7074",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "16px",
              lineHeight: 1.5,
              mb: 3,
            }}
          >
            Kusters Engineering India Private
            <br />
            Limited K. Raheja Prime, SagBaug
            <br />
            Road, Andheri East, Mumbai -
            <br />
            400059, INDIA
          </Typography>

          <Typography
            sx={{
              color: "#7b7b7f",
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontSize: "18px",
              fontWeight: 700,
              mb: 1,
            }}
          >
            Phone Number
          </Typography>
          <Typography
            sx={{
              color: "#6f7074",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "16px",
              lineHeight: 1.5,
              mb: 3,
            }}
          >
            +91 99878 08049
            <br />
            +91 99870 55440
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
            aria-label="Social links"
          >
            <Link
              href="#"
              underline="none"
              aria-label="LinkedIn"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "8px",
                border: "2px solid #6f7074",
                color: "#6f7074",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              in
            </Link>
            <Link
              href="#"
              underline="none"
              aria-label="X"
              sx={{
                color: "#6f7074",
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontSize: 22,
                lineHeight: 1,
                fontWeight: 700,
              }}
            >
              X
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

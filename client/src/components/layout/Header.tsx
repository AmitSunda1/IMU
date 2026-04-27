import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/IMU-Logo.webp";
import { IMUButton } from "../ui/IMUButton";

const navItems = [
  { label: "CONCEPT", id: "concept" },
  { label: "APPROACH", id: "approach" },
  { label: "WAY OF LIFE", id: "way-of-life" },
  { label: "SERVICE DELIVERY", id: "service-delivery" },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("");
  const isWayOfLifeRoute = location.pathname === "/wayoflife";

  useEffect(() => {
    const handleScroll = () => {
      if (isWayOfLifeRoute) {
        setActiveTab("way-of-life");
        return;
      }

      const sectionIds = navItems.map((item) => item.id);
      let currentActive = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is pushed above our 120px threshold
          // and its bottom hasn't scrolled past it yet, then it's active.
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = id;
            break;
          }
        }
      }
      setActiveTab(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isWayOfLifeRoute]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "80px",
        margin: "0px auto 0",
        padding: "12px 60px",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "auto 1fr auto" },
        alignItems: "center",
        justifyItems: { xs: "center", lg: "stretch" },
        gap: { xs: 2, lg: 3 },
        backgroundColor: "#FFFFFFCC",
        zIndex: 10,
        position: "fixed",
        backdropFilter: "blur(4px)",
      }}
    >
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="IMU Way"
          onClick={() => navigate("/")}
          sx={{
            width: "clamp(62px, 8vw, 86px)",
            height: "48px",
            objectFit: "contain",
            cursor: "pointer",
            // marginLeft: "40px",
          }}
        />
      </Box>

      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "flex-start" },
          gap: "clamp(16px, 2.6vw, 48px)",
          flexWrap: "wrap",
        }}
      >
        {navItems.map((item, _index) => (
          <Link
            key={item.id}
            component="button"
            onClick={() => {
              if (item.id === "way-of-life") {
                navigate("/wayoflife");
                return;
              }

              navigateToSection(item.id);
            }}
            underline="none"
            sx={{
              color: "text.primary",
              fontFamily: (theme) =>
                theme.imu.typography.fontFamilies.secondary,
              fontSize: "16px",
              lineHeight: 1.2,
              letterSpacing: "0.2px",
              textDecoration: activeTab === item.id ? "underline" : "none",
              textDecorationThickness:
                activeTab === item.id ? "2px" : undefined,
              textUnderlineOffset: activeTab === item.id ? "8px" : undefined,
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      <Box
        sx={{
          display: "inline-flex",
          justifyContent: { xs: "center", lg: "flex-end" },
        }}
      >
        <IMUButton
          text="CONTACT US"
          tone="primaryBlue"
          onClick={() => {
            navigateToSection("contact");
          }}
          sx={{ minWidth: "164px", fontSize: "16px", height: "40px" }}
        />
      </Box>
    </Box>
  );
}

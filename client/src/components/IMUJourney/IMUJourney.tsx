import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FadeInView } from "../ui/FadeInView";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TabContent {
  narrativeTitle?: string;
  narrative: string;
  narrativeFooter?: string;
  timeline: TimelineItem[];
}

const journeyData: Record<string, TabContent> = {
  crisis: {
    narrativeTitle: "2016 - 2018 · Demonetization. Collapse. A gap nobody could fill.",
    narrative: "Demonetization hit without warning. The promoter group abroad decided to exit. Outsourcing service to local vendors seemed like the answer — until transparency vanished overnight. PM visits logged but never done. Spare parts lost. The brand quietly corroding. But inside the chaos was a question nobody had asked.",
    narrativeFooter: "\"If there is no pan-India service provider why can't we be that?\"",
    timeline: [
      {
        year: "2016",
        title: "Demonetization strikes",
        description:
          "India's demonetization freezes banking overnight. Revenue collapses. The promoter group based abroad decides to exit the Indian business entirely.",
      },
      {
        year: "2017",
        title: "Outsourcing fails",
        description:
          "The team outsources service to local and regional vendors. Transparency vanishes — PM visits logged but never done, spare parts untraceable, quality in freefall.\n\nNo single vendor covers all of India. The gap everyone complained about turns out to be the opportunity — become the pan-India service network themselves.",
      },
      {
        year: "2018",
        title: "First OEM: CRISPO",
        description:
          "CRISPO becomes the first external OEM customer. Bank of India asks IMU to service kiosks they didn't even sell. A new business model clicks into place.",
      },
    ],
  },
  values: {
    narrativeTitle: "Values shape decisions. In chaos, they become the compass.",
    narrative: "When everything was uncertain, they chose to build on principles that could survive anything.",
    timeline: [
      {
        year: "2019",
        title: "First principle",
        description: "Foundation built on trust and transparency.",
      },
      {
        year: "2020",
        title: "Resilience proven",
        description: "Team and systems survive pandemic pressure test.",
      },
      {
        year: "2021",
        title: "Network expands",
        description:
          "Pan-India reach achieved through disciplined vendor partnerships.",
      },
    ],
  },
  movement: {
    narrativeTitle: "Movement is momentum. From crisis to culture.",
    narrative: "What started as survival became a deliberate choice to lead with culture at the center.",
    timeline: [
      {
        year: "2022",
        title: "Culture codified",
        description: "Happy I. Happy U. principles become organizational DNA.",
      },
      {
        year: "2023",
        title: "Scaled impact",
        description:
          "Multi-hundred engineer team operating with unified values.",
      },
      {
        year: "2024",
        title: "Category leader",
        description:
          "IMU Way recognized as differentiator in competitive market.",
      },
    ],
  },
};

const tabColors = {
  crisis: { bg: "#D4E4F7", border: "#234083" }, // Blue
  values: { bg: "#D9E8DB", border: "#648F6C" }, // Green
  movement: { bg: "#F5E8DC", border: "#BD5201" }, // Orange
};

export function IMUJourney() {
  const [activeTab, setActiveTab] = useState<"crisis" | "values" | "movement">(
    "crisis",
  );

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "crisis" | "values" | "movement",
  ) => {
    setActiveTab(newValue);
  };

  const currentData = journeyData[activeTab];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>
        {/* Heading */}
        <FadeInView direction="up">
          <Typography
            sx={{
              fontFamily: (theme) => theme.imu.typography.fontFamilies.primary,
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#1E2330",
              mb: { xs: 6, md: 8 },
            }}
          >
            IMU Way Journey
          </Typography>
        </FadeInView>

        {/* Tabs */}
        <FadeInView direction="up" delay={0.1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 6, md: 8 },
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTab-root": {
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.primary,
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: "2%",
                  textTransform: "none",
                  minWidth: "auto",
                  px: 3,
                  py: 1.5,
                  mx: 1,
                  border: "2px solid transparent",
                  borderRadius: "8px",
                  backgroundColor: "#F0F0F0",
                  color: "#6A6A6A",
                  transition: "all 0.3s ease",
                  "&.Mui-selected": {
                    backgroundColor: tabColors[activeTab].bg,
                    color: "#1E2330",
                    borderColor: tabColors[activeTab].border,
                  },
                  "&:hover": {
                    backgroundColor: "#E8E8E8",
                  },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab label="The Crisis" value="crisis" />
              <Tab label="The Values" value="values" />
              <Tab label="The Movement" value="movement" />
            </Tabs>
          </Box>
        </FadeInView>

        {/* Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 6, md: 8, lg: 10 },
            alignItems: "flex-start",
          }}
        >
          {/* Left Column - Narrative */}
          <Box>
            <FadeInView direction="up" delay={0.2}>
              {currentData.narrativeTitle && (
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "140%",
                    color: "#1E2330",
                    mb: 3,
                  }}
                >
                  {currentData.narrativeTitle}
                </Typography>
              )}
              
              <Typography
                sx={{
                  fontFamily: (theme) =>
                    theme.imu.typography.fontFamilies.secondary,
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: "2%",
                  color: "#717171",
                  whiteSpace: "pre-line",
                  mb: currentData.narrativeFooter ? 3 : 0,
                }}
              >
                {currentData.narrative}
              </Typography>

              {currentData.narrativeFooter && (
                <Typography
                  sx={{
                    fontFamily: (theme) =>
                      theme.imu.typography.fontFamilies.secondary,
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "150%",
                    color: "#1E2330",
                  }}
                >
                  {currentData.narrativeFooter}
                </Typography>
              )}
            </FadeInView>
          </Box>

          {/* Right Column - Timeline */}
          <Box
            sx={{
              position: "relative",
              pl: { xs: 0, lg: 4 },
            }}
          >
            {/* Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                left: "11px",
                top: 0,
                bottom: 15,
                width: "2px",
                backgroundColor: "#E0E0E0",
                display: { xs: "block", lg: "block" },
              }}
            />

            {/* Timeline Items */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 5, md: 6 },
              }}
            >
              {currentData.timeline.map((item, index) => (
                <FadeInView key={index} direction="up" delay={0.3 + index * 0.1}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      position: "relative",
                    }}
                  >
                    {/* Circle Marker */}
                    <Box
                      sx={{
                        width: "24px",
                        height: "24px",
                        minWidth: "24px",
                        backgroundColor: "#D9D9D9",
                        border: "1px solid #1E2330",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        //   mt: 0.5,
                        ml: -4,
                      }}
                    />

                    {/* Timeline Content */}
                    <Box sx={{ pb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: (theme) =>
                            theme.imu.typography.fontFamilies.primary,
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "150%",
                          letterSpacing: "2%",
                          color: "#1E2330",
                          mb: 1,
                        }}
                      >
                        {item.year} {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: (theme) =>
                            theme.imu.typography.fontFamilies.secondary,
                          fontWeight: 500,
                          fontSize: "20px",
                          lineHeight: "150%",
                          letterSpacing: "2%",
                          color: "#6A6A6A",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </FadeInView>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Quote Section */}
        <FadeInView direction="up" delay={0.2}>
          <Box
            sx={{
              backgroundColor: "#FFECDE66",
              border: "1px solid #FFE4E4",
              borderRadius: "10px",
              px: { xs: 3, md: 5 },
              py: { xs: 2.5, md: 2.5 },
              mt: { xs: 8, md: 10 },
              maxWidth: "846px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontWeight: 300,
                fontSize: "20px",
                lineHeight: "150%",
                letterSpacing: "2%",
                color: "#6A6A6A",
                fontStyle: "italic",
              }}
            >
              "We didn't build IMU to fix a business problem. We built it because
              the people doing the hardest work deserved something real to believe
              in."
            </Typography>

            <Typography
              sx={{
                fontFamily: (theme) =>
                  theme.imu.typography.fontFamilies.secondary,
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "150%",
                letterSpacing: "2%",
                color: "#1E2330",
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

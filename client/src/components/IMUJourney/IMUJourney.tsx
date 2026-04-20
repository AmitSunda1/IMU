import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";
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
    narrativeTitle: "2018 – 2022 · Three words. A pandemic. A ₹500 lesson.",
    narrative: "In a brainstorming session with the auditor-mentor, the team searched for values that felt human — not corporate. Simple words. Words about service. Three emerged. And when they looked at the business they were building — Install, Maintain, Upgrade — the abbreviation said it all.",
    narrativeFooter: "\"I will service your machine as if you would.\"",
    timeline: [
      {
        year: "2018",
        title: "Care is discovered",
        description: "Service is fundamentally human. Care is not about contracts or SLAs — it is about treating every machine as if it belongs to you, and every engineer as someone worth protecting.",
      },
      {
        year: "2018",
        title: "Fair is named",
        description: "Transparency with every stakeholder — the engineer on the ground, the customer waiting, the partner trusting you. Fair means no hidden shortcuts and no unfair burdens.",
      },
      {
        year: "2018",
        title: "Dare is chosen",
        description: "Service any brand, any machine. Break the loyalty to the logo. Engineers who only serviced one brand were asked to dare — to see the machine, not the manufacturer.",
      },
      {
        year: "2018",
        title: "IMU is born",
        description: "Install. Maintain. Upgrade. The abbreviation surfaces like a gift — a name that is also a mission. IMU is presented to the Netherlands promoter group and approved as the survival strategy.",
      },
      {
        year: "2019",
        title: "Manipal Technologies partnership",
        description: "Manipal wins major bank tenders and has no service team. IMU steps in — a perfect demonstration of Dare at scale, servicing machines and customers far beyond the original brand.",
      },
      {
        year: "2020",
        title: "COVID — values under fire",
        description: "Engineers cycle and walk to bank branches through lockdown. 3,000 kiosks installed mid-pandemic. Not a single frontline salary is cut — maximum deductions fall on management. Care and Fair made real.",
      },
      {
        year: "2022",
        title: "The ₹500 lesson",
        description: "An engineer passes leads to a dealer offering ₹1,200 — the company paid only ₹500. Instead of firing him, the team listens. They fly to four cities and redesign profit-sharing with the people doing the work. 80% to field. 20% to back office. Everyone benefits from every sale.",
      },
    ],
  },
  movement: {
    narrativeTitle: "The Movement",
    narrative: "When a promoter tried to claim IMU as proprietary, the founder chose liberation instead. In October 2023, everyone who had shaped IMU gathered in one room and set it free. No one owns it. Any business, any person who believes in Care, Fair, Dare — can adopt it.",
    narrativeFooter: "\"The journey may be long, but the spirit is strong.\"",
    timeline: [
      {
        year: "Mar 2023",
        title: "Setback and refocus",
        description: "Manipal Technologies exits. A major setback — but it forces the team back to fundamentals. Culture over contracts. Values before volume. The processes that eroded during COVID are rebuilt.",
      },
      {
        year: "Oct 2023",
        title: "IMU is set free",
        description: "The founder gathers everyone who shaped IMU — engineers, managers, back office — into one room. IMU is collectively owned and set free. No one person holds it. No company can claim it.",
      },
      {
        year: "2024",
        title: "Culture deepens",
        description: "Regular training in soft skills, human skills and sales. Zonal executives support field staff across four zones. The three improvement areas — process, mindset, culture — are worked on together.",
      },
      {
        year: "2025",
        title: "The vision ahead",
        description: "An engineer in every district of India. 736 districts. Jobs everywhere. And at the end of a machine's life — an Antim Sanskar — responsible e-waste processing that returns every component to the earth with dignity.",
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

  const sectionRef = useRef<HTMLElement>(null);

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "crisis" | "values" | "movement",
  ) => {
    setActiveTab(newValue);
    
    // Scroll to the top of the section when tab changes
    if (sectionRef.current) {
      const yOffset = -20; // Slight offset to account for sticky header breathing room
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentData = journeyData[activeTab];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ width: "min(94%, 1240px)", mx: "auto" }}>
        {/* Sticky Header Group: Title & Tabs */}
        <Box
          sx={{
            position: "sticky",
            top: "80px",
            zIndex: 10,
            backgroundColor: "#ffffff",
            pt: 2,
            pb: 2,
            // Negative margins to ensure background mask spans the container width
            mx: { xs: -2, md: -3 },
            px: { xs: 2, md: 3 },
          }}
        >
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
                mb: { xs: 4, md: 6 },
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
        </Box>

        {/* Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 6, md: 8, lg: 10 },
            alignItems: "flex-start",
            mt: 6,
          }}
        >
          {/* Left Column - Narrative */}
          <Box 
            key={activeTab}
            sx={{
              position: { xs: "relative", lg: "sticky" },
              top: { xs: 0, lg: "260px" },
              alignSelf: "start",
            }}
          >
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
              key={activeTab}
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
                        backgroundColor: tabColors[activeTab].bg,
                        border: `1px solid ${tabColors[activeTab].border}`,
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

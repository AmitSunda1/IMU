import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";

interface WhatIsIMUCardProps {
  id: number;
  onVisible: (id: number) => void;
  children: React.ReactNode;
  isActive: boolean;
  toneColor?: string;
  isTransparentSpacer?: boolean;
  variant?: "light" | "dark";
  bgColor?: string;
}

export function WhatIsIMUCard({ id, onVisible, children, isActive, toneColor, isTransparentSpacer, variant = "light", bgColor }: WhatIsIMUCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the center of the card crosses the center of the viewport
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      {
        root: null,
        // Triggers when the item is within the middle 40% of the screen
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: "100%",
        minHeight: isTransparentSpacer ? "10vh" : "45vh", // reduced height for spacers to pull content up
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "720px",
        pointerEvents: isTransparentSpacer ? "none" : "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: isTransparentSpacer ? "transparent" : (bgColor || (variant === "dark" ? "#1E2330" : "#fdfdfd")),
          border: isTransparentSpacer ? "none" : (variant === "dark" || bgColor ? "none" : "1px solid rgba(0,0,0,0.06)"),
          borderRadius: isTransparentSpacer ? 0 : "24px",
          p: isTransparentSpacer ? 0 : { xs: 3, md: 5 },
          boxShadow: isTransparentSpacer ? "none" : (variant === "dark" || bgColor ? "0px 20px 60px rgba(0,0,0,0.08)" : "0px 10px 40px rgba(0,0,0,0.06)"),
          width: "100%",
          mx: "auto",
          transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease",
          transform: isActive && !isTransparentSpacer ? "scale(1.02) translateY(-4px)" : "scale(0.98) translateY(0)",
          opacity: isActive || isTransparentSpacer ? 1 : 0.6,
        }}
      >
        {!isTransparentSpacer && toneColor && (
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: "40%",
              left: "-50%",
              width: "85%",
              aspectRatio: "1 / 1",
              borderRadius: "9999px",
              background: toneColor,
              filter: "blur(64px)",
              opacity: 0.2,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}
        {!isTransparentSpacer && (
          <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}

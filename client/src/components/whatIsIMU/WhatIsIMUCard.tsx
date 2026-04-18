import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";

interface WhatIsIMUCardProps {
  id: number;
  onVisible: (id: number) => void;
  children: React.ReactNode;
  isActive: boolean;
}

export function WhatIsIMUCard({ id, onVisible, children, isActive }: WhatIsIMUCardProps) {
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
        minHeight: "45vh", // gives ample scroll breathing room
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:"720px"
      }}
    >
      <Box
        sx={{
          background: "#ffffff",
          borderRadius: "24px",
          p: { xs: 3, md: 5 },
          boxShadow: "0px 10px 40px rgba(0,0,0,0.06)",
          width: "100%",
          // maxWidth: "600px",
          mx: "auto",
          transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease",
          transform: isActive ? "scale(1.02) translateY(-4px)" : "scale(0.98) translateY(0)",
          opacity: isActive ? 1 : 0.6,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

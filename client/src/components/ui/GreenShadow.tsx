import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";

type ShadowPositionProps = {
  top?: CSSProperties["top"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  position?: CSSProperties["position"];
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
};

const GREEN_SHADOW_SX = {
  position: "absolute",
  width: "1338px",
  height: "312px",
  opacity: 0.2,
  borderRadius: "9999px",
  backgroundColor: "#A1F78D",
  filter: "blur(64px)",
  pointerEvents: "none",
  flexShrink: 0,
} as const;

export function GreenShadow({
  top,
  right,
  bottom,
  left,
  position = "absolute",
  className,
  style,
  sx,
}: ShadowPositionProps) {
  const mergedSx: SxProps<Theme> = [
    GREEN_SHADOW_SX,
    { top, right, bottom, left, position },
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ];

  return <Box aria-hidden className={className} style={style} sx={mergedSx} />;
}

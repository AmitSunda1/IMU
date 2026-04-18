import Button, { type ButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme as MuiTheme } from "@mui/material/styles";
import type { IMUButtonTone } from "../../theme";

type IMUButtonProps = Omit<ButtonProps, "color"> & {
  text?: string;
  tone?: IMUButtonTone;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
};

export function IMUButton({
  text,
  tone = "primaryBlue",
  bgColor,
  textColor,
  borderColor,
  className,
  children,
  sx,
  variant,
  ...props
}: IMUButtonProps) {
  const theme = useTheme();
  const toneConfig = theme.imu.components.button[tone];

  const buttonSx: SxProps<MuiTheme> = {
    backgroundColor: bgColor ?? toneConfig.background,
    color: textColor ?? toneConfig.color,
    borderColor: borderColor ?? toneConfig.borderColor,
    borderWidth: toneConfig.borderWidth,
    borderStyle: toneConfig.borderStyle,
    borderRadius: toneConfig.borderRadius,
    padding: toneConfig.padding,
    minWidth: "fit-content",
    boxShadow: "none",
    fontFamily: theme.imu.typography.fontFamilies.primary,
    fontSize: theme.imu.typography.fontSizes.caption,
    fontWeight: 700,
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    lineHeight: 1,
    "&:hover": {
      backgroundColor: toneConfig.hover.background,
      borderColor: toneConfig.hover.borderColor,
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: toneConfig.active.background,
      borderColor: toneConfig.active.borderColor,
      boxShadow: "none",
    },
    "&.Mui-disabled": {
      backgroundColor: toneConfig.disabled.background,
      color: toneConfig.disabled.color,
      borderColor: toneConfig.disabled.borderColor,
    },
  };

  const mergedSx: SxProps<MuiTheme> = Array.isArray(sx)
    ? [buttonSx, ...sx]
    : [buttonSx, sx];

  return (
    <Button
      variant={variant ?? "outlined"}
      className={className}
      sx={mergedSx}
      {...props}
    >
      {children ?? text}
    </Button>
  );
}

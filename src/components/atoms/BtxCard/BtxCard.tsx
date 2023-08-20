import React from "react";
// import '../../common.css';
import "./BtxCard.css";

interface BtxCardProps {
  children: any;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the label be?
   */
  size?: "small" | "medium" | "large";
  /**
   * BtxCard contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BtxCard = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxCardProps) => {
  const mode = primary ? "btx-card--primary" : "btx-card--secondary";
  return (
    <div
      className={["btx-card", `btx-card--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </div>
  );
};

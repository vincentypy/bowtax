import React from "react";
// import '../../common.css';
import "./BtxHeading.css";

interface BtxHeadingProps {
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
   * BtxHeading contents
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
export const BtxHeading = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxHeadingProps) => {
  const mode = primary ? "btx-heading--primary" : "btx-heading--secondary";
  return (
    <h2
      className={["btx-heading", `btx-heading--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </h2>
  );
};

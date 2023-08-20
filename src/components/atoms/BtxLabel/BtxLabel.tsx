import React from "react";
// import '../../common.css';
import "./BtxLabel.css";

interface BtxLabelProps {
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
   * How large should the label be?
   */
  level?: "normal" | "subsection" | "section";
  /**
   * BtxLabel contents
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
export const BtxLabel = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  level = "normal",
  label,
  ...props
}: BtxLabelProps) => {
  const mode = primary ? "btx-label--primary" : "btx-label--secondary";
  return (
    <label
      htmlFor={""}
      className={[
        "btx-label",
        `btx-label--${size}`,
        `btx-label--${level}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </label>
  );
};

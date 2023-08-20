import React from "react";
// import '../../common.css';
import "./BtxRow.css";

interface BtxRowProps {
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
   * BtxRow contents
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
export const BtxRow = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxRowProps) => {
  const mode = primary ? "btx-row--primary" : "btx-row--secondary";
  return (
    <div
      className={["btx-row", `btx-row--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </div>
  );
};

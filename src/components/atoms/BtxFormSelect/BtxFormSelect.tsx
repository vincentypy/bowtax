import React from "react";
// import '../../common.css';
import "./BtxFormSelect.css";

interface BtxFormSelectProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * BtxFormSelect contents
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
export const BtxFormSelect = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxFormSelectProps) => {
  const mode = primary ? "btx-select--primary" : "btx-select--secondary";
  return (
    <select
      className={["btx-select", `btx-select--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    ></select>
  );
};

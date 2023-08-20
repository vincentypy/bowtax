import React from "react";
// import '../../common.css';
import "./BtxButton.css";

interface BtxButtonProps {
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
   * BtxButton contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const BtxButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  ...props
}: BtxButtonProps) => {
  const mode = primary ? "btx-button--primary" : "btx-button--secondary";
  return (
    <button
      type="button"
      className={["btx-button", `btx-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

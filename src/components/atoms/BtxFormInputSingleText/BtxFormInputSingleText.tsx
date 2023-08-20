import React from "react";
// import '../../common.css';
import "./BtxFormInputSingleText.css";

interface BtxFormInputSingleTextProps {
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
   * BtxFormInputSingleText contents
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
export const BtxFormInputSingleText = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxFormInputSingleTextProps) => {
  const mode = primary
    ? "btx-input-single--primary"
    : "btx-input-single--secondary";
  return (
    <input
      type="text"
      className={["btx-input-single", `btx-input-single--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    />
  );
};

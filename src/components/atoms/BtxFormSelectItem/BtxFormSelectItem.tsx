import React from "react";
// import '../../common.css';
import "./BtxFormSelectItem.css";

interface BtxFormSelectItemProps {
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
   * BtxFormSelectItem contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  min: number;
}

/**
 * Primary UI component for user interaction
 */
export const BtxFormSelectItem = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxFormSelectItemProps) => {
  const mode = primary ? "btx-option--primary" : "btx-option--secondary";
  return (
    <option
      value="number"
      className={["btx-option", `btx-option--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    ></option>
  );
};

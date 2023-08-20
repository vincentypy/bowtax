import React from "react";

import { Tooltip } from "react-tooltip";
import InfoIcon from '@mui/icons-material/Info';

// import '../../common.css';
import "./BtxTooltip.css";

interface BtxTooltipProps {
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
  id: string;
  /**
   * BtxTooltip contents
   */
  label: any;
  place?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BtxTooltip = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  id,
  label,
  place,
  ...props
}: BtxTooltipProps) => {
  const mode = primary ? "btx-tooltip--primary" : "btx-tooltip--secondary";
  const _id = `clickable-${id}`;
  return (
    <>
      <button
        id={_id}
        className={["btx-tooltip", `btx-tooltip--${size}`, mode].join(" ")}
        {...props}
      >
        {
          label ? label
          : <InfoIcon />
        }
      </button>
      <Tooltip
        className={"btx-tooltip-clickable"}
        anchorSelect={`#${_id}`}
        clickable
        place={place}
      >
        {children}
      </Tooltip>
    </>
  );
};

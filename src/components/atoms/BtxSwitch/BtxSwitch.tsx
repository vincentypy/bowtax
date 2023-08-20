import React, { useCallback, useState } from "react";
import Switch from "@mui/material/Switch";
// import '../../common.css';
import "./BtxSwitch.css";

interface BtxSwitchProps {
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
   * BtxSwitch contents
   */
  label?: string;
  label1?: string | null;
  label2?: string | null;
  value?: any;
  trackLabel1?: string;
  trackLabel2?: string;
  /**
   * Optional change handler
   */
  onChange?: (e: any, checked: boolean) => void;
}

/**
 * Primary UI component for user interaction
 */
export const BtxSwitch = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  label1,
  label2,
  value,
  trackLabel1,
  trackLabel2,
  onChange,
  ...props
}: BtxSwitchProps) => {
  const mode = primary ? "btx-switch--primary" : "btx-switch--secondary";

  // const [checked, setChecked] = useState<boolean>(false);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (checked) {
        const a = "a";
      }
      if (onChange) {
        onChange(e, checked);
      }
    },
    [onChange]
  );

  return (
    <span>
      <label htmlFor="btx-switch">{label1}</label>
      <input type="checkbox" id="btx-switch" hidden />
      <Switch
        checked={value}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          width: 52,
          height: 26,
          padding: 0,
          margin: "0 4px",
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: "2px",
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(26px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 0.8,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
            },
            '&.Mui-disabled + .MuiSwitch-track': {
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            opacity: 1,
            '&:before, &:after': {
              content: (trackLabel1 && trackLabel2) ? (value ? trackLabel1 : trackLabel2) :'""',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 16,
              height: 16,
              color: value ? "#FFF" : "#FFF"
            },
            '&:before': {
              left: 8,
            },
            '&:after': {
              right: 8,
            },
          },
        }}
      />
      <label htmlFor="btx-switch">{label2}</label>
    </span>
  );
};

import React, { useCallback, useState, useRef, useContext } from "react";
// import '../../common.css';
// import "./BtxCalculatorOut.css";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import { UserInputContextProvider } from '../../../context/UserInput';

import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import { RawHTML } from "../../hkird";
import { showResult } from "./Mapping";
import { BtxCard } from "../../atoms/BtxCard/BtxCard";
import { BtxHeading } from "../../atoms/BtxHeading/BtxHeading";

const BtxStepLabel = styled(StepLabel)`
  svg.Mui-active {
    color: var(--secondary-brand-200);
  }

  svg.Mui-completed {
    color: var(--secondary-brand-100);
  }
`;

interface BtxCalculatorOutProps {
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
   * BtxCalculatorOut contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  sOut: any;
  isMarried: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const BtxCalculatorOut = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  sOut,
  isMarried,
  ...props
}: BtxCalculatorOutProps) => {
  const { t, i18n: X } = useTranslation();

  const mode = primary
    ? "btx-calculator--primary"
    : "btx-calculator--secondary";

  const [lang, setLang] = useState<string>("zh-HK");
  const [isLoaded, setIsLoaded] = useState(false);

  const langSelector = useCallback(
    (e: CustomEvent) => {
      if (lang === "zh-HK") {
        setLang("en");
        i18n.changeLanguage("en");
      } else {
        setLang("zh-HK");
        i18n.changeLanguage("zh-HK");
      }
    },
    [i18n, lang, setLang]
  );




  return (
    <>
      <div
        className={["btx-calculator", `btx-calculator--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor, 'display': sOut.length !== 0 ? 'block': 'none' }}
        {...props}
      >
        <BtxCard label="result">
          <BtxHeading label={t("Results")} />

          <pre>
            23/24 （課稅年度）
            {/* <br />
            你原要交： {resultTax}元<br />
            獲退稅*： {refundTax}元<br />
            實際應繳： {parseFloat(String(resultTax - refundTax)).toFixed(2)}
            元<br />
            *退稅尚待有關法例通過
            <br /> */}
          </pre>
          <div>
          {
            showResult(sOut, (window as any).STCMainRV, (window as any).YrEnd, false, sOut.length !== 0 && isMarried)
          }
          </div>
        </BtxCard>
      </div>

      {/* {
        "X XX XX XX XX XX XX X"
      }
      {
        JSON.stringify(sOut)
      } */}
      {/* <h1>
        {
          sOut.length !== 0 && (window as any).STCMainRV
        }
      </h1> */}
      {/* <p>
        {
          isMarried ? "married" : "single"
        }
      </p> */}
    </>
  );
};

import React, { useCallback, useState, useRef, useMemo } from "react";
// import '../../common.css';
import "./BtxCalculator.css";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import { UserInputContextProvider } from '../../../context/UserInput';

import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import { RawHTML } from "../../hkird";
import { BtxCalculatorOut } from "./BtxCalculatorOut";
import { resultCore } from "./Mapping";

(window as any).BASEURL = (window as any).BASEURL || "https://lifeinsurancehk.com/wp-json/contact-form-7/v1/contact-forms/2333/feedback" || "https://www.bowtie.com.hk/blog/wp-json/contact-form-7/v1/contact-forms/%3CFORM_ID%3E/feedback";

const BtxStepLabel = styled(StepLabel)`
  svg.Mui-active {
    color: var(--secondary-brand-200);
  }

  svg.Mui-completed {
    color: var(--secondary-brand-100);
  }
`;

interface BtxCalculatorProps {
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
   * BtxCalculator contents
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
export const BtxCalculator = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BtxCalculatorProps) => {
  const { t, i18n: X } = useTranslation();

  const mode = primary
    ? "btx-calculator--primary"
    : "btx-calculator--secondary";

  const [lang, setLang] = useState<string>("zh-HK");

  const [activeStep, setActiveStep] = React.useState(0);

  const [isMarried, setIsMarried] = useState<boolean>(true);

  const [sOut, setSOut] = useState<any[]>([]);

  const inputRef = useRef<any>({});
  const outputRef = useRef();

  // const [dFState, setDfState] = useState<any>({});
  // const dF = new Proxy(inputRef.current, {});

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

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const handleNext = useCallback((e: any) => {
    setActiveStep((step) => step + 1);
  }, []);
  const handleBack = useCallback((e: any) => {
    setActiveStep((step) => step - 1);
  }, []);

  const cachedMapped = useMemo(() => {
    const {mapped} = resultCore(sOut, (window as any).STCMainRV, (window as any).YrEnd, false, sOut.length !== 0 && isMarried);
    return mapped;
  }, [sOut, isMarried]);

  const submitData = useCallback((data: any) => {
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => !key.startsWith('set')));
    console.log(`submitData: `, filteredData);

    const formData = new FormData();
    Object.keys(filteredData).map((key: string) => {
      formData.append(key, `${filteredData[key] === -99999999999 ? 0 : ("" + filteredData[key]).replaceAll(",", "")}`);
    });

    console.log(`sOut: `, cachedMapped);
    formData.append('result', JSON.stringify(cachedMapped));

    (async () => {
      try {
        const response = await fetch((window as any).BASEURL, {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        console.log(`submitData result: ${JSON.stringify(await response.json())}`);
      } catch (err) {
        console.log(`[Error] submitData: ${JSON.stringify(err)}`);
      }
    })();
  }, [sOut]);



  return (
    <>
      {/* <div className="debug">{`selfIncome: ${selfIncome}`}</div> */}

      <div
        style={{
          "maxHeight": isLoaded ? "0" : "none",
          "overflow": "hidden",
          "margin": "auto",
        }}
        className={"dark-off"}
      >
        <UserInputContextProvider>
          <RawHTML
            setIsLoaded={setIsLoaded}
            inputRef={inputRef}
            outputRef={outputRef}
            sOut={sOut}
            setSOut={setSOut}
            setIsMarried={setIsMarried}
            submitData={submitData}
          />
        </UserInputContextProvider>
      </div>

      {/* {
        JSON.stringify(sOut)
      }
      {
        // S:  245687 5368
      }
      <span>你 應 繳 的 總 稅 款 (稅 款 寬 免 前): {sOut[30]}</span> */}


      <BtxCalculatorOut label="out" sOut={sOut} isMarried={isMarried} />

    </>
  );
};

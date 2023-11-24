import React, { useCallback, useState, useRef, useContext, useEffect } from "react";
// import '../../common.css';
import "./BtxCalculator.css";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import { BtxHeading } from "../../atoms/BtxHeading/BtxHeading";
import { BtxCard } from "../../atoms/BtxCard/BtxCard";
import { BtxSwitch } from "../../atoms/BtxSwitch/BtxSwitch";
import { BtxFormInputNumber, FormatMoney } from "../../atoms/BtxFormInputNumber/BtxFormInputNumber";
import { BtxLabel } from "../../atoms/BtxLabel/BtxLabel";
import { BtxRow } from "../../atoms/BtxRow/BtxRow";
import { BtxButton } from "../../atoms/BtxButton/BtxButton";
import { RawHTML } from "../../hkird";
import { UserInputContext } from "../../../context/UserInput";
import { BtxTooltip } from "../../atoms/BtxTooltip/BtxTooltip";

(window as any).isDebug = false;


function sumDeduct(props: any) {
  let sum = 0;
  Object.keys(props).map((key, idx) => {
    // console.log(`${key} => ${props[key]} `);
    const trimmedStr = `${props[key]}`.replace(",", "");
    if (trimmedStr === "-99999999999") {
      return
    }
    const val = parseFloat(trimmedStr);
    if (val != 0 && val != -99999999999) {
      if (val < 0) {
        sum = sum - val;
      } else {
        sum = sum + val;
      }
    }
    return val
  });

  return sum;
}

const BtxStepLabel = styled(StepLabel)`
  svg.Mui-active {
    color: var(--progress-color);
  }

  svg.Mui-completed {
    color: var(--secondary-brand-100);
  }

  .Mui-disabled svg.MuiStepIcon-root {
    color: var(--pending-color);
    .MuiStepIcon-text {
      fill: rgba(0, 0, 0, 0.6)
    }
  }

  .MuiStepLabel-label {
    color: var(--text-color-primary);
  }

  .MuiStepLabel-label.Mui-active {
    color: var(--text-color-primary);
  }
`;

const BtxSelfSpouseHeader = ({t, isMarried}: any) => {
  return (<div className={"hidden-md"}>
  <BtxLabel label="" level="subsection" sx={{width: 300}}>{" "}</BtxLabel>
  <BtxLabel label="" level="subsection">{t("selfDeductionColumn")}</BtxLabel>
  {isMarried && (
    <div className="deduct-title">
      <BtxLabel label="" level="subsection">{t("spouseDeductionColumn")}</BtxLabel>
    </div>
  )}
  <br />
</div>)
};

interface BtxCalculatorFormProps {
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
   * BtxCalculatorForm contents
   */
  label: string;
  inputRef: any;
  isMarriedState: boolean;
  performToggleMarriage: any;
  doChecking: any;
  resetForm: any;
  doCalculation: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BtxCalculatorForm = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  inputRef,
  isMarriedState,
  performToggleMarriage,
  doChecking,
  resetForm,
  doCalculation,
  ...props
}: BtxCalculatorFormProps) => {
  const { t, i18n: X } = useTranslation();

  const mode = primary
    ? "btx-calculator--primary"
    : "btx-calculator--secondary";

  const [lang, setLang] = useState<string>("zh-HK");

  const [activeStep, setActiveStep] = React.useState(0);

  const [isMarried, setIsMarried] = useState<boolean>(isMarriedState);
  const [basicAllowance, setBasicAllowance] = useState<number>(132000);
  const [disabledAllowance, setDisabledAllowance] = useState<number>(75000);
  const [singParentAllowance, setSingParentAllowance] = useState<number>(132000);
  // const [selfIncome, setSelfIncome] = useState<number>(0); // T1
  // const [spouseIncome, setSpouseIncome] = useState<number>(0); // T2
  // const [selfResidence, setSelfResidence] = useState<number>(0); // T13
  // const [spouseResidence, setSpouseResidence] = useState<number>(0); // T14

  // // deduction
  // const [selfOAndE, setSelfOAndE] = useState<number>(0); // T15
  // const [spouseOAndE, setSpouseOAndE] = useState<number>(0); // T16
  // const [selfEducationExpenses, setSelfEducationExpenses] = useState<number>(0); // T5
  // const [spouseEducationExpenses, setSpouseEducationExpenses] = useState<number>(0); // T6
  // const [selfApprovedDonations, setSelfApprovedDonations] = useState<number>(0); // T3
  // const [spouseApprovedDonations, setSpouseApprovedDonations] = useState<number>(0); // T4
  // const [selfMPF, setSelfMPF] = useState<number>(0); // T11
  // const [spouseMPF, setSpouseMPF] = useState<number>(0); // T12

  // const [selfMPFV, setSelfMPFV] = useState<number>(0); // T38
  // const [spouseMPFV, setSpouseMPFV] = useState<number>(0); // T39
  // const [selfAnnuity, setSelfAnnuity] = useState<number>(0); // T40
  // const [spouseAnnuity, setSpouseAnnuity] = useState<number>(0); // T41
  // const [selfMPFV2, setSelfMPFV2] = useState<number>(0); // T380
  // const [spouseMPFV2, setSpouseMPFV2] = useState<number>(0); // T390
  // const [selfHomeLoanInterest, setSelfHomeLoanInterest] = useState<number>(0); // T7
  // const [spouseHomeLoanInterest, setSpouseHomeLoanInterest] = useState<number>(0); // T8

  // const [selfVhis, setSelfVhis] = useState<number>(0); // T34
  // const [spouseVhis, setSpouseVhis] = useState<number>(0); // T35
  // const [selfVhisRelateCount, setSelfVhisRelateCount] = useState<number>(0); // D32 [0-4]
  // const [spouseVhisRelateCount, setSpouseVhisRelateCount] = useState<number>(0); // D33 [0-4]
  // const [selfVhisRelateAmount, setSelfVhisRelateAmount] = useState<number>(0); // T36
  // const [spouseVhisRelateAmount, setSpouseVhisRelateAmount] = useState<number>(0); // T37

  // const [selfEldery, setSelfEldery] = useState<number>(0); // D18 [0-4]
  // const [spouseEldery, setSpouseEldery] = useState<number>(0); // D19 [0-4]
  
  // const [selfDisabledDependant, setSelfDisabledDependant] = useState<number>(0); // D20 [0-4]
  // const [spouseDisabledDependant, setSpouseDisabledDependant] = useState<number>(0); // D21 [0-4]

  // const [selfResidentialAmount, setSelfResidentialAmount] = useState<number>(0); // T9
  // const [spouseResidentialAmount, setSpouseResidentialAmount] = useState<number>(0); // T10

  // // allowance
  // const [selfPDA, setSelfPDA] = useState<boolean>(false); // D15a
  // const [spousePDA, setSpousePDA] = useState<boolean>(false); // D15b

  // const [childBornThisYr, setChildBornThisYr] = useState<number>(0); // D3a [0-9]
  // const [disabledChildBornThisYr, setDisabledChildBornThisYr] = useState<number>(0); // D4a [0-9]
  // const [childBornOtherYr, setChildBornOtherYr] = useState<number>(0); // D3 [0-9]
  // const [disabledChildBornOtherYr, setDisabledChildBornOtherYr] = useState<number>(0); // D4 [0-9]

  // const [singleParentAllowance, setSingleParentAllowance] = useState<boolean>(false); // D22
  
  // const [dependentBrothersSis, setDependentBrothersSis] = useState<number>(0); // D5
  // const [disabledDependentBrothersSis, setDisabledDependentBrothersSis] = useState<number>(0); // D6

  // // Parents
  // const [dependentparentsResided, setDependentparentsResided] = useState<number>(0); // D7 [0-4]
  // const [disabledDependentparentsResided, setDisabledDependentparentsResided] = useState<number>(0); // D8 [0-4]
  // const [dependentparentsNotResided, setDependentparentsNotResided] = useState<number>(0); // D9 [0-4]
  // const [disabledDependentparentsNotResided, setDisabledDependentparentsNotResided] = useState<number>(0); // D10 [0-4]
  // const [dependentparents5560Resided, setDependentparents5560Resided] = useState<number>(0); // D16 [0-4]
  // const [dependentparents5560NotResided, setDependentparents5560NotResided] = useState<number>(0); // D17 [0-4]

  // // Spouse Disable
  // const [spouseDisabledDependent, setSpouseDisabledDependent] = useState<boolean>(false); // D15

  const {
    // lang, setLang,

    // activeStep, setActiveStep,

    selfIncome, setSelfIncome,
    spouseIncome, setSpouseIncome,
    selfResidence, setSelfResidence,
    spouseResidence, setSpouseResidence,

      // deduction
    selfOAndE, setSelfOAndE,
    spouseOAndE, setSpouseOAndE,
    selfEducationExpenses, setSelfEducationExpenses,
    spouseEducationExpenses, setSpouseEducationExpenses,
    selfApprovedDonations, setSelfApprovedDonations,
    spouseApprovedDonations, setSpouseApprovedDonations,
    selfMPF, setSelfMPF,
    spouseMPF, setSpouseMPF,

    selfMPFV, setSelfMPFV,
    spouseMPFV, setSpouseMPFV,
    selfAnnuity, setSelfAnnuity,
    spouseAnnuity, setSpouseAnnuity,
    selfMPFV2, setSelfMPFV2,
    spouseMPFV2, setSpouseMPFV2,
    selfHomeLoanInterest, setSelfHomeLoanInterest,
    spouseHomeLoanInterest, setSpouseHomeLoanInterest,

    selfVhis, setSelfVhis,
    spouseVhis, setSpouseVhis,
    selfVhisRelateCount, setSelfVhisRelateCount,
    spouseVhisRelateCount, setSpouseVhisRelateCount,
    selfVhisRelateAmount, setSelfVhisRelateAmount,
    spouseVhisRelateAmount, setSpouseVhisRelateAmount,

    selfEldery, setSelfEldery,
    spouseEldery, setSpouseEldery,
      
    selfDisabledDependant, setSelfDisabledDependant,
    spouseDisabledDependant, setSpouseDisabledDependant,

    selfResidentialAmount, setSelfResidentialAmount,
    spouseResidentialAmount, setSpouseResidentialAmount,

      // allowance
    selfPDA, setSelfPDA,
    spousePDA, setSpousePDA,

    childBornThisYr, setChildBornThisYr,
    disabledChildBornThisYr, setDisabledChildBornThisYr,
    childBornOtherYr, setChildBornOtherYr,
    disabledChildBornOtherYr, setDisabledChildBornOtherYr,

    singleParentAllowance, setSingleParentAllowance,
      
    dependentBrothersSis, setDependentBrothersSis,
    disabledDependentBrothersSis, setDisabledDependentBrothersSis,

      // Parents
    dependentparentsResided, setDependentparentsResided,
    disabledDependentparentsResided, setDisabledDependentparentsResided,
    dependentparentsNotResided, setDependentparentsNotResided,
    disabledDependentparentsNotResided, setDisabledDependentparentsNotResided,
    dependentparents5560Resided, setDependentparents5560Resided,
    dependentparents5560NotResided, setDependentparents5560NotResided,

      // Spouse Disable
    spouseDisabledDependent, setSpouseDisabledDependent,
  } = useContext(UserInputContext);

  const [_holder] = useState<number>(0);

  const [resultTax, setResultTax] = useState<number>(-1);
  const [refundTax, setRefundTax] = useState<number>(-1);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [sOut, setSOut] = useState<any[]>([]);

  const outputRef = useRef();

  if (!(window as any).dF && inputRef.current) {
    (window as any).dF = new Proxy(inputRef.current, {});
  }
  let dF = (window as any).dF;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loaded) {
        (window as any).dF = new Proxy(inputRef.current, {});
        dF = (window as any).dF;
        if (dF.D3) {
          setLoaded(true);
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, [loaded, setLoaded]);
  

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

  const localResetForm = useCallback(() => {
    (window as any).isMarriedState = false;
    setIsMarried(false);

    setSelfPDA(false);
    setSpousePDA(false);
    setSingleParentAllowance(false);
    setSpouseDisabledDependent(false);

    setSelfIncome(-99999999999);
    setSpouseIncome(-99999999999);

    setSelfResidence(-99999999999);
    setSpouseResidence(-99999999999);
    setSelfOAndE(-99999999999);
    setSpouseOAndE(-99999999999);
    setSelfEducationExpenses(-99999999999);
    setSpouseEducationExpenses(-99999999999);
    setSelfApprovedDonations(-99999999999);
    setSpouseApprovedDonations(-99999999999);
    setSelfMPF(-99999999999);
    setSpouseMPF(-99999999999);
    setSelfMPFV(-99999999999);
    setSpouseMPFV(-99999999999);
    setSelfAnnuity(-99999999999);
    setSpouseAnnuity(-99999999999);
    setSelfMPFV2(-99999999999);
    setSpouseMPFV2(-99999999999);
    setSelfHomeLoanInterest(-99999999999);
    setSpouseHomeLoanInterest(-99999999999);
    setSelfVhis(-99999999999);
    setSpouseVhis(-99999999999);
    setSelfVhisRelateCount(-99999999999);
    setSpouseVhisRelateCount(-99999999999);
    setSelfVhisRelateAmount(-99999999999);
    setSpouseVhisRelateAmount(-99999999999);
    setSelfEldery(-99999999999);
    setSpouseEldery(-99999999999);
    setSelfDisabledDependant(-99999999999);
    setSpouseDisabledDependant(-99999999999);
    setSelfResidentialAmount(-99999999999);
    setSpouseResidentialAmount(-99999999999);
    setChildBornThisYr(-99999999999);
    setDisabledChildBornThisYr(-99999999999);
    setChildBornOtherYr(-99999999999);
    setDisabledChildBornOtherYr(-99999999999);
    setDependentBrothersSis(-99999999999);
    setDisabledDependentBrothersSis(-99999999999);
    setDependentparentsResided(-99999999999);
    setDisabledDependentparentsResided(-99999999999);
    setDependentparentsNotResided(-99999999999);
    setDisabledDependentparentsNotResided(-99999999999);
    setDependentparents5560Resided(-99999999999);
    setDependentparents5560NotResided(-99999999999);


    resetForm();
  }, [resetForm]);



  if (!loaded) {
    return (<>
      <div
        className={["btx-calculator", `btx-calculator--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor, 'display': 'block' }}
        {...props}
      >
        <p>載入中...</p>
      </div>
    </>
    )
  }

  return (
    <>
      <div
        className={["btx-calculator", `btx-calculator--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor, 'display': 'block' }}
        {...props}
      >
        <BtxCard label="form">
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <BtxHeading label={t("Tax calculator")} />
          </div>

          {/* <BtxSwitch
            label="Language"
            label1="En"
            label2="中文"
            value={lang === "zh-HK"}
            onChange={langSelector}
          /> */}

          <BtxLabel label="">婚姻狀況</BtxLabel>
          <BtxSwitch
            label="Married"
            label1={t("isSingle")}
            label2={t("isMarried")}
            value={isMarried}
            onChange={(e) => {
              const nextStatusIsMarried = !isMarried;
              performToggleMarriage(nextStatusIsMarried);
              setIsMarried((val) => !val);
              doChecking(0);
              if (!nextStatusIsMarried) {		// Single ?
                dF.T2.value="0"
                dF.T14.value="0"
                dF.D15.selectedIndex=0
                dF.D15b.selectedIndex=0
                setSpouseIncome(-99999999999);
                setSpouseResidence(-99999999999);
                setSpouseDisabledDependent(false);
                setSpousePDA(false);
                console.debug(`[TODO] Should update state BtxCalculatorForm:L369`);
              }
              if (nextStatusIsMarried) {		// Married ?
                dF.D22.selectedIndex=0
                console.debug(`[TODO] Should update state BtxCalculatorForm:L373`);
              }
            }}
          />

          <br />


          <Stepper activeStep={activeStep} orientation="vertical">
            <Step key={0}>
              <BtxStepLabel onClick={handleStep(0)}>{t("Income")}</BtxStepLabel>
              <StepContent>
                <BtxCard label="card">
                  <BtxHeading label={t("Income")} />
                  <br />

                  <BtxLabel label="">
                    個人課稅年度收入息
                    <BtxTooltip id={"hintIncome"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintIncome")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/salariestax/chargeable/index.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                    label="selfIncome"
                    min={0}
                    value={selfIncome}
                    setValue={(val: any) => setSelfIncome(val)}
                    onChange={ (a, e) => {
                      dF.T1.value = e.target.value; doChecking();
                    } }
                  />
                  {isMarried && (
                    <>
                      <BtxLabel label="">配偶課稅年度收入</BtxLabel>
                      <BtxFormInputNumber
                        label="spouseIncome"
                        min={0}
                        value={spouseIncome}
                        setValue={(val: any) => setSpouseIncome(val)}
                        onChange={ (a, e) => {
                          dF.T2.value = e.target.value; doChecking();
                        } }
                      />
                    </>
                  )}
                  <br />


                  
                  <BtxLabel label="">
                    {t("selfResidence")}
                    <BtxTooltip id={"hintResidence"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintResidence")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/salariestax/chargeable/residence.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                    label="selfResidence"
                    min={0}
                    value={selfResidence}
                    setValue={(val: any) => setSelfResidence(val)}
                    onChange={ (a, e) => { dF.T13.value = e.target.value; doChecking(); } }
                  />
                  {isMarried && (
                    <>
                      <BtxLabel label="">{t("spouseResidence")}</BtxLabel>
                      <BtxFormInputNumber
                        label="spouseResidence"
                        min={0}
                        value={spouseResidence}
                        setValue={(val: any) => setSpouseResidence(val)}
                        onChange={ (a, e) => { dF.T14.value = e.target.value; doChecking(); } }
                      />
                    </>
                  )}
                  <br />

                  {/* Navigate */}
                  <BtxButton
                    label={t("Continue")}
                    onClick={handleNext}
                    primary={true}
                    size={"small"}
                  />
                  {/* <BtxButton
                    label={t("Back")}
                    onClick={handleBack}
                    primary={false}
                    size={"small"}
                  /> */}
                </BtxCard>
              </StepContent>
            </Step>

            <Step key={1}>
              <BtxStepLabel onClick={handleStep(1)}>
                {t("Deduction")}
              </BtxStepLabel>
              <StepContent>
                <BtxCard label="card">
                  <BtxHeading label={t("Deduction")} />
                  <br />


                  <BtxLabel label="" level="section">
                    自願醫保保費開支
                    <BtxTooltip id={"hintSectionVhis"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSectionVhis")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/vhis.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <br />

                  <BtxRow label="">
                    <BtxLabel label="" level="subsection">
                      {t("selfResponsible")}
                    </BtxLabel>
                  </BtxRow>
                  <BtxRow label="">
                    <BtxLabel label="">
                      {t("selfVhis")}
                    </BtxLabel>
                    <BtxFormInputNumber
                      label="selfVhis"
                      min={0}
                      value={selfVhis}
                      setValue={(val: any) => setSelfVhis(val)}
                      onChange={ (a, e) => { dF.T34.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(34); }}
                    />
                  </BtxRow>
                  <BtxRow label="">
                    <BtxLabel label="">
                      {t("selfVhisRelateCount")}
                    </BtxLabel>
                    <BtxFormInputNumber
                      label="selfVhisRelateCount"
                      min={0}
                      max={4}
                      value={selfVhisRelateCount}
                      setValue={(val: any) => setSelfVhisRelateCount(val)}
                      onChange={ (a, e) => { dF.D32.selectedIndex = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(36); } }
                    />
                  </BtxRow>
                  <BtxRow label="">
                    <BtxLabel label="">
                      {t("selfVhisRelateAmount")}
                    </BtxLabel>
                    <BtxFormInputNumber
                      label="selfVhisRelateAmount"
                      min={0}
                      value={selfVhisRelateAmount}
                      setValue={(val: any) => setSelfVhisRelateAmount(val)}
                      onChange={ (a, e) => { dF.T36.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(36); } }
                    />
                  </BtxRow>
                  {isMarried && (<>
                    <BtxRow label="">
                      <BtxLabel label="" level="subsection">
                        {t("spouseResponsible")}
                      </BtxLabel>
                    </BtxRow>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("spouseVhis")}
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="spouseVhis"
                        min={0}
                        value={spouseVhis}
                        setValue={(val: any) => setSpouseVhis(val)}
                        onChange={ (a, e) => { dF.T35.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(35); }}
                      />
                    </BtxRow>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("spouseVhisRelateCount")}
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="spouseVhisRelateCount"
                        min={0}
                        value={spouseVhisRelateCount}
                        setValue={(val: any) => setSpouseVhisRelateCount(val)}
                        onChange={ (a, e) => { dF.D33.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(37); } }
                      />
                    </BtxRow>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("spouseVhisRelateAmount")}
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="spouseVhisRelateAmount"
                        min={0}
                        value={spouseVhisRelateAmount}
                        setValue={(val: any) => setSpouseVhisRelateAmount(val)}
                        onChange={ (a, e) => { dF.T37.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(37); } }
                      />
                    </BtxRow>
                  </>)}
                  <br />
















                  <br />
                  <BtxLabel label="" level="section">
                    強積金及年金開支
                  </BtxLabel>
                  <br />

                  <BtxSelfSpouseHeader t={t} isMarried={isMarried} />

                  <BtxLabel label="">
                    {t("selfMPF")}
                    <BtxTooltip id={"hintSelfMPF"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfMPF")}
                        <a href="http://www.ird.gov.hk/chi/pdf/pam38c.pdf" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                      label="selfMPF"
                      min={0}
                      value={selfMPF}
                      setValue={(val: any) => setSelfMPF(val)}
                      onChange={ (a, e) => { dF.T11.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(11); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseMPF")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseMPF"
                        min={0}
                        value={spouseMPF}
                        setValue={(val: any) => setSpouseMPF(val)}
                        onChange={ (a, e) => { dF.T12.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(12); }}
                      />
                    </>
                  )}
                  <br />

                  <BtxLabel label="">
                    {t("selfMPFV")}
                    <BtxTooltip id={"hintSelfMPFV"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfMPFV")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/annuity.htm#b" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                      label="selfMPFV"
                      min={0}
                      value={selfMPFV}
                      setValue={(val: any) => setSelfMPFV(val)}
                      onChange={ (a, e) => { dF.T38.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(38); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseMPFV")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseMPFV"
                        min={0}
                        value={spouseMPFV}
                        setValue={(val: any) => setSpouseMPFV(val)}
                        onChange={ (a, e) => { dF.T39.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(39); }}
                      />
                    </>
                  )}
                  <br />

                  <BtxLabel label="">
                    {t("selfAnnuity")}
                    <BtxTooltip id={"hintSelfAnnuity"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfAnnuity")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/annuity.htm#a" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                      label="selfAnnuity"
                      min={0}
                      value={selfAnnuity}
                      setValue={(val: any) => setSelfAnnuity(val)}
                      onChange={ (a, e) => { dF.T40.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(40); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseAnnuity")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseAnnuity"
                        min={0}
                        value={spouseAnnuity}
                        setValue={(val: any) => setSpouseAnnuity(val)}
                        onChange={ (a, e) => { dF.T41.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(41); }}
                      />
                    </>
                  )}
                  <br />


















                  <br />
                  <BtxLabel label="" level="section">
                  住屋開支
                  </BtxLabel>
                  <br />

                  <BtxSelfSpouseHeader t={t} isMarried={isMarried} />

                  <BtxLabel label="">
                    {t("selfMPFV2")}
                    <BtxTooltip id={"hintSelfMPFV2"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfMPFV2")}
                        <a href="https://www.ird.gov.hk/chi/tax/drd.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                      label="selfMPFV2"
                      min={0}
                      value={selfMPFV2}
                      setValue={(val: any) => setSelfMPFV2(val)}
                      onChange={ (a, e) => { dF.T380.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(380); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseMPFV2")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseMPFV2"
                        min={0}
                        value={spouseMPFV2}
                        setValue={(val: any) => setSpouseMPFV2(val)}
                        onChange={ (a, e) => { dF.T390.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(390); }}
                      />
                    </>
                  )}
                  <br />

                  <BtxLabel label="">
                    {t("selfHomeLoanInterest")}
                    <BtxTooltip id={"hintSelfHomeLoanInterest"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfHomeLoanInterest")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/homeloan.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                      label="selfHomeLoanInterest"
                      min={0}
                      value={selfHomeLoanInterest}
                      setValue={(val: any) => setSelfHomeLoanInterest(val)}
                      onChange={ (a, e) => { dF.T7.value = e.target.value; } }
                      onBlur={ (a, e) => { doChecking(7); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseHomeLoanInterest")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseHomeLoanInterest"
                        min={0}
                        value={spouseHomeLoanInterest}
                        setValue={(val: any) => setSpouseHomeLoanInterest(val)}
                        onChange={ (a, e) => { dF.T8.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(8); }}
                      />
                    </>
                  )}
                  <br />





















                  <br />
                  <BtxLabel label="" level="section">
                    {t("sectionEldery")}
                    <BtxTooltip id={"hintSectionEldery"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSectionEldery")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/elderly.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <br />

                  <BtxLabel label="" level="subsection">
                    {t("selfResponsibleEldery")}
                  </BtxLabel>

                  <>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("selfEldery")}
                        <BtxTooltip id={"hintSelfEldery"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintSelfEldery")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/vhis.htm" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="selfEldery"
                        min={0}
                        max={4}
                        value={selfEldery}
                        setValue={(val: any) => setSelfEldery(val)}
                        onChange={ (a, e) => { dF.D18.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          doChecking(9);

                          const val = parseFloat(a.replaceAll(",", ""));
                          if (selfDisabledDependant > val) {
                            dF.D20.selectedIndex = val;
                            setSelfDisabledDependant(-val);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("selfDisabledDependant")}
                        <BtxTooltip id={"hintDisabledDependant-3"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="selfDisabledDependant"
                        min={0}
                        max={4}
                        value={selfDisabledDependant}
                        setValue={(val: any) => setSelfDisabledDependant(val)}
                        onChange={ (a, e) => { dF.D20.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (val > selfEldery) {
                            dF.D20.selectedIndex = selfEldery;
                            setSelfDisabledDependant(-selfEldery);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">{t("selfResidentialAmount")}</BtxLabel>
                      <BtxFormInputNumber
                        label="selfResidentialAmount"
                        min={0}
                        value={selfResidentialAmount}
                        setValue={(val: any) => setSelfResidentialAmount(val)}
                        onChange={ (a, e) => { dF.T9.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(9); }}
                      />
                    </BtxRow>
                  </>
                  {isMarried && (
                    <>
                      <BtxLabel label="" level="subsection">
                        {t("spouseResponsibleEldery")}
                      </BtxLabel>

                      <BtxRow label="">
                        <BtxLabel label="">
                          {t("spouseEldery")}
                          <BtxTooltip id={"hintSpouseEldery"} label={null} place={"top-start"}>
                            <p className={"btx-tooltip-content"}>
                              {t("hintSpouseEldery")}
                              <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/vhis.htm" target="_blank">（詳情）</a>
                            </p>
                          </BtxTooltip>
                        </BtxLabel>
                        <BtxFormInputNumber
                          label="spouseEldery"
                          min={0}
                          max={4}
                          value={spouseEldery}
                          setValue={(val: any) => setSpouseEldery(val)}
                          onChange={ (a, e) => { dF.D19.value = e.target.value; } }
                          onBlur={ (a, e) => {
                            doChecking(10);

                            const val = parseFloat(a.replaceAll(",", ""));
                            if (spouseDisabledDependant > val) {
                              dF.D21.selectedIndex = val;
                              setSpouseDisabledDependant(-val);
                            }
                          }}
                        />
                      </BtxRow>

                      <BtxRow label="">
                        <BtxLabel label="">{t("spouseDisabledDependant")}</BtxLabel>
                        <BtxFormInputNumber
                          label="spouseDisabledDependant"
                          min={0}
                          value={spouseDisabledDependant}
                          setValue={(val: any) => setSpouseDisabledDependant(val)}
                          onChange={ (a, e) => { dF.D21.value = e.target.value; doChecking(); } }
                          onBlur={ (a, e) => {
                            doChecking(37);

                            const val = parseFloat(a.replaceAll(",", ""));
                            if (val > spouseEldery) {
                              dF.D21.value = "" + spouseEldery;
                              setSpouseDisabledDependant(-spouseEldery);
                            }
                          }}
                        />
                      </BtxRow>

                      <BtxRow label="">
                        <BtxLabel label="">{t("spouseResidentialAmount")}</BtxLabel>
                        <BtxFormInputNumber
                          label="spouseResidentialAmount"
                          min={0}
                          value={spouseResidentialAmount}
                          setValue={(val: any) => setSpouseResidentialAmount(val)}
                          onChange={ (a, e) => { dF.T10.value = e.target.value; } }
                          onBlur={ (a, e) => { doChecking(10); }}
                        />
                      </BtxRow>
                    </>
                  )}
                  <br />
























                  <br />
                  <BtxLabel label="" level="section">
                  其他
                  </BtxLabel>
                  <br />

                  <BtxSelfSpouseHeader t={t} isMarried={isMarried} />

                  <BtxLabel label="">
                    {t("selfOAndE")}
                    <BtxTooltip id={"hintSelfOAndE"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfOAndE")}
                        <a href="http://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/index.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                    label="selfOAndE"
                    min={0}
                    value={selfOAndE}
                    setValue={(val: any) => setSelfOAndE(val)}
                    onChange={ (a, e) => { dF.T15.value = e.target.value; } }
                    onBlur={ (a, e) => { doChecking(15); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseOAndE")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseOAndE"
                        min={0}
                        value={spouseOAndE}
                        setValue={(val: any) => setSpouseOAndE(val)}
                        onChange={ (a, e) => { dF.T16.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(16); }}
                      />
                    </>
                  )}
                  <br />

                  <BtxLabel label="">
                    {t("selfEducationExpenses")}
                    <BtxTooltip id={"hintSelfEducationExpenses"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfEducationExpenses")}
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                    label="selfEducationExpenses"
                    min={0}
                    value={selfEducationExpenses}
                    setValue={(val: any) => setSelfEducationExpenses(val)}
                    onChange={ (a, e) => { dF.T5.value = e.target.value; } }
                    onBlur={ (a, e) => { doChecking(5); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseEducationExpenses")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseEducationExpenses"
                        min={0}
                        value={spouseEducationExpenses}
                        setValue={(val: any) => setSpouseEducationExpenses(val)}
                        onChange={ (a, e) => { dF.T6.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(6); }}
                      />
                    </>
                  )}
                  <br />

                  <BtxLabel label="">
                    {t("selfApprovedDonations")}
                    <BtxTooltip id={"hintSelfApprovedDonations"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintSelfApprovedDonations")}
                        <a href="http://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/approveddonation.htm" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <BtxFormInputNumber
                    label="selfApprovedDonations"
                    min={0}
                    value={selfApprovedDonations}
                    setValue={(val: any) => setSelfApprovedDonations(val)}
                    onChange={ (a, e) => { dF.T3.value = e.target.value; } }
                    onBlur={ (a, e) => { doChecking(3); }}
                  />
                  {isMarried && (
                    <>
                      {/* <BtxLabel label="">{t("spouseApprovedDonations")}</BtxLabel> */}
                      <BtxFormInputNumber
                        label="spouseApprovedDonations"
                        min={0}
                        value={spouseApprovedDonations}
                        setValue={(val: any) => setSpouseApprovedDonations(val)}
                        onChange={ (a, e) => { dF.T4.value = e.target.value; } }
                        onBlur={ (a, e) => { doChecking(4); }}
                      />
                    </>
                  )}
                  <br />





                  <br />
                  <BtxLabel label="" level="subsection">
                  可扣總支出
                  </BtxLabel>
                  <br />

                  本人：<br />
                  <p>HK ${FormatMoney(sumDeduct({selfVhis, selfVhisRelateAmount, selfMPF, selfMPFV, selfAnnuity, selfMPFV2, selfHomeLoanInterest, selfResidentialAmount, selfOAndE, selfEducationExpenses, selfApprovedDonations}))}</p>

                  {isMarried && (
                    <>
                    配偶：<br />
                    <p>HK ${FormatMoney(sumDeduct({spouseVhis, spouseVhisRelateAmount, spouseMPF, spouseMPFV, spouseAnnuity, spouseMPFV2, spouseHomeLoanInterest, spouseResidentialAmount, spouseOAndE, spouseEducationExpenses, spouseApprovedDonations}))}</p>
                    </>
                  )}







                  {/* Navigate */}
                  <BtxButton
                    label={t("Continue")}
                    onClick={handleNext}
                    primary={true}
                    size={"small"}
                  />
                  <BtxButton
                    label={t("Back")}
                    onClick={handleBack}
                    primary={false}
                    size={"small"}
                  />
                </BtxCard>
              </StepContent>
            </Step>

            <Step key={2}>
              <BtxStepLabel onClick={handleStep(2)}>
                {t("Allowance")}
              </BtxStepLabel>
              <StepContent>
                <BtxCard label="card">
                  {/* <BtxHeading label={t("Allowance")} /> */}


                  <br />
                  <BtxLabel label="" level="section">
                  基本免稅額
                  </BtxLabel>
                  <br />

                  本人：<br />
                  <p>HK ${FormatMoney(basicAllowance)}</p>

                  {isMarried && (
                    <>
                    配偶：<br />
                    <p>HK ${FormatMoney(basicAllowance)}</p>
                    </>
                  )}















                  <br />
                  <BtxLabel label="" level="section">
                    {t("sectionDiabled")}
                  </BtxLabel>
                  <br />

                  <BtxRow label="">
                    <BtxLabel label="">
                      {t("selfPDA")}
                      <BtxTooltip id={"hintPDA"} label={null} place={"top-start"}>
                        <p className={"btx-tooltip-content"}>
                          {t("hintPDA")}
                          <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#pda" target="_blank">（詳情）</a>
                        </p>
                      </BtxTooltip>
                    </BtxLabel>
                    <BtxSwitch label="Switch" value={selfPDA} onChange={(e, checked) => {
                        dF.D15a.selectedIndex = checked ? 1 : 0;
                        setSelfPDA(checked);
                      }}
                      trackLabel1='是' trackLabel2='否'
                    />
                  </BtxRow>
                  {isMarried && (
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("spousePDA")}
                        <BtxTooltip id={"hintPDA"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintPDA")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#pda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxSwitch label="Switch" value={spousePDA} onChange={(e, checked) => {
                          dF.D15b.selectedIndex = checked ? 1 : 0;
                          setSpousePDA(checked);
                        }}
                        trackLabel1='是' trackLabel2='否'
                      />
                    </BtxRow>
                  )}
                  <br />









                  {!isMarried && (<>
                    <br />
                    <BtxLabel label="" level="section">
                      單親家庭免稅額
                    </BtxLabel>
                    <br />
  
                    <BtxRow label="">
                      <BtxLabel label="">{t("singleParentAllowance")}</BtxLabel>
                      <BtxSwitch label="Switch" value={singleParentAllowance} onChange={(e, checked) => {
                          dF.D22.selectedIndex = checked ? 1 : 0;
                          setSingleParentAllowance(checked);
                        }}
                        trackLabel1='是' trackLabel2='否'
                      />
                    </BtxRow>
                    </>
                  )}
                  












                  <br />
                  <BtxLabel label="" level="subsection">
                  免稅額
                  </BtxLabel>
                  <br />

                  本人：<br />
                  <p>HK ${FormatMoney(sumDeduct({
                    basicAllowance,
                    disabledAllowance: (selfPDA) ? disabledAllowance : 0,
                    singParentAllowance: (!isMarried && singleParentAllowance) ? singParentAllowance: 0
                  }))}</p>

                  {isMarried && (
                    <>
                    配偶：<br />
                    <p>HK ${FormatMoney(sumDeduct({
                      basicAllowance,
                      disabledAllowance: (spousePDA) ? disabledAllowance : 0
                    }))}</p>
                    </>
                  )}





                  

                  {/* Navigate */}
                  <BtxButton
                    label={t("Continue")}
                    onClick={handleNext}
                    primary={true}
                    size={"small"}
                  />
                  <BtxButton
                    label={t("Back")}
                    onClick={handleBack}
                    primary={false}
                    size={"small"}
                  />
                </BtxCard>
              </StepContent>
            </Step>

            <Step key={3}>
              <BtxStepLabel onClick={handleStep(3)}>
                {t("Family related")}
              </BtxStepLabel>
              <StepContent>
                <BtxCard label="card">





                  <br />
                  <BtxLabel label="" level="section">
                    供養子女免稅額
                    {/* {t("sectionChildren")} */}
                    <BtxTooltip id={"hintChild"} label={null} place={"top-start"}>
                      <p className={"btx-tooltip-content"}>
                        {t("hintChild")}
                        <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#ca" target="_blank">（詳情）</a>
                      </p>
                    </BtxTooltip>
                  </BtxLabel>
                  <br />

                  <>
                    <BtxRow label="">
                      <BtxLabel label="">{t("childBornThisYr")}</BtxLabel>
                      <BtxFormInputNumber
                        label="childBornThisYr"
                        min={0}
                        max={9}
                        value={childBornThisYr}
                        setValue={(val: any) => setChildBornThisYr(val)}
                        onChange={ (a, e) => { dF.D3a.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (disabledChildBornThisYr > val) {
                            dF.D4a.selectedIndex = val;
                            setDisabledChildBornThisYr(-val);
                          }
                          if (childBornOtherYr + val > 9) {
                            dF.D3a.selectedIndex = 9 - childBornOtherYr;
                            setChildBornThisYr(-(9 - childBornOtherYr));
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("disabledChildBornThisYr")}
                        <BtxTooltip id={"hintDisabledDependant-4"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="disabledChildBornThisYr"
                        min={0}
                        max={9}
                        value={disabledChildBornThisYr}
                        setValue={(val: any) => setDisabledChildBornThisYr(val)}
                        onChange={ (a, e) => { dF.D4a.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (val > childBornThisYr) {
                            dF.D4a.selectedIndex = childBornThisYr + "";
                            setDisabledChildBornThisYr(-childBornThisYr);
                          }
                        }}
                      />
                    </BtxRow>
                  </>
                  <>
                    <BtxRow label="">
                      <BtxLabel label="">{t("childBornOtherYr")}</BtxLabel>
                      <BtxFormInputNumber
                        label="childBornOtherYr"
                        min={0}
                        max={9}
                        value={childBornOtherYr}
                        setValue={(val: any) => setChildBornOtherYr(val)}
                        onChange={ (a, e) => { dF.D3.value = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (Math.abs(disabledChildBornOtherYr) > Math.abs(val)) {
                            dF.D4.selectedIndex = Math.abs(val);
                            setDisabledChildBornOtherYr(-Math.abs(val));
                          }
                          if (val + Math.abs(childBornThisYr) > 9) {
                            dF.D3.selectedIndex = 9 - Math.abs(childBornThisYr);
                            setChildBornOtherYr(-(9 - Math.abs(childBornThisYr)));
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("disabledChildBornOtherYr")}
                        <BtxTooltip id={"hintDisabledDependant-5"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="disabledChildBornOtherYr"
                        min={0}
                        max={9}
                        value={disabledChildBornOtherYr}
                        setValue={(val: any) => setDisabledChildBornOtherYr(val)}
                        onChange={ (a, e) => { dF.D4.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (Math.abs(val) > Math.abs(childBornOtherYr)) {
                            dF.D4.selectedIndex = Math.abs(childBornOtherYr) + "";
                            setDisabledChildBornOtherYr(-Math.abs(childBornOtherYr));
                          }
                        }}
                      />
                    </BtxRow>
                  </>


















                  <br />
                  <BtxLabel label="" level="section">
                    供養父母或祖父母或外祖父母免稅額
                    {/* {t("sectionParents")} */}
                  </BtxLabel>
                  <br />


                  <>
                    <BtxLabel label="" level="subsection">
                      {t("subsectionParents60")}
                    </BtxLabel>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("dependentparentsResided")}
                        <BtxTooltip id={"hintParent60-1"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintParent60")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="dependentparentsResided"
                        min={0}
                        max={4}
                        value={dependentparentsResided}
                        setValue={(val: any) => setDependentparentsResided(val)}
                        onChange={ (a, e) => { dF.D7.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (disabledDependentparentsResided > val) {
                            dF.D8.selectedIndex = val;
                            setDisabledDependentparentsResided(-val);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("disabledDependentparentsResided")}
                        <BtxTooltip id={"hintDisabledDependant-1"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="disabledDependentparentsResided"
                        min={0}
                        max={4}
                        value={disabledDependentparentsResided}
                        setValue={(val: any) => setDisabledDependentparentsResided(val)}
                        onChange={ (a, e) => { dF.D8.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (val > dependentparentsResided) {
                            dF.D8.selectedIndex = dependentparentsResided;
                            setDisabledDependentparentsResided(-dependentparentsResided);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("dependentparentsNotResided")}
                        <BtxTooltip id={"hintParent60-2"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintParent60")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="dependentparentsNotResided"
                        min={0}
                        max={4}
                        value={dependentparentsNotResided}
                        setValue={(val: any) => setDependentparentsNotResided(val)}
                        onChange={ (a, e) => { dF.D9.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (disabledDependentparentsNotResided > val) {
                            dF.D10.selectedIndex = val;
                            setDisabledDependentparentsNotResided(-val);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("disabledDependentparentsNotResided")}
                        <BtxTooltip id={"hintDisabledDependant-2"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="disabledDependentparentsNotResided"
                        min={0}
                        max={4}
                        value={disabledDependentparentsNotResided}
                        setValue={(val: any) => setDisabledDependentparentsNotResided(val)}
                        onChange={ (a, e) => { dF.D10.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (val > dependentparentsNotResided) {
                            dF.D10.selectedIndex = dependentparentsNotResided;
                            setDisabledDependentparentsNotResided(-dependentparentsNotResided);
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxLabel label="" level="subsection">
                      {t("subsectionParents5560")}
                    </BtxLabel>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("dependentparents5560Resided")}
                        <BtxTooltip id={"hintParent60-3"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintParent60")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="dependentparents5560Resided"
                        min={0}
                        max={4}
                        value={dependentparents5560Resided}
                        setValue={(val: any) => setDependentparents5560Resided(val)}
                        onChange={ (a, e) => { dF.D16.selectedIndex = e.target.value; } }
                      />
                    </BtxRow>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("dependentparents5560NotResided")}
                        <BtxTooltip id={"hintParent60-4"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintParent60")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="dependentparents5560NotResided"
                        min={0}
                        max={4}
                        value={dependentparents5560NotResided}
                        setValue={(val: any) => setDependentparents5560NotResided(val)}
                        onChange={ (a, e) => { dF.D17.selectedIndex = e.target.value; } }
                      />
                    </BtxRow>
                  </>











                  <br />
                  <BtxLabel label="" level="section">
                    供養兄弟姐妹免稅額
                    {/* {t("sectionBroSist")} */}
                  </BtxLabel>
                  <br />

                  <>
                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("dependentBrothersSis")}
                        <BtxTooltip id={"hintBrothersSis"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintBrothersSis")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dbsa" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="dependentBrothersSis"
                        min={0}
                        max={9}
                        value={dependentBrothersSis}
                        setValue={(val: any) => setDependentBrothersSis(val)}
                        onChange={ (a, e) => { dF.D5.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (Math.abs(disabledDependentBrothersSis) > Math.abs(val)) {
                            dF.D6.selectedIndex = Math.abs(val) + "";
                            setDisabledDependentBrothersSis(-Math.abs(val));
                          }
                        }}
                      />
                    </BtxRow>

                    <BtxRow label="">
                      <BtxLabel label="">
                        {t("disabledDependentBrothersSis")}
                        <BtxTooltip id={"hintDisabledDependant-6"} label={null} place={"top-start"}>
                          <p className={"btx-tooltip-content"}>
                            {t("hintDisabledDependant")}
                            <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                          </p>
                        </BtxTooltip>
                      </BtxLabel>
                      <BtxFormInputNumber
                        label="disabledDependentBrothersSis"
                        min={0}
                        max={9}
                        value={disabledDependentBrothersSis}
                        setValue={(val: any) => setDisabledDependentBrothersSis(val)}
                        onChange={ (a, e) => { dF.D6.selectedIndex = e.target.value; } }
                        onBlur={ (a, e) => {
                          const val = parseFloat(a.replaceAll(",", ""));
                          if (Math.abs(val) > Math.abs(dependentBrothersSis)) {
                            dF.D6.selectedIndex = Math.abs(dependentBrothersSis) + "";
                            setDisabledDependentBrothersSis(-Math.abs(dependentBrothersSis));
                          }
                        }}
                      />
                    </BtxRow>
                  </>


                  {isMarried && (<>
                      <br />
                      <BtxLabel label="" level="section">
                        傷殘配偶受養人
                      </BtxLabel>
                      <br />

                      <BtxRow label="">
                        <BtxLabel label="">
                          {t("spouseDisabledDependent")}
                          <BtxTooltip id={"hintDisabledDependant-7"} label={null} place={"top-start"}>
                            <p className={"btx-tooltip-content"}>
                              {t("hintDisabledDependant")}
                              <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank">（詳情）</a>
                            </p>
                          </BtxTooltip>
                        </BtxLabel>
                        <BtxSwitch label="Switch" value={spouseDisabledDependent} onChange={(e, checked) => {
                            dF.D15.selectedIndex = checked ? 1 : 0;
                            setSpouseDisabledDependent(checked);
                          }}
                          trackLabel1='是' trackLabel2='否'
                        />
                      </BtxRow>
                    </>
                  )}
                </BtxCard>
              </StepContent>
            </Step>
          </Stepper>

          <>
            <BtxButton
              label={t("resetForm")}
              primary={false}
              onClick={(e) => {
                localResetForm();
              }}
            ></BtxButton>
            <BtxButton
              label={t("doCalculation")}
              primary={true}
              onClick={(e) => {
                doCalculation();
              }}
            ></BtxButton>
          </>
        </BtxCard>
      </div>

      {/* {
        JSON.stringify(sOut)
      }
      <span>你 應 繳 的 總 稅 款 (稅 款 寬 免 前): {sOut[30]}</span> */}
    </>
  );
};

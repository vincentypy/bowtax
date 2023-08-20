import React, { useEffect, useState } from "react";

export const UserInputContext = React.createContext(({} as any));

export function UserInputContextProvider({children}: any) {

  const [lang, setLang] = useState<string>("zh-HK");

  const [activeStep, setActiveStep] = React.useState(0);

  // const [isMarried, setIsMarried] = useState<boolean>(isMarriedState);
  const [selfIncome, setSelfIncome] = useState<number>(0); // T1
  const [spouseIncome, setSpouseIncome] = useState<number>(0); // T2
  const [selfResidence, setSelfResidence] = useState<number>(0); // T13
  const [spouseResidence, setSpouseResidence] = useState<number>(0); // T14

  // deduction
  const [selfOAndE, setSelfOAndE] = useState<number>(0); // T15
  const [spouseOAndE, setSpouseOAndE] = useState<number>(0); // T16
  const [selfEducationExpenses, setSelfEducationExpenses] = useState<number>(0); // T5
  const [spouseEducationExpenses, setSpouseEducationExpenses] = useState<number>(0); // T6
  const [selfApprovedDonations, setSelfApprovedDonations] = useState<number>(0); // T3
  const [spouseApprovedDonations, setSpouseApprovedDonations] = useState<number>(0); // T4
  const [selfMPF, setSelfMPF] = useState<number>(0); // T11
  const [spouseMPF, setSpouseMPF] = useState<number>(0); // T12

  const [selfMPFV, setSelfMPFV] = useState<number>(0); // T38
  const [spouseMPFV, setSpouseMPFV] = useState<number>(0); // T39
  const [selfAnnuity, setSelfAnnuity] = useState<number>(0); // T40
  const [spouseAnnuity, setSpouseAnnuity] = useState<number>(0); // T41
  const [selfMPFV2, setSelfMPFV2] = useState<number>(0); // T380
  const [spouseMPFV2, setSpouseMPFV2] = useState<number>(0); // T390
  const [selfHomeLoanInterest, setSelfHomeLoanInterest] = useState<number>(0); // T7
  const [spouseHomeLoanInterest, setSpouseHomeLoanInterest] = useState<number>(0); // T8

  const [selfVhis, setSelfVhis] = useState<number>(0); // T34
  const [spouseVhis, setSpouseVhis] = useState<number>(0); // T35
  const [selfVhisRelateCount, setSelfVhisRelateCount] = useState<number>(0); // D32 [0-4]
  const [spouseVhisRelateCount, setSpouseVhisRelateCount] = useState<number>(0); // D33 [0-4]
  const [selfVhisRelateAmount, setSelfVhisRelateAmount] = useState<number>(0); // T36
  const [spouseVhisRelateAmount, setSpouseVhisRelateAmount] = useState<number>(0); // T37

  const [selfEldery, setSelfEldery] = useState<number>(0); // D18 [0-4]
  const [spouseEldery, setSpouseEldery] = useState<number>(0); // D19 [0-4]
  
  const [selfDisabledDependant, setSelfDisabledDependant] = useState<number>(0); // D20 [0-4]
  const [spouseDisabledDependant, setSpouseDisabledDependant] = useState<number>(0); // D21 [0-4]

  const [selfResidentialAmount, setSelfResidentialAmount] = useState<number>(0); // T9
  const [spouseResidentialAmount, setSpouseResidentialAmount] = useState<number>(0); // T10

  // allowance
  const [selfPDA, setSelfPDA] = useState<boolean>(false); // D15a
  const [spousePDA, setSpousePDA] = useState<boolean>(false); // D15b

  const [childBornThisYr, setChildBornThisYr] = useState<number>(0); // D3a [0-9]
  const [disabledChildBornThisYr, setDisabledChildBornThisYr] = useState<number>(0); // D4a [0-9]
  const [childBornOtherYr, setChildBornOtherYr] = useState<number>(0); // D3 [0-9]
  const [disabledChildBornOtherYr, setDisabledChildBornOtherYr] = useState<number>(0); // D4 [0-9]

  const [singleParentAllowance, setSingleParentAllowance] = useState<boolean>(false); // D22
  
  const [dependentBrothersSis, setDependentBrothersSis] = useState<number>(0); // D5
  const [disabledDependentBrothersSis, setDisabledDependentBrothersSis] = useState<number>(0); // D6

  // Parents
  const [dependentparentsResided, setDependentparentsResided] = useState<number>(0); // D7 [0-4]
  const [disabledDependentparentsResided, setDisabledDependentparentsResided] = useState<number>(0); // D8 [0-4]
  const [dependentparentsNotResided, setDependentparentsNotResided] = useState<number>(0); // D9 [0-4]
  const [disabledDependentparentsNotResided, setDisabledDependentparentsNotResided] = useState<number>(0); // D10 [0-4]
  const [dependentparents5560Resided, setDependentparents5560Resided] = useState<number>(0); // D16 [0-4]
  const [dependentparents5560NotResided, setDependentparents5560NotResided] = useState<number>(0); // D17 [0-4]

  // Spouse Disable
  const [spouseDisabledDependent, setSpouseDisabledDependent] = useState<boolean>(false); // D15


  return (<UserInputContext.Provider value={{
    lang, setLang,

    activeStep, setActiveStep,

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

  }}>
    {children}
  </UserInputContext.Provider>)
}

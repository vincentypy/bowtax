ErrMsg("由於你沒有入息，因此你不能申請傷殘人士免税額。")
dF.D15a.selectedIndex=0
setSelfPDA(false); // add


ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
dF.T13.value="0"
// dF.T13.focus() 
setSelfResidence(0); // add

ErrMsg("由於你的配偶沒有入息，因此不能申請你配偶的傷殘人士免税額。")
dF.D15b.selectedIndex=0
setSpousePDA(false); // add


ErrMsg("由於你的配偶沒有入息，因此不能申請你配偶的傷殘人士免税額。")
dF.D15b.selectedIndex=0
setSpousePDA(false); // add


ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
dF.T14.value="0"
// dF.T14.focus() 
setSpouseResidence(0); // add

ErrMsg("傷殘受養人數目不能超出在安老院居住的受養人數目。")
setTimeout(() => { try {dF.D20.selectedIndex=dF.D18.selectedIndex;} catch (err) {console.log(err);} },1) 
setSelfDisabledDependant(selfEldery); // add

ErrMsg("傷殘受養人數目不能超出在安老院居住的受養人數目。")
setTimeout(() => { try {dF.D21.selectedIndex=dF.D19.selectedIndex;} catch (err) {console.log(err);} },1) 
setSpouseDisabledDependant(spouseEldery); // add

if (STCIn1=="S")
  ErrMsg("由於你沒有入息，因此你不能扣除居所貸款利息。")
else
  ErrMsg("由於你們沒有入息，因此你們不能扣除居所貸款利息。")
v=NotNIL(dF.T7)
dF.T7.value="0"
dF.T8.value="0"
setSelfHomeLoanInterest(0); // add
setSpouseHomeLoanInterest(0); // add
if (v) {
  // dF.T7.focus() 
} else {
  // dF.T8.focus() 
}


if (parseInt(dF.T2.value) > 0) {
  ErrMsg("此軟件並不適用於配偶有入息的已婚人士！")
  rbflag = false
  // dF.T2.focus() 
}
else {
  if (parseInt(dF.T1.value) <= 0) {
    ErrMsg("請先輸入該課税年度的總收入。")
    rbflag = false
    dF.T1.value = 0
    // dF.T1.focus() 
    setSelfIncome(0); // add
  }
  else if (parseInt(dF.T13.value) > 0) {
    ErrMsg("由於居所租值的計算須視乎所收取的整筆款項的性質，此軟件的計算並不適用於你。")
    rbflag = false
    // dF.T13.focus() 
    setSelfResidence(0); // add
  } else {
     CalculateTaxWithDelay()
   }
 }


 if (parseInt(dF.T1.value) <= 0) {
  ErrMsg("請先輸入該課税年度的總收入。")
  rbflag = false
  dF.T1.value = 0
  // dF.T1.focus() 
  setSelfIncome(0); // add
}
else if (parseInt(dF.T13.value) > 0) {
  ErrMsg("由於居所租值的計算須視乎所收取的整筆款項的性質，此軟件的計算並不適用於你。")
  rbflag = false
  // dF.T13.focus() 
    setSelfResidence(0); // add
} else {
   CalculateTaxWithDelay()
  }
  }

setSelfIncome,T1
setSpouseIncome,T2
setSelfResidence,T13
setSpouseResidence,T14

// deduction
setSelfOAndE,T15
setSpouseOAndE,T16
setSelfEducationExpenses,T5
setSpouseEducationExpenses,T6
setSelfApprovedDonations,T3
setSpouseApprovedDonations,T4
setSelfMPF,T11
setSpouseMPF,T12

setSelfMPFV,T38
setSpouseMPFV,T39
setSelfAnnuity,T40
setSpouseAnnuity,T41
setSelfMPFV2,T380
setSpouseMPFV2,T390
setSelfHomeLoanInterest,T7
setSpouseHomeLoanInterest,T8

setSelfVhis,T34
setSpouseVhis,T35
setSelfVhisRelateCount,D32 [0-4]
setSpouseVhisRelateCount,D33 [0-4]
setSelfVhisRelateAmount,T36
setSpouseVhisRelateAmount,T37

setSelfEldery,D18 [0-4]
setSpouseEldery,D19 [0-4]

setSelfDisabledDependant,D20 [0-4]
setSpouseDisabledDependant,D21 [0-4]

setSelfResidentialAmount,T9
setSpouseResidentialAmount,T10

// allowance
setSelfPDA,D15a
setSpousePDA,D15b

setChildBornThisYr,D3a [0-9]
setDisabledChildBornThisYr,D4a [0-9]
setChildBornOtherYr,D3 [0-9]
setDisabledChildBornOtherYr,D4 [0-9]

setSingleParentAllowance,D22

setDependentBrothersSis,D5
setDisabledDependentBrothersSis,D6

// Parents
setDependentparentsResided,D7 [0-4]
setDisabledDependentparentsResided,D8 [0-4]
setDependentparentsNotResided,D9 [0-4]
setDisabledDependentparentsNotResided,D10 [0-4]
setDependentparents5560Resided,D16 [0-4]
setDependentparents5560NotResided,D17 [0-4]

// Spouse Disable
setSpouseDisabledDependent,D15

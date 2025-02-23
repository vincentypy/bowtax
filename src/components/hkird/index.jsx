/* eslint-disable */
import React, {useState, useEffect, useRef, useCallback, useContext} from "react";
import { BtxCalculatorForm } from "../organisms/BtxCalculator/BtxCalculatorForm";


import { UserInputContext } from "../../context/UserInput";

window.isMarried = false;
window.dF = {};

export const RawHTML = (props) => {
  const {sOut, setSOut, setIsMarried, submitData}  = props;

  const formRef = useRef();
  const cstcRef = useRef();

  const inputRef = useRef({});
  const outputRef = useRef();


  const userInput = useContext(UserInputContext);
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
  } = userInput;

  var that = {
    fI: {},
    mfI: [],
    location: {
      href: ""
    },
  };

  const [isMarriedState, setIsMarriedState] = useState(false);

  const parent = {
    location: {
      href: ""
    },
    rbo: {},
    ttldays: {},
    ttlc: {},
    inds: {},
    inde: {},
    firstview: {},
    JustLoaded: {},
    LSPYrEnd: {},
    main: {
      location: {
        href: ""
      }
    },
    taxtype: {},
    STCIn0: {},
    YrEnd: {},
    STCOut: {},
    frmInStatus: {},
  };
  var STCIn26=true;
  var STCIn27=true;
  var LimD_VTC=0; // 可 扣 税 強 積 金 自 願 性 供 款
  var LimD_VHIS=0; // 合 資 格 醫 療 保 險 保 費
  var LimD_RD=0; // 住 宅 租 金 扣 除 (new at 2023-24)
  var YrofAss;
  var obj;

  
var JustLoaded,frmInStatus,i
var STCIn0,STCOut,taxtype,YrEnd
var STCInMAX,STCOutMAX
var browserID
STCInMAX=66
STCOutMAX=88
JustLoaded=true
frmInStatus=new Array(STCInMAX)
STCOut=new Array(STCOutMAX)
for (i=0; i<frmInStatus.length; i++) {
  frmInStatus[i] = 0
}
frmInStatus[1] = true
frmInStatus[27] = "0"
frmInStatus[28] = "0"
frmInStatus[29] = "0"
frmInStatus[30] = "0"
frmInStatus[31] = "0"
frmInStatus[32] = "0"
frmInStatus[33] = ""
frmInStatus[34] = ""
frmInStatus[35] = ""
frmInStatus[36] = ""

var LSPYrEnd
var iTAX_RANGE = new Array(16)
var iTAX_RATE = new Array(17)
var iTAX_RATE_R
var firstview
var LSPincome
var LSPbDate, LSPeDate
var Calculating
var FAYA = new Array(4)
var FAYABD = new Array(4)
var FAYAED = new Array(4)
var LSPDate = new Array(4)
var LSPAmt = new Array(4)
var i, ivalue
var ttldays,ttlc
var inds, inde
var NetCharge = new Array(4)
var TaxTereon = new Array(4)
var TaxCBRB = new Array(4)
var TaxACPY = new Array(4)
var LSPyeari = new Array(4)
var LSPded = new Array(4)
var LSPall = new Array(4)
var rbo 
var stdrate = new Array(4)
var CBRBstdrate = new Array(4)
parent.rbo = 'N'
parent.ttldays = 0
parent.ttlc = 0
parent.inds = 0
parent.inde = 0
parent.firstview = false
LSPincome = 0
for (i=0; i<5; i++) {
	LSPyeari[i]=0
	LSPded[i]=0
	LSPall[i]=0
	NetCharge[i]=0
	TaxTereon[i]=0
	TaxCBRB[i]=0
	TaxACPY[i]=0
}
function checkBrowser()
{
  var s=navigator.appVersion.toLowerCase();
  if (s.indexOf("msie 4")!=-1 && s.indexOf("windows 3.1")!=-1) {
    browserID="IE4Win31"
  } else if (s.indexOf("msie 4")!=-1 && s.indexOf("windows")!=-1) {
    browserID="IE4Win"
  } else {
    browserID="DontCare"
  }
}

  
const handler1 = {};
  /*if (!window.dF) {
window.dF = new Proxy(inputRef.current, {});
}
const dF = window.dF;*/

  var dF = window.dF;
useEffect(() => {
  const interval = setInterval(() => {
    if (inputRef.current && !dF.D3) {
      window.dF = new Proxy(inputRef.current, {});
      dF = window.dF;
    }
  }, 300);
  return () => clearInterval(interval);
}, []);
  
  
var LSPYrEnd
var rbflag
var iTAX_RATE = new Array(17)
var iTAX_RANGE = new Array(16)
var firstview
rbflag = false
function initPage()
{
  // setDF(that.fI);
  // restorefrmIn()
  if (parent.JustLoaded)
  {
    parent.JustLoaded=false
  }
  if (parent.firstview==true) {
	B2OnClick()
  }
  GetDeduction()
  Calculating=false
}
function HasNBCA(Yr) {
   if (Yr.substring(0, 4) >= 2007) {
      return true
   } else {
      return false
   }
}
function leftStr(s,i) {
  var s1
  s1=""+s
  return s1.substring(0,i)
}
function rightStr(s,i) {
  var s1,l
  s1=""+s
  l=s1.length
  return s1.substring(l-i,l)
}
function trimStr(s) {
  var s1,i,j,l,Chrs2Trim
  s1=""+s
  l=s1.length
  if (l==0) return ""
  Chrs2Trim=" \t"
  i=0
  while (i<l && Chrs2Trim.indexOf(s1.charAt(i))>-1) {
    i++
  }
  j=l-1
  while (j>=0 && Chrs2Trim.indexOf(s1.charAt(j))>-1) {
    j--
  }
  if (i<=j) {
    return s1.substring(i,j-i+1)
  } else {
    return ""
  }
}
function CInt(s) {
  var s1
  s1=trimComma(s)
  if (s1.length>0) {
    return parseInt(s1)
  } else {
    return 0
  }
}
function CDbl(s) {
  var s1
  s1=trimComma(s)
  if (s1.length>0) {
    return parseFloat(s1)
  } else {
    return 0
  }
}
function trimComma(s) {
  var s1,l,rs,i,c
  s1=trimStr(s)
  l=s1.length
  rs=""
  for (i=0; i<l; i++) {
    c=s1.charAt(i)
    if (c!=",") rs=rs+c
  }
  return rs
}
function FormatMoney(InNum) {
  var tmpStr,NumStr
  var i,j,k,l
  tmpStr=trimStr(InNum)
  NumStr=tmpStr
  l=tmpStr.length
  j=Math.floor((l-1)/3)-1
  for (i=0; i<=j; i++) {
    k=3+i*4
    NumStr=leftStr(tmpStr,l-k)+","+rightStr(tmpStr,k)
    tmpStr=NumStr
    l=l+1
  }
  return NumStr
}
function goToPage(htmlfile) {
  var url,i
  if (htmlfile.substring(0,5).toLowerCase()=="http:") {    // Is complete URL ?
    parent.location.href=htmlfile
  } else {		// relative path only
    url=""+that.location
    url=url.toLowerCase()
    i=url.lastIndexOf("/")
    if (i==-1) i=url.lastIndexOf("\\")
    url=url.substring(0,i+1)+htmlfile
    parent.location.href=url
  }
}
var oT3="",oT4=""		// previous content of the textboxes (Approved Charitable Donations)
var T3tag="0",T4tag="0"		// Approved Charitable Donations for joint assessment
var oT1="0",oT2="0"		// previous content of the textboxes (Self Income and Spouse Income)
var oT11="",oT12=""		// previous content of the textboxes (Contributions to MPF)
var T11tag="0",T12tag="0"	//
var oT13="0",oT14="0"		// previous content of the textboxes (Self & Spouse Value of All Places of Residence Provided)
var slic=false,spic=false	// Boolean (Self Income changed, Spouse Income changed)
var slvr=false,spvr=false   // Boolean (Change of Self & Spouse Value of All Places of Residence Provided)
function TxtOnFocus(obj) {
  if (obj && obj.value=="0") {
    obj.value=""
  } else {
  }
}
function T1OnBlur() {
  var Income,MustReset,ValueResidence
  MustReset=false
  Income=FormatInput(dF.T1.value,0,999999999)
  if (Income=="*") {
    ErrMsg("你輸入的數值不正確 !")
    MustReset=true
  } else if (Income=="+") {
    ErrMsg("你不可輸入超過 9 位數字的數值 !")
    MustReset=true
  }
  if (MustReset) {
    Income=""
	if (dF.D15a.selectedIndex=="1") {
		ErrMsg("由於你沒有入息，因此你不能申請傷殘人士免税額。")
		dF.D15a.selectedIndex=0;
			setTimeout(() => {setSelfPDA(false);}, 60); // add D15a
	}
    // dF.T1.focus() 
  }
  if (Income=="0") {
  	dF.D15.selectedIndex=0;
		setTimeout(() => {setSpouseDisabledDependent(false);}, 60); /* // add D15 */
  	dF.T13.value="0"; setTimeout(() => {setSelfResidence(-99999999999);}, 60); // add T13
	if (dF.D15a.selectedIndex=="1") {
		ErrMsg("由於你沒有入息，因此你不能申請傷殘人士免税額。")
		dF.D15a.selectedIndex=0;
			setTimeout(() => {setSelfPDA(false);}, 60); // add D15a
	}
  }
  dF.T1.value=Income; setTimeout(() => {setSelfIncome(Income);}, 60); // T1
  if (Income!="") {
    ValueResidence=FormatInput(dF.T13.value,0,999999999)
    if (ValueResidence!="") {
      if (CDbl(dF.T13.value) > ((LimP_rate_VAPRP/100)*CDbl(dF.T1.value))) {
	  	ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
  		dF.T13.value="0"; setTimeout(() => {setSelfResidence(-99999999999);}, 60); // add T13
  		// dF.T13.focus() 
  	  }
    }
    slic=(Income!=oT1)
    oT1=Income
    ChkDD(0)
  }
}
function T2OnBlur() {
  var Income,obj,MustReset,ValueResidence
  MustReset=false
  Income=FormatInput(dF.T2.value,0,999999999)
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (obj[0].checked && Income!="0") {
    ErrMsg("由於你並非已婚人士，因此你不能輸入配偶的入息。")
    MustReset=true
  } else if (Income=="*") {
    ErrMsg("你輸入的數值不正確 !")
    MustReset=true
  } else if (Income=="+") {
    ErrMsg("你不可輸入超過 9 位數字的數值 !")
    MustReset=true
  }
  if (MustReset) {
    Income=""
	if (dF.D15b.selectedIndex=="1") {
		ErrMsg("由於你的配偶沒有入息，因此不能申請你配偶的傷殘人士免税額。")
		dF.D15b.selectedIndex=0;
		setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */
	}	
    // dF.T2.focus() 
  }
  if (Income=="0") {
  	dF.T14.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T14
	if (dF.D15b.selectedIndex=="1") {
		ErrMsg("由於你的配偶沒有入息，因此不能申請你配偶的傷殘人士免税額。")
		dF.D15b.selectedIndex=0;
		setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */
	}
  }
  dF.T2.value=Income; setTimeout(() => {setSpouseIncome(Income);}, 60); // T2
  if (Income!="") {
    ValueResidence=FormatInput(dF.T14.value,0,999999999)
    if (ValueResidence!="") {
      if (CDbl(dF.T14.value) > ((LimP_rate_VAPRP/100)*CDbl(dF.T2.value))) {
	  	ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
  		dF.T14.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T14
  		// dF.T14.focus() 
  	  }
    }
    spic=(Income!=oT2)
    oT2=Income
    ChkDD(0)
  }
}
function T13OnBlur() {
  var Income,MustReset,ValueResidence
  MustReset=false
  Income=FormatInput(dF.T1.value,0,999999999)
  ValueResidence=FormatInput(dF.T13.value,0,999999999)
  if (ValueResidence=="*") {
    ErrMsg("你輸入的數值不正確 !")
    MustReset=true
  } else if (ValueResidence=="+") {
    ErrMsg("你不可輸入超過 9 位數字的數值 !")
    MustReset=true
  } else if (CDbl(dF.T13.value) > ((LimP_rate_VAPRP/100)*CDbl(dF.T1.value))) {
  	ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
  	MustReset=true
  }
  if (MustReset) {
    ValueResidence=""
    // dF.T13.focus() 
  }
  dF.T13.value=ValueResidence; setTimeout(() => {setSelfResidence(ValueResidence);}, 60); // T13
  if (ValueResidence!="") {
    slvr=(ValueResidence!=oT13)
    oT13=ValueResidence
    ChkDD(0)
  }
}
function T14OnBlur() {
  var Income,obj,MustReset,ValueResidence
  MustReset=false
  Income=FormatInput(dF.T2.value,0,999999999)
  ValueResidence=FormatInput(dF.T14.value,0,999999999)
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (obj[0].checked && ValueResidence!="0") {
    ErrMsg("由於你並非已婚人士，因此你不能輸入配偶的獲提供居所的租值。")
    MustReset=true
  } else if (ValueResidence=="*") {
    ErrMsg("你輸入的數值不正確 !")
    MustReset=true
  } else if (ValueResidence=="+") {
    ErrMsg("你不可輸入超過 9 位數字的數值 !")
    MustReset=true
  } else if (CDbl(dF.T14.value) > ((LimP_rate_VAPRP/100)*CDbl(dF.T2.value))) {
  	ErrMsg("你輸入港元" + ValueResidence + "。獲提供居所的租值不可超過你入息的" + LimP_rate_VAPRP + "％。")
  	MustReset=true
  }
  if (MustReset) {
    ValueResidence=""
    // dF.T14.focus() 
  }
  dF.T14.value=ValueResidence; setTimeout(() => {setSpouseResidence(ValueResidence);}, 60); // T14
  if (ValueResidence!="") {
    spvr=(ValueResidence!=oT14)
    oT14=ValueResidence
    ChkDD(0)
  }
}
function ChkDD(X) {
  var MsgID,iv,lv,uv,a,b,v1,vc
  var obj,i
  var slfDDreseted,spsDDreseted
  var slfHasIncome, spsHasIncome, slfACDChanged, spsACDChanged
  GetDeduction()
  spsHasIncome=(NotNIL(dF.T2))
  slfHasIncome=(NotNIL(dF.T1))
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  MsgID=0
  slfDDreseted=false
  spsDDreseted=false
  if (obj[0].checked) {
	if (dF.D19.selectedIndex>0 || dF.D21.selectedIndex>0 || NotNIL(dF.T4) || NotNIL(dF.T10) || NotNIL(dF.T39) || NotNIL(dF.T390) || NotNIL(dF.T41)) {
		MsgID=4
		ClrTxt(dF.T4)
		ClrTxt(dF.T10)
		ClrTxt(dF.T39)
		ClrTxt(dF.T390)
		ClrTxt(dF.T41)
		dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19

		dF.D21.selectedIndex=0;
  setTimeout(() => {setSpouseDisabledDependant(-99999999999);}, 60);  // add D21

	}
  }
  if (IsNIL(dF.T1) && spsHasIncome) {
    if (NotNIL(dF.T3) || NotNIL(dF.T9)  || NotNIL(dF.T380) || dF.D18.selectedIndex>0 || dF.D20.selectedIndex>0 || NotNIL(dF.T34) || NotNIL(dF.T40) || dF.D32.selectedIndex>0 || NotNIL(dF.T36)) {
      ClrTxt(dF.T3)

setTimeout(() => {setSelfApprovedDonations(-99999999999);}, 60); // T3
      ClrTxt(dF.T9)

setTimeout(() => {setSelfResidentialAmount(-99999999999);}, 60); // T9
      ClrTxt(dF.T34)

setTimeout(() => {setSelfVhis(-99999999999);}, 60); // T34
      ClrTxt(dF.T36)

setTimeout(() => {setSelfVhisRelateAmount(-99999999999);}, 60); // T36
      ClrTxt(dF.T40)

setTimeout(() => {setSelfAnnuity(-99999999999);}, 60); // T40
	  ClrTxt(dF.T380)

setTimeout(() => {setSelfMPFV2(-99999999999);}, 60); // T380
      dF.D32.selectedIndex=0;
  setTimeout(() => {setSelfVhisRelateCount(-99999999999);}, 60);  // add D32

      dF.D18.selectedIndex=0;
  setTimeout(() => {setSelfEldery(-99999999999);}, 60);  // add D18

      dF.D20.selectedIndex=0;
  setTimeout(() => {setSelfDisabledDependant(-99999999999);}, 60);  // add D20

      MsgID=2.8
      slfDDreseted=true
    }
    oT3=""; T3tag="0"
    oT11=""; T11tag="0"
  }
  if (IsNIL(dF.T1)) {
    if (NotNIL(dF.T3) || NotNIL(dF.T5) || NotNIL(dF.T9) || NotNIL(dF.T11) || dF.D18.selectedIndex>0 || dF.D20.selectedIndex>0 || NotNIL(dF.T15) || NotNIL(dF.T34) || NotNIL(dF.T36) || NotNIL(dF.T38) || NotNIL(dF.T380) || NotNIL(dF.T40) || dF.D32.selectedIndex>0) {
      ClrTxt(dF.T3)

setTimeout(() => {setSelfApprovedDonations(-99999999999);}, 60); // T3
      ClrTxt(dF.T5)

setTimeout(() => {setSelfEducationExpenses(-99999999999);}, 60); // T5
      ClrTxt(dF.T9)

setTimeout(() => {setSelfResidentialAmount(-99999999999);}, 60); // T9
      dF.D18.selectedIndex=0;
  setTimeout(() => {setSelfEldery(-99999999999);}, 60);  // add D18

      dF.D20.selectedIndex=0;
  setTimeout(() => {setSelfDisabledDependant(-99999999999);}, 60);  // add D20

      ClrTxt(dF.T11)

setTimeout(() => {setSelfMPF(-99999999999);}, 60); // T11
      ClrTxt(dF.T15)
	setTimeout(() => {setSelfOAndE(-99999999999);}, 60); // add T15
      ClrTxt(dF.T34)

setTimeout(() => {setSelfVhis(-99999999999);}, 60); // T34
      ClrTxt(dF.T36)

setTimeout(() => {setSelfVhisRelateAmount(-99999999999);}, 60); // T36
      ClrTxt(dF.T38)

setTimeout(() => {setSelfMPFV(-99999999999);}, 60); // T38
	  	  ClrTxt(dF.T380)

setTimeout(() => {setSelfMPFV2(-99999999999);}, 60); // T380
      ClrTxt(dF.T40)

setTimeout(() => {setSelfAnnuity(-99999999999);}, 60); // T40
      dF.D32.selectedIndex=0;
  setTimeout(() => {setSelfVhisRelateCount(-99999999999);}, 60);  // add D32

      MsgID=2
      slfDDreseted=true
    }
    oT3=""; T3tag="0"
    oT11=""; T11tag="0"
  }
  if (IsNIL(dF.T2) && slfHasIncome) {
    if (obj[0].checked) {
/*		if (NotNIL(dF.T4) || NotNIL(dF.T10) || NotNIL(dF.T41)) {
		MsgID=4
		ClrTxt(dF.T4)
		ClrTxt(dF.T10)
		ClrTxt(dF.T41)
		spsDDreseted=true
		} else { if (NotNIL(dF.T4) || NotNIL(dF.T10) || NotNIL(dF.T39) || NotNIL(dF.T41) || dF.D19.selectedIndex>0 || dF.D21.selectedIndex>0 ) {*/
		if (NotNIL(dF.T4) || NotNIL(dF.T10) || NotNIL(dF.T41) || dF.D19.selectedIndex>0 || dF.D21.selectedIndex>0 ) {
			ClrTxt(dF.T4)
			ClrTxt(dF.T10)
			ClrTxt(dF.T39)
					ClrTxt(dF.T390)
			ClrTxt(dF.T41)
			ClrTxt(dF.T35)
			dF.D33.selectedIndex=0;
  setTimeout(() => {setSpouseVhisRelateCount(-99999999999);}, 60);  // add D33

			dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19

			dF.D21.selectedIndex=0;
  setTimeout(() => {setSpouseDisabledDependant(-99999999999);}, 60);  // add D21

			MsgID=2.9
			spsDDreseted=true
		}
    }
    oT4=""; T4tag="0"
    oT12=""; T12tag="0"
  }
  if (IsNIL(dF.T2)) {
    if (NotNIL(dF.T4) || NotNIL(dF.T6) || NotNIL(dF.T10) || NotNIL(dF.T12) || dF.D19.selectedIndex>0 || dF.D21.selectedIndex>0 || NotNIL(dF.T16) || NotNIL(dF.T35) || NotNIL(dF.T37)  || NotNIL(dF.T39)  || NotNIL(dF.T390)  || NotNIL(dF.T41) || dF.D33.selectedIndex>0 ) {
      if (obj[0].checked) {	// Single ?
        MsgID=4
      } else {
			if (slfHasIncome && (NotNIL(dF.T4) || NotNIL(dF.T10) || NotNIL(dF.T35) || NotNIL(dF.T37) || NotNIL(dF.T41) || NotNIL(dF.T390) || dF.D19.selectedIndex>0 || dF.D33.selectedIndex>0 )) {
				MsgID=2.9
			} else {
				MsgID=2.5
			}	
      }
      ClrTxt(dF.T4)
      ClrTxt(dF.T6)
      ClrTxt(dF.T10)
      dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19

      dF.D21.selectedIndex=0;
  setTimeout(() => {setSpouseDisabledDependant(-99999999999);}, 60);  // add D21

      ClrTxt(dF.T12)
      ClrTxt(dF.T16)
      ClrTxt(dF.T35)
      ClrTxt(dF.T37)
      ClrTxt(dF.T39)
	  	  ClrTxt(dF.T390)
      ClrTxt(dF.T41)
      dF.D33.selectedIndex=0;
  setTimeout(() => {setSpouseVhisRelateCount(-99999999999);}, 60);  // add D33

      spsDDreseted=true
    }
    oT4=""; T4tag="0"
    oT12=""; T12tag="0"
  }
  vc=(dF.T3.value!=oT3)
  if ((X==3 && vc) || NotNIL(dF.T3)) {
    lv=LimD_DonaLL
    if (IsNIL(dF.T1)) {
      uv=0
    } else {
      uv=Math.floor(LimD_DonaUL*(CDbl(dF.T1.value)+CDbl(dF.T13.value)-CDbl(dF.T15.value))/100)
    }
    oT3=""
    if (vc) T3tag="0"
    if (NotNIL(dF.T3)) {
      iv=FormatInput(dF.T3.value,lv,uv)
      a=FormatInput(dF.T3.value,0,99999999999)

      let v1="0"
      if (iv=="*") {
        MsgID=1
      } else if (iv=="-") {
        MsgID=5
        b=a
      } else {
        v1=a
        if (vc) T3tag=a
        if (iv=="+") {
          if (uv>=lv) {
            v1=FormatInput(uv,0,99999999999)
          } else {
            v1="0"
          }
          if (spsHasIncome) {
          	MsgID=6.5
          } else {
          	MsgID=6
          }
         	b=a
        }
      }
      if (v1=="0") {
        oT3=""
      } else {
        oT3=v1
      }
      SetTxt(dF.T3,v1);
		setTimeout(() => {setSelfApprovedDonations(v1 == 0 ? -99999999999 : -parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T3

      if (T3tag==v1) {
      	slfACDChanged=false
      } else {
	      slfACDChanged=true
      }
      T3tag=v1
    }
  }
  vc=(dF.T4.value!=oT4)
  spsHasIncome=(NotNIL(dF.T1))
  if ((X==4 && vc) || NotNIL(dF.T4)) {
    lv=LimD_DonaLL
    if (IsNIL(dF.T2)) {
      uv=0
    } else {
      uv=Math.floor(LimD_DonaUL*(CDbl(dF.T2.value)+CDbl(dF.T14.value)-CDbl(dF.T16.value))/100)
    }
    oT4=""
    if (vc) T4tag="0"
    if (NotNIL(dF.T4)) {
      iv=FormatInput(dF.T4.value,lv,uv)
      a=FormatInput(dF.T4.value,0,99999999999)

      let v1="0"
      if (iv=="*") {
        MsgID=1
      } else if (iv=="-") {
        MsgID=5
        b=a
      } else {
        v1=a
        if (vc) T4tag=a
        if (iv=="+") {
          if (uv>=lv) {
            v1=FormatInput(uv,0,99999999999)
          } else {
            v1="0"
          }
          if (spsHasIncome) {
          	MsgID=6.8
          } else {
          	MsgID=6.3
          }
         	b=a
        }
      }
      if (v1=="0") {
        oT4=""
      } else {
        oT4=v1
      }
      SetTxt(dF.T4,v1);
		setTimeout(() => {setSpouseApprovedDonations(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T4

      if (T4tag==v1) {
      	spsACDChanged=false
      } else {
	      spsACDChanged=true
      }
      T4tag=v1      
    }
  }
  if (X==38) {
	  if (NotNIL(dF.T38)) {
		iv=FormatInput(dF.T38.value,0,LimD_VTC)
		a=FormatInput(dF.T38.value,0,99999999999)

		let v1="0"
		if (YrEnd<2020 && iv!="0") {
		  MsgID=3
		  b=2020
		} else if (iv=="*") {
		  MsgID=1
		} else if (iv=="+") {
		  MsgID=11
		  b=a
		  v1=FormatMoney(LimD_VTC) 
		  SetTxt(dF.T40,0);
		setTimeout(() => {setSelfAnnuity(-99999999999);}, 60); // add T40

		} else {
		  v1=iv
		  if (NotNIL(dF.T40)) {
			var x,y 
			x=Math.floor(Math.abs(CDbl(dF.T38.value)))
			y=Math.floor(Math.abs(CDbl(dF.T40.value)))
			if ((x+y)>LimD_VTC) {
				b=a
				MsgID=11
				SetTxt(dF.T40, FormatMoney(Math.floor(Math.abs(LimD_VTC-x))) );
		setTimeout(() => {setSelfAnnuity(Math.floor(Math.abs(LimD_VTC-x)) == 0 ? -99999999999 : Math.floor(Math.abs(LimD_VTC-x)));}, 60); // add T40

			}
		  }
		}
		SetTxt(dF.T38,v1);
		setTimeout(() => {setSelfMPFV(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T38

	  }
  }
    if (X==380) {
	  if (NotNIL(dF.T380)) {
		iv=FormatInput(dF.T380.value,0,LimD_RD)
		b=FormatInput(dF.T380.value,0,99999999999)

		let v1="0"
	   if (iv=="*") {
		  MsgID=1
		} else if (iv=="+") {
		  MsgID=11.5
		  v1=FormatMoney(LimD_RD) 
		}else{
		v1=iv
		}
		SetTxt(dF.T380,v1);
		setTimeout(() => {setSelfMPFV2(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T380

	  }
  }
  if (X==40) {
	  if (NotNIL(dF.T40)) {
		var newLimD_VTC = LimD_VTC
		if (NotNIL(dF.T38)) {
			var b
			b=Math.floor(Math.abs(CDbl(dF.T38.value)))
			newLimD_VTC=newLimD_VTC-b
		}
		iv=FormatInput(dF.T40.value,0,newLimD_VTC)
		a=FormatInput(dF.T40.value,0,99999999999)

		let v1="0"	
		if (YrEnd<2020 && iv!="0") {
		  MsgID=3
		  b=2020
		} else if (iv=="*") {
		  MsgID=1
		} else if (iv=="+") {
		  MsgID=11
		  b=a
		  v1=FormatMoney(newLimD_VTC) 
		} else {
		  v1=iv
		}
		SetTxt(dF.T40,v1);
		setTimeout(() => {setSelfAnnuity(v1 == 0 ? -99999999999 : -parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T40

	  }
  }
  if (X==39) {  
	  if (NotNIL(dF.T39)) {
		if (obj[0].checked) {  // Single ?
		  MsgID=4
		  ClrTxt(dF.T39)
		} else {
			iv=FormatInput(dF.T39.value,0,LimD_VTC)
			a=FormatInput(dF.T39.value,0,99999999999)

			let v1="0"
			if (YrEnd<2020 && iv!="0") {
			  MsgID=3
			  b=2020
			} else if (iv=="*") {
			  MsgID=1
			} else if (iv=="+") {
			  MsgID=11
			  b=a
			  v1=FormatMoney(LimD_VTC)
			  SetTxt(dF.T41,0);
		setTimeout(() => {setSpouseAnnuity(-99999999999);}, 60); // add T41

			} else {
			  v1=iv
			  if (NotNIL(dF.T41)) {
				var x,y 
				x=Math.floor(Math.abs(CDbl(dF.T39.value)))
				y=Math.floor(Math.abs(CDbl(dF.T41.value)))
				if ((x+y)>LimD_VTC) {
					b=a
					MsgID=11
					SetTxt(dF.T41, FormatMoney(Math.floor(Math.abs(LimD_VTC-x))) );
		setTimeout(() => {setSpouseAnnuity(Math.floor(Math.abs(LimD_VTC-x)) == 0 ? -99999999999 : Math.floor(Math.abs(LimD_VTC-x)));}, 60); // add T41

				}
			  }
			} 
			SetTxt(dF.T39,v1);
		setTimeout(() => {setSpouseMPFV(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T39

		}
	  }
  }
  if (X==390) {  
	  if (NotNIL(dF.T390)) {
		if (obj[0].checked) {  // Single ?
		  MsgID=4
		  ClrTxt(dF.T390)
		} else {
			iv=FormatInput(dF.T390.value,0,LimD_RD)
			a=FormatInput(dF.T390.value,0,99999999999)

			let v1="0"
			if (iv=="*") {
			  MsgID=1
			} else if (iv=="+") {
			  MsgID=11.5
			  b=a
			  v1=FormatMoney(LimD_RD)
			} else {
			  v1=iv
			} 
			SetTxt(dF.T390,v1);
		setTimeout(() => {setSpouseMPFV2(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T390

		}
	  }
  }
  if (X==41) {
	  if (NotNIL(dF.T41)) {
		  if (obj[0].checked) {  // Single ?
			MsgID=4
			ClrTxt(dF.T41)
		  } else {
			var newLimD_VTC = LimD_VTC
			if (NotNIL(dF.T39)) {
				var b
				b=Math.floor(Math.abs(CDbl(dF.T39.value)))
				newLimD_VTC=newLimD_VTC-b
			}
			iv=FormatInput(dF.T41.value,0,newLimD_VTC)
			a=FormatInput(dF.T41.value,0,99999999999)

			let v1="0"	
			if (YrEnd<2020 && iv!="0") {
				MsgID=3
				b=2020
			} else if (iv=="*") {
				MsgID=1
			} else if (iv=="+") {
				MsgID=11
				b=a
				v1=FormatMoney(newLimD_VTC) 
			} else {
				v1=iv
			}
			SetTxt(dF.T41,v1);
		setTimeout(() => {setSpouseAnnuity(v1 == 0 ? -99999999999 : -parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T41

		  }
	  }
  }
  if (NotNIL(dF.T5)) {
    iv=FormatInput(dF.T5.value,0,LimD_Education)
    a=FormatInput(dF.T5.value,0,99999999999)

    let v1="0"
    if (YrEnd<1997 && iv!="0") {
      MsgID=3
      b=1997
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=7
      b=a
      v1=FormatMoney(LimD_Education)
    } else {
      v1=iv
    }
    SetTxt(dF.T5,v1);
		setTimeout(() => {setSelfEducationExpenses(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T5

  }
  if (NotNIL(dF.T6)) {
    iv=FormatInput(dF.T6.value,0,LimD_Education)
    a=FormatInput(dF.T6.value,0,99999999999)

    let v1="0"
    if (YrEnd<1997 && iv!="0") {
      MsgID=3
      b=1997
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=7
      b=a
      v1=FormatMoney(LimD_Education)
    } else {
      v1=iv
    }
    SetTxt(dF.T6,v1);
		setTimeout(() => {setSpouseEducationExpenses(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T6

  }
  if (NotNIL(dF.T7)) {
    iv=FormatInput(dF.T7.value,0,LimD_HomeLoan)
    a=FormatInput(dF.T7.value,0,99999999999)

    let v1="0"
    if (YrEnd<1999 && iv!="0") {
      MsgID=3
      b=1999
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=8
      b=a
      v1=FormatMoney(LimD_HomeLoan)
    } else {
      v1=iv
    }
    SetTxt(dF.T7,v1);
		setTimeout(() => {setSelfHomeLoanInterest(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T7

  }
  if (NotNIL(dF.T8)) {
    if (obj[0].checked) {  // Single ?
      MsgID=4
      ClrTxt(dF.T8)
    } else {
      iv=FormatInput(dF.T8.value,0,LimD_HomeLoan)
      a=FormatInput(dF.T8.value,0,99999999999)

      let v1="0"
      if (YrEnd<1999 && iv!="0") {
        MsgID=3
        b=1999
      } else if (iv=="*") {
        MsgID=1
      } else if (iv=="+") {
        MsgID=8
        b=a
        v1=FormatMoney(LimD_HomeLoan)
      } else {
        v1=iv
      }
      SetTxt(dF.T8,v1);
		setTimeout(() => {setSpouseHomeLoanInterest(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T8

    }
  }
  if (NotNIL(dF.T9)) {
    iv=FormatInput(dF.T9.value,0,LimD_Elderly*dF.D18.selectedIndex)
    a=FormatInput(dF.T9.value,0,99999999999)

    let v1="0"
    if (YrEnd<1999 && iv!="0") {
      MsgID=3
      b=1999
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=9
      b=a
      v1=FormatMoney(LimD_Elderly*dF.D18.selectedIndex)
    } else {
      v1=iv
    }
    SetTxt(dF.T9,v1);
		setTimeout(() => {setSelfResidentialAmount(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T9

  }
  if (NotNIL(dF.T10)) {
    iv=FormatInput(dF.T10.value,0,LimD_Elderly*dF.D19.selectedIndex)
    a=FormatInput(dF.T10.value,0,99999999999)

    let v1="0"
    if (YrEnd<1999 && iv!="0") {
      MsgID=3
      b=1999
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=9
      b=a
      v1=FormatMoney(LimD_Elderly*dF.D19.selectedIndex)
    } else {
      v1=iv
    }
    SetTxt(dF.T10,v1);
		setTimeout(() => {setSpouseResidentialAmount(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T10

  }
  if (NotNIL(dF.T34)) {
    iv=FormatInput(dF.T34.value,0,LimD_VHIS)
    a=FormatInput(dF.T34.value,0,99999999999)

    let v1="0"
    if (YrEnd<2020 && iv!="0") {
      MsgID=3
      b=2020
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=12
      b=a
      v1=FormatMoney(LimD_VHIS)
    } else {
      v1=iv
    }
    SetTxt(dF.T34,v1);
		setTimeout(() => {setSelfVhis(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T34

  }
  if (NotNIL(dF.T35)) {
    iv=FormatInput(dF.T35.value,0,LimD_VHIS)
    a=FormatInput(dF.T35.value,0,99999999999)

    let v1="0"
    if (YrEnd<2020 && iv!="0") {
      MsgID=3
      b=2020
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=12
      b=a
      v1=FormatMoney(LimD_VHIS)
    } else {
      v1=iv
    }
    SetTxt(dF.T35,v1);
		setTimeout(() => {setSpouseVhis(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T35

  }
  if (NotNIL(dF.T36)) {
    iv=FormatInput(dF.T36.value,0,LimD_VHIS*dF.D32.selectedIndex)
    a=FormatInput(dF.T36.value,0,99999999999)

    let v1="0"
    if (YrEnd<2020 && iv!="0") {
      MsgID=3
      b=2020
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=13
      b=a
      v1=FormatMoney(LimD_VHIS*dF.D32.selectedIndex)
    } else {
      v1=iv
    }
    SetTxt(dF.T36,v1);
		setTimeout(() => {setSelfVhisRelateAmount(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T36

  }
  if (NotNIL(dF.T37)) {
    iv=FormatInput(dF.T37.value,0,LimD_VHIS*dF.D33.selectedIndex)
    a=FormatInput(dF.T37.value,0,99999999999)

    let v1="0"
    if (YrEnd<2020 && iv!="0") {
      MsgID=3
      b=2020
    } else if (iv=="*") {
      MsgID=1
    } else if (iv=="+") {
      MsgID=13
      b=a
      v1=FormatMoney(LimD_VHIS*dF.D33.selectedIndex)
    } else {
      v1=iv
    }
    SetTxt(dF.T37,v1);
		setTimeout(() => {setSpouseVhisRelateAmount(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T37

  }  
  vc=(dF.T11.value!=oT11)
  if ((X==11 && vc) || NotNIL(dF.T11)) {
    if (IsNIL(dF.T1)) {
      uv=0
    } else {
        uv=LimD_MPF
    }
    oT11=""
    if (vc) T11tag="0"
    if (NotNIL(dF.T11)) {
      iv=FormatInput(dF.T11.value,0,uv)
      a=FormatInput(dF.T11.value,0,99999999999)

      let v1="0"
      if (YrEnd<2001 && iv!="0") {
        MsgID=3
        b=2001
      } else if (iv=="*") {
        MsgID=1
      } else {
        v1=a
        if (vc) T11tag=a
        if (iv=="+") {
          v1=FormatInput(uv,0,99999999999)
          MsgID=10
          b=a
        }
      }
      if (v1=="0") {
        oT11=""
      } else {
        oT11=v1
      }
      SetTxt(dF.T11,v1);
		setTimeout(() => {setSelfMPF(v1 == 0 ? -99999999999 : -parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T11

    }
  }
  vc=(dF.T12.value!=oT12)
  if ((X==12 && vc) || NotNIL(dF.T12)) {
    if (IsNIL(dF.T2)) {
      uv=0
    } else {
      uv=Math.floor(LimD_rate_MPF*CDbl(dF.T2.value)/100)		// limit by percentage of income
        uv=LimD_MPF
    }
    oT12=""
    if (vc) T12tag="0"
    if (NotNIL(dF.T12)) {
      iv=FormatInput(dF.T12.value,0,uv)
      a=FormatInput(dF.T12.value,0,99999999999)

      let v1="0"
      if (YrEnd<2001 && iv!="0") {
        MsgID=3
        b=2001
      } else if (iv=="*") {
        MsgID=1
      } else {
        v1=a
        if (vc) T12tag=a
        if (iv=="+") {
          v1=FormatInput(uv,0,99999999999)
          MsgID=10
          b=a
        }
      }
      if (v1=="0") {
        oT12=""
      } else {
        oT12=v1
      }
      SetTxt(dF.T12,v1);
		setTimeout(() => {setSpouseMPF(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T12

    }
  }
  if (NotNIL(dF.T15)) {
 let v1 = '0';
     if (IsNIL(dF.T1)) {
        iv=0
     } else {
        iv=FormatInput(dF.T15.value,0,999999999)
     }
     if (iv=="*") {
        MsgID=1
        v1=0
     } else if (iv=="+") {
        MsgID=1.5
        v1=0
     } else {
        v1=iv
     }
     SetTxt(dF.T15,v1);
		setTimeout(() => {setSelfOAndE(v1 == 0 ? -99999999999 : -parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T15

  }
  if (NotNIL(dF.T16)) {
 let v1 = '0';
     if (IsNIL(dF.T2)) {
        iv=0
     } else {
        iv=FormatInput(dF.T16.value,0,999999999)
     }
     if (iv=="*") {
        MsgID=1
        v1=0
     } else if (iv=="+") {
        MsgID=1.5
        v1=0
     } else {
        v1=iv
     }
     SetTxt(dF.T16,v1);
		setTimeout(() => {setSpouseOAndE(-parseFloat(v1.toString().replaceAll(",", "")));}, 60); // add T16

  }
  if (X>0) {
    if (MsgID==1) ErrMsg("你輸入的數值不正確 !")
    else if (MsgID==1.5) ErrMsg("你不可輸入超過 9 位數字的數值 !")
    else if (MsgID==2) ErrMsg("由於你沒有入息，因此你不能申請扣除。")
    else if (MsgID==2.5) ErrMsg("由於你配偶沒有入息，因此你配偶不能申請扣除。")
    else if (MsgID==2.8) ErrMsg("由於你沒有入息，因此你不能申請扣除，你可把有關數額於配偶一方內輸入。")
    else if (MsgID==2.9) ErrMsg("由於你配偶沒有入息，因此你配偶不能申請扣除，你可把有關數額於本人一方內輸入。")	
    else if (MsgID==3) ErrMsg("這項扣除由" + (b-1)+"/"+rightStr(b,2) + "課税年度起開始生效。")
    else if (MsgID==4) ErrMsg("由於你並非已婚人士，因此你不能輸入配偶的扣除。")
    else if (MsgID==5) ErrMsg("你輸入港元" + b + "。 認可慈善捐款須達一百元或以上方可申請扣除。")
    else if (MsgID==6) InfoMsg("你輸入港元" + b + "。 認可慈善捐款扣除額不可超出你入息的"+CInt(LimD_DonaUL)+" %。")
    else if (MsgID==6.3) InfoMsg("你輸入港元" + b + "。 認可慈善捐款扣除額不可超出你配偶入息的"+CInt(LimD_DonaUL)+" %。")
    else if (MsgID==6.5) InfoMsg("你輸入港元" + b + "。 認可慈善捐款扣除額不可超出你入息的"+CInt(LimD_DonaUL)+" %，你可把餘下的慈善捐款數額於配偶一方內輸入。")
    else if (MsgID==6.8) InfoMsg("你輸入港元" + b + "。 認可慈善捐款扣除額不可超出你配偶入息的"+CInt(LimD_DonaUL)+" %，你可把餘下的慈善捐款數額於本人一方內輸入。")
    else if (MsgID==7) ErrMsg("你輸入港元" + b + "。 個人進修開支最高扣除額為港元" + FormatMoney(LimD_Education) + "。")
    else if (MsgID==8) ErrMsg("你輸入港元" + b + "。 居所貸款利息最高扣除額為港元" + FormatMoney(LimD_HomeLoan) + "。")
    else if (MsgID==9) ErrMsg("你輸入港元" + b + "。 長者住宿照顧開支扣除額不可超過在安老院居住的受養人數目 x 每位受養人最高扣除額港元" + FormatMoney(LimD_Elderly) + "。")
    else if (MsgID==10) InfoMsg("你輸入港元" + b + "。 認可退休計劃的強制性供款最高扣除額為港元"+FormatMoney(LimD_MPF)+"。")
    else if (MsgID==11) InfoMsg("你輸入港元" + b + "。 強積金自願性供款及合資格年金保費扣除總額的最高扣除額為港元" + FormatMoney(LimD_VTC) + "。")
    else if (MsgID==11.5) InfoMsg("你輸入港元" + b + "。 住宅租金扣除最高扣除額為港元" + FormatMoney(LimD_RD) + "。")	
    else if (MsgID==12) InfoMsg("你輸入港元" + b + "。 合資格醫療保險保費扣除額每人最高扣除額為港元" + FormatMoney(LimD_VHIS) + "。")
    else if (MsgID==13) InfoMsg("你輸入港元" + b + "。 合資格醫療保險保費扣除額不可超過親屬數目 x 每人最高扣除額港元" + FormatMoney(LimD_VHIS) + "。")
    if (X==3) NullZero(dF.T3,MsgID)
    else if (X==4) NullZero(dF.T4,MsgID)
    else if (X==5) NullZero(dF.T5,MsgID)
    else if (X==6) NullZero(dF.T6,MsgID)
    else if (X==7) NullZero(dF.T7,MsgID)
    else if (X==8) NullZero(dF.T8,MsgID)
    else if (X==9) NullZero(dF.T9,MsgID)
	else if (X==10) NullZero(dF.T10,MsgID)
    else if (X==11) NullZero(dF.T11,MsgID)
    else if (X==12) NullZero(dF.T12,MsgID)
    else if (X==15) NullZero(dF.T15,MsgID)
    else if (X==16) NullZero(dF.T16,MsgID)
    else if (X==34) NullZero(dF.T34,MsgID)
	else if (X==35) NullZero(dF.T35,MsgID)
    else if (X==36) NullZero(dF.T36,MsgID)
    else if (X==37) NullZero(dF.T37,MsgID)
    else if (X==38) NullZero(dF.T38,MsgID)
	else if (X==380) NullZero(dF.T380,MsgID)
	else if (X==39) NullZero(dF.T39,MsgID)
	else if (X==390) NullZero(dF.T390,MsgID)
    else if (X==40) NullZero(dF.T40,MsgID)
    else if (X==41) NullZero(dF.T41,MsgID)
  } else {	// ChkDD triggered by fields other than Deduction Inputs (such as Income or Assessment year)
    if (slic || slvr) {
      if (slic && (CInt(T3tag)>0)) {
      	slfACDChanged=true
      }	
      slic=false
      slvr=false
      vc=false
      v1=dF.T3.value
      if (v1=="") v1="0"
      if (slfACDChanged) vc=true
      v1=dF.T11.value
      if (v1=="") v1="0"
      if (v1!=T11tag) vc=true
      if (slfDDreseted) vc=true
      if (vc) {
        InfoMsg("由於總入息有改變，可減免扣除的最高限額也相應改變。請考慮重新輸入。")
      }
    }
    if (spic || spvr) {
      if (spic && (CInt(T4tag)>0)) {
      	spsACDChanged=true
      }	
      spic=false
      spvr=false
      vc=false
      v1=dF.T4.value
      if (v1=="") v1="0"
      if (spsACDChanged) vc=true
      v1=dF.T12.value
      if (v1=="") v1="0"
      if (v1!=T12tag) vc=true
      if (spsDDreseted) vc=true
      if (vc) {
        InfoMsg("由於總入息有改變，可減免扣除的最高限額也相應改變。請考慮重新輸入。")
      }
    }
    if (X==-1 && MsgID!=0) {
      InfoMsg("因為課税年度有改變，可減免扣除的最高限額也相應改變。請考慮重新輸入。")
    }
  }
} // End ChkDD
function NullZero(obj,e) {
  e=Math.floor(e)
  if (e==0 || e==6 || e==7 || e==8 || e==9 || e==10  || e==11 || e==12 || e==13) {
    if (IsNIL(obj)) obj.value="0"
  } else {
    obj.value=""
    // obj.focus()
  }
}
function SetTxt(obj,v) {
  if (obj.value!=v) obj.value=v
}
function FormatInput(IncStr,ll,ul) {
  var Istr
  Istr = trimStr(IncStr)
  if (Istr=="") {
    return "0"
  } else if (!IsNumber(Istr)) {
    return "*"
  } else if (Math.abs(CDbl(Istr))<ll) {
    return "-"
  } else if (Math.abs(CDbl(Istr))>ul) {
    return "+"
  } else {
    return FormatMoney(Math.floor(Math.abs(CDbl(Istr))))
  }
}
function IsNumber(Istr) {
  var AllowChars,i
  AllowChars="0123456789,"
  for (i=0; i<Istr.length; i++) {
    if (AllowChars.indexOf(Istr.charAt(i))==-1) {
      return false
    }
  }
  return true
}
function IsNIL(obj) {
  var AllowChars,i,ov
  AllowChars="0 "
  ov=obj.value
  for (i=0; i<ov.length; i++) {
    if (AllowChars.indexOf(ov.charAt(i))==-1) {
      return false
    }
  }
  return true
}
function NotNIL(obj) {
  return !IsNIL(obj)
}
function ClrTxt(obj) {
  obj.value="0"
}
function D1OnChange() {
  YrValue=dF.D1.options[dF.D1.selectedIndex].value
  YrEnd=parseInt(rightStr(YrValue,4),10)
  if (YrEnd < 1995) {		// before 94/95
  }
  if (YrEnd < 1996) {		// before 95/96
      dF.D4.selectedIndex=0
      dF.D8.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsResided(-99999999999);}, 60);  // add D8

      dF.D10.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsNotResided(-99999999999)}, 60); // add D10

      dF.D15.selectedIndex=0;
		setTimeout(() => {setSpouseDisabledDependent(false);}, 60); /* // add D15 */
  }
  if (YrEnd < 1997) {		// before 96/97
      dF.D5.selectedIndex=0;
  setTimeout(() => {setDependentBrothersSis(-99999999999);}, 60);  // add D5

      dF.D6.selectedIndex=0;
  setTimeout(() => {setDisabledDependentBrothersSis(-99999999999);}, 60);  // add D6

  }
  if (YrEnd < 1999) {		// before 98/99
      dF.D18.selectedIndex=0;
  setTimeout(() => {setSelfEldery(-99999999999);}, 60);  // add D18

      dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19

      dF.D20.selectedIndex=0;
  setTimeout(() => {setSelfDisabledDependant(-99999999999);}, 60);  // add D20

      dF.D21.selectedIndex=0;
  setTimeout(() => {setSpouseDisabledDependant(-99999999999);}, 60);  // add D21

  }
  if (YrEnd < 2006) {		// before 2005/06
      dF.D16.selectedIndex=0;
  setTimeout(() => {setDependentparents5560Resided(-99999999999);}, 60);  // add D16

      dF.D17.selectedIndex=0;
  setTimeout(() => {setDependentparents5560NotResided(-99999999999);}, 60);  // add D17

  }
  GetDeduction()
  ChkDD(-1)
}
function D2OnClick() {
  setIsMarriedState(val => !val); setIsMarried(val => !val);
  var obj
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (obj[0].checked) {		// Single ?
    dF.T2.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T2
    dF.T14.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T14
    dF.D15.selectedIndex=0;
		setTimeout(() => {setSpouseDisabledDependent(false);}, 60); /* // add D15 */
    dF.D15b.selectedIndex=0;
		setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */	
  }
  if (obj[1].checked) {		// Married ?
    dF.D22.selectedIndex=0;
  setTimeout(() => {setSingleParentAllowance(false);}, 60);  // add D22

  }  
  ChkDD(0)
}
function D3OnChange() {
  if (dF.D4.selectedIndex>dF.D3.selectedIndex) {
    dF.D4.selectedIndex=dF.D3.selectedIndex;
  setTimeout(() => {setDisabledChildBornOtherYr(childBornOtherYr)}, 60); // add D4

  }
	  if (dF.D3.selectedIndex + dF.D3a.selectedIndex > 9) {
	     ErrMsgDDA2()
	       setTimeout(() => { try {dF.D3.selectedIndex = 9 - dF.D3a.selectedIndex;
  setTimeout(() => {setChildBornOtherYr(9 - childBornThisYr)}, 60); // add D3
;} catch (err) {console.log(err);} },1) 
	  }
}
function D4OnChange() {
  if (dF.D4.selectedIndex>0) {
    if (!CheckYear(1996)) {
        setTimeout(() => { try {dF.D4.selectedIndex=0; setTimeout(() => {setDisabledChildBornOtherYr(0);}, 60); /* // add D4 */} catch (err) {console.log(err);} },1) 
    } else if (dF.D4.selectedIndex>dF.D3.selectedIndex) {
      ErrMsgDDA()
        setTimeout(() => { try {dF.D4.selectedIndex=dF.D3.selectedIndex;
  setTimeout(() => {setDisabledChildBornOtherYr(childBornOtherYr)}, 60); // add D4
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D3aOnChange() {
  if (dF.D4a.selectedIndex>dF.D3a.selectedIndex) {
    dF.D4a.selectedIndex=dF.D3a.selectedIndex;
  setTimeout(() => {setDisabledChildBornThisYr(childBornThisYr)}, 60); // add D4a

  }
  if (dF.D3.selectedIndex + dF.D3a.selectedIndex > 9) {
     ErrMsgDDA2()
       setTimeout(() => { try {dF.D3a.selectedIndex = 9 - dF.D3.selectedIndex;
  setTimeout(() => {setChildBornThisYr(9 - childBornOtherYr)}, 60); // add D3a
;} catch (err) {console.log(err);} },1) 
  }
}
function D4aOnChange() {
  if (dF.D4a.selectedIndex>0) {
    if (!CheckYear(1996)) {
        setTimeout(() => { try {dF.D4a.selectedIndex=0; setTimeout(() => {setDisabledChildBornThisYr(0);}, 60); /* // add D4a */} catch (err) {console.log(err);} },1) 
    } else if (dF.D4a.selectedIndex>dF.D3a.selectedIndex) {
      ErrMsgDDA()
        setTimeout(() => { try {dF.D4a.selectedIndex=dF.D3a.selectedIndex;
  setTimeout(() => {setDisabledChildBornThisYr(childBornThisYr)}, 60); // add D4a
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D5OnChange() {
  var Num
  Num=dF.D5.selectedIndex
  if (Num>0) {
    if (!CheckYear(1997)) {
        setTimeout(() => { try {dF.D5.selectedIndex=0;
  setTimeout(() => {setDependentBrothersSis(-99999999999);}, 60);  // add D5
;} catch (err) {console.log(err);} },1) 
      Num=0
    }
  }
  if (dF.D6.selectedIndex>Num) {
    dF.D6.selectedIndex=Num;
  setTimeout(() => {setDisabledDependentBrothersSis(Num);}, 60);  // add D6

  }
}
function D6OnChange() {
  if (dF.D6.selectedIndex>0) {
    if (!CheckYear(1997)) {
        setTimeout(() => { try {dF.D6.selectedIndex=0;
  setTimeout(() => {setDisabledDependentBrothersSis(-99999999999);}, 60);  // add D6
;} catch (err) {console.log(err);} },1) 
    } else if (dF.D6.selectedIndex>dF.D5.selectedIndex) {
      ErrMsgDDA()
        setTimeout(() => { try {dF.D6.selectedIndex=dF.D5.selectedIndex;
  setTimeout(() => {setDisabledDependentBrothersSis(dependentBrothersSis)}, 60); // add D6
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D7OnChange() {
  if (dF.D8.selectedIndex>dF.D7.selectedIndex) {
    dF.D8.selectedIndex=dF.D7.selectedIndex;
  setTimeout(() => {setDisabledDependentparentsResided(dependentparentsResided)}, 60); // add D8

  }
}
function D8OnChange() {
  if (dF.D8.selectedIndex>0) {
    if (!CheckYear(1996)) {
        setTimeout(() => { try {dF.D8.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsResided(-99999999999);}, 60);  // add D8
;} catch (err) {console.log(err);} },1) 
    } else if (dF.D8.selectedIndex>dF.D7.selectedIndex) {
      ErrMsgDDA()
        setTimeout(() => { try {dF.D8.selectedIndex=dF.D7.selectedIndex;
  setTimeout(() => {setDisabledDependentparentsResided(dependentparentsResided)}, 60); // add D8
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D9OnChange() {
  if (dF.D10.selectedIndex>dF.D9.selectedIndex) {
    dF.D10.selectedIndex=dF.D9.selectedIndex;
  setTimeout(() => {setDisabledDependentparentsNotResided(dependentparentsNotResided)}, 60); // add D10

  }
}
function D10OnChange() {
  if (dF.D10.selectedIndex>0) {
    if (!CheckYear(1996)) {
        setTimeout(() => { try {dF.D10.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsNotResided(-99999999999)}, 60); // add D10
;} catch (err) {console.log(err);} },1) 
    } else if (dF.D10.selectedIndex>dF.D9.selectedIndex) {
      ErrMsgDDA()
        setTimeout(() => { try {dF.D10.selectedIndex=dF.D9.selectedIndex;
  setTimeout(() => {setDisabledDependentparentsNotResided(dependentparentsNotResided)}, 60); // add D10
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D15OnChange() {
  var ErrStr,obj
  if (dF.D15.selectedIndex==1) {
    ErrStr=""
    obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
    if (obj[0].checked) ErrStr="由於你並非已婚人士，因此你不能輸入「傷殘配偶」的項目。"
    if (YrEnd < 1996) {
      if (ErrStr!="") ErrStr="1. "+ErrStr+"\n2. "
      ErrStr=ErrStr+"這項免税額由1995/96開始提供。"
    }
    if (ErrStr!="") ErrMsg(ErrStr)
    if (ErrStr!="" || dF.T1.value=="0") {
        setTimeout(() => { try {dF.D15.selectedIndex=0;
		setTimeout(() => {setSpouseDisabledDependent(false);}, 60); /* // add D15 */;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D16OnChange() {
  if (dF.D16.selectedIndex>0) {
    if (!CheckYear(2006)) {
        setTimeout(() => { try {dF.D16.selectedIndex=0;
  setTimeout(() => {setDependentparents5560Resided(-99999999999);}, 60);  // add D16
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D17OnChange() {
  if (dF.D17.selectedIndex>0) {
    if (!CheckYear(2006)) {
        setTimeout(() => { try {dF.D17.selectedIndex=0;
  setTimeout(() => {setDependentparents5560NotResided(-99999999999);}, 60);  // add D17
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D18OnChange() {
  if (dF.D18.selectedIndex>0) {
    if (!CheckDDYear(1999)) {
        setTimeout(() => { try {dF.D18.selectedIndex=0;
  setTimeout(() => {setSelfEldery(-99999999999);}, 60);  // add D18
;} catch (err) {console.log(err);} },1) 
    }
  }
  if (dF.D20.selectedIndex>dF.D18.selectedIndex) {
      setTimeout(() => { try {dF.D20.selectedIndex=dF.D18.selectedIndex; setTimeout(() => {setSelfDisabledDependant(selfEldery);}, 60); /* // add D20 */} catch (err) {console.log(err);} },1) 
  }
  ChkDD(9)
}
function D32OnChange() {
  if (dF.D32.selectedIndex>0) {
    if (!CheckDDYear(2020)) {
        setTimeout(() => { try {dF.D32.selectedIndex=0;
  setTimeout(() => {setSelfVhisRelateCount(-99999999999);}, 60);  // add D32
;} catch (err) {console.log(err);} },1) 
    }
  }
  ChkDD(36)
}
function D33OnChange() {
  if (dF.D32.selectedIndex>0) {
    if (!CheckDDYear(2020)) {
        setTimeout(() => { try {dF.D33.selectedIndex=0;
  setTimeout(() => {setSpouseVhisRelateCount(-99999999999);}, 60);  // add D33
;} catch (err) {console.log(err);} },1) 
    }
  }
  ChkDD(37)
}
function D19OnChange() {
  if (dF.D19.selectedIndex>0) {
    if (!CheckDDYear(1999)) {
        setTimeout(() => { try {dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19
;} catch (err) {console.log(err);} },1) 
    }
  }
  if (dF.D21.selectedIndex>dF.D19.selectedIndex) {
      setTimeout(() => { try {dF.D21.selectedIndex=dF.D19.selectedIndex;
  setTimeout(() => {setSpouseDisabledDependant(spouseEldery)}, 60); // add D21
;} catch (err) {console.log(err);} },1) 
  }
  ChkDD(10)
}
function D20OnChange() {
  if (dF.D20.selectedIndex>dF.D18.selectedIndex) {
    ErrMsg("傷殘受養人數目不能超出在安老院居住的受養人數目。")
      setTimeout(() => { try {dF.D20.selectedIndex=dF.D18.selectedIndex; setTimeout(() => {setSelfDisabledDependant(selfEldery);}, 60); /* // add D20 */} catch (err) {console.log(err);} },1) 
  }
}
function D21OnChange() {
  if (dF.D21.selectedIndex>dF.D19.selectedIndex) {
    ErrMsg("傷殘受養人數目不能超出在安老院居住的受養人數目。")
      setTimeout(() => { try {dF.D21.selectedIndex=dF.D19.selectedIndex;
  setTimeout(() => {setSpouseDisabledDependant(spouseEldery)}, 60); // add D21
;} catch (err) {console.log(err);} },1) 
  }
}
function D22OnChange() {
  var ErrStr,obj
  if (dF.D22.selectedIndex==1) {
    ErrStr=""
    obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
    if (obj[1].checked) ErrStr="由於你是已婚人士，所以不能申請單親免税額。"
    if (ErrStr!="") ErrMsg(ErrStr)
    if (ErrStr!="" || (dF.D3a.selectedIndex+dF.D3.selectedIndex)=="0") {
        setTimeout(() => { try {dF.D22.selectedIndex=0;
  setTimeout(() => {setSingleParentAllowance(false);}, 60);  // add D22
;} catch (err) {console.log(err);} },1) 
    }
  }
}
function D15aOnChange() {
  var ErrStr,obj
  if (dF.D15a.selectedIndex==1) {
    ErrStr=""
    if (dF.T1.value=="0") ErrStr="由於你沒有入息，因此你不能申請傷殘人士免税額。"
    if (ErrStr!="") ErrMsg(ErrStr)
    if (ErrStr!="" || (dF.T1.value=="0" )) {
        setTimeout(() => { try {dF.D15a.selectedIndex=0; setTimeout(() => {setSelfPDA(false);}, 60); /* // add D15a */} catch (err) {console.log(err);} },1) 
    }
  }
}
function D15bOnChange() {
  var ErrStr,obj
  if (dF.D15b.selectedIndex==1) {
    ErrStr=""
    obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
    if (obj[0].checked) {
		ErrStr="由於你並非已婚人士，因此你不能輸入配偶的傷殘人士免税額。"
	} else {
		if (dF.T2.value=="0") ErrStr="由於你的配偶沒有入息，因此不能申請你配偶的傷殘人士免税額。"
	}
    if (ErrStr!="") ErrMsg(ErrStr)
    if (ErrStr!="" || (dF.T2.value=="0")) {
        setTimeout(() => { try {dF.D15b.selectedIndex=0;
		setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */; setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */} catch (err) {console.log(err);} },1) 
    }
  }
}
function B2OnClick() {
  inputRef.current = {};
  if (window.doDebug) console.log(`dF3`, dF) // dF.D2[0].checked=true
  dF.D3.selectedIndex=0
  dF.D4.selectedIndex=0
  dF.D5.selectedIndex=0;
  setTimeout(() => {setDependentBrothersSis(-99999999999);}, 60);  // add D5

  dF.D6.selectedIndex=0;
  setTimeout(() => {setDisabledDependentBrothersSis(-99999999999);}, 60);  // add D6

  dF.D7.selectedIndex=0
  dF.D8.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsResided(-99999999999);}, 60);  // add D8

  dF.D9.selectedIndex=0
  dF.D10.selectedIndex=0;
  setTimeout(() => {setDisabledDependentparentsNotResided(-99999999999)}, 60); // add D10

  dF.D15.selectedIndex=0;
		setTimeout(() => {setSpouseDisabledDependent(false);}, 60); /* // add D15 */
  dF.D15a.selectedIndex=0
  dF.D15b.selectedIndex=0;
		setTimeout(() => {setSpousePDA(false);}, 60); /* // add D15b */
  dF.D16.selectedIndex=0;
  setTimeout(() => {setDependentparents5560Resided(-99999999999);}, 60);  // add D16

  dF.D17.selectedIndex=0;
  setTimeout(() => {setDependentparents5560NotResided(-99999999999);}, 60);  // add D17

  dF.D18.selectedIndex=0;
  setTimeout(() => {setSelfEldery(-99999999999);}, 60);  // add D18

  dF.D19.selectedIndex=0;
  setTimeout(() => {setSpouseEldery(-99999999999);}, 60);  // add D19

  dF.D20.selectedIndex=0;
  setTimeout(() => {setSelfDisabledDependant(-99999999999);}, 60);  // add D20

  dF.D21.selectedIndex=0;
  setTimeout(() => {setSpouseDisabledDependant(-99999999999);}, 60);  // add D21

  dF.D22.selectedIndex=0;
  setTimeout(() => {setSingleParentAllowance(false);}, 60);  // add D22

  dF.T1.value="0"
  dF.T2.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T2
  dF.T3.value="0"
  dF.T4.value="0"
  dF.T5.value="0"
  dF.T6.value="0"
  dF.T7.value="0";
  setTimeout(() => {setSelfHomeLoanInterest(-99999999999);}, 60);  // add T7

  dF.T8.value="0";
  setTimeout(() => {setSpouseHomeLoanInterest(-99999999999);}, 60);  // add T8

  dF.T9.value="0"
  dF.T10.value="0"
  dF.T11.value="0"
  dF.T12.value="0"
  oT3=""; T3tag="0"
  oT4=""; T4tag="0"
  oT11=""; T11tag="0"
  oT12=""; T12tag="0"
    dF.D3a.selectedIndex=0
    dF.D4a.selectedIndex=0
  dF.T13.value="0"; setTimeout(() => {setSelfResidence(-99999999999);}, 60); // add T13
  dF.T14.value="0";
		setTimeout(() => {setSpouseResidence(0);}, 60); // add T14
  dF.T15.value="0"
  dF.T16.value="0"
  dF.T38.value="0"
  dF.T39.value="0"  
  dF.T380.value="0"
  dF.T390.value="0"
  dF.T40.value="0"
  dF.T41.value="0"
  dF.T34.value="0"
  dF.T35.value="0"
  dF.T36.value="0"  
  dF.T37.value="0"
  dF.D32.selectedIndex=0;
  setTimeout(() => {setSelfVhisRelateCount(-99999999999);}, 60);  // add D32

  dF.D33.selectedIndex=0;
  setTimeout(() => {setSpouseVhisRelateCount(-99999999999);}, 60);  // add D33

}
function CheckYear(Yr) {
  if (Yr > YrEnd) {
    ErrMsg("這項免税額由" + (Yr-1)+"/"+rightStr(Yr,2) + "課税年度起開始生效。")
    return false
  } else {
    return true
  }
}
function CheckDDYear(Yr) {
  if (Yr > YrEnd) {
    ErrMsg("這項扣除額由" + (Yr-1)+"/"+rightStr(Yr,2) + "課税年度起開始生效。")
    return false
  } else {
    return true
  }
}
function ErrMsgDDA() {
  ErrMsg("傷殘受養人數目不能超出受養人數目。")
}
function ErrMsgDDA2() {
  ErrMsg("受養人總數目不能超出最大受養人數目。")
}
function ErrMsg(MsgStr) {
  if (Calculating) return
  alert(MsgStr)
}
function InfoMsg(MsgStr) {
  if (Calculating) return
  alert(MsgStr)
}
function savefrmIn() {
  var mfI,obj
  mfI=parent.frmInStatus
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (obj[0].checked) {
    mfI[1] = true
  } else {
    mfI[1] = false
  }
  mfI[2] = dF.D3.selectedIndex
  mfI[3] = dF.D4.selectedIndex
  mfI[4] = dF.D5.selectedIndex
  mfI[5] = dF.D6.selectedIndex
  mfI[6] = dF.D7.selectedIndex
  mfI[7] = dF.D8.selectedIndex
  mfI[8] = dF.D9.selectedIndex
  mfI[9] = dF.D10.selectedIndex
  mfI[14] = dF.D15.selectedIndex
  mfI[15] = dF.T1.value
  mfI[16] = dF.T2.value
  mfI[17] = dF.T3.value
  mfI[18] = dF.T4.value
  mfI[19] = dF.T5.value
  mfI[20] = dF.T6.value
  mfI[21] = dF.T7.value
  mfI[22] = dF.T8.value
  mfI[23] = dF.T9.value
  mfI[24] = dF.T10.value
  mfI[25] = dF.T11.value
  mfI[26] = dF.T12.value
  mfI[27] = T3tag
  mfI[28] = T4tag
  mfI[29] = T11tag
  mfI[30] = T12tag
  mfI[31] = oT1
  mfI[32] = oT2
  mfI[33] = oT3
  mfI[34] = oT4
  mfI[35] = oT11
  mfI[36] = oT12
  mfI[37] = dF.D16.selectedIndex
  mfI[38] = dF.D17.selectedIndex
  mfI[39] = dF.D18.selectedIndex
  mfI[40] = dF.D19.selectedIndex
  mfI[41] = dF.D20.selectedIndex
  mfI[42] = dF.D21.selectedIndex
    mfI[43] = dF.D3a.selectedIndex
    mfI[44] = dF.D4a.selectedIndex
  mfI[45] = dF.T13.value
  mfI[46] = dF.T14.value
  mfI[47] = oT13
  mfI[48] = oT14
  mfI[49] = dF.T15.value
  mfI[50] = dF.T16.value
  mfI[51] = dF.D22.selectedIndex
  mfI[52] = dF.D15a.selectedIndex
  mfI[53] = dF.D15b.selectedIndex
  mfI[54] = dF.T38.value
  mfI[55] = dF.T39.value
  mfI[56] = dF.T40.value
  mfI[57] = dF.T41.value
  mfI[58] = dF.T34.value
  mfI[59] = dF.T35.value
  mfI[60] = dF.T36.value
  mfI[61] = dF.T37.value
  mfI[62] = dF.D32.selectedIndex
  mfI[63] = dF.D33.selectedIndex
  mfI[64] = dF.T380.value
  mfI[65] = dF.T390.value
}
function restorefrmIn() {
  var mfI,obj
  mfI=parent.frmInStatus
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (mfI[1] == true) {
    obj[0].checked = true
  } else {
    obj[1].checked = true
  }
  dF.D3.selectedIndex = mfI[2]
  dF.D4.selectedIndex = mfI[3]
  dF.D5.selectedIndex = mfI[4]
  dF.D6.selectedIndex = mfI[5]
  dF.D7.selectedIndex = mfI[6]
  dF.D8.selectedIndex = mfI[7]
  dF.D9.selectedIndex = mfI[8]
  dF.D10.selectedIndex = mfI[9]
  dF.D15.selectedIndex = mfI[14]
  dF.T1.value = mfI[15]
  dF.T2.value = mfI[16]
  dF.T3.value = mfI[17]
  dF.T4.value = mfI[18]
  dF.T5.value = mfI[19]
  dF.T6.value = mfI[20]
  dF.T7.value = mfI[21]
  dF.T8.value = mfI[22]
  dF.T9.value = mfI[23]
  dF.T10.value = mfI[24]
  dF.T11.value = mfI[25]
  dF.T12.value = mfI[26]
  T3tag = mfI[27]
  T4tag = mfI[28]
  T11tag = mfI[29]
  T12tag = mfI[30]
  oT1 = mfI[31]
  oT2 = mfI[32]
  oT3 = mfI[33]
  oT4 = mfI[34]
  oT11 = mfI[35]
  oT12 = mfI[36]
  dF.D16.selectedIndex = mfI[37]
  dF.D17.selectedIndex = mfI[38]
  dF.D18.selectedIndex = mfI[39]
  dF.D19.selectedIndex = mfI[40]
  dF.D20.selectedIndex = mfI[41]
  dF.D21.selectedIndex = mfI[42]
    dF.D3a.selectedIndex = mfI[43]
    dF.D4a.selectedIndex = mfI[44]
  dF.T13.value = mfI[45]
  dF.T14.value = mfI[46]
  oT13 = mfI[47]
  oT14 = mfI[48]
  dF.T15.value = mfI[49]
  dF.T16.value = mfI[50]
  dF.D22.selectedIndex = mfI[51]
  dF.D15a.selectedIndex = mfI[52]
  dF.D15b.selectedIndex = mfI[53]
  dF.T38.value = mfI[54]
  dF.T39.value = mfI[55]
  dF.T40.value = mfI[56]
  dF.T41.value = mfI[57]
  dF.T34.value = mfI[58]
  dF.T35.value = mfI[59]
  dF.T36.value = mfI[60]
  dF.T37.value = mfI[61]   
  dF.D32.selectedIndex = mfI[62]
  dF.D33.selectedIndex = mfI[63]  
  dF.T380.value = mfI[64] 
  dF.T390.value = mfI[65]
}
var i
var STCIn0,STCIn1,STCIn2,STCIn3,STCIn4,STCIn5,STCIn6,STCIn7,STCIn8,STCIn9,STCIn10,STCIn11,STCIn12,STCIn13,STCIn14,STCIn15,STCIn16,STCIn17,STCIn18,STCIn19,STCIn20
var STCIn21,STCIn22,STCIn23,STCIn24,STCIn25
var slfRebate,spsRebate,JARebate
STCIn21=0		//'Integer (No. of new born children)
STCIn22=0		//'Integer (No. of disabled new born children)
var STCOutMAX
STCOutMAX=83
var STCOut
STCOut=outputRef.current=new Array(STCOutMAX);
  for (i=0; i<STCOut.length; i++) { STCOut[i]=0 }
  STCOut[55]=false	//Boolean
var AL_SING=0, AAL_SING=0, AL_MARR=0, AAL_MARR=0
var SPA=0
var CA, NBCA
  CA=new Array(10)
  for (i=0; i<10; i++) { CA[i]=0 }
  NBCA=new Array(10)
  for (i=0; i<10; i++) { NBCA[i]=0 }
var DBSA=0
var DPA=0, ADPA=0
var DIS_DA=0
var SDPGPA=0, SADPGPA=0
var TAX_RANGE, TAX_RATE, TAX_RATE_R, TAX
  TAX_RANGE=new Array(16)
  for (i=0; i<16; i++) { TAX_RANGE[i]=0 }
  TAX_RATE=new Array(17)
  for (i=0; i<17; i++) { TAX_RATE[i]=0 }
  TAX=new Array(16)
  for (i=0; i<16; i++) { TAX[i]=0 }
  TAX_RATE_R=0
var STD_RATE=0
var STD_RATE_P=0
var STD_PREMIUM=5000000
var CLAWBACK=false
var CLAW_RATE=0
var VAPRP_RATE=0
var YrValue, YrEnd
var LimD_DonaLL,LimD_DonaUL,LimD_Education,LimD_HomeLoan,LimD_Elderly,LimD_MPF,LimD_rate_MPF
var LimP_rate_VAPRP
var N_TAX_RANGES	// Number of valid tax ranges
var ACC_RANGE		// Total nci up to each tax range
  ACC_RANGE=new Array(16)
  for (i=0; i<16; i++) { ACC_RANGE[i]=0 }
var AASing=0, AAMarr=0
var StdFlag=false
function InitSTCOut() {
  for (i=0; i<STCOut.length; i++) {
    STCOut[i]=0
  }
}
function CalculateTaxWithDelay() {
  if (Calculating) return
    setTimeout(() => { try {CalculateTax();} catch (err) {console.log(err);} },1) 
/*  if (parent.browserID=="IE4Win31") {
    window.status="請等候 ..."
  } else {
*/
    window.status="正在計算薪俸税，請等候 ..."
  savefrmIn()
}
function CalculateTax() {
  var obj,slfSEE,spsSEE,v, jntSEE
  var slfOE, spsOE, jntOE, slfERCE, spsERCE
  STCIn0=YrValue="2024-2025"			//String (Assessment year  e.g. "1996-1997")
  obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  if (obj[0].checked) {
    STCIn1=obj[0].value			//String (Marital status) - Single
  } else {
    STCIn1=obj[1].value			//String (Marital status) - Married
  }
  STCIn2=CDbl(dF.T1.value)+CDbl(dF.T13.value)		//Double (Total income for self)
  STCIn3=CDbl(dF.T2.value)+CDbl(dF.T14.value)		//Double (Total income for spouse)
  STCIn4=dF.D3.selectedIndex		//Integer (No. of children)
  STCIn5=dF.D5.selectedIndex		//Integer (No. of dependent brothers/sisters)
  STCIn6=dF.D7.selectedIndex
  STCIn7=dF.D9.selectedIndex
  STCIn9=(dF.D15.selectedIndex==1)	//Boolean (Is spouse disabled?)
  STCIn23=(dF.D22.selectedIndex==1)	//Boolean (Is claim for single parent allowance?)  
  STCIn24=(dF.D15a.selectedIndex==1)	//Boolean (Is self Personal disabled?)
  STCIn25=(dF.D15b.selectedIndex==1)	//Boolean (Is spouse Personal disabled?)
  STCIn10=dF.D4.selectedIndex		//Integer (No. of disabled children)
  STCIn11=dF.D6.selectedIndex		//Integer (No. of disabled dependent brothers/sisters)
	slfERCE=CDbl(dF.T9.value)
	spsERCE=CDbl(dF.T10.value)
  STCIn12=dF.D8.selectedIndex
  STCIn13=dF.D10.selectedIndex
  STCIn17=dF.D16.selectedIndex
  STCIn18=dF.D17.selectedIndex
  STCIn19=NotNIL(dF.T9) ? dF.D20.selectedIndex : 0
  STCIn20=NotNIL(dF.T10) ? dF.D21.selectedIndex : 0
	  STCIn21=dF.D3a.selectedIndex		//Integer (No. of new born children)
	  STCIn22=dF.D4a.selectedIndex		//Integer (No. of disabled new born children)
  slfOE=CDbl(dF.T15.value)
  if (slfOE>STCIn2) slfOE=STCIn2
  slfSEE=CDbl(dF.T5.value)
  if (slfSEE>(STCIn2-slfOE)) slfSEE=STCIn2-slfOE
/*
  STCIn14=CDbl(dF.T3.value)+CDbl(dF.T9.value)+CDbl(dF.T11.value)+slfSEE+slfOE
*/
  STCIn14=CDbl(dF.T3.value)+CDbl(dF.T9.value)+CDbl(dF.T11.value)+slfSEE+slfOE+STCOut[80]+CDbl(dF.T34.value)+CDbl(dF.T36.value)+CDbl(dF.T38.value)+CDbl(dF.T380.value)+CDbl(dF.T40.value)
	if (STCIn2>0) {
    STCIn14=STCIn14+CDbl(dF.T7.value)
    if (STCIn3==0 && NotNIL(dF.T8)) {
      STCIn14=STCIn14+CDbl(dF.T8.value)
      ErrMsg("由於你配偶沒有入息，現假設你配偶將提名你申請他/她所佔的居所貸款利息，而輸入的居所貸款利息將會從你的入息中扣除。")
    }
  }
  spsOE=CDbl(dF.T16.value)
  if (spsOE>STCIn3) spsOE=STCIn3
  spsSEE=CDbl(dF.T6.value)
  if (spsSEE>(STCIn3-spsOE)) spsSEE=STCIn3-spsOE
/*  //Spouse Deductions
  STCIn15=CDbl(dF.T4.value)+CDbl(dF.T10.value)+CDbl(dF.T12.value)+spsSEE+spsOE
*/  
  STCIn15=CDbl(dF.T4.value)+CDbl(dF.T10.value)+CDbl(dF.T12.value)+spsSEE+spsOE+STCOut[81]+CDbl(dF.T35.value)+CDbl(dF.T37.value)+CDbl(dF.T39.value)+CDbl(dF.T390.value)+CDbl(dF.T41.value)
  if (STCIn3>0) {
    STCIn15=STCIn15+CDbl(dF.T8.value)
    if (STCIn2==0 && NotNIL(dF.T7)) {
      STCIn15=STCIn15+CDbl(dF.T7.value)
      ErrMsg("由於你沒有入息，現假設你將提名你配偶申請你所佔的居所貸款利息，而輸入的居所貸款利息將會從你配偶的入息中扣除。")
    }
    if (STCIn2==0 && NotNIL(dF.T9)) {
      STCIn15=STCIn15+CDbl(dF.T9.value)
      ErrMsg("As you do not have income, it is assumed that you will nominate your spouse to claim your share of Amount paid to residential care home and the Amount paid to residential care home inputted will be deducted from the income of your spouse.")
    }
    if (STCIn2==0 && NotNIL(dF.T3)) {
      STCIn15=STCIn15+CDbl(dF.T3.value)
      ErrMsg("As you do not have income, it is assumed that you will nominate your spouse to claim your share of Approved Charitable Donations and the Approved Charitable Donations inputted will be deducted from the income of your spouse.")
    }
  }
  jntOE=slfOE+spsOE
  STCIn16=CDbl(T3tag)+CDbl(T4tag)
  v=Math.floor(LimD_DonaUL*(STCIn2+STCIn3-jntOE)/100)
  if (v<LimD_DonaLL) v=0
  if (STCIn16>v) STCIn16=v
  jntSEE=slfSEE+spsSEE
  if (jntSEE>STCIn2+STCIn3-jntOE) jntSEE=STCIn2+STCIn3-jntOE
  STCIn16=STCIn16+CDbl(dF.T9.value)+CDbl(dF.T11.value)+CDbl(dF.T10.value)+CDbl(dF.T12.value)+jntOE+jntSEE+CDbl(dF.T34.value)+CDbl(dF.T35.value)+CDbl(dF.T36.value)+CDbl(dF.T37.value)+CDbl(dF.T38.value)+CDbl(dF.T380.value)+CDbl(dF.T39.value)+CDbl(dF.T390.value)+CDbl(dF.T40.value)+CDbl(dF.T41.value)
  if (STCIn2>0 || STCIn3>0) {
    STCIn16=STCIn16+CDbl(dF.T7.value)+CDbl(dF.T8.value)
  } else if (NotNIL(dF.T7) || NotNIL(dF.T8)) {
    if (STCIn1=="S")
      ErrMsg("由於你沒有入息，因此你不能扣除居所貸款利息。")
    else
      ErrMsg("由於你們沒有入息，因此你們不能扣除居所貸款利息。")
    v=NotNIL(dF.T7)
    dF.T7.value="0";
  setTimeout(() => {setSelfHomeLoanInterest(-99999999999);}, 60);  // add T7

    dF.T8.value="0";
  setTimeout(() => {setSpouseHomeLoanInterest(-99999999999);}, 60);  // add T8

    if (v) {
      // dF.T7.focus() 
    } else {
      // dF.T8.focus() 
    }
    window.status=""
    return false
  }
  STCIn8=(STCIn9 || STCIn10+STCIn11+STCIn12+STCIn13+STCIn22>0)
  STCIn26=(STCIn24 && (STCIn2>0))	//Grant Self Personal Disability Allowance (Has ST income)
  STCIn27=(STCIn25 && (STCIn3>0)) //Grant Spouse Personal Disability Allowance (Has ST income)
  InitSTCOut()
  Restarting=false
  i=STCMain()
} // End CalculateTax()

function CalculateRebate(tax, YrEnd) {
  var rebateAmt
  rebateAmt=0
  if (false) {
  	rebateAmt=Math.ceil(tax * 0 / 100)
  	if (rebateAmt > 0) {
  	  rebateAmt = 0 
  	}
  }
  return rebateAmt
}

function CompTP(StdTP,NCI) {
  var PrgTP
  var i
  if (NCI<=0) {			// Check for zero or negative NCI
    PrgTP=0
  } else {			// Compute TP using progressive rates
    for (i=N_TAX_RANGES; i>0; i--) {
      if (NCI>ACC_RANGE[i]) break;
    }
    PrgTP=TAX[i]+(NCI-ACC_RANGE[i])*TAX_RATE[i+1]/100
  }
  if (Math.floor(StdTP)<Math.floor(PrgTP)) {
    StdFlag=true
    return StdTP
  } else {
    StdFlag=false
    return PrgTP
  }
}
function GetRate(AssessYear) {
  var i, ok=false
  if (AssessYear=="2024-2025") {
      AL_SING=132000		//PAL_SING
      AAL_SING=0		//PAAL_SING
      AL_MARR=264000		//PAL_MARR
      AAL_MARR=0		//PAAL_MARR
      SPA=132000			//PSPA
      CA[0]=0
      CA[1]=130000; CA[2]=260000; CA[3]=390000
      CA[4]=520000; CA[5]=650000; CA[6]=780000
      CA[7]=910000; CA[8]=1040000; CA[9]=1170000
      NBCA[0]=0
      NBCA[1]=130000; NBCA[2]=260000; NBCA[3]=390000
      NBCA[4]=520000; NBCA[5]=650000; NBCA[6]=780000
      NBCA[7]=910000; NBCA[8]=1040000; NBCA[9]=1170000
      DBSA=37500			//PDBSA
      DPA=50000			//PDPAAMT
      ADPA=50000			//PADPAAMT
      DIS_DA=75000			//PDDA
      SDPGPA=25000		//PSDPGPA
      SADPGPA=25000		//PSADPGPA
      VAPRP_RATE=10
      TAX_RANGE[0]=0
      TAX_RANGE[1]=50000; TAX_RANGE[2]=50000
      TAX_RANGE[3]=50000; TAX_RANGE[4]=50000
      TAX_RANGE[5]=0; TAX_RANGE[6]=0
      TAX_RANGE[7]=0; TAX_RANGE[8]=0
      TAX_RANGE[9]=0; TAX_RANGE[10]=0
      TAX_RANGE[11]=0; TAX_RANGE[12]=0
      TAX_RANGE[13]=0; TAX_RANGE[14]=0
      TAX_RANGE[15]=0
      TAX_RATE[0]=0
      TAX_RATE[1]=2; TAX_RATE[2]=6
      TAX_RATE[3]=10; TAX_RATE[4]=14
      TAX_RATE[5]=0; TAX_RATE[6]=0
      TAX_RATE[7]=0; TAX_RATE[8]=0
      TAX_RATE[9]=0; TAX_RATE[10]=0
      TAX_RATE[11]=0; TAX_RATE[12]=0
      TAX_RATE[13]=0; TAX_RATE[14]=0
      TAX_RATE[15]=0
      TAX_RATE_R=17
      TAX[0]=0
      TAX[1]=1000; TAX[2]=4000; TAX[3]=9000
      TAX[4]=16000; TAX[5]=0; TAX[6]=0
      TAX[7]=0; TAX[8]=0; TAX[9]=0
      TAX[10]=0; TAX[11]=0; TAX[12]=0
      TAX[13]=0; TAX[14]=0; TAX[15]=0
      STD_RATE=15		//PSTANDRATE
      STD_RATE_P=16 //PSTANDRATE premium
      CLAWBACK=false		//PCLAWBACK
      CLAW_RATE=0		//PCLAWRATE
      ok=true
  }
  if (!ok) return false
  N_TAX_RANGES=1
  for (i=2; i<16; i++) {
    if (TAX_RATE[i]==0) break;
    if (TAX_RATE[i]!=TAX_RATE[N_TAX_RANGES]) {
      N_TAX_RANGES=N_TAX_RANGES+1
      TAX_RATE[N_TAX_RANGES]=TAX_RATE[i]
      TAX_RANGE[N_TAX_RANGES]=TAX_RANGE[i]
      TAX[N_TAX_RANGES]=TAX[i]
    } else {
      TAX_RANGE[N_TAX_RANGES]=TAX_RANGE[N_TAX_RANGES]+TAX_RANGE[i]
      TAX[N_TAX_RANGES]=TAX[i]
    }
  }
  ACC_RANGE[1]=TAX_RANGE[1]
  for (i=2; i<=N_TAX_RANGES; i++) {
    ACC_RANGE[i]=ACC_RANGE[i-1]+TAX_RANGE[i]
  }
  TAX_RATE[N_TAX_RANGES+1]=TAX_RATE_R
  return true
}
function GetYrofAss() {
YrValue="2024-2025"
YrofAss=parseInt(rightStr(YrValue,4),10)-1+"/"+rightStr(YrValue,2)
return YrofAss
}
function GetDeduction() {
  YrValue="2024-2025"
  YrEnd=parseInt(rightStr(YrValue,4),10)
  parent.LSPYrEnd = YrValue
  if (YrValue=="2024-2025") {
    LimD_DonaLL=100
    LimD_DonaUL=35
    LimD_Education=100000
    LimD_HomeLoan=120000
    LimD_Elderly=100000
    LimD_MPF=18000
    LimD_rate_MPF=5
    LimP_rate_VAPRP=10
    LimD_VTC=60000
    LimD_RD=120000
    LimD_VHIS=8000
    return true
  }
  return false
}
  var Calculating,Restarting
  var SavPar0,SavPar1,SavPar2,SavPar3,SavPar4,SavPar5,SavPar6,SavPar7,SavPar8,SavPar9
  var SavPar10,SavPar11,SavPar12,SavPar13,SavPar14,SavPar15,SavPar16,SavPar17,SavPar18
  var SavPar19,SavPar20,SavPar21,SavPar22,SavPar23,SavPar24,SavPar25,SavPar26,SavPar27
  var SavPar28,SavPar29,SavPar30,SavPar31,SavPar32,SavPar33,SavPar34,SavPar35,SavPar36
  var SavPar37,SavPar38,SavPar39,SavPar40,SavPar41
  var oChCount,oSTCIn5,oSTCIn7,oSTCIn6,oSTCIn11,oSTCIn13,oSTCIn12
  var oSTCIn18,oSTCIn17
  var nol_Loops,nol_LoopCnt
  var STCMainRV
function STCMain() {
  var netSelfI,netSpouseI,netJointI
  var slfNCI,spsNCI,slfTP,spsTP,slfStd,spsStd,slfStdTP,spsStdTP,jointStdTP
  var spsDDA,slfPDA,spsPDA
  var ChCount
  var DPNo,ADPNo
  var SDPNo,SADPNo
  var n,o,l,m
  var nMin,oMin,lMin,mMin
  var nMin1,oMin1,lMin1,mMin1
  var od,ld,md
  var odMin,ldMin,mdMin
  var odMin1,ldMin1,mdMin1
  var MinTP,MinTP1,CurTP,CurJntTP,MinJntTP,MinJntTP1
  var slfMinStd,spsMinStd,slfMinNCI
  var slfMinStd1,spsMinStd1,slfMinNCI1
  var p,q
  var pMin,qMin
  var pMin1,qMin1
  var DDAspsGranted
  var TotalDIS_DA,slfDisC_No,slfDIS_DA,slfNCItmp,spsNCItmp
  var ChCount_,STCIn5_,STCIn7_,STCIn6_,STCIn11_,STCIn13_,STCIn12_
  var STCIn18_,STCIn17_
  var jntNCIDDAsps=0, jntTPDDAsps=0
  var InLoopCnt
  var InLoopLim
/*  if (parent.browserID=="IE4Win31") {
    InLoopLim=65
  } else {*/
    InLoopLim=20000
  if (!Restarting) {
    Calculating=true
    if (GetRate(STCIn0)==false) {
      return -1
    }
    netSelfI=STCIn2-STCIn14
    if (netSelfI<0) netSelfI=0
    netSpouseI=STCIn3-STCIn15
    if (netSpouseI<0) netSpouseI=0
    netJointI=STCIn2+STCIn3-STCIn16
    if (netJointI<0) netJointI=0
    STCOut[57]=STCIn14
    STCOut[58]=STCIn15
    STCOut[59]=STCIn16
    STCOut[78]=CDbl(dF.T9.value)
    STCOut[79]=CDbl(dF.T10.value)

    slfStdTP = (netSelfI > STD_PREMIUM) 
      ? (STD_PREMIUM * STD_RATE + (netSelfI - STD_PREMIUM) * STD_RATE_P) / 100 
      : netSelfI * STD_RATE / 100;

    spsStdTP = (netSpouseI > STD_PREMIUM) 
      ? (STD_PREMIUM * STD_RATE + (netSpouseI - STD_PREMIUM) * STD_RATE_P) / 100 
      : netSpouseI * STD_RATE / 100;

    jointStdTP = (netJointI > STD_PREMIUM) 
      ? (STD_PREMIUM * STD_RATE + (netJointI - STD_PREMIUM) * STD_RATE_P) / 100 
      : netJointI * STD_RATE / 100; // joint TP

    if (CLAWBACK) {
      AASing=AAL_SING-(netSelfI-AL_SING-AAL_SING)*CLAW_RATE/100
      if (AASing<0) AASing=0
      AAMarr=AAL_MARR-(netSelfI+netSpouseI-AL_MARR-AAL_MARR)*CLAW_RATE/100
      if (AAMarr<0) AAMarr=0
    } else { // CLAWBACK == false
      AASing=AAL_SING
      AAMarr=AAL_MARR
    }
    ADPNo=STCIn6
    DPNo=STCIn6+STCIn7
    SADPNo=STCIn17
    SDPNo=STCIn17+STCIn18
  } // End if (!Restarting)
  if (STCIn1=="S") {
    STCOut[0]=STCIn2
    STCOut[3]=AL_SING+AASing
    if ((STCIn4+STCIn21>0) && (STCIn23==true) ) {
      STCOut[5]=SPA
    } else { // STCIn4+STCIn21 == 0
      STCOut[5]=0
    }
    STCOut[6]=CA[STCIn4]
    STCOut[7]=DBSA*STCIn5
    STCOut[9]=(DPA+ADPA)*STCIn6
    STCOut[10]=DPA*STCIn7
    STCOut[8]=STCOut[9]+STCOut[10]
    STCOut[61]=(SDPGPA+SADPGPA)*STCIn17
    STCOut[62]=SDPGPA*STCIn18
    STCOut[60]=STCOut[61]+STCOut[62]
	STCOut[73]=CA[STCIn21]+NBCA[STCIn21]
    if (STCIn8==true) {
      STCOut[11]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn22)
    } else {
      STCOut[11]=DIS_DA*STCIn19
    }
    if (STCIn26==true) { //Slf
      STCOut[80]=DIS_DA
	} else {
      STCOut[80]=0	
    }	
    STCOut[24]=STCOut[3]+STCOut[5]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[11]+STCOut[73]+STCOut[80]
    STCOut[27]=netSelfI-STCOut[24]
    if (STCOut[27]<0) STCOut[27]=0
    STCOut[30]=Math.floor(CompTP(slfStdTP,STCOut[27]))
    STCOut[34]=StdFlag
    STCOut[32]=STCOut[30]
    STCOut[37]=STCIn4
    STCOut[38]=STCIn5
    STCOut[39]=STCIn6
    STCOut[40]=STCIn7
    STCOut[69]=STCIn17
    STCOut[70]=STCIn18
	STCOut[76]=STCIn21
    if (STCIn8==true) {
      STCOut[45]=STCIn10+STCIn22
      STCOut[46]=STCIn11
      STCOut[47]=STCIn12
      STCOut[48]=STCIn13
      STCOut[49]=STCOut[45]+STCOut[46]+STCOut[47]+STCOut[48]+STCIn19
    } else {
      STCOut[49]=STCIn19
    }
    window.STCMainRV = STCMainRV=10
  } else if ((STCIn1=="M") && (STCIn3==0)) { // self has income; spouse income=0
    STCOut[0]=STCIn2
    STCOut[4]=AL_MARR+AAMarr
    STCOut[6]=CA[STCIn4]
    STCOut[7]=DBSA*STCIn5
    STCOut[9]=(DPA+ADPA)*STCIn6
    STCOut[10]=DPA*STCIn7
    STCOut[8]=STCOut[9]+STCOut[10]
    STCOut[61]=(SDPGPA+SADPGPA)*STCIn17
    STCOut[62]=SDPGPA*STCIn18
    STCOut[60]=STCOut[61]+STCOut[62]
	STCOut[73]=CA[STCIn21]+NBCA[STCIn21]
    if (dF.D15a.selectedIndex=="1") {
      slfPDA=DIS_DA
	} else {
      slfPDA=0
	}
	slfNCI=0
	slfNCI=netSelfI-(STCOut[4]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[73])
    if (STCIn8==true) {
		if ( (STCIn9==true) && ((STCIn2-AL_SING-STCOut[57])>0)  ) {
			if ( (dF.D15a.selectedIndex==0) || ((dF.D15a.selectedIndex==1) && ((STCIn2-AL_SING-STCOut[57]-DIS_DA)>0))  ) {
		        STCOut[11]=DIS_DA*(1+STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn22)
		        STCOut[55]=true
			} else {
		        STCOut[11]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn22)
			}
		} else {
			STCOut[11]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn22)
      }
    } else { // STCIn8 == false
      STCOut[11]=DIS_DA*STCIn19
    }
    if (STCIn26==true) { //Slf
      STCOut[80]=DIS_DA
	} else {
      STCOut[80]=0	
    }	
    STCOut[24]=STCOut[4]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[11]+STCOut[73]+STCOut[80]
    STCOut[27]=netSelfI-STCOut[24]
    if (STCOut[27]<0) STCOut[27]=0
    STCOut[30]=Math.floor(CompTP(slfStdTP,STCOut[27]))
    STCOut[34]=StdFlag
    STCOut[32]=STCOut[30]
    STCOut[37]=STCIn4
    STCOut[38]=STCIn5
    STCOut[39]=STCIn6
    STCOut[40]=STCIn7
    STCOut[69]=STCIn17
    STCOut[70]=STCIn18
    STCOut[76]=STCIn21
    if (STCIn8==true) {
      STCOut[45]=STCIn10+STCIn22
      STCOut[46]=STCIn11
      STCOut[47]=STCIn12
      STCOut[48]=STCIn13
      STCOut[49]=STCOut[45]+STCOut[46]+STCOut[47]+STCOut[48]+STCIn19
    } else {
      STCOut[49]=STCIn19
    }
    window.STCMainRV = STCMainRV=22
  } else if ((STCIn1=="M") && (STCIn2==0)) { // self income=0; spouse has income
    STCOut[1]=STCIn3
    STCOut[4]=AL_MARR+AAMarr
    STCOut[12]=CA[STCIn4]
    STCOut[13]=DBSA*STCIn5
    STCOut[15]=(DPA+ADPA)*STCIn6
    STCOut[16]=DPA*STCIn7
    STCOut[14]=STCOut[15]+STCOut[16]
    STCOut[64]=(SDPGPA+SADPGPA)*STCIn17
    STCOut[65]=SDPGPA*STCIn18
    STCOut[63]=STCOut[64]+STCOut[65]
	STCOut[74]=CA[STCIn21]+NBCA[STCIn21]
    if (STCIn8==true) {
      STCOut[17]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn20+STCIn22)
    } else {
      STCOut[17]=DIS_DA*STCIn20
    }
    if (STCIn27==true) { //Sps
      STCOut[81]=DIS_DA
	} else {
      STCOut[81]=0	
    }
    STCOut[25]=STCOut[4]+STCOut[12]+STCOut[13]+STCOut[14]+STCOut[63]+STCOut[17]+STCOut[74]+STCOut[81]
    STCOut[28]=netSpouseI-STCOut[25]
    if (STCOut[28]<0) STCOut[28]=0
    STCOut[31]=Math.floor(CompTP(spsStdTP,STCOut[28]))
    STCOut[35]=StdFlag
    STCOut[32]=STCOut[31]
    STCOut[41]=STCIn4
    STCOut[42]=STCIn5
    STCOut[43]=STCIn6
    STCOut[44]=STCIn7
    STCOut[71]=STCIn17
    STCOut[72]=STCIn18
    STCOut[77]=STCIn21
    if (STCIn8==true) {
      STCOut[50]=STCIn10+STCIn22
      STCOut[51]=STCIn11
      STCOut[52]=STCIn12
      STCOut[53]=STCIn13
      STCOut[54]=STCOut[50]+STCOut[51]+STCOut[52]+STCOut[53]+STCIn20
    } else {
      STCOut[54]=STCIn20
    }
    window.STCMainRV = STCMainRV=24
  } else { // STCIn1 == "M"
    if (!Restarting) {
      if (STCIn4+STCIn21>0) {
        ChCount=1
      } else { // STCIn4+STCIn21 == 0
        ChCount=0
      }
      slfNCI=0; slfMinNCI=0
      spsNCI=0
      slfTP=0
      spsTP=0
      slfStd=false
      spsStd=false
      spsDDA=false
      MinTP=netSelfI+netSpouseI; if (MinTP==0) MinTP=1
      MinTP1=netSelfI+netSpouseI; if (MinTP1==0) MinTP1=1
      MinJntTP=netSelfI+netSpouseI; if (MinJntTP==0) MinJntTP=1
			MinJntTP1=netSelfI+netSpouseI; if (MinJntTP1==0) MinJntTP1=1
      DDAspsGranted=false
      TotalDIS_DA=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn22)	// Total DDA available (other than DDA under ERCE)
      nMin=0; oMin=0; lMin=0; mMin=0
      odMin=0; ldMin=0; mdMin=0
      pMin=0; qMin=0
      nMin1=0; oMin1=0; lMin1=0; mMin1=0
      odMin1=0; ldMin1=0; mdMin1=0
      pMin1=0; qMin1=0
      ChCount_=ChCount; STCIn5_=STCIn5; STCIn7_=STCIn7; STCIn6_=STCIn6
      STCIn11_=STCIn11; STCIn13_=STCIn13; STCIn12_=STCIn12
      STCIn18_=STCIn18; STCIn17_=STCIn17
      nol_Loops=(STCIn18+1)*(STCIn17+1)*(ChCount+1)*(STCIn5+1)*(STCIn7+1)
      nol_LoopCnt=0
    } else {	// Restarting a suspended calculation
      ChCount=SavPar0
      DPNo=SavPar1
      ADPNo=SavPar2
      nMin=SavPar3
      oMin=SavPar4
      lMin=SavPar5
      mMin=SavPar6
      nMin1=SavPar7
      oMin1=SavPar8
      lMin1=SavPar9
      mMin1=SavPar10
      odMin=SavPar11
      ldMin=SavPar12
      mdMin=SavPar13
      odMin1=SavPar14
      ldMin1=SavPar15
      mdMin1=SavPar16
      MinTP=SavPar17
      MinTP1=SavPar18
      slfMinStd=SavPar19
      spsMinStd=SavPar20
      slfMinNCI=SavPar21
      slfMinStd1=SavPar22
      spsMinStd1=SavPar23
      slfMinNCI1=SavPar24
      DDAspsGranted=SavPar26
      TotalDIS_DA=SavPar27
      slfStdTP=SavPar28
      spsStdTP=SavPar29
      jointStdTP=SavPar30
      netSelfI=SavPar31
      netSpouseI=SavPar32
      netJointI=SavPar33
      SDPNo=SavPar34
      SADPNo=SavPar35
      pMin=SavPar36
      qMin=SavPar37
      pMin1=SavPar38
      qMin1=SavPar39
			MinJntTP=SavPar40
			MinJntTP1=SavPar41
      ChCount_=oChCount; STCIn5_=oSTCIn5; STCIn7_=oSTCIn7; STCIn6_=oSTCIn6
      STCIn11_=oSTCIn11; STCIn13_=oSTCIn13; STCIn12_=oSTCIn12
      STCIn18_=oSTCIn18; STCIn17_=oSTCIn17
    }
    InLoopCnt=0
	if (STCIn26==true) { //Slf
      STCOut[80]=DIS_DA
	} else {
      STCOut[80]=0	
    }
	if (STCIn27==true) { //Sps
      STCOut[81]=DIS_DA
	} else {
      STCOut[81]=0	
    }
    if (STCIn8==true) {
      for (p=STCIn18_; p>=0; p--) {
      for (q=STCIn17_; q>=0; q--) {
      for (n=ChCount_; n>=0; n--) {
        slfDisC_No=n*(STCIn10+STCIn22)
      for (o=STCIn5_; o>=0; o--) {
      for (l=STCIn7_; l>=0; l--) {
      for (m=STCIn6_; m>=0; m--) {
/* 27/02/2017 Also deduct Personal Disability ALLOWANCE
        slfNCItmp=netSelfI-AL_SING-AASing-CA[n*STCIn4]-DBSA*o-DPA*(l+m)-ADPA*m
                  -SDPGPA*(p+q)-SADPGPA*q - DIS_DA*STCIn19-(CA[n*STCIn21]+NBCA[n*STCIn21])
        spsNCItmp=netSpouseI-AL_SING-AASing-CA[(1-n)*STCIn4]-DBSA*(STCIn5-o)-DPA*(DPNo-(l+m))-ADPA*(ADPNo-m)-TotalDIS_DA
                  -SDPGPA*(SDPNo-(p+q))-SADPGPA*(SADPNo-q) - DIS_DA*STCIn20-(CA[(1-n)*STCIn21]+NBCA[(1-n)*STCIn21])
*/
        slfNCItmp=netSelfI-AL_SING-STCOut[80]-AASing-CA[n*STCIn4]-DBSA*o-DPA*(l+m)-ADPA*m
                  -SDPGPA*(p+q)-SADPGPA*q - DIS_DA*STCIn19-(CA[n*STCIn21]+NBCA[n*STCIn21])
        spsNCItmp=netSpouseI-AL_SING-STCOut[81]-AASing-CA[(1-n)*STCIn4]-DBSA*(STCIn5-o)-DPA*(DPNo-(l+m))-ADPA*(ADPNo-m)-TotalDIS_DA
                  -SDPGPA*(SDPNo-(p+q))-SADPGPA*(SADPNo-q) - DIS_DA*STCIn20-(CA[(1-n)*STCIn21]+NBCA[(1-n)*STCIn21])
	  for (od=STCIn11_; od>=0; od--) {
        if ((od<=o) && ((STCIn11-od)<=(STCIn5-o))) {
      for (ld=STCIn13_; ld>=0; ld--) {
        if ((ld<=l) && ((STCIn13-ld)<=(STCIn7-l))) {
      for (md=STCIn12_; md>=0; md--) {
        if ((md<=m) && ((STCIn12-md)<=(STCIn6-m))) {
          slfDIS_DA=DIS_DA*(slfDisC_No+od+ld+md)
          slfNCI=slfNCItmp-slfDIS_DA
          spsNCI=spsNCItmp+slfDIS_DA
          spsDDA=((STCIn9==true) && (slfNCI>0) && (spsNCI<=0))
		  slfPDA=STCIn26
		  spsPDA=STCIn27
          if (slfNCI>0) {
            for (i=N_TAX_RANGES; i>=1; i--) {
              if (slfNCI>ACC_RANGE[i]) break;
            }
            slfTP=TAX[i]+(slfNCI-ACC_RANGE[i])*TAX_RATE[i+1]/100
          } else {
            slfNCI=0
            slfTP=0
          }
          if (Math.floor(slfStdTP)<Math.floor(slfTP)) {
            slfStd=true; slfTP=slfStdTP
          } else {
            slfStd=false
          }
          if (spsNCI>0) {
            for (i=N_TAX_RANGES; i>=1; i--) {
              if (spsNCI>ACC_RANGE[i]) break;
            }
            spsTP=TAX[i]+(spsNCI-ACC_RANGE[i])*TAX_RATE[i+1]/100
          } else {
            spsNCI=0
            spsTP=0
          }
          if (Math.floor(spsStdTP)<Math.floor(spsTP)) {
            spsStd=true; spsTP=spsStdTP
          } else {
            spsStd=false
          }
				CurTP=Math.floor(slfTP+spsTP-CalculateRebate(slfTP, YrEnd)-CalculateRebate(spsTP, YrEnd)); if (CurTP<0) CurTP=0
				CurJntTP=Math.floor(slfTP+spsTP); if (CurJntTP<0) CurJntTP=0
         if ((CurTP<MinTP) || ((CurTP==MinTP) && (CurJntTP<MinJntTP)) || ((CurTP==MinTP) && (CurJntTP==MinJntTP) && (slfNCI<slfMinNCI))) {
         		MinTP=CurTP
         		MinJntTP=CurJntTP
            slfMinStd=slfStd
            spsMinStd=spsStd
            slfMinNCI=slfNCI
            nMin=n; oMin=o; lMin=l; mMin=m
            odMin=od; ldMin=ld; mdMin=md
            pMin=p; qMin=q
          }
          if (spsDDA || slfPDA || spsPDA ) {
            if (spsDDA) DDAspsGranted=true
            DDAspsGranted=true
						if ((CurTP<MinTP1) || ((CurTP==MinTP1) && (CurJntTP<MinJntTP1)) || ((CurTP==MinTP1) && (CurJntTP==MinJntTP1) && (slfNCI<slfMinNCI1))) {
							MinTP1=CurTP
							MinJntTP1=CurJntTP
              slfMinStd1=slfStd
              spsMinStd1=spsStd
              slfMinNCI1=slfNCI
              nMin1=n; oMin1=o; lMin1=l; mMin1=m
              odMin1=od; ldMin1=ld; mdMin1=md
              pMin1=p; qMin1=q
            }
          }
          InLoopCnt=InLoopCnt+1
          if (InLoopCnt>=InLoopLim) {
            SavPar0=ChCount
            SavPar1=DPNo
            SavPar2=ADPNo
            SavPar3=nMin
            SavPar4=oMin
            SavPar5=lMin
            SavPar6=mMin
            SavPar7=nMin1
            SavPar8=oMin1
            SavPar9=lMin1
            SavPar10=mMin1
            SavPar11=odMin
            SavPar12=ldMin
            SavPar13=mdMin
            SavPar14=odMin1
            SavPar15=ldMin1
            SavPar16=mdMin1
            SavPar17=MinTP
            SavPar18=MinTP1
            SavPar19=slfMinStd
            SavPar20=spsMinStd
            SavPar21=slfMinNCI
            SavPar22=slfMinStd1
            SavPar23=spsMinStd1
            SavPar24=slfMinNCI1
            SavPar26=DDAspsGranted
            SavPar27=TotalDIS_DA
            SavPar28=slfStdTP
            SavPar29=spsStdTP
            SavPar30=jointStdTP
            SavPar31=netSelfI
            SavPar32=netSpouseI
            SavPar33=netJointI
            SavPar34=SDPNo
            SavPar35=SADPNo
            SavPar36=pMin
            SavPar37=qMin
            SavPar38=pMin1
            SavPar39=qMin1
            SavPar40=MinJntTP
            SavPar41=MinJntTP1
            if (md>0) {
              oSTCIn12=md-1
              oSTCIn13=ld
              oSTCIn11=od
              oSTCIn6=m
              oSTCIn7=l
              oSTCIn5=o
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (ld>0) {
              oSTCIn12=STCIn12
              oSTCIn13=ld-1
              oSTCIn11=od
              oSTCIn6=m
              oSTCIn7=l
              oSTCIn5=o
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (od>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=od-1
              oSTCIn6=m
              oSTCIn7=l
              oSTCIn5=o
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (m>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=m-1
              oSTCIn7=l
              oSTCIn5=o
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (l>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=STCIn6
              oSTCIn7=l-1; nol_LoopCnt=nol_LoopCnt+1
              oSTCIn5=o
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (o>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=STCIn6
              oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
              oSTCIn5=o-1
              oChCount=n
              oSTCIn17=q
              oSTCIn18=p
            } else if (n>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=STCIn6
              oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
              oSTCIn5=STCIn5
              oChCount=n-1
              oSTCIn17=q
              oSTCIn18=p
            } else if (q>0) {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=STCIn6
              oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
              oSTCIn5=STCIn5
              oChCount=ChCount
              oSTCIn17=q-1
              oSTCIn18=p
            } else {
              oSTCIn12=STCIn12
              oSTCIn13=STCIn13
              oSTCIn11=STCIn11
              oSTCIn6=STCIn6
              oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
              oSTCIn5=STCIn5
              oChCount=ChCount
              oSTCIn17=STCIn17
              oSTCIn18=p-1
            }
            Restarting=true
              setTimeout(() => { try {STCMain();} catch (err) {console.log(err);} },1) 
            return 0
          }
        }
      } //Next
        STCIn12_=STCIn12		// necessary for "restart" implementation
        }				//
      } //Next				//
        STCIn13_=STCIn13		//
        }				//
      } //Next				//
        STCIn11_=STCIn11		//
      } //Next				//
        nol_LoopCnt=nol_LoopCnt+1	//
        if (nol_LoopCnt % 41==0) {
			window.status="正在計算薪俸税，完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
/*		  if (parent.browserID=="IE4Win31") {	// Display percentage completed
            window.status="完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
          } else {
            window.status="正在計算薪俸税，完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
          }*/
        }
        STCIn6_=STCIn6			//
      } //Next				//
        STCIn7_=STCIn7			//
      } //Next				//
        STCIn5_=STCIn5			//
      } //Next n
        ChCount_=ChCount
      } //Next q
        STCIn17_=STCIn17
      } //Next p
    } else { // ClaimDDA == false
      for (p=STCIn18_; p>=0; p--) {
      for (q=STCIn17_; q>=0; q--) {
      for (n=ChCount_; n>=0; n--) {
      for (o=STCIn5_; o>=0; o--) {
      for (l=STCIn7_; l>=0; l--) {
      for (m=STCIn6_; m>=0; m--) {
/* 27/02/2017 Also deduct Personal Disability ALLOWANCE
        slfNCI=netSelfI-AL_SING-AASing-CA[n*STCIn4]-DBSA*o-DPA*(l+m)-ADPA*m
               -SDPGPA*(p+q)-SADPGPA*q - DIS_DA*STCIn19 -(CA[n*STCIn21]+NBCA[n*STCIn21])
*/
        slfNCI=netSelfI-AL_SING-STCOut[80]-AASing-CA[n*STCIn4]-DBSA*o-DPA*(l+m)-ADPA*m
               -SDPGPA*(p+q)-SADPGPA*q - DIS_DA*STCIn19 -(CA[n*STCIn21]+NBCA[n*STCIn21])
        if (slfNCI<0) slfNCI=0
/* 27/02/2017 Also deduct Personal Disability ALLOWANCE
		spsNCI=netSpouseI-AL_SING-AASing-CA[(1-n)*STCIn4]-DBSA*(STCIn5-o)-DPA*(DPNo-(l+m))-ADPA*(ADPNo-m)
               -SDPGPA*(SDPNo-(p+q))-SADPGPA*(SADPNo-q) - DIS_DA*STCIn20 - (CA[(1-n)*STCIn21]+NBCA[(1-n)*STCIn21])
*/
		spsNCI=netSpouseI-AL_SING-STCOut[81]-AASing-CA[(1-n)*STCIn4]-DBSA*(STCIn5-o)-DPA*(DPNo-(l+m))-ADPA*(ADPNo-m)
               -SDPGPA*(SDPNo-(p+q))-SADPGPA*(SADPNo-q) - DIS_DA*STCIn20 - (CA[(1-n)*STCIn21]+NBCA[(1-n)*STCIn21])
        if (spsNCI<0) spsNCI=0
        slfTP=CompTP(slfStdTP,slfNCI)
        slfStd=StdFlag
        spsTP=CompTP(spsStdTP,spsNCI)
        spsStd=StdFlag
        CurTP=Math.floor(slfTP+spsTP-CalculateRebate(slfTP, YrEnd)-CalculateRebate(spsTP, YrEnd)); if (CurTP<0) CurTP=0
        CurJntTP=Math.floor(slfTP+spsTP); if (CurJntTP<0) CurJntTP=0
		if ((CurTP<MinTP) || ((CurTP==MinTP) && (CurJntTP<MinJntTP)) || ((CurTP==MinTP) && (CurJntTP==MinJntTP) && (slfNCI<slfMinNCI))) {
			MinTP=CurTP
			MinJntTP=CurJntTP
			slfMinStd=slfStd
			spsMinStd=spsStd
			slfMinNCI=slfNCI
			nMin=n; oMin=o; lMin=l; mMin=m
			pMin=p; qMin=q
        }
        InLoopCnt=InLoopCnt+1
        if (InLoopCnt>=InLoopLim) {
          SavPar0=ChCount
          SavPar1=DPNo
          SavPar2=ADPNo
          SavPar3=nMin
          SavPar4=oMin
          SavPar5=lMin
          SavPar6=mMin
          SavPar17=MinTP
          SavPar19=slfMinStd
          SavPar20=spsMinStd
          SavPar21=slfMinNCI
          SavPar26=DDAspsGranted
          SavPar28=slfStdTP
          SavPar29=spsStdTP
          SavPar30=jointStdTP
          SavPar31=netSelfI
          SavPar32=netSpouseI
          SavPar33=netJointI
          SavPar34=SDPNo
          SavPar35=SADPNo
          SavPar36=pMin
          SavPar37=qMin
          if (m>0) {
            oSTCIn6=m-1
            oSTCIn7=l
            oSTCIn5=o
            oChCount=n
            oSTCIn17=q
            oSTCIn18=p
          } else if (l>0) {
            oSTCIn6=STCIn6
            oSTCIn7=l-1; nol_LoopCnt=nol_LoopCnt+1
            oSTCIn5=o
            oChCount=n
            oSTCIn17=q
            oSTCIn18=p
          } else if (o>0) {
            oSTCIn6=STCIn6
            oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
            oSTCIn5=o-1
            oChCount=n
            oSTCIn17=q
            oSTCIn18=p
          } else if (n>0) {
            oSTCIn6=STCIn6
            oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
            oSTCIn5=STCIn5
            oChCount=n-1
            oSTCIn17=q
            oSTCIn18=p
          } else if (q>0) {
            oSTCIn6=STCIn6
            oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
            oSTCIn5=STCIn5
            oChCount=ChCount
            oSTCIn17=q-1
            oSTCIn18=p
          } else {
            oSTCIn6=STCIn6
            oSTCIn7=STCIn7; nol_LoopCnt=nol_LoopCnt+1
            oSTCIn5=STCIn5
            oChCount=ChCount
            oSTCIn17=STCIn17
            oSTCIn18=p-1
          }
          Restarting=true
            setTimeout(() => { try {STCMain();} catch (err) {console.log(err);} },1) 
          return 0
        }
      } //Next
        nol_LoopCnt=nol_LoopCnt+1
        if (nol_LoopCnt % 41==0) {
            window.status="正在計算薪俸税，完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
/*          if (parent.browserID=="IE4Win31") {
            window.status="完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
          } else {
            window.status="正在計算薪俸税，完成" + Math.floor(nol_LoopCnt*100/nol_Loops) + "%"
          }*/
        }
        STCIn6_=STCIn6
      } //Next
        STCIn7_=STCIn7
      } //Next
        STCIn5_=STCIn5
      } //Next n
        ChCount_=ChCount
      } //Next q
        STCIn17_=STCIn17
      } //Next p
    }
/* 27/02/2017 Also deduct Personal Disability ALLOWANCE
    jntNCIDDAsps=netJointI-(AL_MARR+AAMarr)-CA[STCIn4]-DBSA*STCIn5-(DPA*DPNo+ADPA*ADPNo)-DIS_DA*(1+STCIn10+STCIn11+STCIn12+STCIn13+STCIn22)
                 -(SDPGPA*SDPNo+SADPGPA*SADPNo) - DIS_DA*(STCIn19+STCIn20)-(CA[STCIn21]+NBCA[STCIn21])
*/
    jntNCIDDAsps=netJointI-(AL_MARR+AAMarr)-(STCOut[80]+STCOut[81])-CA[STCIn4]-DBSA*STCIn5-(DPA*DPNo+ADPA*ADPNo)-DIS_DA*(1+STCIn10+STCIn11+STCIn12+STCIn13+STCIn22)
                 -(SDPGPA*SDPNo+SADPGPA*SADPNo) - DIS_DA*(STCIn19+STCIn20)-(CA[STCIn21]+NBCA[STCIn21])
    if (jntNCIDDAsps<0) jntNCIDDAsps=0
    jntTPDDAsps=CompTP(jointStdTP,jntNCIDDAsps)
    STCOut[0]=STCIn2
    STCOut[1]=STCIn3
    STCOut[3]=AL_SING+AASing
    STCOut[6]=CA[nMin*STCIn4]
    STCOut[7]=DBSA*oMin
    STCOut[9]=(DPA+ADPA)*mMin
    STCOut[10]=DPA*lMin
    STCOut[8]=STCOut[9]+STCOut[10]
    STCOut[61]=(SDPGPA+SADPGPA)*qMin
    STCOut[62]=SDPGPA*pMin
    STCOut[60]=STCOut[61]+STCOut[62]
    if (STCIn26==true) { //Slf
      STCOut[80]=DIS_DA
	} else {
      STCOut[80]=0	
    }	
    if (STCIn27==true) { //Sps
      STCOut[81]=DIS_DA
	} else {
      STCOut[81]=0	
    }
	STCOut[73]=CA[nMin*STCIn21]+NBCA[nMin*STCIn21]
    if (STCIn8==true) {
      STCOut[11]=DIS_DA*(nMin*(STCIn10+STCIn22)+odMin+ldMin+mdMin+STCIn19)
    } else {
      STCOut[11]=DIS_DA*STCIn19
    }
    STCOut[24]=STCOut[3]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[11]+STCOut[73]+STCOut[80]
    STCOut[12]=CA[(1-nMin)*STCIn4]
    STCOut[13]=DBSA*(STCIn5-oMin)
    STCOut[15]=(DPA+ADPA)*(STCIn6-mMin)
    STCOut[16]=DPA*(STCIn7-lMin)
    STCOut[14]=STCOut[15]+STCOut[16]
    STCOut[64]=(SDPGPA+SADPGPA)*(STCIn17-qMin)
    STCOut[65]=SDPGPA*(STCIn18-pMin)
    STCOut[63]=STCOut[64]+STCOut[65]
	STCOut[74]=CA[(1-nMin)*STCIn21]+NBCA[(1-nMin)*STCIn21]
    if (STCIn8==true) {
      STCOut[17]=DIS_DA*((1-nMin)*(STCIn10+STCIn22)+STCIn11-odMin+STCIn13-ldMin+STCIn12-mdMin+STCIn20)
    } else {
      STCOut[17]=DIS_DA*STCIn20
    }
    STCOut[25]=STCOut[3]+STCOut[12]+STCOut[13]+STCOut[14]+STCOut[63]+STCOut[17]+STCOut[74]+STCOut[81]
    STCOut[27]=netSelfI-STCOut[24]
    if (STCOut[27]<0) STCOut[27]=0
    STCOut[28]=netSpouseI-STCOut[25]
    if (STCOut[28]<0) STCOut[28]=0
    STCOut[30]=Math.floor(CompTP(slfStdTP,STCOut[27]))
    STCOut[34]=slfMinStd
    STCOut[31]=Math.floor(CompTP(spsStdTP,STCOut[28]))
    STCOut[35]=spsMinStd
    STCOut[32]=STCOut[30]+STCOut[31]
    slfRebate=CalculateRebate(STCOut[30], YrEnd)
    spsRebate=CalculateRebate(STCOut[31], YrEnd)
    STCOut[37]=nMin*STCIn4
    STCOut[38]=oMin
    STCOut[39]=mMin
    STCOut[40]=lMin
    STCOut[69]=qMin
    STCOut[70]=pMin
    STCOut[41]=(1-nMin)*STCIn4
    STCOut[42]=STCIn5-oMin
    STCOut[43]=STCIn6-mMin
    STCOut[44]=STCIn7-lMin
    STCOut[71]=STCIn17-qMin
    STCOut[72]=STCIn18-pMin
	STCOut[76]=nMin*STCIn21
	STCOut[77]=(1-nMin)*STCIn21
    if (STCIn8==true) {
      STCOut[45]=nMin*(STCIn10+STCIn22)
      STCOut[46]=odMin
      STCOut[47]=mdMin
      STCOut[48]=ldMin
      STCOut[49]=STCOut[45]+STCOut[46]+STCOut[47]+STCOut[48]+STCIn19
      STCOut[50]=(1-nMin)*(STCIn10+STCIn22)
      STCOut[51]=STCIn11-odMin
      STCOut[52]=STCIn12-mdMin
      STCOut[53]=STCIn13-ldMin
      STCOut[54]=STCOut[50]+STCOut[51]+STCOut[52]+STCOut[53]+STCIn20
    } else {
      STCOut[49]=STCIn19
      STCOut[54]=STCIn20
    }
    STCOut[2]=STCIn2+STCIn3
    STCOut[4]=AL_MARR+AAMarr
    STCOut[18]=CA[STCIn4]
    STCOut[19]=DBSA*STCIn5
    STCOut[21]=(DPA+ADPA)*STCIn6
    STCOut[22]=DPA*STCIn7
    STCOut[20]=STCOut[21]+STCOut[22]
    STCOut[67]=(SDPGPA+SADPGPA)*STCIn17
    STCOut[68]=SDPGPA*STCIn18
    STCOut[66]=STCOut[67]+STCOut[68]
    STCOut[75]=CA[STCIn21]+NBCA[STCIn21]
    if (STCIn8==true) {
		if ( (STCIn9==true) && ((STCIn2-STCOut[3]-STCOut[57])>0) ) {
			if ( (dF.D15a.selectedIndex==0) || ((dF.D15a.selectedIndex==1) && ((STCIn2-STCOut[3]-STCOut[57]-DIS_DA)>0)) ) {
				STCOut[23]=DIS_DA*(1+STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn20+STCIn22)
				STCOut[55]=true
				spsDDA=true
			} else {
				STCOut[23]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn20+STCIn22)
				spsDDA=false
			}	
      } else {
        STCOut[23]=DIS_DA*(STCIn10+STCIn11+STCIn12+STCIn13+STCIn19+STCIn20+STCIn22)
        spsDDA=false
      }
    } else { // STCIn8 == false
      STCOut[23]=DIS_DA*(STCIn19+STCIn20)
    }
    STCOut[26]=STCOut[4]+STCOut[18]+STCOut[19]+STCOut[20]+STCOut[66]+STCOut[23]+STCOut[75]+STCOut[80]+STCOut[81]
    STCOut[29]=netJointI-STCOut[26]
    if (STCOut[29]<0) STCOut[29]=0
    STCOut[33]=Math.floor(CompTP(jointStdTP,STCOut[29]))
    STCOut[36]=StdFlag
    JARebate=CalculateRebate(STCOut[33], YrEnd)
    if ((STCOut[33]-JARebate)<(STCOut[32]-slfRebate-spsRebate)) {
    	if (spsDDA) {
    		window.STCMainRV = STCMainRV=42
/*    		STCOut[24]=STCOut[3]
    		STCOut[25]=STCOut[3]+STCOut[12]+STCOut[13]+STCOut[14]+STCOut[63]+STCOut[17]+STCOut[74]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[11]+STCOut[73]
*/
    		STCOut[24]=STCOut[3]+STCOut[80]
    		STCOut[25]=STCOut[3]+STCOut[12]+STCOut[13]+STCOut[14]+STCOut[63]+STCOut[17]+STCOut[74]+STCOut[6]+STCOut[7]+STCOut[8]+STCOut[60]+STCOut[11]+STCOut[73]+STCOut[81]
    		STCOut[27]=netSelfI-STCOut[24]+STCOut[78]
    		if (STCOut[27]<0) STCOut[27]=0
    		STCOut[28]=netSpouseI-STCOut[25]-STCOut[78]
    		if (STCOut[28]<0) STCOut[28]=0
    		if (STCOut[78]>0) {
    		    STCOut[57]=STCOut[57]-STCOut[78]
    		    STCOut[58]=STCOut[58]+STCOut[78]
    		    netSelfI=STCIn2-STCIn14+STCOut[78]
    		    if (netSelfI<0) netSelfI=0
    		    netSpouseI=STCIn3-STCIn15-STCOut[78]
    		    if (netSpouseI<0) netSpouseI=0
            slfStdTP = (netSelfI > STD_PREMIUM) 
              ? (STD_PREMIUM * STD_RATE + (netSelfI - STD_PREMIUM) * STD_RATE_P) / 100 
              : netSelfI * STD_RATE / 100;

            spsStdTP = (netSpouseI > STD_PREMIUM) 
              ? (STD_PREMIUM * STD_RATE + (netSpouseI - STD_PREMIUM) * STD_RATE_P) / 100 
              : netSpouseI * STD_RATE / 100;
    		}
    		STCOut[30]=Math.floor(CompTP(slfStdTP,STCOut[27]))
    		STCOut[34]=StdFlag
    		STCOut[31]=Math.floor(CompTP(spsStdTP,STCOut[28]))
    		STCOut[35]=StdFlag
    		STCOut[32]=STCOut[30]+STCOut[31]
    		slfRebate=CalculateRebate(STCOut[30], YrEnd)
    		spsRebate=CalculateRebate(STCOut[31], YrEnd)
    		if ( (STCOut[33]-JARebate)>(STCOut[32]-slfRebate-spsRebate)) {
    			window.STCMainRV = STCMainRV=45
    		}
    	} else {
		    window.STCMainRV = STCMainRV=40
    	}
    } else {
      window.STCMainRV = STCMainRV=30
    }
  }
  Calculating=false
  window.status = ""
  parent.taxtype=STCMainRV
  parent.STCIn0=STCIn0
  window.YrEnd = parent.YrEnd=YrEnd
  for (n=0; n<STCOut.length; n++) {
    parent.STCOut[n]=STCOut[n]
  }
  if (rbflag == false) {
	    setTimeout(() => { try {DisplayResult();} catch (err) {console.log(err);} },1) 
      return STCMainRV
  }
  else {
  	  setTimeout(() => { try {DisplayLSP();} catch (err) {console.log(err);} },1) 
	return STCMainRV
  }
}
function DisplayResult() { /*console.log('STCMainRV 1', STCOut, outputRef.current);*/ setSOut([]); setTimeout(() => {setSOut(STCOut)}, 60); return; 
  var url,i
  url=""+that.location
  url=url.toLowerCase()
  i=url.lastIndexOf("/")
  if (i==-1) i=url.lastIndexOf("\\")
  url=url.substring(0,i+1)+"coutdis.htm"
  parent.main.location.href=url
}

function CalRelateBack() {
	obj = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
  inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];
	rbflag = true
if (obj[1].checked) {
	if (parseInt(dF.T2.value) > 0) {
		ErrMsg("此軟件並不適用於配偶有入息的已婚人士！")
		rbflag = false
		// dF.T2.focus() 
	}
	else {
		if (parseInt(dF.T1.value) <= 0) {
			ErrMsg("請先輸入該課税年度的總收入。")
			rbflag = false
			dF.T1.value=0;
  setTimeout(() => {setSelfIncome(-99999999999);}, 60);  // add T1

			// dF.T1.focus() 
		}
		else if (parseInt(dF.T13.value) > 0) {
			ErrMsg("由於居所租值的計算須視乎所收取的整筆款項的性質，此軟件的計算並不適用於你。")
			rbflag = false
			// dF.T13.focus() 
		} else {
		   CalculateTaxWithDelay()
		 }
 	}
}
else {  // Single Tax payer
	
	
	if (parseInt(dF.T1.value) <= 0) {
		ErrMsg("請先輸入該課税年度的總收入。")
		rbflag = false
		dF.T1.value=0;
  setTimeout(() => {setSelfIncome(-99999999999);}, 60);  // add T1

		// dF.T1.focus() 
	}
	else if (parseInt(dF.T13.value) > 0) {
		ErrMsg("由於居所租值的計算須視乎所收取的整筆款項的性質，此軟件的計算並不適用於你。")
		rbflag = false
		// dF.T13.focus() 
	} else {
	   CalculateTaxWithDelay()
	  }
    }
}
function DisplayLSP() { console.log('STCMainRV 2', STCOut, outputRef.current);  return; 
var url,i
  url=""+that.location
  url=url.toLowerCase()
  i=url.lastIndexOf("/")
  if (i==-1) i=url.lastIndexOf("\\")
  url=url.substring(0,i+1)+"crballocate.htm"
  parent.main.location.href=url
}
function detailinfo() {
	window.open("crbinfo.htm", "popup", "menubar=no, toolbar=no, location=no, directories=no, status=no, resizable=0, scrollbars=0, width=540, height=450")
}


  useEffect(() => {
    if (window.doDebug) console.log('dF', dF);
    if (dF && dF.but2 != null) {
      if (window.doDebug) console.log('dF2', dF, inputRef.current);
      inputRef.current.D2 = [{checked: !window.isMarried, value: 'S'}, {checked: window.isMarried, value: 'M'}];

      initPage();
      B2OnClick()
      GetDeduction()
      Calculating=false
    }
  }, [dF, inputRef]);

  const performToggleMarriage = useCallback((val) => {
    // val ? Married : Single
    setIsMarriedState(val);
    window.isMarried = val;
    setIsMarried(val);
    // console.log('val ', val, 'window.isMarried ', window.isMarried, isMarriedState)
  }, [isMarriedState, setIsMarried]);

  const doChecking = useCallback((val) => {
    if (val==10) T1OnBlur();
    if (val==13) T13OnBlur();
    if (val==14) T14OnBlur();
    if (val==2) T2OnBlur();

    if (val==0) ChkDD(0);
    if (val==-1) ChkDD(-1);
    if (val==9) ChkDD(9);
    if (val==10) ChkDD(10);
    if (val==15) ChkDD(15);
    if (val==16) ChkDD(16);
    if (val==5) ChkDD(5);
    if (val==6) ChkDD(6);
    if (val==3) ChkDD(3);
    if (val==4) ChkDD(4);
    if (val==11) ChkDD(11);
    if (val==12) ChkDD(12);
    if (val==38) ChkDD(38);
    if (val==39) ChkDD(39);
    if (val==40) ChkDD(40);
    if (val==41) ChkDD(41);
    if (val==380) ChkDD(380);
    if (val==390) ChkDD(390);
    if (val==7) ChkDD(7);
    if (val==8) ChkDD(8);
    if (val==34) ChkDD(34);
    if (val==35) ChkDD(35);
    if (val==36) ChkDD(36);
    if (val==37) ChkDD(37);
    if (window.isDebug) console.log('do checking', val);
  }, []);

  const resetForm = useCallback(() => {
    B2OnClick();
    setSOut([]);
  }, []);

  const doCalculation = useCallback(() => {
    CalculateTaxWithDelay();
    submitData(userInput);
  }, [userInput, submitData]);

  return (<>
    
    <div style={{
      'maxHeight': 0,
      'overflow': 'hidden',
    }}
    >
    
<div>
<div style={{textAlign: 'center'}}><br />
<h3>計 算 薪 俸 税</h3>
</div>
</div>
<form name="fI" ref={ref => {inputRef.current["fI"] = ref; }} onReset={() => false}>
<div style={{textAlign: 'center'}}>
<table  border="0" width="710"><tbody>
  <tr>
    <td width="33%"> 課 税 年 度</td>
    <td width="53%">
<script type="text/javascript">
	document.write("<b>"+GetYrofAss()+"</b>")
</script>
    <input type="hidden" name="D1" ref={ref => {inputRef.current["D1"] = ref; }} value="2024-2025" />
    </td>
    <td width="14%">&nbsp</td>
  </tr>
  <tr>
    <td width="33%">婚 姻 狀 況: {isMarriedState ? "已婚" : "單身"}</td>
    <td width="53%"><input  type="radio" id="SingleSeparatedDivorcedWidowed" title="Marital status" name="D2" checked={!isMarriedState} onChange={(e) => {}} onClick={ (e) => { performToggleMarriage(false) } }  />
    單 身 / 分 居 / 離 婚 / 喪 偶</td>
    <td width="14%"><input  type="radio" id="Married" title="Marital status" name="D2" checked={isMarriedState} onChange={(e) => {}} onClick={ (e) => { performToggleMarriage(true) } }   />已 婚</td>
  </tr>
</tbody></table>
</div>
<hr />
<div style={{textAlign: 'center'}}>
<table  border="0" width="710"><tbody>
  <tr>
    <td width="50%">&nbsp</td>
    <td width="25%" align="center">本 人<br />港 元<br /><font size="2">(不 計 算 角 、 分)</font></td>
    <td width="25%" align="center">配 偶<br />港 元<br /><font size="2">(不 計 算 角 、 分)</font></td>
  </tr>
  <tr>
    <td width="50%">課 税 年 度 的 <a href="https://www.gov.hk/tc/residents/taxes/salaries/salariestax/chargeable/index.htm" target="_blank"><em>總 入 息</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfIncome" title="Income" name="T1" ref={ref => {inputRef.current["T1"] = ref; }} value={dF.T1?.value || ""} onChange={ (e) => { console.log("dF.T1", dF.T1?.value); dF.T1.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T1) } }   onBlur={ (e) => { T1OnBlur() ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseIncome" title="Income" name="T2" ref={ref => {inputRef.current["T2"] = ref; }} value={dF.T2?.value || ""} onChange={ (e) => { console.log("dF.T2", dF.T2?.value); dF.T2.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T2) } }   onBlur={ (e) => { T2OnBlur() ; } }  /></td>
  </tr>
  <tr>
    <td width="50%">所 有 獲 僱 主 或 相 聯 公 司 <a href="https://www.gov.hk/tc/residents/taxes/salaries/salariestax/chargeable/residence.htm" target="_blank"><em>提 供 居 所 的 租 值</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfResidence" title="Residence" name="T13" ref={ref => {inputRef.current["T13"] = ref; }} value={dF.T13?.value || ""} onChange={ (e) => { console.log("dF.T13", dF.T13?.value); dF.T13.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T13) } }   onBlur={ (e) => { T13OnBlur() ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseResidence" title="Residence" name="T14" ref={ref => {inputRef.current["T14"] = ref; }} value={dF.T14?.value || ""} onChange={ (e) => { console.log("dF.T14", dF.T14?.value); dF.T14.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T14) } }   onBlur={ (e) => { T14OnBlur() ; } }  /></td>
  </tr>
  <tr><td width="100%" colSpan="3">&nbsp<br />&nbsp</td></tr>
  <tr><td width="100%" colSpan="3">扣 除</td></tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/index.htm" target="_blank"><em>支 出 及 開 支</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfOAndE" title="Outgoings and Expenses" name="T15" ref={ref => {inputRef.current["T15"] = ref; }} value={dF.T15?.value || ""} onChange={ (e) => { console.log("dF.T15", dF.T15?.value); dF.T15.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T15) } }   onBlur={ (e) => { ChkDD(15) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseOAndE" title="Outgoings and Expenses" name="T16" ref={ref => {inputRef.current["T16"] = ref; }} value={dF.T16?.value || ""} onChange={ (e) => { console.log("dF.T16", dF.T16?.value); dF.T16.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T16) } }   onBlur={ (e) => { ChkDD(16) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/selfeducation.htm" target="_blank"><em>個 人 進 修 開 支</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfEducationExpenses" title="Self Education Expenses" name="T5" ref={ref => {inputRef.current["T5"] = ref; }} value={dF.T5?.value || ""} onChange={ (e) => { console.log("dF.T5", dF.T5?.value); dF.T5.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T5) } }   onBlur={ (e) => { ChkDD(5) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseEducationExpenses" title="Self Education Expenses" name="T6" ref={ref => {inputRef.current["T6"] = ref; }} value={dF.T6?.value || ""} onChange={ (e) => { console.log("dF.T6", dF.T6?.value); dF.T6.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T6) } }   onBlur={ (e) => { ChkDD(6) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/approveddonation.htm" target="_blank"><em>認 可 慈 善 捐 款</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfApprovedDonations" title="Approved Charitable Donations" name="T3" ref={ref => {inputRef.current["T3"] = ref; }} value={dF.T3?.value || ""} onChange={ (e) => { console.log("dF.T3", dF.T3?.value); dF.T3.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T3) } }   onBlur={ (e) => { ChkDD(3) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseApprovedDonations" title="Approved Charitable Donations" name="T4" ref={ref => {inputRef.current["T4"] = ref; }} value={dF.T4?.value || ""} onChange={ (e) => { console.log("dF.T4", dF.T4?.value); dF.T4.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T4) } }   onBlur={ (e) => { ChkDD(4) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.ird.gov.hk/chi/pdf/pam38c.pdf" target="_blank"><em>認 可 退 休 計 劃 的 強 制 性 供 款</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfMPF" title="MPF" name="T11" ref={ref => {inputRef.current["T11"] = ref; }} value={dF.T11?.value || ""} onChange={ (e) => { console.log("dF.T11", dF.T11?.value); dF.T11.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T11) } }   onBlur={ (e) => { ChkDD(11) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseMPF" title="MPF" name="T12" ref={ref => {inputRef.current["T12"] = ref; }} value={dF.T12?.value || ""} onChange={ (e) => { console.log("dF.T12", dF.T12?.value); dF.T12.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T12) } }   onBlur={ (e) => { ChkDD(12) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/annuity.htm#b" target="_blank"><em>可 扣 税 強 積 金 自 願 性 供 款</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfMPFV" title="MPF voluntary contributions" name="T38" ref={ref => {inputRef.current["T38"] = ref; }} value={dF.T38?.value || ""} onChange={ (e) => { console.log("dF.T38", dF.T38?.value); dF.T38.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T38) } }   onBlur={ (e) => { ChkDD(38) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseMPFV" title="MPF voluntary contributions" name="T39" ref={ref => {inputRef.current["T39"] = ref; }} value={dF.T39?.value || ""} onChange={ (e) => { console.log("dF.T39", dF.T39?.value); dF.T39.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T39) } }   onBlur={ (e) => { ChkDD(39) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/annuity.htm#a" target="_blank"><em>合 資 格 年 金 保 費</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfAnnuity" title="Qualifying Annuity Premiums" name="T40" ref={ref => {inputRef.current["T40"] = ref; }} value={dF.T40?.value || ""} onChange={ (e) => { console.log("dF.T40", dF.T40?.value); dF.T40.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T40) } }   onBlur={ (e) => { ChkDD(40) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseAnnuity" title="Qualifying Annuity Premiums" name="T41" ref={ref => {inputRef.current["T41"] = ref; }} value={dF.T41?.value || ""} onChange={ (e) => { console.log("dF.T41", dF.T41?.value); dF.T41.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T41) } }   onBlur={ (e) => { ChkDD(41) ; } }  /></td>
  </tr>
      <tr>
    <td width="50%"><a href="https://www.ird.gov.hk/chi/tax/drd.htm" target="_blank"><em>住 宅 租 金 扣 除</em></a><br />(如 果 你 在 本 年 度 全 年 屬 已 婚 ， 你 和 你 配 偶 申 請 的 住 宅 租 金 扣 除 總 額 不 能 超 過 港 元 <span id="LimD_RD_value"></span> 。)</td>
    <td width="25%" align="center"><input  type="text" id="SelfMPFV2" title="住宅租金扣除" name="T380" ref={ref => {inputRef.current["T380"] = ref; }} value={dF.T380?.value || ""} onChange={ (e) => { console.log("dF.T380", dF.T380?.value); dF.T380.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T380) } }   onBlur={ (e) => { ChkDD(380) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseMPFV2" title="住宅租金扣除" name="T390" ref={ref => {inputRef.current["T390"] = ref; }} value={dF.T390?.value || ""} onChange={ (e) => { console.log("dF.T390", dF.T390?.value); dF.T390.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T390) } }   onBlur={ (e) => { ChkDD(390) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/homeloan.htm" target="_blank"><em>居 所 貸 款 利 息</em></a></td>
    <td width="25%" align="center"><input  type="text" id="SelfHomeLoanInterest" title="Home Loan Interest" name="T7" ref={ref => {inputRef.current["T7"] = ref; }} value={dF.T7?.value || ""} onChange={ (e) => { console.log("dF.T7", dF.T7?.value); dF.T7.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T7) } }   onBlur={ (e) => { ChkDD(7) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseHomeLoanInterest" title="Home Loan Interest" name="T8" ref={ref => {inputRef.current["T8"] = ref; }} value={dF.T8?.value || ""} onChange={ (e) => { console.log("dF.T8", dF.T8?.value); dF.T8.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T8) } }   onBlur={ (e) => { ChkDD(8) ; } }  /></td>
  </tr>
  <tr>
	<td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/vhis.htm" target="_blank"><em>合 資 格 醫 療 保 險 保 費</em></a></td>
    <td width="25%">&nbsp;</td>
    <td width="25%">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;支 付 本 人 的 款 額</td>
    <td width="25%" align="center"><input  type="text" id="T34" name="T34" ref={ref => {inputRef.current["T34"] = ref; }} value={dF.T34?.value || ""} onChange={ (e) => { console.log("dF.T34", dF.T34?.value); dF.T34.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T34) } }   onBlur={ (e) => { ChkDD(34) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="T35" name="T35" ref={ref => {inputRef.current["T35"] = ref; }} value={dF.T35?.value || ""} onChange={ (e) => { console.log("dF.T35", dF.T35?.value); dF.T35.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T35) } }   onBlur={ (e) => { ChkDD(35) ; } }  /></td>
  </tr>
   <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;指 明 親 屬 數 目</td>
    <td width="25%" align="center" valign="bottom"><select name="D32" ref={ref => {inputRef.current["D32"] = ref; }} id="D32" size="1"  onChange={ (e) => { D32OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center" valign="bottom"><select name="D33" ref={ref => {inputRef.current["D33"] = ref; }} id="D33" size="1"  onChange={ (e) => { D33OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;支 付 指 明 親 屬 的 款 額</td>
    <td width="25%" align="center"><input  type="text" id="T36" name="T36" ref={ref => {inputRef.current["T36"] = ref; }} value={dF.T36?.value || ""} onChange={ (e) => { console.log("dF.T36", dF.T36?.value); dF.T36.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T36) } }   onBlur={ (e) => { ChkDD(36) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="T37" name="T37" ref={ref => {inputRef.current["T37"] = ref; }} value={dF.T37?.value || ""} onChange={ (e) => { console.log("dF.T37", dF.T37?.value); dF.T37.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T37) } }   onBlur={ (e) => { ChkDD(37) ; } }  /></td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/deductions/elderly.htm" target="_blank"><em>長 者 住 宿 照 顧 開 支</em></a></td>
    <td width="25%">&nbsp;</td>
    <td width="25%">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;在 安 老 院 居 住 的 受 養 人 數 目</td>
    <td width="25%" align="center" valign="bottom"><select name="D18" ref={ref => {inputRef.current["D18"] = ref; }} id="SelfEldery" title="Elderly Residential Care Expenses" size="1"  onChange={ (e) => { D18OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center" valign="bottom"><select name="D19" ref={ref => {inputRef.current["D19"] = ref; }} id="SpouseEldery" title="Elderly Residential Care Expenses" size="1"  onChange={ (e) => { D19OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;符 合 <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank"><em>傷 殘 受 養 人 免 税 額</em></a> 資 格 的<br />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受 養 人 數 目</td>
    <td width="25%" align="center"><select name="D20" ref={ref => {inputRef.current["D20"] = ref; }} id="SelfDisabledDependant" title="Disabled Dependant Allowance" size="1"  onChange={ (e) => { D20OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center"><select name="D21" ref={ref => {inputRef.current["D21"] = ref; }} id="SpouseDisabledDependant" title="Disabled Dependant Allowance" size="1"  onChange={ (e) => { D21OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;支 付 給 安 老 院 的 開 支 款 額</td>
    <td width="25%" align="center"><input  type="text" id="SelfResidentialAmount" title="Residential care home amount" name="T9" ref={ref => {inputRef.current["T9"] = ref; }} value={dF.T9?.value || ""} onChange={ (e) => { console.log("dF.T9", dF.T9?.value); dF.T9.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T9) } }   onBlur={ (e) => { ChkDD(9) ; } }  /></td>
    <td width="25%" align="center"><input  type="text" id="SpouseResidentialAmount" title="Residential care home amount" name="T10" ref={ref => {inputRef.current["T10"] = ref; }} value={dF.T10?.value || ""} onChange={ (e) => { console.log("dF.T10", dF.T10?.value); dF.T10.value = e.target.value; }} size="11" maxLength="9"    onFocus={ (e) => { TxtOnFocus(dF.T10) } }   onBlur={ (e) => { ChkDD(10) ; } }  /></td>
  </tr>
  <tr><td width="100%" colSpan="3">&nbsp;</td></tr>
  <tr><td width="100%" colSpan="3">免 税 額</td></tr>
  <tr>
    <td width="50%">符 合 資 格 申 請 <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#pda" target="_blank"><em>傷 殘 人 士 免 税 額</em></a></td>
    <td width="25%" align="center"><select name="D15a" ref={ref => {inputRef.current["D15a"] = ref; }} id="SelfPDA" title="Self Personal Disability Allowance" size="1"  onChange={ (e) => { D15aOnChange() } } >
      <option value="false">否</option>
      <option value="true">是</option>
    </select></td>
    <td width="25%" align="center"><select name="D15b" ref={ref => {inputRef.current["D15b"] = ref; }} id="SpousePDA" title="Spouse Personal Disability Allowance" size="1"  onChange={ (e) => { D15bOnChange() } } >
      <option value="false">否</option>
      <option value="true">是</option>
    </select></td>
  </tr>
</tbody></table>
</div>
<hr />
<div style={{textAlign: 'center'}}>
<table  border="0" width="710"><tbody>
  <tr><td width="100%" colSpan="3">
    <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm" target="_blank"><em>申 請 免 税 額</em></a>	
  </td></tr>
  <tr>
    <td width="50%" valign="top"><em>請 輸 入 你 和 你 配 偶（如 適 用）<br />所 申 請 有 關 免 税 額 的 受 養 人 總 數。</em></td>
    <td width="20%" align="center" valign="top">受 養 人 數 目</td>
    <td width="30%" align="center">在 申 請 的<br />受 養 人 中 ，  符 合<br />  <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank"><em>傷 殘 受 養 人 免 税 額</em></a><br /> 資 格 的 數 目</td>
  </tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#ca" target="_blank"><em>供 養 子 女</em></a>  數 目</td>
</tr>{ (HasNBCA('2024-2025')) && (<><tr><td width="25%" align="center"></td>
    	<td width="25%" align="center"></td>
  		</tr><tr>
    	<td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;在 課 税 年 度 內 出 生</td>
    	<td width="25%" align="center"><select name="D3a" ref={ref => {inputRef.current["D3a"] = ref; }} id="ChildBornThisYr" title="Child born in the year" size="1"  onChange={ (e) => { D3aOnChange() } } >
        <option  >0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    	</select></td>
    	<td width="25%" align="center"><select name="D4a" ref={ref => {inputRef.current["D4a"] = ref; }} id="DisabledChildBornThisYr" title="Disabled Child born in the year" size="1"  onChange={ (e) => { D4aOnChange() } } >
        <option  >0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    	</select></td>
  		</tr><tr>
    	<td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;在 其 他 課 税 年 度 出 生</td></tr></>) 
}<tr>
    <td width="20%" align="center"><select name="D3" ref={ref => {inputRef.current["D3"] = ref; }} id="ChildBornOtherYr" title="Child born in other year" size="1"  onChange={ (e) => { D3OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select></td>
    <td width="30%" align="center"><select name="D4" ref={ref => {inputRef.current["D4"] = ref; }} id="DisabledChildBornOtherYr" title="Disabled Child born in other year" size="1"  onChange={ (e) => { D4OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select></td>
  </tr>
</tbody></table>  
<table  border="0" width="710"><tbody>
  <tr>
    <td width="35%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#spa" target="_blank"><em>單 親 免 税 額</em></a></td>
    <td width="15%" align="right"><select name="D22" ref={ref => {inputRef.current["D22"] = ref; }} id="SingleParentAllowance" title="Single Parent Allowance" size="1"  onChange={ (e) => { D22OnChange() } } >
      <option value="false">否</option>
      <option value="true">是</option>
    </select></td>
    <td width="50%" align="center"></td>
  </tr>  
  <tr><td width="100%" colSpan="3">&nbsp;</td></tr>
</tbody></table>  
<table  border="0" width="710"><tbody>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dbsa" target="_blank"><em>供 養 兄 弟 / 姊 妹</em></a>  數 目</td>
    <td width="25%" align="center"><select name="D5" ref={ref => {inputRef.current["D5"] = ref; }} id="DependentBrothersSis" title="Dependent brothers or sisters" size="1"  onChange={ (e) => { D5OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select></td>
    <td width="25%" align="center"><select name="D6" ref={ref => {inputRef.current["D6"] = ref; }} id="DisabledDependentBrothersSis" title="Disabled Dependent brothers or sisters" size="1"  onChange={ (e) => { D6OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select></td>
  </tr>
  <tr><td width="100%" colSpan="3">&nbsp;</td></tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>供 養 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 有 資 格 申 索 政 府 傷 殘 津 貼 的 父 母 / 祖 父 母 或 外 祖 父 母</em></a> 數 目</td>
    <td width="25%">&nbsp;</td>
    <td width="25%">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>全 年 與 你 同 住</em></a></td>
    <td width="25%" align="center" valign="bottom"><select name="D7" ref={ref => {inputRef.current["D7"] = ref; }} id="DependentparentsResided" title="供養全年與你同住的年滿60歲或以上，或雖未滿60歲，但有資格申索政府傷殘津貼的父母/祖父母或外祖父母" size="1"  onChange={ (e) => { D7OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center" valign="bottom"><select name="D8" ref={ref => {inputRef.current["D8"] = ref; }} id="DisabledDependentparentsResided" title="供養全年與你同住,有資格申索政府傷殘津貼的父母/祖父母或外祖父母" size="1"  onChange={ (e) => { D8OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>並 非 全 年 與 你 同 住</em></a></td>
    <td width="25%" align="center"><select name="D9" ref={ref => {inputRef.current["D9"] = ref; }} id="DependentparentsNotResided" title="供養並非全年與你同住的年滿60歲或以上的父母/祖父母或外祖父母" size="1"  onChange={ (e) => { D9OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center"><select name="D10" ref={ref => {inputRef.current["D10"] = ref; }} id="DisabledDependentparentsNotResided" title="Disabled Dependent parents or grandparents Over 60" size="1"  onChange={ (e) => { D10OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
  </tr>
  <tr><td width="100%" colSpan="3">&nbsp;</td></tr>
  <tr>
    <td width="50%"><a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>供 養 年 滿 55 歲 但 未 滿 60 歲 的 父 母 / 祖 父 母 或 外 祖 父 母</em></a> 數 目 </td>
    <td width="25%">&nbsp;</td>
    <td width="25%">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>全 年 與 你 同 住</em></a></td>
    <td width="25%" align="center" valign="bottom"><select name="D16" ref={ref => {inputRef.current["D16"] = ref; }} id="Dependentparents55_60Resided" title="供養全年與你同住的年滿55歲但未滿60歲的父母/祖父母或外祖父母" size="1"  onChange={ (e) => { D16OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center" valign="bottom">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%">-&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dpa" target="_blank"><em>並 非 全 年 與 你 同 住</em></a></td>
    <td width="25%" align="center"><select name="D17" ref={ref => {inputRef.current["D17"] = ref; }} id="Dependentparents55_60NotResided" title="供養並非全年與你同住的年滿55歲但未滿60歲的父母/祖父母或外祖父母" size="1"  onChange={ (e) => { D17OnChange() } } >
      <option  >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select></td>
    <td width="25%" align="center">&nbsp;</td>
  </tr>
  <tr>
    <td width="100%" colSpan="3">&nbsp</td>
  </tr>
  <tr>
    <td width="70%" colSpan="2">你 的 配 偶 符 合 資 格 申 請 <a href="https://www.gov.hk/tc/residents/taxes/salaries/allowances/allowances/allowances.htm#dda" target="_blank"><em>傷 殘 受 養 人 免 税 額</em></a></td>
    <td width="30%" align="center"><select name="D15" ref={ref => {inputRef.current["D15"] = ref; }} id="SpouseDisabledDependent" title="傷殘配偶受養人" size="1"  onChange={ (e) => { D15OnChange() } } >
      <option value="false">否</option>
      <option value="true">是</option>
    </select></td>
  </tr>
</tbody></table>
</div>
<hr />
<br />
<table  border="0" width="100%"><tbody>
  <tr><td width="25%">&nbsp</td>
      <td width="25%" align='center'><input  type="button" id="ResetButton" title="重新輸入" value="重 新 輸 入" name="B2" ref={ref => {inputRef.current["B2"] = ref; }}  onClick={ (e) => { B2OnClick() } }  /></td>
      <td width="25%" align='center'><input  type="button" id="ComputeButton" title="計算" value="計 算" name="B1" ref={ref => {inputRef.current["B1"] = ref; }}  onClick={ (e) => { CalculateTaxWithDelay() } }  /></td>
      <td width="25%">&nbsp</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td align='center'>&nbsp;</td>
    <td align='center'>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</tbody></table>
<hr />
<table  border="0" width="100%"><tbody>
<tr>
  <td align="left"><b>攤 分 及 撥 回 整 筆 款 項</b></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td align="left">
<div>如 你 曾 收 取 補 發 薪 金 ／ 工 資 或 者 退 休 離 職 ／ 終 止 僱 傭 合 約 時 發 放 的 獎 賞 ／ 酬 金 ， 你 可 申 請 將 整 筆 款 項 撥 回 賺 取 該 款 項 的 有 關 期 間 評 税 ， 而 攤 分 及 撥 回 評 税 的 期 間 限 為 36 個 月 。 如 有 關 期 間 超 過 36 個 月 ， 款 項 總 額 將 會 以 固 定 比 率 攤 分 36 個 月 ， 即 以 你 有 權 申 索 該 款 項 的 日 期 或 停 止 受 僱 的 日 期 ﹝ 如 適 用 的 話 ﹞ 為 止 的 前 36 個 月 ， 兩 者 以 較 早 的 為 準 。<br /><br />
請 <input  name="but3" ref={ref => {inputRef.current["but3"] = ref; }} type="button" id="but3" value="按 此"  onClick={ (e) => { javascript:window.open('https://www.gov.hk/tc/residents/taxes/salaries/salariestax/chargeable/backpay.htm') } }  /> 以 得 悉 更 多 有 關 攤 分 及 撥 回 的 資 料 。<br /><br />
請 <input  name="but2" ref={ref => {inputRef.current["but2"] = ref; }} type="button" id="but2" value="按 此"  onClick={ (e) => { CalRelateBack() } }  /> 計 算 攤 分 及 撥 回 整 筆 款 項 評 税 是 否 對 你 有 利 。 本 局 只 會 在 可 減 少 你 所 須 繳 付 的 税 款 之 情 況 下 ， 才 會 按 申 請 將 整 筆 款 項 用 攤 分 及 撥 回 的 方 法 評 税 。<br /><br />
﹝ 請 注 意 ， 由 於 居 所 租 值 的 計 算 須 視 乎 所 收 取 的 整 筆 款 項 的 性 質 ， 如 你 在 有 關 期 間 曾 獲 僱 主 提 供 居 所 ， 此 軟 件 的 計 算 並 不 適 用 於 你 。 ﹞
</div></td>
</tr>
</tbody></table>
</form>
    </div>

    <BtxCalculatorForm
      label={"form"}
      inputRef={inputRef}
      isMarriedState={isMarriedState}
      performToggleMarriage={performToggleMarriage}
      doChecking={doChecking}
      resetForm={resetForm}
      doCalculation={doCalculation}
    />

  </>)
};

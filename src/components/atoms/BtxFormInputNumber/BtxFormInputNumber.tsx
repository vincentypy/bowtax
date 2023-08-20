import React, { useEffect, useState } from "react";
// import '../../common.css';
import "./BtxFormInputNumber.css";

const fieldMapping: { [key: string]: string } = {
  selfIncome: 'T1',
  spouseIncome: 'T2',
  selfResidence: 'T13',
  spouseResidence: 'T14',
  
  // deduction
  selfOAndE: 'T15',
  spouseOAndE: 'T16',
  selfEducationExpenses: 'T5',
  spouseEducationExpenses: 'T6',
  selfApprovedDonations: 'T3',
  spouseApprovedDonations: 'T4',
  selfMPF: 'T11',
  spouseMPF: 'T12',
  
  selfMPFV: 'T38',
  spouseMPFV: 'T39',
  selfAnnuity: 'T40',
  spouseAnnuity: 'T41',
  selfMPFV2: 'T380',
  spouseMPFV2: 'T390',
  selfHomeLoanInterest: 'T7',
  spouseHomeLoanInterest: 'T8',
  
  selfVhis: 'T34',
  spouseVhis: 'T35',
  selfVhisRelateCount: 'D32 [0-4]',
  spouseVhisRelateCount: 'D33 [0-4]',
  selfVhisRelateAmount: 'T36',
  spouseVhisRelateAmount: 'T37',
  
  selfEldery: 'D18 [0-4]',
  spouseEldery: 'D19 [0-4]',
  
  selfDisabledDependant: 'D20 [0-4]',
  spouseDisabledDependant: 'D21 [0-4]',
  
  selfResidentialAmount: 'T9',
  spouseResidentialAmount: 'T10',
  
  // allowance
  selfPDA: 'selfPDA',
  spousePDA: 'spousePDA',
  
  childBornThisYr: 'D3a [0-9]',
  disabledChildBornThisYr: 'D4a [0-9]',
  childBornOtherYr: 'D3 [0-9]',
  disabledChildBornOtherYr: 'D4 [0-9]',
  
  singleParentAllowance: 'singleParentAllowance',
  
  dependentBrothersSis: 'D5',
  disabledDependentBrothersSis: 'D6',
  
  // Parents
  dependentparentsResided: 'D7 [0-4]',
  disabledDependentparentsResided: 'D8 [0-4]',
  dependentparentsNotResided: 'D9 [0-4]',
  disabledDependentparentsNotResided: 'D10 [0-4]',
  dependentparents5560Resided: 'D16 [0-4]',
  dependentparents5560NotResided: 'D17 [0-4]',
  
  // Spouse Disable
  spouseDisabledDependent: 'spouseDisabledDependent',
  };


function trimStr(s: number | string) {
  let i,j
  const s1=""+s
  const l=s1.length
  if (l==0) return ""
  const Chrs2Trim=" \t"
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

function trimComma(s: number | string) {
  let rs,i,c
  const s1=trimStr(s)
  const l=s1.length
  rs=""
  for (i=0; i<l; i++) {
    c=s1.charAt(i)
    if (c!=",") rs=rs+c
  }
  return rs
}

function IsNumber(Istr: string) {
  let i
  const AllowChars="0123456789,"
  for (i=0; i<Istr.length; i++) {
    if (AllowChars.indexOf(Istr.charAt(i))==-1) {
      return false
    }
  }
  return true
}
function IsNIL(obj: any) {
  let i
  const AllowChars="0 "
  const ov=obj.value
  for (i=0; i<ov.length; i++) {
    if (AllowChars.indexOf(ov.charAt(i))==-1) {
      return false
    }
  }
  return true
}
function NotNIL(obj: any) {
  return !IsNIL(obj)
}

function leftStr(s: string,i: number) {
  const s1=""+s
  return s1.substring(0,i)
}
function rightStr(s: string,i: number) {
  const s1=""+s
  const l=s1.length
  return s1.substring(l-i,l)
}
function CInt(s: number) {
  const s1=trimComma(s)
  if (s1.length>0) {
    return parseInt(s1)
  } else {
    return 0
  }
}
function CDbl(s: string) {
  const s1=trimComma(s)
  if (s1.length>0) {
    return parseFloat(s1)
  } else {
    return 0
  }
}
function FormatMoney(InNum: number) {
  let tmpStr,NumStr
  let i,k,l
  tmpStr=trimStr(InNum)
  NumStr=tmpStr
  l=tmpStr.length
  const j=Math.floor((l-1)/3)-1
  for (i=0; i<=j; i++) {
    k=3+i*4
    NumStr=leftStr(tmpStr,l-k)+","+rightStr(tmpStr,k)
    tmpStr=NumStr
    l=l+1
  }
  return NumStr
}
function NullZero(obj: any, e: any) {
  e=Math.floor(e)
  if (e==0 || e==6 || e==7 || e==8 || e==9 || e==10  || e==11 || e==12 || e==13) {
    if (IsNIL(obj)) obj.value="0"
  } else {
    obj.value=""
    obj.focus()
  }
}
function SetTxt(obj: any,v: any) {
  if (obj.value!=v) obj.value=v
}
function FormatInput(IncStr: number,ll: number,ul: number) {
  const Istr = trimStr(IncStr)
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

interface BtxFormInputNumberProps {
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
   * BtxFormInputNumber contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
  onChange?: (a: any, e?: any) => void;
  onBlur?: (a: any, e?: any) => void;
  value?: number;
  setValue?: (val: any) => void;
  min: number;
  max?: number;
}

/**
 * Primary UI component for user interaction
 */
export const BtxFormInputNumber = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onChange,
  onBlur,
  value,
  setValue,
  min = 0,
  max,
  ...props
}: BtxFormInputNumberProps) => {
  const mode = primary
    ? "btx-input-number--primary"
    : "btx-input-number--secondary";

  const [internalValue, setInternalValue] = useState<any>(value);

  useEffect(() => {
    if (value === -99999999999) {
      if ((window as any).isDebug) console.log(`[${label}] mon value99: `, value);
      setInternalValue("");
    } else {
      if ((window as any).isDebug) console.log(`[${label}] mon value: `, value);
      if (value && value < 0) {
        setInternalValue(FormatInput(-value, 0,999999999));
      }
    }
  }, [value, FormatInput]);

  return (<div
    className={["btx-input-number-wrapper"].join(
      " "
    )}
  >
    {/* {
      internalValue
    }
    vs {
      value
    } */}
    {
      label.startsWith("self") &&
      <span className={["btx-input-label-sm"].join(" ")}>本人</span>
    }
    {
      label.startsWith("spouse") &&
      <span className={["btx-input-label-sm"].join(" ")}>配偶</span>
    }
    <input
      type="text"
      name={`${label}  ${fieldMapping[label]}`}
      className={["btx-input-number", `btx-input-number--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      onChange={(e) => {
        if ((window as any).isDebug) console.log(`onChange`, e.target.value, "value", value)
        setInternalValue(e.target.value);
        if (parseFloat(e.target.value)) {
          const val = FormatInput(parseFloat(parseFloat(e.target.value.replaceAll(",", "")).toFixed(2)),0,999999999);

          if (max && parseFloat(e.target.value.replaceAll(",", "")) > max) {
            setInternalValue(max);
            if (onChange) {
              onChange(max, {
                target: {
                  value: max
                }
              });
            }
            if (setValue) {
              setValue(-max);
            }
            return
          }

          if (setValue) {
            setValue(val);
          }
          if (onChange) {
            onChange(val, e);
          }
        }
      }}
      onFocus={(e) => {
        if (internalValue === 0) {
          setInternalValue("")
        }
      }}
      onBlur={(e) => {
        if ((window as any).isDebug) console.log(`[${label}] Blur value   :` , e.target.value, "value", value)
        const val = FormatInput(parseFloat(parseFloat(e.target.value.replaceAll(",", "")).toFixed(2)),0,999999999);

        if (max && parseFloat(e.target.value.replaceAll(",", "")) > max) {
          setInternalValue(max);
          if (setValue) {
            setValue(max);
          }
          if (onChange) {
            onChange(max, {
              target: {
                value: max
              }
            });
          }
          return
        }

        if ("" + value === "0" ) {
          setInternalValue("");
          if (setValue) {
            setValue(0);
          }
          return
        }

        if (value && value < 0) {
          setInternalValue(-value);
        }

        if (isNaN(parseFloat(e.target.value))) {
          if ((window as any).isDebug) console.log('error');
          setInternalValue(0);
          if (setValue) {
            setValue(-99999999999);
          }
          if (onChange) {
            onChange(0, e);
          }
        } else {
          setInternalValue(val)

          if (setValue) {
            setValue(val);
          }
        }

        if (onBlur) {
          onBlur(e.target.value, e);
        }
      }}
      value={internalValue}
      min={min}
      max={max || ""}
      step=".01"
      {...props}
    />
  </div>);
};
